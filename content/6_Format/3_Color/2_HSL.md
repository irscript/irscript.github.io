+++
title = "HSL/HSV"
weight = 2
+++

HSL是一种将RGB色彩模型中的点在圆柱坐标系中的表示法。这两种表示法试图做到比基于笛卡尔坐标系的几何结构RGB更加直观。是运用最广的颜色系统之一

HSL即色相、饱和度、亮度（英语：Hue, Saturation, Lightness）。
色相（H）是色彩的基本属性，就是平常所说的颜色名称，如红色、黄色等。
饱和度（S）是指色彩的纯度，越高色彩越纯，低则逐渐变灰，取0-100%的数值。
明度（V），亮度（L），取0-100%。

HSV即色相、饱和度、明度（英语：Hue, Saturation, Value），又称HSB，其中B即英语：Brightness。
HSL和HSV二者都把颜色描述在圆柱坐标系内的点，这个圆柱的中心轴取值为自底部的黑色到顶部的白色而在它们中间的是灰色，绕这个轴的角度对应于“色相”，到这个轴的距离对应于“饱和度”，而沿着这个轴的高度对应于“亮度”、“色调”或“明度”。
这两种表示在目的上类似，但在方法上有区别。二者在数学上都是圆柱，但HSV（色相、饱和度、明度）在概念上可以被认为是颜色的倒圆锥体（黑点在下顶点，白色在上底面圆心），HSL在概念上表示了一个双圆锥体和圆球体（白色在上顶点，黑色在下顶点，最大横切面的圆心是半程灰色）。注意尽管在HSL和HSV中“色相”指称相同的性质，它们的“饱和度”的定义是明显不同的。
因为HSL和HSV是设备依赖的RGB的简单变换，(h,s,l)或 (h,s,v)三元组定义的颜色依赖于所使用的特定RGB“加法原色”。每个独特的RGB设备都伴随着一个独特的HSL和HSV空间。但是 (h,s,l)或 (h,s,v)三元组在被约束于特定RGB空间比如sRGB的时候就更明确了。

## HSL、HSV与RGB的转换

HSL和HSV在数学上定义为在RGB空间中的颜色的R,G和B的坐标的变换。

### HSL与RGB的转换

```c

// 定义结构体表示 HSL 颜色
typedef struct {
    float h; // 色调，范围 [0, 360]
    float s; // 饱和度，范围 [0, 1]
    float l; // 亮度，范围 [0, 1]
} HSL;

// 将 RGB 转换为 HSL
HSL rgb_to_hsl(int r, int g, int b) {
    // 归一化 RGB 值
    float rf = r / 255.0;
    float gf = g / 255.0;
    float bf = b / 255.0;

    // 计算最大值和最小值
    float max = fmaxf(fmaxf(rf, gf), bf);
    float min = fminf(fminf(rf, gf), bf);
    float delta = max - min;

    HSL hsl = {0, 0, 0};

    // 计算亮度 L
    hsl.l = (max + min) / 2.0;

    if (delta == 0) {
        hsl.h = 0; // 色调不确定，设为 0
        hsl.s = 0; // 饱和度为 0
    } else {
        // 计算饱和度 S
        if (hsl.l < 0.5) {
            hsl.s = delta / (max + min);
        } else {
            hsl.s = delta / (2.0 - max - min);
        }

        // 计算色调 H
        if (rf == max) {
            hsl.h = (gf - bf) / delta;
        } else if (gf == max) {
            hsl.h = 2 + (bf - rf) / delta;
        } else {
            hsl.h = 4 + (rf - gf) / delta;
        }

        hsl.h *= 60.0; // 转换为度数
        if (hsl.h < 0) {
            hsl.h += 360.0;
        }
    }

    return hsl;
}

// 将 HSL 转换为 RGB
RGB hsl_to_rgb(HSL hsl) {
    RGB rgb = {0, 0, 0};

    if (hsl.s == 0) {
        // 如果饱和度为 0，则是灰度颜色
        rgb.r = rgb.g = rgb.b = (int)(hsl.l * 255);
        return rgb;
    }

    float c = (1 - fabs(2 * hsl.l - 1)) * hsl.s;
    float x = c * (1 - fabs(fmod(hsl.h / 60.0, 2) - 1));
    float m = hsl.l - c / 2;

    float r, g, b;

    if (hsl.h >= 0 && hsl.h < 60) {
        r = c; g = x; b = 0;
    } else if (hsl.h >= 60 && hsl.h < 120) {
        r = x; g = c; b = 0;
    } else if (hsl.h >= 120 && hsl.h < 180) {
        r = 0; g = c; b = x;
    } else if (hsl.h >= 180 && hsl.h < 240) {
        r = 0; g = x; b = c;
    } else if (hsl.h >= 240 && hsl.h < 300) {
        r = x; g = 0; b = c;
    } else if (hsl.h >= 300 && hsl.h < 360) {
        r = c; g = 0; b = x;
    }

    rgb.r = (int)((r + m) * 255);
    rgb.g = (int)((g + m) * 255);
    rgb.b = (int)((b + m) * 255);

    return rgb;
}

```

