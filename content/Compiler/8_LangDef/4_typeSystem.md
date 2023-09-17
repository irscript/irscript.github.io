+++
title = "类型系统"
date = 2023-09-14T21:30:02+08:00
weight = 4
+++

## 基本类型
固定位宽类型|注解|位宽(bit)|
---|---|---|
void | 空，一般用于表示无返回值 | ---
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
    <th>可变位宽类型</th><th>注解</th><th>CPU32</th><th>CPU64</th>
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

## 枚举类型


## 结构体

## 联合体

## 接口

## 类

## 函数指针