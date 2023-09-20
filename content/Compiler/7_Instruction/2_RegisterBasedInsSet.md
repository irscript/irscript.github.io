+++
title = "2 基于寄存器的指令集"
date = 2023-09-14T21:30:02+08:00
weight = 2
+++


基于纯寄存器的指令集，指令系统存在下列的要求：
* 每条指令按照 16 bit 对齐。
* 寄存器的索引位宽有 4 bit、8 bit、16 bit。
* 最多支持 65536 个寄存器。
* 每个寄存器 32 bit。
* 64位寄存器由相邻的两个32 bit 寄存器组合而成。
* 指令操作码位宽为 8 bit。
* 指令中可有子操作码，具体位宽看具体的指令格式。
* 32 bit 寄存器内可以存储 32 bit的整数、浮点数。
* 64 bit 寄存器内可以存储 64 bit的整数、浮点数。
* 位宽小于 32 位的值，需要进行扩展（零扩展、符号扩展）到 32 bit。
* 助记符中的 I 表示寄存器索引，后面的数字表示索引位宽

### 指令格式
总体格式：
    
    操作码 + [ 操作子码 ] + ( 操作数 )*

* 操作子码可选。
* 操作数可以有多个。

寄存器位宽索引支持的寄存器数量：
位宽|寄存器数量|索引范围
---|---|---|
4 bit| 16 |[ 0, 15 ]
8 bit| 256 |[ 0, 255 ]
16 bit| 65536|[ 0, 65535 ]

### 空指令
文本格式： nop
助记符|操作码|对齐|注解
---|---|---|---|
|格式 |8 bit | 8bit|指令宽度：16 bit
|
nop| 0 | | 空操作，用于对齐

### 常量赋值指令
#### 文本格式： op des, imm
助记符|操作码|目的寄存器|立即数|注解
---|---|---|---|---|
| |8 bit | 4 bit|4 bit|4 bit 立即数，指令宽度：16 bit
const-w32-I4-i4| |des|imm|imm为有符号整数，有符号扩展至 32bit。
const-w64-I4-i4| |des|imm|imm为有符号整数，有符号扩展至 32bit。
const-w32-I4-u4| |des|imm|imm为无符号整数，无符号扩展至 32bit。
const-w64-I4-u4| |des|imm|imm为无符号整数，无符号扩展至 32bit。
|
| |8 bit | 8 bit|16 bit|16 bit 立即数，指令宽度：32 bit
const-w32-I8-i16| |des|imm|imm为有符号整数，有符号扩展至 32bit。
const-w64-I8-i16| |des|imm|imm为有符号整数，有符号扩展至 64bit。
const-w32-I8-u16| |des|imm|imm为无符号整数，无符号扩展至 32bit。
const-w64-I8-u16| |des|imm|imm为无符号整数，无符号扩展至 64bit。
const-w32-I8-L16| |des|imm|imm为无符号整数。imm存放在寄存器的低 16 bit，不改变高 16 bit。
const-w32-I8-H16| |des|imm|imm为无符号整数。imm存放在寄存器的高 16 bit，不改变低 16 bit。
|
| |8 bit | 8 bit|32 bit|32 bit 立即数，指令宽度：48 bit
const-w32-I8| |des|imm|原样拷贝，支持32 bit 整数和浮点。
const-w64-I8-i32| |des|imm|imm为有符号整数，有符号扩展至 32bit。
const-w64-I8-u32| |des|imm|imm为无符号整数，无符号扩展至 64bit。
|
| |8 bit | 8 bit|64 bit|64 bit 立即数，指令宽度：80 bit
const-w64-I8| |des|imm| 原样拷贝，支持64 bit整数和浮点。

#### 文本格式：op.sub des,imm
助记符|操作码|操作子码|目的寄存器|立即数|注解
---|---|---|---|---|---|
| |8 bit | 8 bit|8 bit|8 bit |指令宽度：32 bit
const-w32-I8| |subop|des|imm|imm为无符号整数


