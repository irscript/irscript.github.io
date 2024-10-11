+++
tags = ["Align"]
title = '整数对齐'
weight = 2
+++

```c++
// 向上大小对齐
 template <typename T>
inline constexpr T alignup(T num, T base) { return (num + base - 1) & (~(base - 1)); }
// 向下大小对齐
template <typename T>
inline constexpr T aligndown(T num, T base) { return (num & ~(base - 1)); }
```

