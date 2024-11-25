+++
title = "查看流信息"
weight = 2
+++

## 说明

本示例演示如何使用 FFmpeg 获取音视频文件的流信息。

## 示例代码

```c++
#include<stdio.h>
extern "C" {
	#include <libavformat/avformat.h>
	#include <libavutil/avutil.h>
}


int main(int argc, const char* argv[]) {

	const char *filename = "F:\\ffmpeg-learn\\test.mp4";
    if (argc > 1) {
        filename = argv[1];
    }
    AVFormatContext *fmt_ctx = NULL;
    // 打开音视频文件
    int ret = avformat_open_input(&fmt_ctx, filename, NULL, NULL);
    if (ret < 0) {
        av_log(NULL, AV_LOG_ERROR, "Can't open file %s.\n", filename);
        return -1;
    }
    av_log(NULL, AV_LOG_INFO, "Success open input_file %s.\n", filename);
    // 查找音视频文件中的流信息
    ret = avformat_find_stream_info(fmt_ctx, NULL);
    if (ret < 0) {
        av_log(NULL, AV_LOG_ERROR, "Can't find stream information.\n");
        return -1;
    }
    av_log(NULL, AV_LOG_INFO, "Success find stream information.\n");
    const AVInputFormat* iformat = fmt_ctx->iformat;
    av_log(NULL, AV_LOG_INFO, "format name is %s.\n", iformat->name);
    av_log(NULL, AV_LOG_INFO, "format long_name is %s\n", iformat->long_name);

    av_dump_format(fmt_ctx,0,filename,0);
    // 关闭音视频文件
    avformat_close_input(&fmt_ctx);
    return 0; 
}
```