#### 操作子码定义
助记符|操作子码|注解
---|---|---|
B0| |imm存放在寄存器的第1个字节，不改变其他字节。
B1| |imm存放在寄存器的第2个字节，不改变其他字节。
B2| |imm存放在寄存器的第3个字节，不改变其他字节。
B3| |imm存放在寄存器的第4个字节，不改变其他字节。


### 寄存器赋值指令
文本格式：op des,src

#### 文本格式：op des,src
助记符|操作码|目的寄存器|源寄存器|注解
---|---|---|---|---|
| |8 bit | 4 bit|4 bit|指令宽度：16 bit
|move-w32-I4 |  |des|src|32位寄存器值传递
|move-w64-I4 |  |des|src|64位寄存器值传递
|
| |8 bit | 8 bit|16 bit|指令宽度：32 bit
|move-w32-I8I16 |  |des|src|32位寄存器值传递
|move-w64-I8I16|  |des|src|64位寄存器值传递

#### 文本格式：op.sub des,src
助记符|操作码|操作子码|目的寄存器|源寄存器|注解
---|---|---|---|---|---|
| |8 bit | 8 bit|8 bit|8 bit|指令宽度：32 bit
mov-I8|sub|des|src
|
| |8 bit | 8 bit|16 bit|16 bit|指令宽度：48 bit
mov-I16|sub|des|src

#### 操作子码定义
助记符含义：
    
* 目标位宽-源数据获取转换位宽
    * i:符号扩展。
    * u:零扩展。
    * 只有目标位宽时，表示源位宽直接拷贝传递。

* 目标类型-源类型
    * 表示从源类型转换到目标类型

助记符|操作子码|注解
---|---|---|
w32-B0-i8|0 |
w32-B0-u8| |
w32-B1-i8| |
w32-B1-u8| |
w32-B2-i8| |
w32-B2-u8| |
w32-B3-i8| |
w32-B3-u8| |
|
w32-L16-i16| |
w32-L16-u16| |
w32-H16-i16| |
w32-H16-u16| |
w32| |
|
w64-B0-i8|0 |
w64-B0-u8| |
w64-B1-i8| |
w64-B1-u8| |
w64-B2-i8| |
w64-B2-u8| |
w64-B3-i8| |
w64-B3-u8| |
|
w64-L16-i16| |
w64-L16-u16| |
w64-H16-i16| |
w64-H16-u16| |
w64-i32| |
w64-u32| |
w64| |
|
i32-f32| |
i32-f64| |
u32-f32| |
u32-f64| |
|
i64-f32| |
i64-f64| |
u64-f32| |
u64-f64| |
|
f32-i32| |
f32-i64| |
f32-u32| |
f32-u64| |
f32-f64| |
|
f64-i32| |
f64-i64| |
f64-u32| |
f64-u64| |
f64-f32| |

### 数学运算指令
* 有二地址、三地址分类。
* 每类的主操作码不一致。

#### 三地址操作
三地址文本格式： op.sub des,src,src2
助记符|操作码|操作子码|目的寄存器|源寄存器|源操作数|注解
---|---|---|---|---|---|---|
|  |8 bit|8 bit|8 bit|4 bit|4 bit| 指令宽度：32 bit
math-I4| |sub|des|src|src2| |
|  |8 bit|8 bit|16 bit|8 bit|8 bit| 指令宽度：48 bit
math-I16I8| |sub|des|src|src2| |
|  |8 bit|8 bit|16 bit|16 bit|16 bit| 指令宽度：64 bit
math-I16| |sub|des|src|src2| |

