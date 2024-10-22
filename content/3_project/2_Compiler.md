+++
tags = ["编译器","complier"]
categories=["项目"]
title = "编译器设计与实现"
weight = 2
+++

项目地址：[https://gitee.com/irscript/airlang](https://gitee.com/irscript/airlang)

- c 系语法。
- 前端基本实现。
- 中端优化未实现。
- 汇编代码生成未实现。
- 可作为参考示例。


## 语法树打印
```
dump: parser.air
package Test{
    main(
        arg string[] final
    ) int32
    {
        i int32 =
            0
        ;
        j int32 =
            1
        ;
        f flt32 =
            0
        ;
        f2 flt32 =
            0
        ;
        ires int32 =
                i
            +
                j
        ;
        fres flt32 =
                f2
            +
                f
        ;
        i16 int16 =
            0
        ;
        u16 uint16 =
            0
        ;
        i32 int32 =
                i16
            +
                u16
        ;
            i32
        ++
        ;
        return 
            0
        ;
    }
}

```

## 类型分析

```
dump: parser.air
package Test{
    @static
    @public
    main(
        arg string[] final
    ) int32
    {
        i int32 =
            0 :T= int32
        ;
        j int32 =
            1 :T= int32
        ;
        f flt32 =
            0.000000 :T= flt32
        ;
        f2 flt32 =
            0.000000 :T= flt32
        ;
        ires int32 =
                i :T= int32
            +
                j :T= int32
            :T= int32
        ;
        fres flt32 =
                f2 :T= flt32
            +
                f :T= flt32
            :T= flt32
        ;
        i16 int16 =
            0 :T= int16
        ;
        u16 uint16 =
            0 :T= uint16
        ;
        i32 int32 =
                cast<
                int32
                >(
                    i16 :T= int16
                )
            +
                cast<
                int32
                >(
                    u16 :T= uint16
                )
            :T= int32
        ;
            i32 :T= int32
        ++
        :T= int32
        ;
        return 
            0 :T= int32
        ;
    }
}

```

## IR 转换

```
Test.main(string[] final)int32
{
  def-arg  arg : string[] final
  %$entry:
  {
    def-var  i : int32
    assign<i32>	 0 =>  i
    def-var  j : int32
    assign<i32>	 1 =>  j
    def-var  f : flt32
    assign<f32>	 0.000000 =>  f
    def-var  f2 : flt32
    assign<f32>	 0.000000 =>  f2
    def-var  ires : int32
    def-var  %0 : int32
    add<i32>	 i, j =>  %0
    assign<i32>	 %0 =>  ires
    def-var  fres : flt32
    def-var  %1 : flt32
    add<f32>	 f2, f =>  %1
    assign<f32>	 %1 =>  fres
    def-var  i16 : int16
    assign<i16>	 0 =>  i16
    def-var  u16 : uint16
    assign<u16>	 0 =>  u16
    def-var  i32 : int32
    def-var  %2 : int32
    extend<i16=>i32>	 i16 =>  %2
    def-var  %3 : int32
    extend<u16=>i32>	 u16 =>  %3
    def-var  %4 : int32
    add<i32>	 %2, %3 =>  %4
    assign<i32>	 %4 =>  i32
    def-var  %5 : int32
    assign<i32>	 i32 =>  %5
    inc<i32>	 i32 =>  i32
    return<i32>	 0
  }
  %$end:
}

```

### 待续