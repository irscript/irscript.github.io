+++
title = "YUV"
weight = 3
+++

## 简介

YUV，是一种颜色编码方法。常使用在各个视频处理组件中。 YUV在对照片或视频编码时，考虑到人类的感知能力，允许降低色度的带宽。
YUV是编译true-color颜色空间（color space）的种类，Y'UV, YUV, YCbCr，YPbPr等专有名词都可以称为YUV，彼此有重叠。“Y”表示明亮度（Luminance或Luma），也就是灰阶值，“U”和“V”表示的则是色度（Chrominance或Chroma），作用是描述影像色彩及饱和度，用于指定像素的颜色。

Y'代表明亮度(luma;brightness)而U与V存储色度(色讯;chrominance;color)部分;亮度(luminance)记作Y，而Y'的prime符号记作伽玛校正。
YUVFormats分成两个格式：
紧缩格式（packedformats）：将Y、U、V值存储成MacroPixels数组，和RGB的存放方式类似。
平面格式（planarformats）：将Y、U、V的三个分量分别存放在不同的矩阵中。
紧缩格式（packedformat）中的YUV是混合在一起的，对于YUV常见格式有AYUV格式（4：4：4采样、打包格式）；YUY2、UYVY（采样、打包格式），有UYVY、YUYV等。平面格式（planarformats）是指每Y分量，U分量和V分量都是以独立的平面组织的，也就是说所有的U分量必须在Y分量后面，而V分量在所有的U分量后面，此一格式适用于采样（subsample）。平面格式（planarformat）有I420（4:2:0）、YV12、IYUV等。

## 常用的YUV格式

为节省带宽起见，大多数YUV格式平均使用的每像素位数都少于24位。主要的抽样（subsample）格式有YCbCr4:2:0、YCbCr4:2:2、YCbCr4:1:1和YCbCr4:4:4。YUV的表示法称为A:B:C表示法：

* 4:4:4表示完全取样。
* 4:2:2表示2:1的水平取样，垂直完全采样。
* 4:2:0表示2:1的水平取样，垂直2：1采样。
* 4:1:1表示4:1的水平取样，垂直完全采样。

最常用Y:UV记录的比重通常1:1或2:1，DVD-Video是以YUV4:2:0的方式记录，也就是我们俗称的I420，YUV4:2:0并不是说只有U（即Cb）,V（即Cr）一定为0，而是指U：V互相援引，时见时隐，也就是说对于每一个行，只有一个U或者V分量，如果一行是4:2:0的话，下一行就是4:0:2，再下一行是4:2:0...以此类推。

至于其他常见的YUV格式有YUY2、YUYV、YVYU、UYVY、AYUV、Y41P、Y411、Y211、IF09、IYUV、YV12、YVU9、YUV411、YUV420等。

## YUY2及常见表示方法

YUY2（和YUYV）格式为像素保留Y，而UV在水平空间上相隔二个像素采样一次（Y0U0Y1V0），（Y2U2Y3V2）…其中，（Y0U0Y1V0）就是一个macro-pixel（宏像素），它表示了2个像素，（Y2U2Y3V2）是另外的2个像素。以此类推，再如：Y41P（和Y411）格式为每个像素保留Y分量，而UV分量在水平方向上每4个像素采样一次。一个宏像素为12个字节，实际表示8个像素。

图像数据中YUV分量排列顺序如下：（U0Y0V0Y1U4Y2V4Y3Y4Y5Y6Y7）

### YVYUUYVY

YVYU,UYVY格式跟YUY2类似，只是排列顺序有所不同。Y211格式是Y每2个像素采样一次，而UV每4个像素采样一次。AYUV格式则有一Alpha通道。

### YV12

YV12格式与IYUV类似，每个像素都提取Y，在UV提取时，将图像2x2的矩阵，每个矩阵提取一个U和一个V。YV12格式和I420格式的不同处在V平面和U平面的位置不同。在YV12格式中，V平面紧跟在Y平面之后，然后才是U平面（即：YVU）；但I420则是相反（即：YUV）。NV12与YV12类似，效果一样，YV12中U和V是连续排列的，而在NV12中，U和V就交错排列的。