#### 子码定义
助记符|操作子码|注解
---|---|---|
add-int32| |
sub-int32| |
mul-int32| |
div-int32| |
mod-int32| |
|
add-uint32| |
sub-uint32| |
mul-uint32| |
div-uint32| |
mod-uint32| |
|
add-int64| |
sub-int64| |
mul-int64| |
div-int64| |
mod-int64| |
|
add-uint64| |
sub-uint64| |
mul-uint64| |
div-uint64| |
mod-uint64| |
|
add-flt32| |
sub-flt32| |
mul-flt32| |
div-flt32| |
mod-flt32| |
|
add-flt64| |
sub-flt64| |
mul-flt64| |
div-flt64| |
mod-flt64| |
|
sl-w32| |
sr-w32| |
sra-w32| |
rol-w32| |
ror-w32| |
and-w32| |
or-w32| |
xor-w32| |
|
sl-w64| |
sr-w64| |
sra-w64| |
rol-w32| |
ror-w32| |
and-w64| |
or-w64| |
xor-w64| |
|
cmp-int32| | src < src2 : des=-1
cmp-uint32| |src == src2 : des=0
cmp-int64| |src > src2 : des=1
cmp-uint64| |
cmp-flt32| |
cmp-flt64| |
|


#### 二地址操作

二地址文本格式： op.sub des,src
助记符|操作码|操作子码|目的寄存器|源寄存器|源操作数|注解
---|---|---|---|---|---|---|
|  |8 bit|8 bit|8 bit|8 bit| 指令宽度：32 bit
math-I8| |sub|des|src| | |
|  |8 bit|8 bit|16 bit|16 bit| 指令宽度：48 bit
math-I16| |sub|des|src| | |

#### 子码定义
助记符|操作子码|注解
---|---|---|
not-w32| |
not-w64| |
|
neg-int32| |
neg-int64| |
neg-flt32| |
neg-flt64| |
|
abs-int32| |
abs-int64| |
abs-flt32| |
abs-flt64| |
|
sin-flt32| |
cos-flt32| |
tan-flt32| |
asin-flt32| |
acos-flt32| |
atan-flt32| |
|
sin-flt64| |
cos-flt64| |
tan-flt64| |
asin-flt64| |
acos-flt64| |
atan-flt64| |

### 跳转指令
#### 直接跳转指令
文本格式： goto imm
助记符|操作码|对齐|立即数|注解
---|---|---|---|---|
| |8 bit| | 8 bit |指令宽度： 16 bit
goto-imm8| || imm |8 bit有符号偏移
| |8 bit|8 bit | 16 bit |指令宽度： 32 bit
goto-imm16| | | imm |
| |8 bit|8 bit | 32 bit |指令宽度： 48 bit
goto-imm32| | | imm |

#### 分支跳转指令
##### 文本格式： jbr src,src2,imm
助记符|操作码|源操作数|源操作数|立即数|注解
---|---|---|---|---|---|
| |8 bit| 8 bit | 8 bit| 8 bit |指令宽度： 32 bit
| |8 bit| 8 bit | 16 bit| 16 bit |指令宽度： 48 bit
| |8 bit| 8 bit | 16 bit| 32 bit |指令宽度： 64 bit
if-eq-w32| |src|src2|imm
if-eq-w64| |src|src2|imm
|
if-ne-w32| |src|src2|imm
if-ne-w64| |src|src2|imm
|
if-lt-int32| |src|src2|imm
if-lt-uint32| |src|src2|imm
if-lt-int64| |src|src2|imm
if-lt-uint64| |src|src2|imm
if-lt-flt32| |src|src2|imm
if-lt-flt64| |src|src2|imm
|
if-le-int32| |src|src2|imm
if-le-uint32| |src|src2|imm
if-le-int64| |src|src2|imm
if-le-uint64| |src|src2|imm
if-le-flt32| |src|src2|imm
if-le-flt64| |src|src2|imm
|
if-gt-int32| |src|src2|imm
if-gt-uint32| |src|src2|imm
if-gt-int64| |src|src2|imm
if-gt-uint64| |src|src2|imm
if-gt-flt32| |src|src2|imm
if-gt-flt64| |src|src2|imm
|
if-ge-int32| |src|src2|imm
if-ge-uint32| |src|src2|imm
if-ge-int64| |src|src2|imm
if-ge-uint64| |src|src2|imm
if-ge-flt32| |src|src2|imm
if-ge-flt64| |src|src2|imm


