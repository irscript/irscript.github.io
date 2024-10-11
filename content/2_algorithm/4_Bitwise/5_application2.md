+++
tags = ["Bitwise"]
title = '应用 n ^ n = 0 和 n ^ 0 = n'
weight = 5
+++

## 交换两个数的值
---

不需要第三个临时变量，交换两个数的值
```c

 int a, b;
 a ^= b;	// a = a ^ b;
 b ^= a;	// b = b ^ a = b ^ a ^ b = (b ^ b) ^ a = 0 ^ a = a
 a ^= b;	// a = a ^ b = a ^ a ^ b = 0 ^ b = b
```

## 代替特定的条件赋值
---
如果 x = a，则 a ^ b ^ x = 0 ^ b；如果 x = b，则 a ^ b ^ x = 0 ^ a；

所以下列代码可等价于：x = a ^ b ^ x。
```c

int a, b, x;

if(x == a) 
    x = b;
else if(x == b)
    x = a;
    
// 上面代码等价于
x = a ^ b ^ x
```