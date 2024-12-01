+++
title = "Ffmpeg 学习笔记"
weight = 2
+++

## 基本概念

ffmpeg 是一个用于处理视频、音频、图片等多媒体文件的工具。

ffmpeg 的主要功能有：

1. 音视频格式转换
2. 音视频编码
3. 音视频裁剪
4. 音视频混音
5. 音视频转码
6. 音视频水印
7. 音视频拼接
9. 音视频解码

### AVPacket


AVPacket 是一个结构体，用于存储一个音频或视频数据包。

一个包里面包含音频或视频数据、时间戳、数据大小等信息。

通常内部包含一个或者多个AVFrame。

### AVFrame

AVFrame 是一个结构体，用于存储一个音频或视频帧的数据。


## 读取基本流程

* 打开文件封装实例
* 查找流信息
* 获取视频流索引
* 查找音频流索引

找到对应的流关联的解码器ID，并分配一个解码器实例，拷贝源文件参数给解码器实例。
这只是打开文件封装实例，后续的解码操作都是基于这个封装实例。

1. 打开文件封装实例
```c
AVFormatContext *in_fmt_ctx ;
int ret = avformat_open_input(&in_fmt_ctx, src_name, NULL, NULL);
if (ret < 0) {
    av_log(NULL, AV_LOG_ERROR, "Can't open file %s.\n", src_name);
    return -1;
}
```
2. 查找流信息
```c
ret = avformat_find_stream_info(in_fmt_ctx, NULL);
if (ret < 0) {
    av_log(NULL, AV_LOG_ERROR, "Can't find stream information.\n");
    return -1;
}
```
3. 获取视频流索引
```c
    int video_stream_idx = -1;
    // 找到视频流的索引
    video_stream_idx = av_find_best_stream(in_fmt_ctx, AVMEDIA_TYPE_VIDEO, -1, -1, NULL, 0);
    if (video_stream_idx >= 0) {
        src_video = in_fmt_ctx->streams[video_stream_idx];
        enum AVCodecID video_codec_id = src_video->codecpar->codec_id;
        // 查找视频解码器
        AVCodec *video_codec = (AVCodec*) avcodec_find_decoder(video_codec_id);
        if (!video_codec) {
            qCritical() << "video_codec not found" << '\n';
            return -1;
        }
        video_decode_ctx = avcodec_alloc_context3(video_codec); // 分配解码器的实例
        if (!video_decode_ctx) {
            qCritical() << "video_decode_ctx is null" << '\n';
            return -1;
        }
        // 把视频流中的编解码参数复制给解码器的实例
        avcodec_parameters_to_context(video_decode_ctx, src_video->codecpar);
        ret = avcodec_open2(video_decode_ctx, video_codec, NULL); // 打开解码器的实例
        if (ret < 0) {
            qCritical() << "Can't open video_decode_ctx" << '\n';
            return -1;
        }
    }
```

4. 查找音频流索引
```c
    int audio_stream_idx = -1;
    audio_stream_idx = av_find_best_stream(in_fmt_ctx, AVMEDIA_TYPE_AUDIO, -1, -1, NULL, 0);
    if (audio_stream_idx >= 0) {
        src_audio = in_fmt_ctx->streams[audio_stream_idx];
        enum AVCodecID audio_codec_id = src_audio->codecpar->codec_id;
        // 查找音频解码器
        AVCodec *audio_codec = (AVCodec*) avcodec_find_decoder(audio_codec_id);
        if (!audio_codec) {
            qCritical() << "audio_codec not found" << '\n';
            return -1;
        }
        audio_decode_ctx = avcodec_alloc_context3(audio_codec); // 分配解码器的实例
        if (!audio_decode_ctx) {
            qCritical() << "audio_decode_ctx is null" << '\n';
            return -1;
        }
        // 把音频流中的编解码参数复制给解码器的实例
        avcodec_parameters_to_context(audio_decode_ctx, src_audio->codecpar);
        ret = avcodec_open2(audio_decode_ctx, audio_codec, NULL); // 打开解码器的实例
        if (ret < 0) {
            qCritical() << "Can't open audio_decode_ctx" << '\n';
            return -1;
        }
    }
```

##  目录
<hr>

{{% children depth=3 sort="weight" %}}