代码解释：

* 归一化：将输入的 RGB 值从 [0, 255] 范围归一化到 [0, 1] 范围。
* 计算最大值和最小值：用于后续计算亮度和饱和度。
* 计算亮度 L：根据最大值和最小值的平均值计算。
* 计算饱和度 S：根据最大值和最小值的差值以及亮度 L 计算。
* 计算色调 H：根据最大值对应的 RGB 分量计算，并转换为度数。

### HSV与RGB的转换

```c
// 定义结构体表示 RGB 颜色
typedef struct {
    int r; // 红色分量，范围 [0, 255]
    int g; // 绿色分量，范围 [0, 255]
    int b; // 蓝色分量，范围 [0, 255]
} RGB;

// 定义结构体表示 HSV 颜色
typedef struct {
    float h; // 色调，范围 [0, 360)
    float s; // 饱和度，范围 [0, 1]
    float v; // 明度，范围 [0, 1]
} HSV;

// 将 HSV 转换为 RGB
RGB hsv_to_rgb(HSV hsv) {
    RGB rgb = {0, 0, 0};
    float c = hsv.v * hsv.s;
    float x = c * (1 - fabs(fmod(hsv.h / 60.0, 2) - 1));
    float m = hsv.v - c;

    if (hsv.h >= 0 && hsv.h < 60) {
        rgb.r = (int)((c + m) * 255);
        rgb.g = (int)((x + m) * 255);
        rgb.b = (int)(m * 255);
    } else if (hsv.h >= 60 && hsv.h < 120) {
        rgb.r = (int)((x + m) * 255);
        rgb.g = (int)((c + m) * 255);
        rgb.b = (int)(m * 255);
    } else if (hsv.h >= 120 && hsv.h < 180) {
        rgb.r = (int)(m * 255);
        rgb.g = (int)((c + m) * 255);
        rgb.b = (int)((x + m) * 255);
    } else if (hsv.h >= 180 && hsv.h < 240) {
        rgb.r = (int)(m * 255);
        rgb.g = (int)((x + m) * 255);
        rgb.b = (int)((c + m) * 255);
    } else if (hsv.h >= 240 && hsv.h < 300) {
        rgb.r = (int)((x + m) * 255);
        rgb.g = (int)(m * 255);
        rgb.b = (int)((c + m) * 255);
    } else if (hsv.h >= 300 && hsv.h < 360) {
        rgb.r = (int)((c + m) * 255);
        rgb.g = (int)(m * 255);
        rgb.b = (int)((x + m) * 255);
    }

    return rgb;
}

// 将 HSV 转换为 RGB
RGB hsv_to_rgb(HSV hsv) {
    RGB rgb = {0, 0, 0};
    float c = hsv.v * hsv.s;
    float x = c * (1 - fabs(fmod(hsv.h / 60.0, 2) - 1));
    float m = hsv.v - c;

    if (hsv.h >= 0 && hsv.h < 60) {
        rgb.r = (int)((c + m) * 255);
        rgb.g = (int)((x + m) * 255);
        rgb.b = (int)(m * 255);
    } else if (hsv.h >= 60 && hsv.h < 120) {
        rgb.r = (int)((x + m) * 255);
        rgb.g = (int)((c + m) * 255);
        rgb.b = (int)(m * 255);
    } else if (hsv.h >= 120 && hsv.h < 180) {
        rgb.r = (int)(m * 255);
        rgb.g = (int)((c + m) * 255);
        rgb.b = (int)((x + m) * 255);
    } else if (hsv.h >= 180 && hsv.h < 240) {
        rgb.r = (int)(m * 255);
        rgb.g = (int)((x + m) * 255);
        rgb.b = (int)((c + m) * 255);
    } else if (hsv.h >= 240 && hsv.h < 300) {
        rgb.r = (int)((x + m) * 255);
        rgb.g = (int)(m * 255);
        rgb.b = (int)((c + m) * 255);
    } else if (hsv.h >= 300 && hsv.h < 360) {
        rgb.r = (int)((c + m) * 255);
        rgb.g = (int)(m * 255);
        rgb.b = (int)((x + m) * 255);
    }

    return rgb;
}

```

代码解释：

* 定义结构体：RGB 和 HSV 结构体分别用于存储 RGB 和 HSV 颜色值。
* 计算临时变量：
* c：色度，计算公式为 V * S。
* x：辅助变量，计算公式为 c * (1 - |(H / 60) % 2 - 1|)。
* m：偏移量，计算公式为 V - c。
* 根据色调 H 的范围选择相应的 RGB 值：通过条件判断，根据 H 的值选择合适的 RGB 分量。