##### 文本格式： jbr src,imm
助记符|操作码|源操作数|立即数|注解
---|---|---|---|---|
| |8 bit| 8 bit | 16 bit bit指令宽度： 32 bit
| |8 bit| 8 bit | 32 bit bit指令宽度： 48 bit
if-eqz-w32| |src|imm
if-eqz-w64| |src|imm
|
if-nez-w32| |src|imm
if-nez-w64| |src|imm
|
if-ltz-int32| |src|imm
if-ltz-uint32| |src|imm
if-ltz-int64| |src|imm
if-ltz-uint64| |src|imm
if-ltz-flt32| |src|imm
if-ltz-flt64| |src|imm
|
if-lez-int32| |src|imm
if-lez-uint32| |src|imm
if-lez-int64| |src|imm
if-lez-uint64| |src|imm
if-lez-flt32| |src|imm
if-lez-flt64| |src|imm
|
if-gtz-int32| |src|imm
if-gtz-uint32| |src|imm
if-gtz-int64| |src|imm
if-gtz-uint64| |src|imm
if-gtz-flt32| |src|imm
if-gtz-flt64| |src|imm
|
if-gez-int32| |src|imm
if-gez-uint32| |src|imm
if-gez-int64| |src|imm
if-gez-uint64| |src|imm
if-gez-flt32| |src|imm
if-gez-flt64| |src|imm


### 返回指令
文本格式： op src

助记符|操作码|源寄存器|注解
---|---|---|---|
| |8 bit | 8 bit|指令宽度： 16 bit
return-void| |无参数返回
return-w32-I8| |返回 32 bit 值
return-w64-I8| |返回 64 bit 值

### 函数调用指令

#### 不固定参数调用
文本格式：op argcnt, arg,arg2,...,func
助记符|操作码|参数个数|参数寄存器|函数|注解
---|---|---|---|---|---|
| |8 bit | 8 bit| |32 bit|
invoke-virtual| |argcnt|arg...|func|调用虚函数
invoke-direct| |argcnt|arg...|func|直接调用函数
invoke-static||argcnt|arg...|func|调用静态函数
invoke-interface| |argcnt|arg...|func|调用接口函数
invoke-native| |argcnt|arg...|func|调用C语言函数

#### 范围参数调用
文本格式：op argcnt,start, end,func
助记符|操作码|参数个数|起始寄存器|结束寄存器索引|函数|注解
---|---|---|---|---|---|---|
| |8 bit | 8 bit|16 bit|16 bit|32 bit

### 获取返回值指令
文本格式：op des
助记符|操作码|对齐|源寄存器|注解
---|---|---|---|---|
| |8 bit | |8 bit|指令宽度： 16 bit
get-result-w32-I8| ||des|获取32位返回值
get-result-w64-I8| ||des|获取64位返回值
get-result-obj-I8| ||des|获取对象返回值
| |8 bit | 8 bit| 16 bit|指令宽度： 32 bit
get-result-w32-I16| ||des|获取32位返回值
get-result-w64-I16| ||des|获取64位返回值
get-result-obj-I16| ||des|获取对象返回值

### 异常处理指令
文本格式：op des
助记符|操作码|对齐|源寄存器|注解
---|---|---|---|---|
| |8 bit | |8 bit|指令宽度： 16 bit
get-exception-I8| | |des|获取异常对象
throw-I8||src|抛出异常对象
| |8 bit | 8 bit| 16 bit|指令宽度： 32 bit
get-exception-I16| | |des|获取异常对象
throw-I16||src|抛出异常对象