+++
title = "5 类型系统"
date = 2023-09-14T21:30:02+08:00
weight = 5
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
枚举定义只能是定义整数类的值，其占用的字节数、有无符号性，通过基类标识指定。

如下所示：
```c++
enum Color:uint32{
    Red,
    Black,
}
```

## 结构体
结构体在airlang中是值类型，不会进入GC系统，除通过API分配独立的堆内存。

一般用于构成类中的共同属性。

```c++
struct Vec2{
    int32 x;
    int32 y;
}
struct Vec3 :Vec2{
    int32 z;
}
```
## 联合体
```c++
union Int32{
    int32 i32;
    struct{
        int8 [4] v4;
    }
}
```
## 接口
```c++
interface IEvent{
    void eat();
}
```
## 类
```c++
class Parent{
 int32 i32;

 void doing(){} 
}
class Child :Parent <IEvent>{
    int64 i64;
    void eat()@override{}
}
```
## 委托
```c++
entrust Func = void (int32,int64)@clang;
```