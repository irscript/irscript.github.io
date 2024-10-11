+++
title = "段节格式"
weight = 2
+++

---

分段(或叫分节，后续默认叫法为分段)的二进制文件格式是比较常见的，比如编译器 GCC 输出的目标文件一般为 ELF 的分段文件。

## 1 整体结构
---

这类文件一般采用 ***文件头 + 分段*** 的结构：

    file header 
    section 0
    section 1
    ....
    section N

文件头设计方法在 **[文件头]({{%relref "1_FileHeader.md" %}})** 中介绍，本章节主要描述分段式存储数据的方法。

## 2 分段方法
---

一般有两种结构：
* 分散式：在分区的头部的描述分段的大小等信息。
* 段表式：存在统一的结构描述分段的大小、相对偏移等信息。


### 分散式
分散式分结构在分区的头部的描述分段的大小等信息，然后各个分段首尾相连的，分段写入。

分段的每一个段的结构通常是：

    tag + length
    section data

tag 和 length 合起来是分区头部，描述分段中的数据标识，后面紧跟着体数据。

tag 一般是一个整数，用来标识分区的类型。不同的分区用不同的 tag 值表示，不同的分区种类可以使用不同的读取方式。

整体结构如下：

    file header 
    section 0
                tag     //section 0 的标识
                length  //section 0 的数据长度
                data[]  //section 0 的数据
    section 1
    ....
    section N

### 段表式
段表式的结构是有一个描述分段信息的段表，后面存储各个分区的数据。

主要优点就是，可以通过段描述表(简称段表)快速的访问分段的内容，其格式如下。

    section table
    section 0
    section 1
    ....
    section N

段表一般描述分段的类型、数据长度、相对偏移等，结构如下。

    kind
    length
    offset

C 语言定义如下：

```c++
struct SegTabItem{
    uint32 kind;    //类型
    uint32 length;  //数据长度
    uint32 offset;  //相对偏移
};
```

整体结构如下：

    file header 
    section table
                    kind    //section 0 的类型
                    length  //section 0 的数据长度
                    offset  //section 0 的相对偏移
                    kind    //section 1 的类型
                    length  //section 1 的数据长度
                    offset  //section 1 的相对偏移
                    ...
                    kind    //section N 的类型
                    length  //section N 的数据长度
                    offset  //section N 的相对偏移
    section 0
    section 1
    ....
    section N