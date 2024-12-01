+++
title = "ffmpeg 下载"
weight = 1
+++

## 简介

ffmpeg 是一个跨平台、开源的流媒体处理工具，可以用来转换、剪辑、混合、编码、解码、过滤、转换、播放、录制、分析视频、音频等。

对于初学者，下载已经搭配好的ffmpeg库即可。

学会ffmpeg 相关知识之后，可以自行学习编译ffmpeg。

**注意：** 编译开源库一般都比较困难，需要一定时间，请耐心等待。

## windows 下载

Shift Media Project 旨在为FFmpeg及其相关依赖项提供原生Windows开发库，以支持在Visual Studio中直接更简单地创建和调试丰富媒体内容。

网址：[https://shiftmediaproject.github.io](https://shiftmediaproject.github.io/)

对于初学者，下载已经搭配好的ffmpeg库即可。




## demo

下载完成，后可以通过如下代码测试是否成功。

**注** 编译器为c++ 编译。

```c++
#include<stdio.h>
extern "C" {
	#include <libavutil/avutil.h>
}

int main(int argc, const char* argv[]) {

	av_log(nullptr, AV_LOG_INFO, "FFmpeg version: %s\n", av_version_info());
	av_log(nullptr, AV_LOG_INFO, "FFmpeg configuration: %s\n", avutil_configuration());

	return 0;
}
```