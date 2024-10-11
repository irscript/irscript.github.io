+++
tags = ["Bitwise"]
title = 'INT_MAX和INT_MIN'
weight = 3
+++

## 假设
假设您有一个 32 位系统：
* INT_MAX是 01111111111111111111111111111111 ；
* INT_MIN是 10000000000000000000000000000000 ；

0 和 1 分别位于最高有效位位置，分别表示符号位。

计算INT_MAX和INT_MIN 在 C/C++ 中：
数字 0 表示为 000...000（32个）。
 
## 原理
我们计算 0 的 NOT 得到一个有 32 个 1 的数字。这个数字不等于INT_MAX因为符号位是1，即负数。
现在，这个数字的右移将产生011...111 这是INT_MAX。
将INT_MAX 按位取反 就得到INT_MIN。

## 代码

```C

unsigned int max = 0;
 
max = ~max;
max = max >> 1;
     
int min = ~max; 

```