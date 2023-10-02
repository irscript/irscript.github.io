+++
title = "3 基于栈和寄存器的指令集"
date = 2023-09-14T21:30:02+08:00
weight = 3
+++

本章节描述的是作者按照 RISC 指令系统设计的虚拟机指令集。

其类似与硬件指令集，可作为编译器后端指令系统目标，用于提供类似硬件指令系统环境，避免编译原理初学者陷入对硬件指令系统不了解的深渊。
降低学习难度，提高学习效率。

这类指令的主要特点如下：
* 1 寄存器的数量固定；
* 2 指令所操作的寄存器数量固定；
* 3 指令的含义简单；

## 1 寄存器

虚拟机的寄存器分为三种：
* 1 整数寄存器：主要用于整数运算，位宽为 64 bit，根据指令的含义可选择 32 bit 和 64 bit 运算模式。
* 2 浮点寄存器：主要用于浮点数运算，位宽为 64 bit，和通用寄存器一致，可选择位宽模式。
* 3 系统寄存器：对用户不可见，与虚拟机运行系统相关，对其进行操作隐藏在相关指令的实现细节中。
* 4 根据指令格式，整数寄存器、浮点寄存器最多可以有32个。

## 2 指令格式
每条指令是 32bit 大小对齐的，其中最低 9bit 是操作码，其余23bit作为操作数或者操作码的补充。如下表所示：
操作码|操作数
---|---|
9 bit| 23 bit

### 2.1 格式1
操作码|操作数
---|---|
9 bit| 23 bit

### 2.2 格式2
多数指令使用此格式。
操作码|目的操作数|源操作数|源操作数|操作子码
---|---|---|---|---|
9 bit| 5 bit| 5 bit| 5 bit| 8 bit
### 2.3 格式3
该格式主要用于比较指令后的三元选择赋值操作。
操作码|目的操作数|源操作数|源操作数|源操作数|操作子码
---|---|---|---|---|---|
9 bit| 5 bit| 5 bit| 5 bit| 5 bit| 3 bit

### 2.4 格式4
当指令中需要使用立即数时，且在指令中没有足够的空间可以存储时，可以使用指令后跟32bit对齐的立即数操作数。

* 32bit立即数：32bit 指令跟 1 个 32bit 立即数，虚拟机解析执行时，按照指令表达的语义参与运算。
* 64bit立即数：32bit 指令跟 2 个 32bit 立即数，虚拟机解析执行时，按照指令表达的语义，组合成 64bit，后参与运算。
* 其他位宽的立即数类似。

格式如下所示：
指令|立即数 1|立即数 2|...|立即数 n|
---|---|---|---|---|
32 bit|32 bit|32 bit|...|32 bit|

## 3 寄存器与寄存器---指令集

### 3.1 空指令
空指令一般用于对齐，在本指令集中没有特殊含义，执行空操作。

格式如下：
助记符|操作码|操作数
---|---|---|
| |9 bit| 23 bit
Nop|0|0|

### 3.2 算术运算
算术运算包含 +、-、*、/、%，支持的运算类型有 int32、uint32、int64、uint64、flt32、flt64。
* 文本格式： op des,src,src2
* 指令含义：des = src op src2
* 子操作码：可以用于将运算结果进行截断、扩展。
* 助记符后缀的数字(32、64)标识指令运算使用的寄存器位宽。
* 助记符后缀的 i 表示进行有符号运算。
* 助记符后缀的 u 表示进行无符号运算。
* 助记符后缀的 f 表示进行有符号运算。

指令格式如下所示：
助记符|操作码|目的操作数|源操作数|源操作数|操作子码
---|---|---|---|---|---|
| |9 bit| 5 bit| 5 bit| 5 bit| 8 bit
|||||
add-i32| |des|src|src2|
sub-i32| |des|src|src2|
mul-i32| |des|src|src2|
div-i32| |des|src|src2|
mod-i32| |des|src|src2|
|||||
add-u32| |des|src|src2|
sub-u32| |des|src|src2|
mul-u32| |des|src|src2|
div-u32| |des|src|src2|
mod-u32| |des|src|src2|
|||||
add-i64| |des|src|src2|
sub-i64| |des|src|src2|
mul-i64| |des|src|src2|
div-i64| |des|src|src2|
mod-i64| |des|src|src2|
|||||
add-u64| |des|src|src2|
sub-u64| |des|src|src2|
mul-u64| |des|src|src2|
div-u64| |des|src|src2|
mod-u64| |des|src|src2|
|||||
add-f32| |des|src|src2|
sub-f32| |des|src|src2|
mul-f32| |des|src|src2|
div-f32| |des|src|src2|
|||||
add-f64| |des|src|src2|
sub-f64| |des|src|src2|
mul-f64| |des|src|src2|
div-f64| |des|src|src2|

