+++
title = "拷贝音视频文件"
weight = 3
+++

## 说明

本示例演示如何使用 FFmpeg 拷贝 音视频文件。

## 示例代码

```c++
extern "C" {
	#include <libavformat/avformat.h>
	#include <libavutil/avutil.h>
}

int main(int argc, const char* argv[]) {

	const char *src_name = "F:\\ffmpeg-learn\\test.mp4";
    if (argc > 1) {
        src_name = argv[1];
    }

    const char *dst_name = "F:\\ffmpeg-learn\\test_copy.mp4";
    
    // 打开文件,获取上下文
    AVFormatContext *in_ctx = nullptr;
    if( 0>avformat_open_input(&in_ctx, src_name, nullptr, nullptr)){
        printf("open file failed:%s\n",src_name);
        return -1;
    }

    printf("open file success:%s\n",src_name);
    //找到流
    if( 0>avformat_find_stream_info(in_ctx, nullptr)){
        printf("find stream info failed!\n");
        return -1;
    }
    

    // 找到视频流
    int video_stream_idx = av_find_best_stream(in_ctx, AVMEDIA_TYPE_VIDEO, -1,-1, nullptr, 0);
    if(video_stream_idx < 0){
        printf("find video stream failed!\n");
        return -1;
    }
    // 找到音频流
    int audio_stream_idx = av_find_best_stream(in_ctx, AVMEDIA_TYPE_AUDIO, -1,-1, nullptr, 0);
    if(audio_stream_idx < 0){
        printf("find audio stream failed!\n");
        return -1;
    }
    
    AVStream* video_stream = nullptr;
    AVStream* audio_stream = nullptr;
    video_stream = in_ctx->streams[video_stream_idx];
    audio_stream = in_ctx->streams[audio_stream_idx];
    

    // 创建输出上下文
    AVFormatContext *out_ctx = nullptr;
    if(0>avformat_alloc_output_context2(&out_ctx, nullptr, nullptr, dst_name)){
        printf("create output context failed!\n");
        return -1;
    }
    //打开输出流
    avio_open(&out_ctx->pb, dst_name, AVIO_FLAG_WRITE);
    {
        // 添加视频流
        AVStream *out_video_stream = avformat_new_stream(out_ctx, nullptr);
        avcodec_parameters_copy(out_video_stream->codecpar, video_stream->codecpar);
        out_video_stream->codecpar->codec_tag = 0;
        out_video_stream->time_base = video_stream->time_base;
        // 添加音频流
        AVStream *out_audio_stream = avformat_new_stream(out_ctx, nullptr);
        avcodec_parameters_copy(out_audio_stream->codecpar, audio_stream->codecpar);
        out_audio_stream->codecpar->codec_tag = 0;
    }
    
    // 写入头
   if(0> avformat_write_header(out_ctx, nullptr)){
        printf("write header failed!\n");
        return -1;
   }

    AVPacket *pkt= av_packet_alloc();
    while(av_read_frame(in_ctx, pkt) >= 0){
        if(pkt->stream_index == video_stream_idx){
            pkt->stream_index =0;
            av_interleaved_write_frame(out_ctx, pkt);
        }
        else if(pkt->stream_index == audio_stream_idx){
            pkt->stream_index =1;
            av_interleaved_write_frame(out_ctx, pkt);
        }
        av_packet_unref(pkt);
    }
    // 写入尾
    av_write_trailer(out_ctx);
    printf("copy success：%s\n",dst_name);
    av_packet_free(&pkt);
    avio_close(out_ctx->pb);
    avformat_free_context(out_ctx);
    avformat_close_input(&in_ctx);
    
    return 0;
}
```