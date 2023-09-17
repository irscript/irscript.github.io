+++
title = "代码文件结构"
date = 2023-09-14T21:30:02+08:00
weight = 1
+++

每一个文件都必须定义一个作用域名，其他内容在此作用域定义。

生成的声明符号都在该作用域内，只能通过该作用域才能访问代码文件中声明的符号内容。
## 代码结构

### 包声明

	package pkg.pkg2;
### 依赖单元

	Import file=“dir/file.ext” as file ;

或者

	Import{

		 ile=“dir/file.ext” as file ;
		 ile2=“dir/file2.ext” as file2  ;
	}



### 枚举定义

	enum name : int32{
        item=0,
        item2=23,
        …
	}

### 结构体定义

	Struct name{
		Int32 i32;
		Union{
			Int32 s32;
			Flt32 f32;
        }
	}

### 联合体定义

	Union name{
		Int32 s32;
		Flt32 f32;
		Struct{…}
	}

### 接口定义

	Interface IFather{
	    void eat(int32 arg);
    }
    Interface IFather2{
	    void say(int32 arg);
    }
    Interface IChild :[ IFather,IFather2 ]{
	    void walk(int32 arg);
    }

### 类定义

    Class Parent {
    Private:
            Int32 mI32;
    Public	Flt32 mF32;
    Public:
        Void print(){}
    Protected void toString(){}
        Virtual void vfun()=0;
    }

    Class child: Parent :[ IChild ]{
        void eat(int32 arg) @override{}
        void say(int32 arg) @override{}
        void walk(int32 arg) @override{}
        void vfun()@override{}
    }