### 3.2 位运算
位运算包括位相关的与、或、非、异或、移位、取反等运算。

支持的运算类型有 uint32、uint64。
* 文本格式： op des,src,src2
* 指令含义：des = src op src2
* 子操作码：可以用于将运算结果进行截断、扩展。
* i32：表示进行 32bit 的位运算。
* i64：表示进行 64bit 的位运算。
* 位运算都是看作无符号运算。

指令格式如下所示：
助记符|操作码|目的操作数|源操作数|源操作数|操作子码
---|---|---|---|---|---|
| |9 bit| 5 bit| 5 bit| 5 bit| 8 bit
|||||
sl-i32 | |des|src|src2|
sr-i32 | |des|src|src2|
sra-i32 | |des|src|src2|
and-i32 | |des|src|src2|
or-i32 | |des|src|src2|
xor-i32 | |des|src|src2|
andn-i32 | |des|src|src2|
orn-i32 | |des|src|src2|
xorn-i32 | |des|src|src2|
not-i32 | |des|src|src2|
|||||
sl-i64 | |des|src|src2|
sr-i64| |des|src|src2|
sra-i64 | |des|src|src2|
and-i64 | |des|src|src2|
or-i64 | |des|src|src2|
xor-i64 | |des|src|src2|
andn-i64 | |des|src|src2|
orn-i64 | |des|src|src2|
xorn-i64 | |des|src|src2|
not-i64 | |des|src|src2|

### 3.3 逻辑比较
逻辑比较运算包括：<、>、<=、>=、==、!=、 ==0、！=0.
支持的运算类型有 int32、uint32、int64、uint64、flt32\flt64。
* 文本格式： op des,src,src2
* 指令含义：des = src op src2
* 子操作码：可以用于标识比较的方法。
* 比较的结果，存储在整数寄存器中，且使用位宽 64 bit，即des是整数寄存器。

指令格式如下所示：
助记符|操作码|目的操作数|源操作数|源操作数|操作子码
---|---|---|---|---|---|
| |9 bit| 5 bit| 5 bit| 5 bit| 8 bit
|||||
cmp-i32 | |des|src|src2|
cmp-u32 | |des|src|src2|
cmp-i64 | |des|src|src2|
cmp-u64 | |des|src|src2|
cmp-f32 | |des|src|src2|
cmp-f64 | |des|src|src2|

操作子码定义如下：
助记符|操作码|含义
---|---|---|
lt| |<
le| |<=
gt| |>
ge| |>=
eq| |==
ne| |!=
ez| |==0，此时没有源操作数src2
nz| |!=0，此时没有源操作数src2

当不使用操作子码，而是使用下面方式运算：
* src < src2，设置des寄存器为 -1。
* src == src2，设置des寄存器为 0。
* src > src2，设置des寄存器为 -1。

### 3.4 条件赋值

条件赋值指令使用比较指令的结果，对另外 2 个源操作数进行选择，传递个目标操作数。

指令格式如下所示：
助记符|操作码|目的操作数|源操作数|源操作数|源操作数|操作子码
---|---|---|---|---|---|---|
| |9 bit| 5 bit| 5 bit| 5 bit| 5 bit| 3 bit
sel-i32| |des|src|src2|cond
sel-u32| |des|src|src2|cond
sel-i64| |des|src|src2|cond
sel-u64| |des|src|src2|cond
sel-f32| |des|src|src2|cond
sel-f64| |des|src|src2|cond

当比较系列指令使用操作子码方式时：
* cond == 0 ：des = src
* cond != 0 ：des = src2

当比较系列指令不使用操作子码方式时，本系列指令要求使用操作子码进行判断：

操作子码定义如下：
助记符|操作码|含义
---|---|---|
lt| |<  ：des = cond == -1 ? src : src2
le| |<= ：des = cond < 1 ? src : src2
gt| |>  ：des = cond == 1 ? src : src2
ge| |>= ：des = cond > -1 ? src : src2
eq| |== ：des = cond == 0 ? src : src2
ne| |!= ：des = cond != 0 ? src : src2

### 3.5 赋值指令
此系列包括寄存器间赋值或类型转换。
助记符|操作码|目的操作数|源操作数|源操作数|操作子码
---|---|---|---|---|---|
| |9 bit| 5 bit| 5 bit| 5 bit| 8 bit
|||||
mov| |des|src

操作子码用于获取源操作数并转换到响应的类型。

