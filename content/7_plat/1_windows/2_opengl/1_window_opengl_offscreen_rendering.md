
+++
tags = ["OpenGL","windows"]
categories = ["OpenGL","windows"]
title = "windows 上的OpenGL离屏渲染"
weight = 1
+++

> 本文由 [简悦 SimpRead](http://ksria.com/simpread/) 转码， 原文地址 [wiki.woodpecker.org.cn](https://wiki.woodpecker.org.cn/moin/lilin/swig-glBmpContext)

> 呵呵，有了第一次的经验，我们就要开始我们的 GL 离屏渲染的绑定了。

呵呵，有了第一次的经验，我们就要开始我们的 GL 离屏渲染的绑定了。

关于 OpenGL 的离屏渲染，前面已经有一些涉及了。再说一下吧，OpenGL 有两种渲染方式：一种是通过操作系统打开窗口进行渲染，然后可以直接在屏幕上显示，这种渲染方式叫做屏幕渲染。一种通过在内存中一块位图区域内渲染，这种渲染方式在没有通过 SwapBuffer 方式前不可以在屏幕上显示，所以这种方法叫离屏渲染。一般来说，OpenGL 通过屏幕显示方式展示它的魅力，屏幕渲染方式是大多数情况下的首选。而且很多窗口系统都有实现 OpenGL 的屏幕渲染方式。比如 glut，wxwidgets，QT，gtk。但是有些时候我们不需要屏幕显示。只是想把它保存成一个图像文件就好。而且我们就是不想打开一个窗口。这样就需要用离屏渲染的方法。在内存中画，最后保存成图像。

可惜的是 OpenGL 没有统一的离屏渲染操作 API。GL 把这些事情全部交给系统。这样就导致各个系统的离屏渲染都有各自的 API，Windows，X，Apple，SGI，OS2 都有自己的离屏 RC 上下文构建方法，每套 API 都不同。在缺少了榜样的力量后，各个系统就纷纷开始诸侯割据了，就造成天下大乱的局势。这样确实不太好。不过现在乱了就让它乱吧，谁叫我们是 “小程序员”？天下大势就这样，你要怎么着吧 -_-! 没办法。实在是没办法～～～如今的世界太疯狂…… 如今的世界变化快……

我还是静下心来看看这么在各个系统上实现离屏渲染吧。OS2 大概八辈子用不到了吧，Apple 是高高在上的贵族们的东西。咱们老百姓…… 还是算了吧。老老实实研究一下 Windows 和 X 吧。于是先开始研究 WGL。

WGL 要建立离屏渲染，可以参看[官方解释](http://msdn.microsoft.com/library/default.asp?url=/library/en-us/dnopen/html/msdn_gl6.asp)，不过太多，太乱了，[红宝书](http://glprogramming.com/red/appendixc.html)中的解释比较浅显。[这里](http://www.mesa3d.org/brianp/sig97/offscrn.htm)也有两句解释（不过这里主要是 SIG 的解释，X 的解释也比较详细）。最令人激动的是[这里](http://www.siont.com/Rendering-to-bitmap-6277692x638.htm)有 win32 上的完整例子。

简单得说吧，要进行离屏渲染，win32 下需要做下面的几个步骤：

1.  创建一个内存 DC
2.  创建一个位图
3.  把位图选入 DC
4.  设置 DC 的像元格式
5.  通过 DC 创建 OpenGL 的渲染上下文 RC
6.  开始渲染.

好了，可用的渲染过程如下：

```c
#include "stdafx.h"
#include <windows.h>
#include <iostream>
#include <commctrl.h>
#include <gl/gl.h>
#include <gl/glu.h>
#include <string>

using namespace std;

BOOL SaveBmp(HBITMAP hBitmap, string FileName)
{
        HDC hDC;
        //当前分辨率下每象素所占字节数
        int iBits;
        //位图中每象素所占字节数
        WORD wBitCount;
        //定义调色板大小， 位图中像素字节大小 ，位图文件大小 ， 写入文件字节数
        DWORD dwPaletteSize=0, dwBmBitsSize=0, dwDIBSize=0, dwWritten=0;
        //位图属性结构
        BITMAP Bitmap;
        //位图文件头结构
        BITMAPFILEHEADER bmfHdr;
        //位图信息头结构
        BITMAPINFOHEADER bi;
        //指向位图信息头结构
        LPBITMAPINFOHEADER lpbi;
        //定义文件，分配内存句柄，调色板句柄
        HANDLE fh, hDib, hPal,hOldPal=NULL;

        //计算位图文件每个像素所占字节数
        hDC = CreateDC("DISPLAY", NULL, NULL, NULL);
        iBits = GetDeviceCaps(hDC, BITSPIXEL) * GetDeviceCaps(hDC, PLANES);
        DeleteDC(hDC);
        if (iBits <= 1) wBitCount = 1;
        else if (iBits <= 4) wBitCount = 4;
        else if (iBits <= 8) wBitCount = 8;
        else wBitCount = 24;

        GetObject(hBitmap, sizeof(Bitmap), (LPSTR)&Bitmap);
        bi.biSize = sizeof(BITMAPINFOHEADER);
        bi.biWidth = Bitmap.bmWidth;
        bi.biHeight = Bitmap.bmHeight;
        bi.biPlanes = 1;
        bi.biBitCount = wBitCount;
        bi.biCompression = BI_RGB;
        bi.biSizeImage = 0;
        bi.biXPelsPerMeter = 0;
        bi.biYPelsPerMeter = 0;
        bi.biClrImportant = 0;
        bi.biClrUsed = 0;

        dwBmBitsSize = ((Bitmap.bmWidth * wBitCount + 31) / 32) * 4 * Bitmap.bmHeight;

        //为位图内容分配内存
        hDib = GlobalAlloc(GHND,dwBmBitsSize + dwPaletteSize + sizeof(BITMAPINFOHEADER));
        lpbi = (LPBITMAPINFOHEADER)GlobalLock(hDib);
        *lpbi = bi;

        // 处理调色板
        hPal = GetStockObject(DEFAULT_PALETTE);
        if (hPal)
        {
                hDC = ::GetDC(NULL);
                hOldPal = ::SelectPalette(hDC, (HPALETTE)hPal, FALSE);
                RealizePalette(hDC);
        }

        // 获取该调色板下新的像素值
        GetDIBits(hDC, hBitmap, 0, (UINT) Bitmap.bmHeight, (LPSTR)lpbi + sizeof(BITMAPINFOHEADER)
                +dwPaletteSize, (BITMAPINFO *)lpbi, DIB_RGB_COLORS);

        //恢复调色板
        if (hOldPal)
        {
                ::SelectPalette(hDC, (HPALETTE)hOldPal, TRUE);
                RealizePalette(hDC);
                ::ReleaseDC(NULL, hDC);
        }

        //创建位图文件
        fh = CreateFile(FileName.c_str(), GENERIC_WRITE,0, NULL, CREATE_ALWAYS,
                FILE_ATTRIBUTE_NORMAL | FILE_FLAG_SEQUENTIAL_SCAN, NULL);


        if (fh == INVALID_HANDLE_VALUE) return FALSE;

        // 设置位图文件头
        bmfHdr.bfType = 0x4D42; // "BM"
        dwDIBSize = sizeof(BITMAPFILEHEADER) + sizeof(BITMAPINFOHEADER) + dwPaletteSize + dwBmBitsSize;
        bmfHdr.bfSize = dwDIBSize;
        bmfHdr.bfReserved1 = 0;
        bmfHdr.bfReserved2 = 0;
        bmfHdr.bfOffBits = (DWORD)sizeof(BITMAPFILEHEADER) + (DWORD)sizeof(BITMAPINFOHEADER) + dwPaletteSize;
        // 写入位图文件头
        WriteFile(fh, (LPSTR)&bmfHdr, sizeof(BITMAPFILEHEADER), &dwWritten, NULL);
        // 写入位图文件其余内容
        WriteFile(fh, (LPSTR)lpbi, dwDIBSize, &dwWritten, NULL);
        //清除
        GlobalUnlock(hDib);
        GlobalFree(hDib);
        CloseHandle(fh);

        return TRUE;
}

void mGLRender()
{
        glClearColor(0.9f,0.9f,0.3f,1.0f);
        glClear(GL_COLOR_BUFFER_BIT);
        glMatrixMode(GL_PROJECTION);
        gluPerspective(30.0, 1.0, 1.0, 10.0);
        glMatrixMode(GL_MODELVIEW);
        gluLookAt(0, 0, -5, 0, 0, 0, 0, 1, 0);
        glBegin(GL_TRIANGLES);
        glColor3d(1, 0, 0);
        glVertex3d(0, 1, 0);
        glColor3d(0, 1, 0);
        glVertex3d(-1, -1, 0);
        glColor3d(0, 0, 1);
        glVertex3d(1, -1, 0);
        glEnd();
        glFlush(); // remember to flush GL output!
}

int _tmain(int argc, _TCHAR* argv[])
{
        const int WIDTH = 500;
        const int HEIGHT = 500;

        // Create a memory DC compatible with the screen
        HDC hdc = CreateCompatibleDC(0);
        if (hdc == 0) cout<<"Could not create memory device context";

        // Create a bitmap compatible with the DC
        // must use CreateDIBSection(), and this means all pixel ops must be synchronised
        // using calls to GdiFlush() (see CreateDIBSection() docs)
        BITMAPINFO bmi = {
                { sizeof(BITMAPINFOHEADER), WIDTH, HEIGHT, 1, 32, BI_RGB, 0, 0, 0, 0, 0 },
                { 0 }
        };
        DWORD *pbits; // pointer to bitmap bits
        HBITMAP hbm = CreateDIBSection(hdc, &bmi, DIB_RGB_COLORS, (void **) &pbits,
                0, 0);
        if (hbm == 0) cout<<"Could not create bitmap";

        //HDC hdcScreen = GetDC(0);
        //HBITMAP hbm = CreateCompatibleBitmap(hdcScreen,WIDTH,HEIGHT);

        // Select the bitmap into the DC
        HGDIOBJ r = SelectObject(hdc, hbm);
        if (r == 0) cout<<"Could not select bitmap into DC";

        // Choose the pixel format
        PIXELFORMATDESCRIPTOR pfd = {
                sizeof (PIXELFORMATDESCRIPTOR), // struct size
                        1, // Version number
                        PFD_DRAW_TO_BITMAP | PFD_SUPPORT_OPENGL, // use OpenGL drawing to BM
                        PFD_TYPE_RGBA, // RGBA pixel values
                        32, // color bits
                        0, 0, 0, // RGB bits shift sizes...
                        0, 0, 0, // Don't care about them
                        0, 0, // No alpha buffer info
                        0, 0, 0, 0, 0, // No accumulation buffer
                        32, // depth buffer bits
                        0, // No stencil buffer
                        0, // No auxiliary buffers
                        PFD_MAIN_PLANE, // Layer type
                        0, // Reserved (must be 0)
                        0, // No layer mask
                        0, // No visible mask
                        0 // No damage mask
        };
        int pfid = ChoosePixelFormat(hdc, &pfd);
        if (pfid == 0) cout<<"Pixel format selection failed";

        // Set the pixel format
        // - must be done *after* the bitmap is selected into DC
        BOOL b = SetPixelFormat(hdc, pfid, &pfd);
        if (!b) cout<<"Pixel format set failed";

        // Create the OpenGL resource context (RC) and make it current to the thread
        HGLRC hglrc = wglCreateContext(hdc);
        if (hglrc == 0) cout<<"OpenGL resource context creation failed";
        wglMakeCurrent(hdc, hglrc);

        // Draw using GL - remember to sync with GdiFlush()
        GdiFlush();
        mGLRender();

        SaveBmp(hbm,"output.bmp");
        /*
        Examining the bitmap bits (pbits) at this point with a debugger will reveal
        that the colored triangle has been drawn.
        */

        // Clean up
        wglDeleteContext(hglrc); // Delete RC
        SelectObject(hdc, r); // Remove bitmap from DC
        DeleteObject(hbm); // Delete bitmap
        DeleteDC(hdc); // Delete DC

        return 0;
}
```

* * *

好了，编译成功，运行，确实是可以啊！看看步骤是什么样的：

<table><tbody><tr><td><p>CreateCompatibleDC</p></td><td><p>创建 dc</p></td></tr><tr><td><p>CreateDIBSection</p></td><td><p>创建图像</p></td></tr><tr><td><p>SelectObject</p></td><td><p>图像选入 DC</p></td></tr><tr><td><p>SetPixelFormat</p></td><td><p>设置像元格式</p></td></tr><tr><td><p>wglCreateContext</p></td><td><p>创建 RC</p></td></tr><tr><td><p>wglMakeCurrent</p></td><td><p>选择 RC</p></td></tr><tr><td><p>mGLRender</p></td><td><p>开始渲染</p></td></tr><tr><td><p>SaveBmp</p></td><td><p>保存图像（这段是我从网上随便摘下来的）</p></td></tr><tr><td><p>...</p></td><td><p>清理</p></td></tr></tbody></table>

好的，既然 C++ 可以，那么 Python……

等等，Python 好像不行！

单单是 OpenGL 的世界乱了，也就算了，偏偏 Python 也来凑热闹。PyWin32 里我死活找不到 CreateDIBSection。好吧，PyWin32 找不到，那么我还有 PIL。里面有个 ImageWin.Dib，我试过，不行。总是在 SetPixelFormat 中出现问题。后来我把 CreateDIBSection 的部分整个注释掉改成类似：

```c
HDC hdcScreen = GetDC(0);
HBITMAP hbm = CreateCompatibleBitmap(hdcScreen,WIDTH,HEIGHT);
```

* * *

的代码。当然这是 C++ 的改动，python 改动也类似。因为这两个函数 PyWin32 里有，现在通过了。并且运行到了 wglCreateContext 的步骤。等等，提示空间不够？什么空间不够？我在 C++ 中都运行好好的。对比两个语言的两段代码，完全一样的步骤，居然一个可以一个就是不行！发个邮件给 pyopengl 的邮件列表吧，几天没回应…… 真的晕了。

大概可能是我不懂怎么玩 PyWin32 或者 PyOpenGL，或者 PIL 的 Dib 类我用得不对，但是我在泡了三天的 google 后，我放弃了。与其在这个问题上拖延时间，不如另辟蹊径。（如果你成功得在 Python 下离屏渲染了，一定要告诉我哦！）

既然 C++ 可以，为什么不用 C++ 来做？然后用 Swig 来绑定？不就是创建一个环境吗？我在 C++ 中创建好，然后在 Python 中渲染，然后在 C++ 中关闭环境。反正环境在哪里不是一样创建！

现在我的思路就定下来，用 C++ 写两个函数，用来创建离屏 RC 环境和关闭环境。名字就叫 StartBmpContext 和 EndBmpContext。

创建一个工程。叫 glBmpContext。然后做一些什么取消 stdafx，清空等善前工作。然后写入内容。

```c
#include <windows.h>
#include <iostream>
#include <commctrl.h>
#include <gl/gl.h>
#include <gl/glu.h>
using namespace std;

static HDC hdc;
static HBITMAP hbm;
static HGDIOBJ r;
static HGLRC hglrc;
static DWORD *pbits;// pointer to bitmap bits

static int WIDTH = 120;
static int HEIGHT = 90;

__declspec(dllexport) void StartBmpContext(int width,int height)
{
        WIDTH = width;
        HEIGHT = height;

        // Create a memory DC compatible with the screen
        hdc = CreateCompatibleDC(0);
        if (hdc == 0) cout<<"Could not create memory device context";

        // Create a bitmap compatible with the DC
        // must use CreateDIBSection(), and this means all pixel ops must be synchronised
        // using calls to GdiFlush() (see CreateDIBSection() docs)
        BITMAPINFO bmi = {
                { sizeof(BITMAPINFOHEADER), WIDTH, HEIGHT, 1, 32, BI_RGB, 0, 0, 0, 0, 0 },
                { 0 }
        };

        hbm = CreateDIBSection(hdc, &bmi, DIB_RGB_COLORS, (void **) &pbits,
                0, 0);
        /*HBITMAP hbm = CreateCompatibleBitmap(hdc,WIDTH,HEIGHT);*/
        if (hbm == 0) cout<<"Could not create bitmap";

        // Select the bitmap into the DC
        r = SelectObject(hdc, hbm);
        if (r == 0) cout<<"Could not select bitmap into DC";

        // Choose the pixel format
        PIXELFORMATDESCRIPTOR pfd = {
                sizeof (PIXELFORMATDESCRIPTOR), // struct size
                        1, // Version number
                        PFD_DRAW_TO_BITMAP | PFD_SUPPORT_OPENGL, // use OpenGL drawing to BM
                        PFD_TYPE_RGBA, // RGBA pixel values
                        32, // color bits
                        0, 0, 0, // RGB bits shift sizes...
                        0, 0, 0, // Don't care about them
                        0, 0, // No alpha buffer info
                        0, 0, 0, 0, 0, // No accumulation buffer
                        32, // depth buffer bits
                        0, // No stencil buffer
                        0, // No auxiliary buffers
                        PFD_MAIN_PLANE, // Layer type
                        0, // Reserved (must be 0)
                        0, // No layer mask
                        0, // No visible mask
                        0 // No damage mask
        };
        int pfid = ChoosePixelFormat(hdc, &pfd);
        cout<<pfid<<endl;
        if (pfid == 0) cout<<"Pixel format selection failed";

        // Set the pixel format
        // - must be done *after* the bitmap is selected into DC
        BOOL b = SetPixelFormat(hdc, pfid, &pfd);
        if (!b) cout<<"Pixel format set failed";

        // Create the OpenGL resource context (RC) and make it current to the thread
        hglrc = wglCreateContext(hdc);
        if (hglrc == 0) cout<<"OpenGL resource context creation failed";
        wglMakeCurrent(hdc, hglrc);

}

int SaveBmp(HBITMAP hBitmap, char* FileName)
{
        HDC hDC;
        //当前分辨率下每象素所占字节数
        int iBits;
        //位图中每象素所占字节数
        WORD wBitCount;
        //定义调色板大小， 位图中像素字节大小 ，位图文件大小 ， 写入文件字节数
        DWORD dwPaletteSize=0, dwBmBitsSize=0, dwDIBSize=0, dwWritten=0;
        //位图属性结构
        BITMAP Bitmap;
        //位图文件头结构
        BITMAPFILEHEADER bmfHdr;
        //位图信息头结构
        BITMAPINFOHEADER bi;
        //指向位图信息头结构
        LPBITMAPINFOHEADER lpbi;
        //定义文件，分配内存句柄，调色板句柄
        HANDLE fh, hDib, hPal,hOldPal=NULL;

        //计算位图文件每个像素所占字节数
        hDC = CreateDC("DISPLAY", NULL, NULL, NULL);
        iBits = GetDeviceCaps(hDC, BITSPIXEL) * GetDeviceCaps(hDC, PLANES);
        DeleteDC(hDC);
        if (iBits <= 1) wBitCount = 1;
        else if (iBits <= 4) wBitCount = 4;
        else if (iBits <= 8) wBitCount = 8;
        else wBitCount = 24;

        GetObject(hBitmap, sizeof(Bitmap), (LPSTR)&Bitmap);
        bi.biSize = sizeof(BITMAPINFOHEADER);
        bi.biWidth = Bitmap.bmWidth;
        bi.biHeight = Bitmap.bmHeight;
        bi.biPlanes = 1;
        bi.biBitCount = wBitCount;
        bi.biCompression = BI_RGB;
        bi.biSizeImage = 0;
        bi.biXPelsPerMeter = 0;
        bi.biYPelsPerMeter = 0;
        bi.biClrImportant = 0;
        bi.biClrUsed = 0;

        dwBmBitsSize = ((Bitmap.bmWidth * wBitCount + 31) / 32) * 4 * Bitmap.bmHeight;

        //为位图内容分配内存
        hDib = GlobalAlloc(GHND,dwBmBitsSize + dwPaletteSize + sizeof(BITMAPINFOHEADER));
        lpbi = (LPBITMAPINFOHEADER)GlobalLock(hDib);
        *lpbi = bi;

        // 处理调色板
        hPal = GetStockObject(DEFAULT_PALETTE);
        if (hPal)
        {
                hDC = ::GetDC(NULL);
                hOldPal = ::SelectPalette(hDC, (HPALETTE)hPal, FALSE);
                RealizePalette(hDC);
        }

        // 获取该调色板下新的像素值
        GetDIBits(hDC, hBitmap, 0, (UINT) Bitmap.bmHeight, (LPSTR)lpbi + sizeof(BITMAPINFOHEADER)
                +dwPaletteSize, (BITMAPINFO *)lpbi, DIB_RGB_COLORS);

        //恢复调色板
        if (hOldPal)
        {
                ::SelectPalette(hDC, (HPALETTE)hOldPal, TRUE);
                RealizePalette(hDC);
                ::ReleaseDC(NULL, hDC);
        }

        //创建位图文件
        fh = CreateFile(FileName, GENERIC_WRITE,0, NULL, CREATE_ALWAYS,
                FILE_ATTRIBUTE_NORMAL | FILE_FLAG_SEQUENTIAL_SCAN, NULL);


        if (fh == INVALID_HANDLE_VALUE) return 1;

        // 设置位图文件头
        bmfHdr.bfType = 0x4D42; // "BM"
        dwDIBSize = sizeof(BITMAPFILEHEADER) + sizeof(BITMAPINFOHEADER) + dwPaletteSize + dwBmBitsSize;
        bmfHdr.bfSize = dwDIBSize;
        bmfHdr.bfReserved1 = 0;
        bmfHdr.bfReserved2 = 0;
        bmfHdr.bfOffBits = (DWORD)sizeof(BITMAPFILEHEADER) + (DWORD)sizeof(BITMAPINFOHEADER) + dwPaletteSize;
        // 写入位图文件头
        WriteFile(fh, (LPSTR)&bmfHdr, sizeof(BITMAPFILEHEADER), &dwWritten, NULL);
        // 写入位图文件其余内容
        WriteFile(fh, (LPSTR)lpbi, dwDIBSize, &dwWritten, NULL);
        //清除
        GlobalUnlock(hDib);
        GlobalFree(hDib);
        CloseHandle(fh);

        return 0;

}

__declspec(dllexport) int SaveBmp(char* FileName)
{
        return SaveBmp(hbm,FileName);
}

__declspec(dllexport) int GetWidth()
{
        return WIDTH;
}
__declspec(dllexport) int GetHeight()
{
        return HEIGHT;
}

__declspec(dllexport) void GetMemBmpData(char **s,int *slen)
{
        *s = (char*)pbits;
        *slen = WIDTH*HEIGHT*4;
}

__declspec(dllexport) void EndBmpContext()
{
        // Clean up
        wglDeleteContext(hglrc); // Delete RC
        SelectObject(hdc, r); // Remove bitmap from DC
        DeleteObject(hbm); // Delete bitmap
        DeleteDC(hdc); // Delete DC
}
```

* * *

其实这里做得事情也就是这样，把前面那段 C++ 代码拆开，把开始渲染前和渲染结束后两个部分单独拆出来，放到 Start 和 End 两个函数里。为了能在最后做清理工作，把一些句柄做成全程静态变量。提到开头而已。

等一下，多了很多函数。

是的。这里多了 SaveBmp，这个是为了测试数据的正确性。用 vc 的方法保存 bmp 图像。但是我并不想在 vc 中保存图像。太麻烦了。我们有 PIL 啊！保存只要一句的 PIL 啊～～～～～所以我需要有个函数读取 bmp 图像的信息。所以我添加了个 GetMemBmpData 函数。用于获取图像数据的二进制表示。当然，渲染图像大小不可以定死，所以我暴露了获取图像大小的函数，并在初始化环境的时候用两个参数定义宽高。

好了，编译，链接，成功。（需要说明的是，这里的 GetMemBmpData 的参数很奇怪，这是因为要返回二进制时 Swig 的特殊要求决定的）

我们现在有了 C++ 的库了。

好，开始定义 glBmpContext.i，这是重点！

```c
%module glBmpContext
%include "cstring.i"

%cstring_output_allocate_size(char **s, int *slen, free(*$1));


%{
#include <windows.h>
#include <iostream>
#include <commctrl.h>
#include <gl/gl.h>
#include <gl/glu.h>
using namespace std;

void StartBmpContext(int w,int h);
int SaveBmp( char* FileName );
void GetMemBmpData(char **s,int *slen);
void EndBmpContext();
int GetWidth();
int GetHeight();
%}


void StartBmpContext(int w,int h);
int SaveBmp( char* FileName );
void GetMemBmpData(char **s,int *slen);
void EndBmpContext();
int GetWidth();
int GetHeight();
```

* * *

首先，我们定义模块名称，然后引入一个叫 cstring 的 swig 预定义模块，以及定义一种返回值形式。引入这个模块是因为我们需要在 GetMemBmpData 中返回图像格式的二进制形式给 Python，然后通过 PIL.Image 的 fromstring 函数转化成图像并可以用 save 保存。

Python 中不单单是 int，double，这样的简单类型。一些如数组，指针，字典，等等就比较麻烦了。Swig 定义了很多预定义的模块来处理这些东西。通过 %include 来定义这些数据格式和操作。这才是从 C++ 到 Python 的恶梦。也是 swig 最核心的东西。这些东西是很多的，需要我们慢慢去掌握。

先掌握两个。一个是字符串。在 Python 中字符串是一个很强大的东西，但在 swig 定义中却看起来不是那么强大。因为它被定义成 c 的字符串形式。一个 char* ！不错，是 char*。看 SaveBmp 的参数，是一个 char*。这就是 Python 中的字符串！在 Python 中调用就像这样：

SaveBmp("f:/image/img.bmp")

好了，再看一个，返回一个二进制数据对象！这个比较复杂，可以看[这个](http://www.swig.org/Doc1.3/Library.html#Library_nn12)，这个解释十分详细。还有好几种类型。我们用的是最后那个。因为 C++/C 不比 Python，可以返回一个列表，它只能返回一个东西。所以在 Python 绑定定义中要用参数来代替返回。

还有更多的东西可以看[这里](http://www.swig.org/Doc1.3/Python.html)。

函数定义像这样：

```c
void foo(char **s, int *sz) {
    *s = (char *) malloc(64);
    *sz = 64;
    // Write some binary data
    ...
}
```

* * *

在 swig 定义. i 文件中就要这样写：

```c
%cstring_output_allocate_size(char **s, int *slen, free(*$1));
...
void foo(char **s, int *slen);
```

* * *

在 Python 中就要这样调：

```c
>>> foo()
'\xa9Y:\xf6\xd7\xe1\x87\xdbH;y\x97\x7f\xd3\x99\x14V\xec\x06\xea\xa2\x88'
>>>
```

* * *

呵呵，很奇妙吧！

我也是第一次看到这种做法！

其他应该都看得懂了。

好了，现在我们定义 setup.py：

```python
from distutils.core import setup,Extension
include_dirs = []
libraries = ['glBmpContextD','opengl32','glu32']
library_dirs = ['./glBmpContext/']
extra_link_args = []

glBmpContext_module = Extension('_glBmpContext',
        sources = ['glBmpContext_wrap.cpp'],
        include_dirs = include_dirs,
        libraries = libraries,
        library_dirs = library_dirs,
        extra_link_args = extra_link_args,
        )
setup(name='glBmpContext wrapper',
      version='1.0',
      py_modules=["glBmpContext"],
      ext_modules=[glBmpContext_module],
     )
```

* * *

这个和前一个例子很像。特别注意的是 Libraries，这里放了 opengl32 和 glu32 是为了能链接通过。

好了，写个脚本来运行 swig 和编译。

```bat
@echo off
swig -c++ -python -modern -new_repr -I. -o glBmpContext_wrap.cpp glBmpContext.i
python.exe setup.py build
copy .\build\lib.win32-2.4\*.* .\bin\
pause
```

* * *

好了，运行编译通过后就可以了。这个脚本还把生成的 pyd 拷贝到 bin 目录下。

好了，在 bin 目录下建立一个测试脚本

```python
import _glBmpContext
from OpenGL.GL import *
from OpenGL.GLU import *
from Numeric import *
import Image
w = 500
h = 400
_glBmpContext.StartBmpContext(w,h)

glMatrixMode(GL_PROJECTION);
gluPerspective(30.0, w*1.0/h, 1.0, 10.0);
glMatrixMode(GL_MODELVIEW);
gluLookAt(0, 0, -5, 0, 0, 0, 0, 1, 0);
glBegin(GL_TRIANGLES);
glColor3d(1, 0, 0);
glVertex3d(0, 1, 0);
glColor3d(0, 1, 0);
glVertex3d(-1, -1, 0);
glColor3d(0, 0, 1);
glVertex3d(1, -1, 0);
glEnd();
glFlush();

data  = _glBmpContext.GetMemBmpData()
#print len(data),type(data)
w = _glBmpContext.GetWidth()
h = _glBmpContext.GetHeight()

arr = fromstring(data,Int8)
arr.shape = (-1,4)
arr = arr[:,0:3]
print arr.shape

img = Image.fromstring("RGB",(w,h),arr.tostring()).transpose(Image.FLIP_TOP_BOTTOM) \
        .save("../tt.png","png")

_glBmpContext.SaveBmp("hehe.bmp")

_glBmpContext.EndBmpContext()
```

* * *

运行，嗯，一切尽在掌握中。我的目的实现了！可以在 StartBmpContext 后尽情渲染，然后 GetMemBmpData 获得数据，然后用 Image 操作数据保存成各种图片。最后 EndBmpContext 关闭环境。

这里需要注意的是内存中的 HBITMAP 存储的图像是倒着的。要在 Image 中执行 transpose(Image.FLIP_TOP_BOTTOM) 把它转回来。

当然这样做很不安全。可能被恶意地重复创建环境，并且一旦出错，环境就没法释放。可以把_glBmpContext 的东西包装成类，销毁的时候自动释放。