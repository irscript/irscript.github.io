+++
title = "1 语法定义"
date = 2023-09-14T21:30:02+08:00
weight = 1
+++

语法使用非严格的EBNF语法描述。
```
文件单元
FileUnit = PkgDef (ImportDef) Decl*

包定义
PkgDef = package ID (.ID)*

依赖导入(可选)
ImportDef = 'import' STRING as ID; |'{' (STRING as ID; )* '}'
声明定义
Decl = ScopeDecl | VarDecl | FuncDecl | EnumDecl | StructDecl | UnionDecl | InterfaceDecl | ClassDecl | EntrustDecl | ~

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
DotExp = BaseExp ( '.' BaseExp)*  //BaseExp不得是ConstExp

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

作用域声明
ScopeDecl = ( 'public' | 'protected' | 'private' ) ':'

变量声明
VarDecl = Scope Type 'id' [=initExp] ';'
Scope = ['public' | 'protected' | 'private'| 'extern' | 'static'] 
Type = ['const' ] 'id'( '.' 'id')*

代理变量
Scope Type 'id''(' [ arglist] ')' 'delegate' ';'

闭包变量
Scope Type 'id''(' [ arglist] ')' 'closure' ';'

函数申明
VarDecl = Scope Type 'id''(' [ arglist] ')'[@override] [@cfun] [const] [final] (';' |  funbody )
arglist = argitem (',' argitem)*
argitem = type ['id']
funbody = BlkState
BlkState = '{' [Statement] '}'
Statement = ( BlkState | ExpState | IfState | ElseifState |
			ElseState | SwitchState | ForState | DoState |
			WhileState | GotoState | BreakState | ContinueState |
			ReturnState )*
	

TypeDecl = EnumDecl | StructDecl |  UnionDecl |EntrustDecl
FuncDecl = Type 'id''(' [ arglist] ')' '=' Serial
	Serial = 'u32'
	枚举声明
	EnumDecl = 'enum' id [: BaseType]'{' EnumItem* '}'
	BaseType = 基本整数类型
	EnumItem = 'id'[=initExp] ','


```