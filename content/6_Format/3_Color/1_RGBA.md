+++
title = "RGBA"
weight = 1
+++

## RGB 的基本概念

RGB 代表红（Red）、绿（Green）、蓝（Blue）。这三种颜色被称为光的三原色。在 RGB 色彩模式下，通过不同强度比例的红、绿、蓝三种光的混合，可以产生出各种各样的颜色。

从物理学角度来看，光是一种电磁波，而人眼能够感知到的可见光波段内，红、绿、蓝这三种颜色的光具有独特的波长范围。红色光的波长大约在 620 - 750 纳米之间，绿色光波长约为 495 - 570 纳米，蓝色光波长则在 450 - 480 纳米左右。当这三种颜色的光以不同的能量强度同时作用于人眼时，大脑就会感知到不同的色彩。
例如，当红色光以最强的强度发出，而绿色光和蓝色光强度为零时，我们看到的就是纯粹的红色；同理，单独最强强度的绿色光呈现绿色，单独最强强度的蓝色光呈现蓝色。而当三种光强度相等时，就会产生白色光。

## RGB的一些具体格式

其中 RGB、RGBA是比较常用的。

### RGB24

RGB24 是一种 24 位的像素格式，它使用 8 位来表示红、绿和蓝的颜色分量。也被称作 *RGB888*。

```c
typedef struct
{
    unsigned char r;
    unsigned char g;
    unsigned char b;
}RGB,RGB24,RGB888;

#define RGB(r,g,b) ((unsigned int)(((unsigned char)(r)|(((unsigned char)(g))<<8))|(((unsigned char)(b))<<16)))

```

注：windows 平台下，一般使用BGR。颜色分量顺序为 BGR。

### RGBA32

RGBA32 是一种 32 位的像素格式，它使用 8 位来表示红、绿、蓝和透明度的颜色分量。也被称作 *RGB8888*。

```c
typedef union
{
    unsigned int rgba;
    struct
    {
        unsigned char r;
        unsigned char g;
        unsigned char b;
        unsigned char a;
    };
}RGBA,RGBA32,RGBA8888;

#define RGBA(r,g,b,a) ((unsigned int)(((unsigned char)(r)|(((unsigned char)(g))<<8))|(((unsigned char)(b))<<16)|(((unsigned char)(a))<<24)))
```

### RGB555

RGB555 是一种 16 位的像素格式，它使用 5 位来表示红、绿和蓝的颜色分量。其中的1位作为透明分量（可以不使用），共 16 位。

```c
typedef struct
{
    unsigned short r : 5;
    unsigned short g : 5;
    unsigned short b : 5;
    unsigned short a : 1;
}RGBA555;

//各分量取值：
#define RGB555_MASK_RED 0x7C00
#define RGB555_MASK_GREEN 0x03E0
#define RGB555_MASK_BLUE 0x001F
#define RGB555_MASK_ALPHA 0x8000
R = (wPixel & RGB555_MASK_RED) >> 10; // 取值范围0-31
G = (wPixel & RGB555_MASK_GREEN) >> 5; // 取值范围0-31
B = wPixel & RGB555_MASK_BLUE; // 取值范围0-31
A = (wPixel & RGB555_MASK_ALPHA) >> 15;

#define RGB555(r,g,b,a) (unsigned short)( (r|0x08 << 10) | (g|0x08 << 5) | b|0x08 | (a << 15) )
```

### RGB565

RGB565使用16位表示一个像素，这16位中的5位用于R，6位用于G，5位用于B。程序中通常使用一个字（WORD，一个字等于两个字节）来操作一个像素。当读出一个像素后，这个字的各个位意义如下：

```c
typedef struct
{
    unsigned short r : 5;
    unsigned short g : 6;
    unsigned short b : 5;
}RGB565;

//各分量取值：
#define RGB565_MASK_RED 0xF800
#define RGB565_MASK_GREEN 0x07E0
#define RGB565_MASK_BLUE 0x001F
R = (wPixel & RGB565_MASK_RED) >> 11;
G = (wPixel & RGB565_MASK_GREEN) >> 5;
B = wPixel & RGB565_MASK_BLUE;

#define RGB(r,g,b) (unsigned int)( (r|0x08 << 11) | (g|0x08 << 6) | b|0x08 )

```