操作子码定义如下：
助记符|操作码|含义
---|---|---|
i8-i32| |
u8-i32| |
i8-i64| |
u8-u64| |
|||
i16-i32| |
u16-i32| |
i16-i64| |
u16-i64| |
|||
i32_i32| |
i32-i64| |
i32-f32| |
i32-f64| |
|||
u32-u32| |
u32-u64| |
u32-f32| |
u32-f64| |
|||
i64-i64| |
i64-f32| |
i64-f64| |
|||
u64-u64| |
u64-f32| |
u64-f64| |
|||
f32-i32| |
f32-u32| |
f32-i64| |
f32-u64| |
f32-f32| |
f32-f64| |
|||
f64-i32| |
f64-u32| |
f64-i64| |
f64-u64| |
f64-f32| |
f64-f64| |
|||
f32-bit-u32| |位转换
u32-bit-f32| |位转换
f64-bit-u64| |位转换
u64-bit-f64| |位转换

### 3.6 加载存储指令

此系列指令功能是从内存中读取、存储特定类型数据。
助记符|操作码|目的操作数|源操作数|源操作数|操作子码|注释
---|---|---|---|---|---|---|
| |9 bit| 5 bit| 5 bit| 5 bit| 8 bit
||||||
load| |des|base|offset| |从基址内存中获取数据
store| |des|base|offset|
|||||
gload| |des|base|offset| |从全局内存中获取数据
gstore| |des|base|offset|

操作子码定义如下：
助记符|操作码|含义
---|---|---|
i8| |
u8| |
i16| |
u16| |
i32| |
u32| |
i64| |
u64| |
f32| |
f64| |

### 3.7 出入栈指令

此系列指令用于将数据入栈，同时可以进行类型转换。
注意：入栈数据应当进行 32bit 对齐。以加快虚拟机执行速度数据

助记符|操作码|目的操作数|源操作数|源操作数|操作子码
---|---|---|---|---|---|
| |9 bit| 5 bit| 5 bit| 5 bit| 8 bit
|||||
push| |des|
pop| |des|
操作子码定义如下：
助记符|操作码|含义
---|---|---|
i8| |
u8| |
i16| |
u16| |
i32| |
u32| |
i64| |
u64| |
f32| |
f64| |

### 3.8 栈内存分配释放
此系列指令用于栈内存分配释放。
注意：立即数是无符号整数。
助记符|操作码|目的操作数|立即数|注释
---|---|---|---|---|
| |9 bit| 5 bit| 18 bit|
grown| |des| imm|分配栈内存，将分配后的栈指针值传递到 des 寄存器
| |9 bit| 23 bit| 释放栈内存，
shrunk| |imm|

### 3.9 跳转指令

* 跳转的偏移量是无符号整数值；
* 相对于函数代码的起始地址；
* 偏移量是偏移的指令条数；

助记符|操作码|目的操作数|立即数|注释
---|---|---|---|---|
| |9 bit| 23 bit| 
jmp| |imm | |直接跳转
| |9 bit| 5 bit| 18 bit|
jmpx| |reg | |偏移量在 reg 寄存器中
| |9 bit| 5 bit| 18 bit|
jtab| | reg |imm|  reg 表示偏移量索引，imm表示偏移量数组中偏移数据条数，指令后面接 32 bit 对齐的偏移量数组

### 3.10 分支指令
此系列指令用于条件分支跳转。
助记符|操作码|目的操作数|源操作数|源操作数|操作子码|偏移立即数
---|---|---|---|---|---|---|
| |9 bit| 5 bit| 5 bit| 5 bit| 8 bit| 32 bit
jbr-i32| |src|src2||cond |offset
jbr-u32| |src|src2||cond |offset
jbr-i64| |src|src2||cond |offset
jbr-u64| |src|src2||cond |offset
jbr-f32| |src|src2||cond |offset
jbr-f64| |src|src2||cond |offset

操作子码定义如下：
助记符|操作码|含义
---|---|---|
lt| |<
le| |<=
gt| |>
ge| |>=
eq| |==
ne| |!=
ez| |==0，此时没有源操作数src2
nz| |!=0，此时没有源操作数src2
### 3.11 函数指令
 助记符|操作码|目的操作数|立即数|注释
---|---|---|---|---|
| |9 bit| 23 bit| 32 bit|
call| | | imm|imm表示函数的偏移量或者是编号，看虚拟机的具体实现
| |9 bit| 5 bit| 18 bit
callx| |reg| |reg 寄存器中保存函数的偏移量或者是编号，看虚拟机的具体实现
| |9 bit| 23 bit|
ret||||函数返回

## 4 寄存器与立即数--指令集
待续