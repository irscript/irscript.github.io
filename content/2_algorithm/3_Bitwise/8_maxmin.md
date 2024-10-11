+++
tags = ["Bitwise"]
title = '8 取两数的最 大/小 值'
weight = 8
+++

## 原理
---

* 如果 a >= b，则 a - b >= 0 且 ~(a - b) < 0，所以 ((a - b) >> 31) = 0 且 (~(a - b) >> 31) = -1。
* 如果 a < b，则 a - b < 0 且 ~(a - b) >= 0，所以 ((a - b) >> 31) = -1 且 (~(a - b) >> 31) = 0。

## 实现
---
```c
int max(int a, int b){
    return (b & ((a - b) >> 31)) | (a & (~(a - b) >> 31));
}

int min(int a, int b){
    return (a & ((a - b) >> 31)) | (b & (~(a - b) >> 31));
}
```