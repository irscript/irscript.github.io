+++
tags = ["debug","windows","minidump"]
categories = ["debug","windows"]
title = "Minidump"
weight = 1
+++

> 本文由 [简悦 SimpRead](http://ksria.com/simpread/) 转码， 原文地址 [blog.csdn.net](https://blog.csdn.net/shadow_2011/article/details/120847029)


### 1. 简介

在过去几年里，崩溃转储 (crash dump) 成为了调试工作的一个重要部分。如果软件在客户现场或者测试实验室发生故障，最有价值的解决方式是能够创建一个故障瞬间的应用程序状态镜像，然后可以在开发者的机器上通过调试器进行分析。第一代的 crash dump 通常被称为 “全用户转储(full user dump)”，它包含了进程的虚拟内存的全部内容。毫无疑问，这样的 dump 对于事后调试非常有价值。但是，这样的 dump 经常非常大，使得通过电子方式发送给开发者非常困难，甚至没法完成。另外，没用公共接口可以通过程序调用来创建 dump，我们必须依赖于第三方工具(例如，Dr. Watson 或者 Userdump) 来创建他们。

随着 Windows XP，微软发布了一组新的被称为 “minidump” 的崩溃转存技术。Minidump 很容易定制。按照最常用的配置，一个 minidump 只包括了最必要的信息，用于恢复故障进程的所有线程的调用堆栈，以及查看故障时刻局部变量的值。这样的 dump 文件通常很小（只有几 K 字节）。所以，很容易通过电子方式发送给软件开发人员。一旦需要，minidump 甚至可以包含比原来的 crash dump 更多的信息。例如，可以包含进程使用的内核对象的信息。另外，DbgHelp.dll 提供了通过编程创建 minidump 的公开 API。而且，它是可以重新发布的。我们可以不再依赖于外部工具。

minidump 可以定制，给我们带来了一个问题 - 保存多少应用程序状态信息才能既保证调试有效，又能够尽量保证 minidump 文件尽可能小？尽管调试简单的异常访问只需要调用堆栈和局部变量的信息，但是解决更复杂的问题需要更多的信息。例如，我们可能需要查看全局变量的值、检查堆的完整性和分析进程虚拟内存的布局。同时，可执行程序的代码段往往是多余的，开发用的机器上可以很容易找到这些执行程序。

幸运的是我们可以通过 DbgHelp 函数组（MiniDumpWriteDump 和 MiniDumpCallback）来控制这些功能，甚至可以更复杂。在这篇文章里面，我们会解释怎么样使用这些函数来创建 mindump，保证文件足够小但是又能有效调试。也会讲解 minidump 中应该包括那些数据，并且如何使用通用调试器 (WinDbg 和 VS.NET) 来看这些信息。

### 2. Minidump 类型

先看一些代码。Figure 1 是 MiniDumpWriteDump 的函数声明。Figure 2 显示如何使用这个函数创建简单的 minidump。

Figure 1:

```
BOOL MiniDumpWriteDump(
 HANDLE hProcess,
 DWORD ProcessId,
 HANDLE hFile,
 MINIDUMP_TYPE DumpType,
 PMINIDUMP_EXCEPTION_INFORMATION ExceptionParam,
 PMINIDUMP_USER_STREAM_INFORMATION UserStreamParam,
 PMINIDUMP_CALLBACK_INFORMATION CallbackParam
);
```

Figure 2:

```
void CreateMiniDump(EXCEPTION_POINTERS* pep)
{
    // Open the file
    HANDLE hFile = CreateFile(_T("MiniDump.dmp"), GENERIC_READ | GENERIC_WRITE,
        0, NULL, CREATE_ALWAYS, FILE_ATTRIBUTE_NORMAL, NULL);

    if ((hFile != NULL) && (hFile != INVALID_HANDLE_VALUE))
    {
        // Create the minidump
        MINIDUMP_EXCEPTION_INFORMATION mdei;
        mdei.ThreadId = GetCurrentThreadId();
        mdei.ExceptionPointers = pep;
        mdei.ClientPointers = FALSE;

        MINIDUMP_TYPE mdt = MiniDumpNormal;
        BOOL rv = MiniDumpWriteDump(GetCurrentProcess(), GetCurrentProcessId(),
            hFile, mdt, (pep != 0) ? &mdei : 0, 0, 0);

        if (!rv)
            _tprintf(_T("MiniDumpWriteDump failed. Error: %u \n"), GetLastError());
        else
            _tprintf(_T("Minidump created.\n"));

        // Close the file
        CloseHandle(hFile);
    }
    else
    {
        _tprintf(_T("CreateFile failed. Error: %u \n"), GetLastError());
    }
}
```

在这个例子里面，我们如何指定 minidump 应该包括那些数据呢？主要取决于 MiniDumpWriteDump 的第四个参数 MINIDUMP_TYPE。下表 Figure 3 是参数的定义。

Figure 3:

```
typedef enum _MINIDUMP_TYPE {

    MiniDumpNormal                          = 0x00000000,
    MiniDumpWithDataSegs                    = 0x00000001,
    MiniDumpWithFullMemory                  = 0x00000002,
    MiniDumpWithHandleData                  = 0x00000004,
    MiniDumpFilterMemory                    = 0x00000008,
    MiniDumpScanMemory                      = 0x00000010,
    MiniDumpWithUnloadedModules             = 0x00000020,
    MiniDumpWithIndirectlyReferencedMemory  = 0x00000040,
    MiniDumpFilterModulePaths               = 0x00000080,
    MiniDumpWithProcessThreadData           = 0x00000100,
    MiniDumpWithPrivateReadWriteMemory      = 0x00000200,
    MiniDumpWithoutOptionalData             = 0x00000400,
    MiniDumpWithFullMemoryInfo              = 0x00000800,
    MiniDumpWithThreadInfo                  = 0x00001000,
    MiniDumpWithCodeSegs                    = 0x00002000,
    MiniDumpWithoutManagedState             = 0x00004000,

} MINIDUMP_TYPE;
```

MINIDUMP_TYPE 枚举是一些标志，允许我们来控制 minidump 包含哪些内容。我们来看一下这些值得内容，以及如何使用它们。

#### MiniDumpNormal

MiniDumpNormal 是一个特别的标志。它的值是 0，意味着这个值永远隐含存在，甚至不需要显示指定。因此，我们可以假定这个标记代表了 minidump 中永远存在的一组基础数据集合。通过指定用户自定义的回调函数，可以过滤这些值。

Figure 4 的表格显示了数据基础数据集合中的数据类型。

Figure 4:

<table><thead><tr><th><strong>数据类型</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td>系统信息</td><td>关于操作系统和 CPU 的信息，包括：操作系统版本 (包括服务包) 处理器的数量和型号在 WinDbg 中，可以通过 “vertarget” 和 “!cpuid” 显示相应信息。</td></tr><tr><td>进程信息</td><td>关于进程 (Process) 的信息，包括：进程 ID 进程时间（创建时间，用户态和核心态的执行时间）WinDbg 通过 | (Process Status)命令显示进程 ID，“.time”显示进程时间。</td></tr><tr><td>模块（Module） 信息</td><td>对于进程装载的所有可执行模块，显示如下信息：装载地址模块的大小文件名（包括路径）版本信息 (VS_FIXEDFILEINFO structure) 模块识别信息，帮助调试器定位相应的模块并且装载调试信息 (校验和，时间戳，调试信息记录)在 WinDbg 和 VS.NET 中，可以在 Modules 窗口中看到这些信息。WinDbg 的 “lm” 也可以看到这些信息。</td></tr><tr><td>线程信息</td><td>对于进程中的任何一个线程，会包括这些信息：线程 ID 优先级线程上下文暂停计数 (Suspend count) 线程环境块 (thread environment block ，TEB) 的地址，但是不包括 TEB 的内容 VS.NET 中，Threads 窗口中可以显示大多数这些信息。WinDbg 中用 “~”命令显示线程信息。</td></tr><tr><td>线程栈</td><td>对于每一个线程，minidump 包含了栈内存的内容。允许我们得到所有线程的调用栈，查看函数参数和局部变量的值。</td></tr><tr><td>指令窗口</td><td>对于每一线程，当前指令指针前后的 256 自己内存会保留下来。允许我们即使没有可执行模块，也可以获得故障时刻的线程代码的反编译信息。</td></tr><tr><td>异常信息</td><td>可以通过 MiniDumpWriteDump 函数的第 5 个参数 (见 Figure 2) 把异常信息包含到 minidump 中。这种情况下 minidump 会包括如下异常信息：异常记录 (EXCEPTION_RECORD structure)异常发生时刻的线程上下文指令窗口（发生异常的指令地址附近的 256 字节）当 VS.NET debugger 装载带有异常信息的 minidump 数据， debugger 会自动显示异常时刻应用程序状态（包括调用堆栈、寄存器值、反汇编的指令和抛出异常的代码行）。WinDbg 中，需要使用. ecxr 命令切换到异常发生时刻的应用程序状态。</td></tr></tbody></table>

确实，MiniDumpNormal 指定的基础信息集合非常有用。我们可以定位出现问题的指令，检查线程怎么样进入到这种状态。甚至可以产看到函数参数和局部变量的值。另外，这些信息也可以用来调试死锁，因为我们可以看到所有线程的调用栈，并且知道他们在等待什么。

同时，所有这些信息的代价非常小，minidump 的大小通常不超过 20KB。主要影响大小的因素的线程栈的大小 - 他们占用的内存越多，minidump 的文件越大。

但是，如果需要调试的问题比较复杂，而不是像非法访问或者死锁这样的简单问题，我们就会发现 MiniDumpNormal 标记收集的信息还不够。我们有可能需要查看全局变量，但是里面没有。也有可能需要查看堆里面分配的结构体的内容，minidump 也没有包括相应的堆信息。当我们需要更多的 minidump 数据时，就需要研究 MINIDUMP_TYPE 的其他成员了。

#### MiniDumpWithFullMemory

这可能是除了 MiniDumpNormal 以外使用最多的标志了。如果指定了这个标志，minidump 会包含进程地址空间中所有可读页面的内容。我们可以看到应用程序分配的所有内存，这使我们有很多的调试方法。可以查看存储在栈上、堆上、模块数据段的所有数据。甚至还可以看到线程和进程环境块 (Process Environment Block 和 Thread Environment Bolck, PEB 和 TEB) 的数据。这些没有公开的数据结构可以给我们的调试提供无价的帮助。

使用这个标记的唯一问题是会使 minidump 变得很大，至少有几 MByte。另外，minidump 的内容里面包含了冗余信息，所有可执行模块的代码段都包含在了里面。但是很多时候，我们很容易从其他地方获得可执行代码。让我们一起来看看 MINIDUMP_TYPE，是否能够找到更好的选项。

#### MiniDumpWithPrivateReadWriteMemory

如果指定这个标志，minidump 会包括所有可读和可写的私有内存页的内容。这使我们可以察看栈、堆甚至 TLS 的数据。PEB 和 TEB 也包括在里面。

这时候，minidump 没有包括共享内存也的内容。也就是说，我们不能查看内存映射文件的内容。同样，可执行模块的代码和数据段也没有包括进来。不包括代码段意味着 dump 没有占用不需要的空间。但是，我们也没有办法查看全局变量的值。

无论如何，通过组合其他一些选项，MiniDumpWithPrivateReadWriteMemory 是一个非常有用的选项。我们会在后面看到。

#### MiniDumpWithIndirectlyReferencedMemory

如果指定这个标志，MiniDumpWriteDump 检查线程栈内存中的每一个指针。这些指针可能指向线程地址空间的其他可读内存页。一旦发现这样的指针，程序会读取指针附近 1024 字节的内容存到 minidump 中（指针前的 256 字节和指针后的 768 字节）。

Figure 5 是一段例子代码.

Figure 5:

```
#include <stdio.h>

struct A
{
    int a;

    void Print()
    {
        printf("a: %d\n", a);
    }
};

struct B
{
    A* pA;
    B() : pA(0) {}
};

int main(int argc, char* argv[])
{
    B* pB = new B();

    pB->pA->Print();

    return 0;
}
```

在这个例子中，主程序试图通过 null 对象指针（pB->pA）调用 A::Print。这会导致一个运行时非法访问。如果使用 MiniDumpNormal 产生的 minidumo 来调试，会发现没有办法看到指针 pB 指向的结构体的内容。这些内容存在堆上。我们只能猜测传给 A::Print 的对象指针是 null。

如果我们指定了标志 MiniDumpWithIndirectlyReferencedMemory，MiniDumpWriteDump 会发现栈上有一个指针 pB 指向了堆上的其他区域。就会把 pB 指向地址附近的 1024 字节存到 minidump 中。因此，通过调试器就可以看到结构体 B 的内容，进而发现 pA 是 null。

当然，MiniDumpWriteDump 不能访问调试信息。因此，他没有办法区分真正的指针和另外一些值。这些值恰好可以被认为指向有效内存区域。Figure 6. 解释了这种情况。

Figure 6:

```
#include <stdio.h>

void PrintSum(unsigned long sum)
{
    printf("sum: %x", sum);

    // access violation
    *(int*)0 = 1;
}

unsigned long Sum(unsigned long a, unsigned long b)
{
    unsigned long sum = a + b;

    PrintSum(sum);

    return sum;
}

int main()
{
    Sum(0x10000, 0x120);

    return 0;
}
```

当 PrintSum 导致非法访问的时候，0x10000 和 0x120 的和保存在栈上。这个和 (0x10120) 不是指针。但是，MiniDumpWriteDump 没有办法知道。如果 0x10120 恰好是可读内存页的有效地址，minidump 会包括 1024 字节的内存(0x10020 – 0x10520)。

当搜索栈的时候，MiniDumpWriteDump 会忽略指向可执行模块的数据段的指针。这就导致 MiniDumpWithIndirectlyReferencedMemory 没办法让我们看到全局变量的值。即使栈指向它们都不行。后面我们会看到，MINIDUMP_TYPE 还包括其他标志可以完成这个功能。

加上 MiniDumpWithIndirectlyReferencedMemory 标记，minidump 大小会增加。增加的数量取决于栈中指针的数量。

#### MiniDumpWithDataSegs

如果指定这个标志，minidump 会包括进程装载的所有可执行模块的可写数据段。如果我们希望查看全局变量的值，有不希望被 MiniDumpWithFullMemory 困扰，就可以使用 MiniDumpWithDataSegs。

这个标志对于 minidump 大小的影响完全取决于相关数据段的大小。系统 DLL 的数据段也包含在内，所以，即使一个简单的程序，也可能会增加几百 KB。 例如，DbgHelp 的. data 段超过 100K。如果我们只是为了使用 MiniDumpWriteDump，这代价可能太大了。在文章的后半部分，会给大家演示，怎么样控制 MiniDumpWriteDump 来保证只包含真正需要的数据段。

#### MiniDumpWithCodeSegs

如果指定这个标志，mindump 会包括所有进程装载的可执行模块的代码段。就像 MiniDumpWithDataSegs，minidump 大小会有明显增长。在文章的后半部分，我会演示增么样定制 MiniDumpWriteDump，保证只包含必要的代码段。

#### MiniDumpWithHandleData

如果指定这个标志，minidump 会包括故障时刻进程故障表里面的所有句柄。可以用 WinDbg 的! handle 来显示这些信息。

这个标志对于 minidump 大小的影响取决于进程句柄表中的句柄数量。

#### MiniDumpWithThreadInfo

MiniDumpWithThreadInfo 可以帮助收集进程中线程的附加信息。对于每一个线程，会提供下列信息：

*   线程时间 (创建时间，执行用户代码和内核代码的时间)
*   入口地址
*   相关性

WinDbg 中，可以通过. ttime 命令查看线程时间。

#### MiniDumpWithProcessThreadData

有些时候我们需要查看线程和进程环境块的内容（PEB 和 TEB）。假设 minidump 包括了这些块占用的内存，就可以通过 WinDbg 的! peb 和! teb 命令来查看。这正是 MiniDumpWithProcessThreadData 所提供的数据。当使用这个标志时，minidump 会包含 PEB 和 TEB 占据的内存页。同时，也包括了另外一些它们也用的内存页 (例如，环境变量和进程参数保存的位置，通过 TlsAlloc 分配的 TLS 空间)。遗憾的是，有一些 PEB 和 TEB 引用的内存被忽略了，例如，通过__declspec(thread) 分配的线程 TLS 数据。如果确实需要，就不得不使用 MiniDumpWithFullMemory 或者 MiniDumpWithPrivateReadWriteMemory 来获得。

#### MiniDumpWithFullMemoryInfo

如果希望检查整个继承的虚拟内存布局，我们可以使用 MiniDumpWithFullMemoryInfo 标志。如果指定它，mindump 会包含进程虚拟内存布局的完整信息。可以通过 WinDbg 的! vadump 和! vprot 命令查看。这个标志对 minidump 大小的影响取决于虚拟内存布局 - 每个有相似特性的页面区域（参考 VirtualQuery 函数说明）会增加 48 字节。

#### MiniDumpWithoutOptionalData

我们已经看过的所有 MINIDUMP_TYPE 标记都是想 minidump 中添加一些数据。也有一些标志作用相反，它们从 minidump 中去除一些不必要的数据。MiniDumpWithoutOptionalData 就是其中一个。他可以用来减小保存在 dump 中的内存的内容。当指定这个标志是，只有 MiniDumpNormal 指定的内存会被保存。其他内存相关的标志 (MiniDumpWithFullMemory, MiniDumpWithPrivateReadWriteMemory, MiniDumpWithIndirectlyReferencedMemory) 即使指定，也是无效的。同时，他不影响这些标志的行为：MiniDumpWithProcessThreadData, MiniDumpWithThreadInfo, MiniDumpWithHandleData, MiniDumpWithDataSegs, MiniDumpWithCodeSegs, MiniDumpWithFullMemoryInfo

#### MiniDumpFilterMemory

如果指定这个标志，栈内存的内容会在保存之前进行过滤。只有重建调用栈需要的数据才会被保留。其他数据会被写成 0。也就是说，调用栈可以被重建，但是所有局部变量和函数参数的值都是 0。

这个标志不影响 minidump 的大小。它只是没有改变保存的内存数量，只是把其中一部分用 0 覆盖了。同时，这个标志只影响线程栈占用内存的内容。其他内存（比如堆）不受影响。如果使用了 MiniDumpWithFullMemory，这个标志就不起作用了。

#### MiniDumpFilterModulePaths

这个标志控制模块信息中是否包括模块路径 (参考 MiniDumpNormal 的说明)。如果指定这个标记，模块路径会从 dump 中删除，只保留模块的名字。按照文档说明，它也可以帮助从 minidump 中删除可能涉及隐私的信息（例如有些时候模块的路径会包含用户名）。

由于模块路径数量不多，这个标志对 minidump 的大小影响不大。对调试的影响也不大。我们经常需要告诉调试器匹配的可执行程序保存的位置。

#### MiniDumpScanMemory

这个标志可以帮助我们节约 minidump 占用的空间。它会把调试不需要的可执行模块去掉。这个标志会和 MiniDumpCallback 函数紧密合作。因此，我们首先看一下这个函数，然后回头讨论 MiniDumpScanMemory。

### 3. MiniDumpCallback 函数

如果 MINIDUMP_TYPE 不能满足我们定制 minidump 内容的需要，我们可以使用 MiniDumpCallback 函数。这是一个用户定义的回调函数，MiniDumpWriteDump 会调用它，让用户来决定是否把某些数据放到 minidump 中。通过这个函数，我们可以完成这些功能：

*   从 minidump 的模块信息中移除一个可执行模块信息（部分或者全部）
*   从 minidump 的线程信息中移除一个线程信息（部分或者全部）
*   在 minidump 中添加一段用户指定范围的内存的内容

让我们先看一下 MiniDumpCallback 的声明（见 Figure 7）：

Figure 7:

```
BOOL CALLBACK MiniDumpCallback(

 PVOID CallbackParam,
 const PMINIDUMP_CALLBACK_INPUT CallbackInput,
 PMINIDUMP_CALLBACK_OUTPUT CallbackOutput

);
```

这个函数有四个参数。第一个参数 CallbackParam 是一个用户为回调函数定义的数据结构（例如，一个指向 C++ 对象的指针）。第二个参数 CallbackInput 是 MiniDumpWriteDump 传递给回调函数的数据。第三个参数 CallbackOutput 包含了回调函数返回给 MiniDumpWriteDump 的数据。这个数据通常就是指定关于那些数据应该包含在 minidump 中。

现在，让我们看一下 MINIDUMP_CALLBACK_INPUT 和 MINIDUMP_CALLBACK_OUTPUT 结构体的内容。

Figure 8:

```
typedef struct _MINIDUMP_CALLBACK_INPUT {

    ULONG ProcessId;
    HANDLE ProcessHandle;
    ULONG CallbackType;

    union {

        HRESULT Status;
        MINIDUMP_THREAD_CALLBACK Thread;
        MINIDUMP_THREAD_EX_CALLBACK ThreadEx;
        MINIDUMP_MODULE_CALLBACK Module;
        MINIDUMP_INCLUDE_THREAD_CALLBACK IncludeThread;
        MINIDUMP_INCLUDE_MODULE_CALLBACK IncludeModule;
    };

} MINIDUMP_CALLBACK_INPUT, *PMINIDUMP_CALLBACK_INPUT;


typedef struct _MINIDUMP_CALLBACK_OUTPUT {

    union {

        ULONG ModuleWriteFlags;
        ULONG ThreadWriteFlags;

        struct {

            ULONG64 MemoryBase;
            ULONG MemorySize;
        };

        struct {

            BOOL CheckCancel;
            BOOL Cancel;
        };

        HANDLE Handle;
    };

} MINIDUMP_CALLBACK_OUTPUT, *PMINIDUMP_CALLBACK_OUTPUT;


typedef enum _MINIDUMP_CALLBACK_TYPE {

    ModuleCallback,
    ThreadCallback,
    ThreadExCallback,
    IncludeThreadCallback,
    IncludeModuleCallback,
    MemoryCallback,
    CancelCallback,
    WriteKernelMinidumpCallback,
    KernelMinidumpStatusCallback,

} MINIDUMP_CALLBACK_TYPE;
```

MINIDUMP_CALLBACK_INPUT 结构体包含 MiniDumpWriteDump 对回调函数的请求。前两个成员意义很明显 - 创建 minidump 的进程的 id 和句柄。第三个成员 CallbackType 是请求的类型，通常叫做回调类型。所有 CallbackType 的可能的值定义在 MINIDUMP_CALLBACK_TYPE 枚举集合中（见 Figure 8）。我们在后面会仔细看一下这些值。结构体的第四个参数是一个联合，它的意义依赖于 CallbackType 的值。这个联合包含了 MiniDumpWriteDump 请求的附加数据。

MINIDUMP_CALLBACK_OUTPUT 结构体要简单一点。它有一个联合构成，联合的意义依赖于 MINIDUMP_CALLBACK_INPUT 的值。联合的 CallbackType 成员包含了回调对于 MiniDumpWriteDump 的反馈。

下面我们来过一下回调类型 (callback type) 对应的一些最终重要的请求，以及回调函数如何对他们做出响应。在开始之前，先看一下 Figure 9。这个例子表示了怎么样告诉 MiniDumpWriteDump 有一个用户自定的回调函数需要调用。

Figure 9:

```
void CreateMiniDump(EXCEPTION_POINTERS* pep)
{
    // Open the file
    HANDLE hFile = CreateFile(_T("MiniDump.dmp"), GENERIC_READ | GENERIC_WRITE,
        0, NULL, CREATE_ALWAYS, FILE_ATTRIBUTE_NORMAL, NULL);

    if ((hFile != NULL) && (hFile != INVALID_HANDLE_VALUE))
    {
        // Create the minidump
        MINIDUMP_EXCEPTION_INFORMATION mdei;
        mdei.ThreadId = GetCurrentThreadId();
        mdei.ExceptionPointers = pep;
        mdei.ClientPointers = FALSE;

        MINIDUMP_CALLBACK_INFORMATION mci;
        mci.CallbackRoutine = (MINIDUMP_CALLBACK_ROUTINE)MyMiniDumpCallback;
        mci.CallbackParam = 0;   // this example does not use the context

        MINIDUMP_TYPE mdt = MiniDumpNormal;

        BOOL rv = MiniDumpWriteDump(GetCurrentProcess(), GetCurrentProcessId(),
            hFile, mdt, (pep != 0) ? &mdei : 0, 0, &mci);

        if (!rv)
            _tprintf(_T("MiniDumpWriteDump failed. Error: %u \n"), GetLastError());
        else
            _tprintf(_T("Minidump created.\n"));

        // Close the file
        CloseHandle(hFile);
    }
    else
    {
        _tprintf(_T("CreateFile failed. Error: %u \n"), GetLastError());
    }
}

BOOL CALLBACK MyMiniDumpCallback(

    PVOID              pParam,
    const PMINIDUMP_CALLBACK_INPUT  pInput,
    PMINIDUMP_CALLBACK_OUTPUT    pOutput
)

{
    // Callback implementation
    …
}
```

#### IncludeModuleCallback

当回调类型被设成 IncludeModuleCallback，MiniDumpWriteDump 询问回调函数是否要把特定可执行模块的信息存到 minidump 中。回调函数根据 MINIDUMP_CALLBACK_INPUT 的内容做出决定。此时，联合成员应该是 MINIDUMP_INCLUDE_MODULE_CALLBACK：

```
typedef struct _MINIDUMP_INCLUDE_MODULE_CALLBACK {

  ULONG64 BaseOfImage;

} MINIDUMP_INCLUDE_MODULE_CALLBACK, *PMINIDUMP_INCLUDE_MODULE_CALLBACK;
```

这里，BaseOfImage 是模块在内存中的基地址。利用这个地址，可以获得模块更多的信息，以便决定是否需要存到 minidump 中。

回调函数利用返回值来把决定返回给 MiniDumpWriteDump。如果回调返回值是 TRUE，关于模块的信息会被包含进 minidump 中。通过后续的回调调用可以更精确的定义那些信息需要保存。如果返回值是 FALSE，模块的所有信息会被丢弃。Minidump 中看不到任何模块存在的痕迹。

对于这个回调类型，MINIDUMP_CALLBACK_OUTPUT 没有用处。

#### ModuleCallback

一个模块通过了 IncludeModuleCallback 的测试之后，它会面临在通往 minidump 之路上的另外一个障碍。这个障碍是 ModuleCallback。这个回调函数会决定关于这个模块的哪些信息需要保存。

这一次回调函数必须返回 TRUE，来保证 MiniDumpWriteDump 继续工作。回调函数使用 MINIDUMP_CALLBACK_OUTPUT 结构体通知 MiniDumpWriteDump 的关于数据的决定。这个结构体中的联合包括一个 ModuleWriteFlags 成员。MiniDumpWriteDump 会初始化它的值。它的值代表了可以保存在 minidump 中的各种模块信息。MODULE_WRITE_FLAGS 枚举包含了所有可用的标志。

Figure 10:

```
typedef enum _MODULE_WRITE_FLAGS {

    ModuleWriteModule           = 0x0001,
    ModuleWriteDataSeg          = 0x0002,
    ModuleWriteMiscRecord       = 0x0004,
    ModuleWriteCvRecord         = 0x0008,
    ModuleReferencedByMemory    = 0x0010,
    ModuleWriteTlsData          = 0x0020,
    ModuleWriteCodeSegs         = 0x0040,

} MODULE_WRITE_FLAGS;
```

当 MiniDumpWriteDump 带着 ModuleCallback 参数调用回调函数，它会设置一些标志，告诉回调函数哪些模块信息可以包含在 minidump 中。回调函数可以分析这些标志，然后决定清除其中的一部分和还是全部。这样就可以告诉 MiniDumpWriteDump 哪些信息不需要保存。Figure 11 中的表格列出了目前可用的所有标志，并且解释了他们所代表的信息。

Figure 11:

<table><thead><tr><th><strong>标志</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td>ModuleWriteModule</td><td>这个标志允许从 minidump 中排除模块的所有信息。如果回调函数清除了这个标志，minidump 中就不会包含这个模块的任何信息。 默认条件下，这个标志总是被设置的。</td></tr><tr><td>ModuleWriteCvRecord, ModuleWriteMiscRecord</td><td>这些标志可以用来从 minidump 中排除模块的调试信息记录。如果清除这个标志，只有在开发机器是有这个模块的时候，调试器才能装载模块的调试信息。 通常，只有在模块包含调试信息记录的时候，这些标志才会被设置，也就是，模块是带着调试信息进行编译的时候。 可以在这里面找到关于调试信息的更详细说明，http://www.debuginfo.com/articles/debuginfomatch.html</td></tr><tr><td>ModuleWriteDataSeg</td><td>这个标志可以用来从 minidump 中排除模块的数据段的内容。如果我们在 MiniDumpWriteDump 使用了 MiniDumpWithDataSegs 标志，又希望选择哪些模块的数据段需要包含进来，这个标记就非常有用了。通常，我们希望看到所有我们自己模块的数据段（以便在调试器中看到全局变量），以及一小部分系统模块（比如，ntdll.dll）。其他第三方模块或者系统模块的数据段没有用处。由于可执行模块的数据段在 minidump 中占用了很大的空间。这个标记给我们提供一个很好的优化文件尺寸的机会。 只有 MiniDumpWithDataSegs 标志被传给 MiniDumpWriteDump 的时候，这个标志才会被设置。</td></tr><tr><td>ModuleWriteCodeSegs</td><td>这个标记可以用来从 minidump 中排除模块的代码段。只有 MiniDumpWithCodeSegs 传给 MiniDumpWriteDump 函数的时候，这个标志才可用。这个标志可以用来选择哪些模块的代码段可以包含在 minidump 中。一定不要包含所有模块的代码段，这会显著增加 minidump 的大小。</td></tr><tr><td>ModuleReferencedByMemory</td><td>这个标志需要和 MINIDUMP_TYPE 中的 MiniDumpScanMemory 一起使用。如果 MiniDumpScanMemory 被传给 MiniDumpWriteDump，函数会遍历进程中的所有线程栈，查找指向可执行模块的地址空间的所有指针。搜索完成后，MiniDumpWriteDump 就知道了哪些模块被引用了，哪些模块没有被引用。 如果一个模块没有被任何一个线程栈引用，那么重建调用栈可能不会用到这个模块。Minidump 就可以不包括这个模块，来节省空间。为了让回调函数作最终决定，如果一个模块被栈引用了，MiniDumpWriteDump 会设置 ModuleReferencedByMemory 标志，没有被引用的模块的标志会被清除。. 接着，回调函数可以检查这个模块是否被引用过。然后，可以通过清除 ModuleWriteModule 标志，来把模块排除到 minidump 之外。</td></tr><tr><td>ModuleWriteTlsData</td><td>这个标志可能是用来控制模块的 TLS 数据（通过__declspec(thread) 分配）是否要包括在 mindump 中。但是，到写这篇文章为止，还不能工作。</td></tr></tbody></table>

注意 ModuleCallback 只允许我们排除一些模块信息，但是不允许添加新的数据。这意味着，如果 MiniDumpWriteDump 没有设置相应的标志，在回调函数中设置相应的标志没有用处。例如，如果没有给 MiniDumpWriteDump 设置 MiniDumpWithDataSegs 标志，MiniDumpWriteDump 函数就不会给任何模块设置 ModuleWriteDataSeg 标志。进一步，即使回调函数设置一个模块的 ModuleWriteDataSeg 标志，minidump 中也不会真的包含模块数据段的内容。

在讨论很长时间 MINIDUMP_CALLBACK_OUTPUT 结构体之后，我们回头来看 MINIDUMP_CALLBACK_INPUT 结构体。这时候，这个联合会被解析成 MINIDUMP_MODULE_CALLBACK 结构体 (Figure 12)。它里面包括了关于模块的丰富的信息，例如，名称和路径、大小、版本信息。

Figure 12:

```
typedef struct _MINIDUMP_MODULE_CALLBACK {

    PWCHAR FullPath;
    ULONG64 BaseOfImage;
    ULONG SizeOfImage;
    ULONG CheckSum;
    ULONG TimeDateStamp;
    VS_FIXEDFILEINFO VersionInfo;
    PVOID CvRecord;
    ULONG SizeOfCvRecord;
    PVOID MiscRecord;
    ULONG SizeOfMiscRecord;

} MINIDUMP_MODULE_CALLBACK, *PMINIDUMP_MODULE_CALLBACK;
```

#### IncludeThreadCallback

这个回调类型对于对于线程的作用，和 IncludeModuleCallback 对于模块的作用一样。这给我们一个机会来决定一个线程的哪些信息需要保存到 minidump 中。就像 IncludeModuleCallback，回调函数返回 TRUE 表示要把线程信息保存到 mindump，返回 FASLE 表示完全放弃这些信息。可以通过存储在 MINIDUMP_CALLBACK_INPUT 的 ID 来区分线程。

```
typedef struct _MINIDUMP_INCLUDE_THREAD_CALLBACK {

  ULONG ThreadId;

} MINIDUMP_INCLUDE_THREAD_CALLBACK, *PMINIDUMP_INCLUDE_THREAD_CALLBACK;

MINIDUMP_CALLBACK_OUTPUT structure is not used.
```

#### ThreadCallback

这个回调类型的目的和 ModuleCallback 对于模块的作用一样。回调类型的基本原则也一样。MINIDUMP_CALLBACK_OUTPUT 中的联合包括了一系列的标志 (ThreadWriteFlags)，回调函数可以清除部分或者全部标记，来从 minidump 清除相应的线程信息。

MINIDUMP_CALLBACK_INPUT 提供了很多种关于线程的信息。这里面的联合可以解释成 MINIDUMP_THREAD_CALLBACK (Figure 13)。包括了线程 ID 和句柄、线程上下文、线程栈的边界。为了保证 MiniDumpWriteDump 继续运行，回调函数必须返回 TRUE.

Figure 13:

```
typedef struct _MINIDUMP_THREAD_CALLBACK {

    ULONG ThreadId;
    HANDLE ThreadHandle;
    CONTEXT Context;
    ULONG SizeOfContext;
    ULONG64 StackBase;
    ULONG64 StackEnd;

} MINIDUMP_THREAD_CALLBACK, *PMINIDUMP_THREAD_CALLBACK;
```

Figure 14 种表格列出了所有常用标志，以及他们所代表的信息。

Figure 14:

<table><thead><tr><th><strong>Flag</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr><td>ThreadWriteThread</td><td>通过这个标志可以从 minidump 中清除一个线程的所有信息。如果回调函数清除了这个标志，所有其他的标志都会被忽略。Minidump 就不保存任何关于这个线程的信息了。 通常，这个标志总是被设置的。</td></tr><tr><td>ThreadWriteStack</td><td>这个标志允许从 minidump 中清除线程栈的内容。因此，如果回调函数清除了这个标志，调试器就没办法看到线程的调用栈了。线程栈通常有几 KB ，极少数情况可以达到几 MB。因此这个标志会影响 minidump 的大小。 通常，这个标志总是被设置的。</td></tr><tr><td>ThreadWriteContext</td><td>通过这个标志可以清除线程上下文的内容 (定义在 winnt.h 中的 CONTEXT 结构体)。如果回调清除了这个标志，调试器就不能看到线程上下文和调用栈，所有寄存器会被置成 0。 通常线程上下文不会占据很大的 minidump 空间 (X86 环境下是 716 字节)，因此对于 minidump 大小的影响很小。 通常，这个标志总是被设置的。</td></tr><tr><td>ThreadWriteInstructionWindow</td><td>通过这个标志可以清除线程指令窗口（当前执行指针附近的 256 字节）。如果清除这个标志，就没有办法直接看到出故障时的反汇编代码。如果想看到，就必须在开发者的计算机上装载相应的模块。</td></tr><tr><td>ThreadWriteThreadInfo</td><td>只有给 MiniDumpWriteDump 传递了 MiniDumpWithThreadInfo 参数时，这个标志才被设置。通过这个标志，可以清除 minidump 中的额外线程信息。（参考本文中关于 MiniDumpWithThreadInfo 的解释）</td></tr><tr><td>ThreadWriteThreadData</td><td>只有给 MiniDumpWriteDump 传递了 MiniDumpWithProcessThreadData 参数时，这个标志才被设置。通过这个标志可以从 minidump 中清除线程的特别信息（TEB 的内容、TLS 存储和一些附加信息）</td></tr></tbody></table>

#### MemoryCallback

有些时候，我们肯能希望在 minidump 中添加一些额外内存区域的内容。例如，我们可能在堆上分配了一些数据 (也可能是通过 VirtualAlloc)，希望在调试 minidump 的时候能够看到这些数据。我们可以通过 MemoryCallback 来完成这个功能。MiniDumpWriteDump 会在通过回调调用处理完线程和模块之后调用这个回调函数。

当使用 MemoryCallback 作为回调函数的回调参数时，MINIDUMP_CALLBACK_OUTPUT 中的联合会被解析成：

```
struct {    ULONG64 MemoryBase;    ULONG MemorySize;};
```

如果回调函数在这个结构体中写入可读内存块的资质和大小，并且返回 TRUE，这个内存块的内容就会被放到 minidump 中。我们可以添加多个内存块。当回调函数返回 TRUE 的时候，这个回调会被再次调用。MiniDumpWriteDump 会一直等到返回 FALSE 才停止调用这个回调函数。

#### CancelCallback

MiniDumpWriteDump 会定期调用这个回调类型。这个回调类型允许终止创建 minidump 的过程，这对于 GUI 应用程序很有用。MINIDUMP_CALLBACK_OUTPUT 结构体被解析成两个值，Cancel 和 CheckCancel：

```
struct {

    BOOL CheckCancel;
    BOOL Cancel;
};
```

如果我们希望彻底取消创建 minidump，我们应该把 Cancel 设成 TRUE。如果我们不想取消 minidump，而只是不想再接收 CancelCallback 的回调，就把 CheckCancel 设成 TRUE。如果两个成员都设置成 FALSE，MiniDumpWriteDump 就不再使用 CancelCallback 调用回调函数。

回调函数应该返回 TRUE 来确认 MINIDUMP_CALLBACK_OUTPUT 的值被设置了。

#### 回调的顺序

在讨论完回调的类型之后，我们可能会关心这些回调类型的顺序。调用的顺序如下：

*   IncludeThreadCallback – 进程中的每一个线程一次
*   IncludeModuleCallback –进程中每一个可执行模块一次
*   ModuleCallback – 没有被 IncludeModuleCallback 排除的模块，每个调用一次
*   ThreadCallback –没有被 IncludeThreadCallback 排除的线程，每个调用一次
*   MemoryCallback 会调用一次或者多次，一直到回调函数返回 FALSE

另外，CancelCallback 会在其他回调类型之间定期调用。这样，保证在需要的时候可以中断 minidump 的创建过程。

这个例子程序（http://www.debuginfo.com/examples/src/effminidumps/CallbackOrder.cpp）会显示实际的调用顺序。你也可以使用 MiniDump Wizard 来测试各种回调 (http://www.debuginfo.com/tools/minidumpwizard.html)。

#### MiniDump Wizard

你可以使用 [MiniDump Wizard](http://www.debuginfo.com/tools/minidumpwizard.html) 来试验各种 minidump 的选项并且看到他们会怎么影响 minidump 的大小和内容。MiniDump Wizard 可以创建任意进程的 minidump。它也可以模拟异常来创建自己的 mindump 文件。你可以选择把哪些类型标志 传递给 MiniDumpWriteDump ，然后通过一系列的对话框对回调请求做出响应。

当创建完 minidump，可以在一个调试器中装载它，然后查看包括了哪些信息。也可以使用 MinDumpView(http://www.debuginfo.com/tools/minidumpview.html) 应用来得到 minidump 中内容的清单。

### 4. 用户数据流

除了 MiniDumpWriteDump 已经捕获的成功调试需要的所有应用程序状态之外，我们经常需要程序运行环境的一些额外信息。例如，如果可以查看配置文件的内容或者应用程序相关的注册表设置会很有帮助。Minidump 允许把这些信息作为额外数据流添加进来。

这个例子程序显示了如何做到这一点（http://www.debuginfo.com/examples/src/effminidumps/WriteUserStream.cpp）。我们需要声明一个 MINIDUMP_USER_STREAM_INFORMATION 变量，在里面填充流的数量和用户数据流的指针数组。每个用户数据流用一个 MINIDUMP_USER_STREAM 结构体表示。结构体里面包括流的类型、大小、以及一个指向流数据的指针。流类型是识别流的一个唯一标志，必须是一个比 LastReservedStream 大的常数。

Figure 14:

```
typedef struct _MINIDUMP_USER_STREAM_INFORMATION {

    ULONG UserStreamCount;
    PMINIDUMP_USER_STREAM UserStreamArray;

} MINIDUMP_USER_STREAM_INFORMATION, *PMINIDUMP_USER_STREAM_INFORMATION;


typedef struct _MINIDUMP_USER_STREAM {

    ULONG32 Type;
    ULONG BufferSize;
    PVOID Buffer;

} MINIDUMP_USER_STREAM, *PMINIDUMP_USER_STREAM;
```

当我们向一个 minidump 添加了用户数据流，我们可以通过 MiniDumpReadDumpStream 函数来读出这些信息。这个例子程序 (http://www.debuginfo.com/examples/src/effminidumps/WriteUserStream.cpp) 显示了如何从前一个例子 (http://www.debuginfo.com/examples/src/effminidumps/WriteUserStream.cpp) 写入的例子数据。

### 5. 策略

MiniDumpWriteDump 有丰富功能和大量的可用选项。这使得找到一个所有应用都适用的策略会很困难。对于每一个特定的情况，应用程序的开发者必须决定哪些选项对他们的调试工作有用。在这我会试着描述一些基本策略，用来解释如何把 MiniDumpWriteDump 的配置选项应用到真实场景中。我们会看到四种不同的 MiniDumpWriteDump 收集数据的策略。并且来了解他们会对 minidump 的大小和调试的可能性发生什么影响。

#### TinyDump

这不是一个真实世界的场景。这个方法显示了怎么样来创建一个最小可能数据集的 minidump，来使它有一点用途。Figure 15 总结了这种 MiniDumpWriteDump 配置选项。

Figure 15:

<table><thead><tr><th>MINIDUMP_TYPE 标志</th><th>MiniDumpNormal</th></tr></thead><tbody><tr><td>MiniDumpCallback</td><td>IncludeThreadCallback – exclude all threads IncludeModuleCallback – exclude all modules</td></tr></tbody></table>

实现这种方式的例子程序在这个地址 [http://www.debuginfo.com/examples/src/effminidumps/TinyDump.cpp](http://www.debuginfo.com/examples/src/effminidumps/TinyDump.cpp%E3%80%82%E7%BB%93%E6%9E%9Cminidump)。

结果 minidump 非常小，在我的系统上非常小。并不令人惊讶，我们去掉了所有线程和模块的信息。如果你试着用 WinDbg or VS.NET debugger 来装载，你会发现调试器没有办法装载它。

但是，这个 minidump 还包含了异常的信息，所以不是完全无用，我们可以手工读取这些信息（使用 MiniDumpReadDumpStream 函数），可以看到异常发生的地址、异常时刻的线程上下文、异常代码甚至反汇编。你可以使用 MinDumpView 工具 (http://www.debuginfo.com/tools/minidumpview.html) 来查看其中的信息。为了保持工具简单，没有提供返汇编。

#### MiniDump

不像 TinyDump，这种方式对于真实世界场景是有用的。它收集了足够的调试信息同时又保持 minidump 足够小。Figure 16 中的表格描述了相应的 MiniDumpWriteDump 配置项。

Figure 16:

<table><thead><tr><th>MINIDUMP_TYPE</th><th>MiniDumpWithIndirectlyReferencedMemory, MiniDumpScanMemory</th></tr></thead><tbody><tr><td>MiniDumpCallback</td><td>IncludeThreadCallback – 包括所有线程 IncludeModuleCallback – 包括所有模块 ThreadCallback – 包括所有线程 ModuleCallback – 检查 ModuleWriteFlags ，把所有 ModuleReferencedByMemory 没有设置的模块排除掉（清除这些模块的 ModuleWriteModule 标志）</td></tr></tbody></table>

可以在这找到例子程序（[http://www.debuginfo.com/examples/src/effminidumps/MiniDump.cpp）](http://www.debuginfo.com/examples/src/effminidumps/MiniDump.cpp%EF%BC%89%E3%80%82%E7%BB%93%E6%9E%9C%E7%9A%84mindump)

结果的 mindump 文件仍然很小（在我的系统上大约 40-50KB）。他比 mindump 的标准方式（MiniDumpNormal + no MiniDumpCallback)）包含了更多的信息量。他允许查看栈上的引用的数据。为了优化大小，我们把所有线程栈没有引用的模块从 minidump 中去掉了（在我的系统上，advapi32.dll 和 rpcrt4.dll 被去掉了）。

但是，这个 minidump 还缺少一些重要的信息。例如，我们看不到全局标量的值，不能查看堆和 TLS 中分配的数据（除非他们被线程栈引用了）。

#### MidiDump

下一个方式会产生一个信息量充足的 minidump，同时保证文件不会过大。Figure 17 的表格描述了配置。

Figure 17:

<table><thead><tr><th>MINIDUMP_TYPE flags</th><th>MiniDumpWithPrivateReadWriteMemory, MiniDumpWithDataSegs, MiniDumpWithHandleData, MiniDumpWithFullMemoryInfo, MiniDumpWithThreadInfo, MiniDumpWithUnloadedModules</th></tr></thead><tbody><tr><td>MiniDumpCallback</td><td>IncludeThreadCallback –包括所有线程 IncludeModuleCallback – 包括所有模块 ThreadCallback – 包括所有线程 ModuleCallback – 只保留主模块和 ntdll.dll 的数据区</td></tr></tbody></table>

例子程序可以在这看到 (http://www.debuginfo.com/examples/src/effminidumps/MidiDump.cpp)。minidump 的大小在我的系统上大约 1350KB。当在调试器中装载的时候，我们可以得到应用程序的几乎所有信息，包括全局变量的值、堆和 TLS 的内容、PEB、TEB。我们甚至可以得到句柄信息以及虚拟内存布局。这是一个非常有用的 dump，并且不是很大。下面的信息没有包括在 mindump 中：

*   所有模块的代码区 (如果我们可以得到这些模块，就不需要他们)
*   某些模块的数据区 (我们只包括了我们希望看到全局变量的模块的数据区)

#### MaxiDump

最后一个例子显示了如何创建一个包含所有可能数据的 minidump。Figure 18 的表格显示了如何做到这一点。

Figure 18:

<table><thead><tr><th>MINIDUMP_TYPE flags</th><th>MiniDumpWithFullMemory, MiniDumpWithFullMemoryInfo, MiniDumpWithHandleData, MiniDumpWithThreadInfo, MiniDumpWithUnloadedModules</th></tr></thead><tbody><tr><td>MiniDumpCallback</td><td>Not used</td></tr></tbody></table>

例子程序可以在这找到 http://www.debuginfo.com/examples/src/effminidumps/MaxiDump.cpp。

这个 minidump 对于这样一个简单程序来说已经很大了（在我的系统上有 8MB）。但是，它给了我们在一个 mindump 中包含所有信息的可能。

#### 对比

Figure 19 的表格比较和四种方式创建的 minidump 的大小。除了这个例子程序的数据之外 (它和真实程序会有一定差距)，我还添加了一个真实程序的数据。同样也使用这四种不同的 minidump。

Figure 19:

<table><thead><tr><th><strong>TinyDump</strong></th><th><strong>MiniDump</strong></th><th><strong>MidiDump</strong></th><th><strong>MaxiDump</strong></th><th></th></tr></thead><tbody><tr><td>例子程序</td><td>2 KB</td><td>40-50 KB</td><td>1,35 MB</td><td>8 MB</td></tr><tr><td>真实程序</td><td>2 KB</td><td>200 KB</td><td>14 MB</td><td>35 MB</td></tr></tbody></table>

### 6. 补充

**关于 64 位系统**

这篇文章没有讨论 MiniDumpWriteDump 中关于 64 位系统的选项。我的实验室里面没有 64 位的机器，我没有办法提供关于他们的更有效信息。

**关于 DbgHelp 版本**

DbgHelp.dll 一直在不断改进。新的特性会随着 Debugging Tools for Windows 工具包的新版本推出。在写这篇文章的时候，使用的版本是 DbgHelp.dll 6.3。

**例子程序**

这篇文上涉及的所有例子程序（包括编译指令）可以在这找到。(http://www.debuginfo.com/examples/effmdmpexamples.html)

**联系方式**

Have questions or comments? Free free to contact Oleg Starodumov at firstname@debuginfo.com.

这份文件翻译自  
[http://www.debuginfo.com/articles/effminidumps.html](http://www.debuginfo.com/articles/effminidumps.html)

[http://www.debuginfo.com/articles/effminidumps2.html](http://www.debuginfo.com/articles/effminidumps2.html)

[补充]

如果希望找到一个完整的实现，可以使用 XCrashReport  
[http://www.codeproject.com/Articles/5257/XCrashReport-Exception-Handling-and-Crash-Reportin](http://www.codeproject.com/Articles/5257/XCrashReport-Exception-Handling-and-Crash-Reportin)

原文摘自 [http://www.debuginfo.com/articles/effminidumps.html](http://www.debuginfo.com/articles/effminidumps.html)

本文转载自：[https://blog.csdn.net/pkrobbie/article/details/6636310](https://blog.csdn.net/pkrobbie/article/details/6636310)  
[https://blog.csdn.net/pkrobbie/article/details/6641081](https://blog.csdn.net/pkrobbie/article/details/6636310)