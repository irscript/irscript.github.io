+++
tags = ["Bitwise"]
title = '9 循环移位'
weight = 9
+++

## 循环左移
---
以32位整数为例，循环左移的过程可以分为3步：
1. 将 x 左端的 n 位先移动到 y 的低 n 位中，x >> (32-n);
2. 将 x 左移 n 位，其右面低位补 0，x<<n;
3. 进行按位或运算(x >> (32 - n) | (x << n));

## 循环右移
---
以32位整数为例，循环右移的过程可以分为3步：
1. 将 x 的左端的低 n 位先移动到 y 的高 n 位中 x << (32 - n)
2. 将 x 右移 n 位，其左面高 n 位补 0，x >> n;
3. 进行按位或操作(x << (32 - n) | (x >> n));

## 总结

假如将一个无符号的数据 val ，长度为 N bit，需要循环移动 n bit。可以利用下面的公式：

    循环左移：(val >> (N - n) | (val << n))
    循环右移：(val << (N - n) | (val >> n))

* 注：n ->[0,N-1],所以 在运算之前,将 n 映射到该范围： n = n & ( N  - 1 )

## 实现
---
```c
//循环左移
unsigned int ROL(unsigned int val,unsigned int n){
    n&=31;
    return  (val >> (32 - n) | (val << n));
}
//循环右移
unsigned int ROL(unsigned int val,unsigned int n){
    n&=31;
    return  (val << (32 - n) | (val >> n));
}
```