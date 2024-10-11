+++
title = "关键字"
date = 2023-09-14T21:30:02+08:00
weight = 3
+++

airlang 的关键字分为两种：普通关键字，宏关键字。
两者差别不大，但是宏关键字有特殊的标记作用，一般用于注解一些信息。

## 宏关键字
关键字|注解|
---|---|
@file | 代码中获取文件的名称字符串
@line | 代码中获取代码所作行号数字
@func | 代码中获取函数声明字符串
||
@debug | 用于标记只在debug标志下启用的代码
@NotNulptr | 用于标记需要检查函数的指针参数非空
@override | 标记非静态成员函数是重写父类的函数

## 普通关键字

固定位宽类型关键字|注解|位宽(bit)|
---|---|---|
void | 空，一般用于表示无返回值 | 0
bool | 布尔类型  | 8
flt32 | 32位单精度浮点 | 32
flt64 | 64位双精度浮点 | 32
int8 | 8位有符号整数    | 8
int16| 8位有符号整数    | 16
int32| 8位有符号整数    | 32
int64| 8位有符号整数    | 64
uint8| 8位无符号整数    | 8
uint16| 16位无符号整数    | 16
uint32| 32位无符号整数    | 32
uint64| 64位无符号整数    | 64
char | 字符    | 8

可变位宽类型的位宽由编译的目标CPU架构有关。
<table>
    <th>可变位宽类型关键字</th><th>注解</th><th>CPU32</th><th>CPU64</th>
    <tr>
    <td>sint</td><td>有符号整数 </td><td>32</td><td>64</td>
    </tr>
    <tr>
    <td>uint</td><td>无符号整数 </td><td>32</td><td>64</td>
    </tr>
    <tr>
    <td>uintptr</td><td>指针 </td><td>32</td><td>64</td>
    </tr>
    <tr>
    <td>cstring</td><td>字符串指针 </td><td>32</td><td>64</td>
    </tr>
</table>


修饰关键字|注解|
---|---|
static | 静态
public | 完全公开的
protected | 对部分成员公开的
private | 私有的 成员
const | 常量化，只读
friend| 友元定义

分支关键字|注解
---|---|
if | 比较分支
elsif| 次比较分支
else| 比较默认分支
for| 循环
foreach| 循环
while|循环
do|循环
break|跳出循环
continue|继续下一轮循环
goto|跳转到标签
return|函数返回

类型定义关键字|注解
---|---|
enum|枚举
struct|结构体
union|联合体
interface|接口
class|类
entrust|委托指针

其他关键字|注解
---|---|
false|
true|
nullptr|
this|
super|


