+++
archetype = "chapter"
title = "语言定义"
weight = 8
+++

air语言是C语法系的编程语言，提供面向对象、函数式、模板等高级语言功能。

## 目录
---
{{% children sort="weight" %}}

## 语法定义
---

```
文件单元
FileUnit = PkgDef (ImportDef) Decl*

包定义
PkgDef = package ID (.ID)*

依赖导入(可选)
ImportDef = 'import' STRING as ID; |'{' (STRING as ID; )* '}'
声明定义
Decl = ScopeDecl | VarDecl | FuncDecl | EnumDecl | StructDecl | UnionDecl | InterfaceDecl | ClassDecl | ~

表达式
Exp = BaseExp | DotExp | UnaryExp | BinaryExp | TernaryExp | NewExp | PriorityExp

基础表达式
BaseExp = IDExp | ConstExp | CallExp | ArrarExp | ThisExp | SuperExp
IDExp = ID
ConstExp = c
CallExp = ID '(' ArgList')'
ArrarExp = ID '[' Exp ']'
ThisExp = 'this'
SuperExp = 'super'

成员访问表达式
DotExp = BaseExp ( '.' BaseExp)*

一元表达式
UnaryExp = UnaryOP BaseExp
UnaryOP = '-' | '+' | '--' | '++' | '~' | '!'
二元表达式
BinaryExp = Exp BinaryOP Exp
BinaryOP = '+' | '-' | '*' | '/' | '%' |
            '&' | '|' | '&&' | '||' |
            '<<' | '>>' | '>>>' |
            '<' | '>' | '<=' | '>=' |
            '==' | '!=' | '=' |
            
三元表达式
TernaryExp = Exp '?' Exp ':' Exp

括号表达式
PriorityExp = '(' Exp ')'



```
