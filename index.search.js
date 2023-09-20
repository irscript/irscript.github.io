var relearn_search_index = [
  {
    "content": "1 词法规则 词法分析按照规定的规则，可以从字符流中获取数据。\n规则定义为以下几类：\n标识符：由字母、数字、下划线( _ )构成，但是不得由数字为起始；其中存在特殊的字符串为关键字。 普通数字字面量：由数字和’.‘组成，其中分为整数、浮点数； 2进制数字字面量：由 ‘0B’起始，多个 ‘0’或'1’构成。 16进制数字字面量：由 ‘0X’起始，多个 十六进制字符 构成。 字符字面量：由 ‘‘‘起始和结尾，中间为可打印的字符。 2 Token 分类 3 位置信息 3 Token 定义 ",
    "description": "",
    "tags": null,
    "title": "1 Token 定义",
    "uri": "/compiler/1_lexer/1_tokendef/index.html"
  },
  {
    "content": "1 序 词法分析就是将代码字符流，按照一定的规则进行分析，获取符合词法规则的字符串，并进行信息标注，为语法分析提供单词(Token)流。\n2 目录 1 Token 定义 2 Lexer 实现 3 工程文件解析 ",
    "description": "",
    "tags": null,
    "title": "1 词法分析",
    "uri": "/compiler/1_lexer/index.html"
  },
  {
    "content": "基于栈的指令集参考Java的指令集。\n",
    "description": "",
    "tags": null,
    "title": "1 基于栈的指令集",
    "uri": "/compiler/7_instruction/1_stackbasedinsset/index.html"
  },
  {
    "content": "待续\n",
    "description": "",
    "tags": null,
    "title": "1 类型系统设计与实现",
    "uri": "/compiler/2_parser/1_typesystem/index.html"
  },
  {
    "content": "语法使用非严格的EBNF语法描述。\n文件单元\rFileUnit = PkgDef (ImportDef) Decl*\r包定义\rPkgDef = package ID (.ID)*\r依赖导入(可选)\rImportDef = 'import' STRING as ID; |'{' (STRING as ID; )* '}'\r声明定义\rDecl = ScopeDecl | VarDecl | FuncDecl | EnumDecl | StructDecl | UnionDecl | InterfaceDecl | ClassDecl | EntrustDecl | ~\r表达式\rExp = BaseExp | DotExp | UnaryExp | BinaryExp | TernaryExp | NewExp | PriorityExp\r基础表达式\rBaseExp = IDExp | ConstExp | CallExp | ArrarExp | ThisExp | SuperExp\rIDExp = ID\rConstExp = c\rCallExp = ID '(' ArgList')'\rArrarExp = ID '[' Exp ']'\rThisExp = 'this'\rSuperExp = 'super'\r成员访问表达式\rDotExp = BaseExp ( '.' BaseExp)* //BaseExp不得是ConstExp\r一元表达式\rUnaryExp = UnaryOP BaseExp\rUnaryOP = '-' | '+' | '--' | '++' | '~' | '!'\r二元表达式\rBinaryExp = Exp BinaryOP Exp\rBinaryOP = '+' | '-' | '*' | '/' | '%' |\r'\u0026' | '|' | '\u0026\u0026' | '||' |\r'\u003c\u003c' | '\u003e\u003e' | '\u003e\u003e\u003e' |\r'\u003c' | '\u003e' | '\u003c=' | '\u003e=' |\r'==' | '!=' | '=' |\r三元表达式\rTernaryExp = Exp '?' Exp ':' Exp\r括号表达式\rPriorityExp = '(' Exp ')'\r作用域声明\rScopeDecl = ( 'public' | 'protected' | 'private' ) ':'\r变量声明\rVarDecl = Scope Type 'id' [=initExp] ';'\rScope = ['public' | 'protected' | 'private'| 'extern' | 'static'] Type = ['const' ] 'id'( '.' 'id')*\r代理变量\rScope Type 'id''(' [ arglist] ')' 'delegate' ';'\r闭包变量\rScope Type 'id''(' [ arglist] ')' 'closure' ';'\r函数申明\rVarDecl = Scope Type 'id''(' [ arglist] ')'[@override] [@cfun] [const] [final] (';' | funbody )\rarglist = argitem (',' argitem)*\rargitem = type ['id']\rfunbody = BlkState\rBlkState = '{' [Statement] '}'\rStatement = ( BlkState | ExpState | IfState | ElseifState |\rElseState | SwitchState | ForState | DoState |\rWhileState | GotoState | BreakState | ContinueState |\rReturnState )*\rTypeDecl = EnumDecl | StructDecl | UnionDecl |EntrustDecl\rFuncDecl = Type 'id''(' [ arglist] ')' '=' Serial\rSerial = 'u32'\r枚举声明\rEnumDecl = 'enum' id [: BaseType]'{' EnumItem* '}'\rBaseType = 基本整数类型\rEnumItem = 'id'[=initExp] ','",
    "description": "",
    "tags": null,
    "title": "1 语法定义",
    "uri": "/compiler/8_langdef/1_langdef/index.html"
  },
  {
    "content": " 单向节点链表 双向节点链表 ",
    "description": "",
    "tags": null,
    "title": "链表",
    "uri": "/struct/list/index.html"
  },
  {
    "content": " 整数对齐 ",
    "description": "",
    "tags": null,
    "title": "算法",
    "uri": "/algorithms/index.html"
  },
  {
    "content": "待续\n",
    "description": "",
    "tags": null,
    "title": "2 Lexer 实现",
    "uri": "/compiler/1_lexer/2_lexer/index.html"
  },
  {
    "content": "待续\n",
    "description": "",
    "tags": null,
    "title": "2 抽象语法树设计与实现",
    "uri": "/compiler/2_parser/2_astnode/index.html"
  },
  {
    "content": "每一个文件都必须定义一个作用域名，其他内容在此作用域定义。\n生成的声明符号都在该作用域内，只能通过该作用域才能访问代码文件中声明的符号内容。\n代码结构 包声明 package pkg.pkg2;\r依赖单元 Import file=“dir/file.ext” as file ;\r或者\nImport{\rile=“dir/file.ext” as file ;\rile2=“dir/file2.ext” as file2 ;\r}\r枚举定义 enum name : int32{\ritem=0,\ritem2=23,\r…\r}\r结构体定义 Struct name{\rInt32 i32;\rUnion{\rInt32 s32;\rFlt32 f32;\r}\r}\r联合体定义 Union name{\rInt32 s32;\rFlt32 f32;\rStruct{…}\r}\r接口定义 Interface IFather{\rvoid eat(int32 arg);\r}\rInterface IFather2{\rvoid say(int32 arg);\r}\rInterface IChild :[ IFather,IFather2 ]{\rvoid walk(int32 arg);\r}\r类定义 Class Parent {\rPrivate:\rInt32 mI32;\rPublic\tFlt32 mF32;\rPublic:\rVoid print(){}\rProtected void toString(){}\rVirtual void vfun()=0;\r}\rClass child: Parent :[ IChild ]{\rvoid eat(int32 arg) @override{}\rvoid say(int32 arg) @override{}\rvoid walk(int32 arg) @override{}\rvoid vfun()@override{}\r} ",
    "description": "",
    "tags": null,
    "title": "2 代码结构",
    "uri": "/compiler/8_langdef/2_codefile/index.html"
  },
  {
    "content": "基于纯寄存器的指令集，指令系统存在下列的要求：\n每条指令按照 16 bit 对齐。 寄存器的索引位宽有 4 bit、8 bit、16 bit。 最多支持 65536 个寄存器。 每个寄存器 32 bit。 64位寄存器由相邻的两个32 bit 寄存器组合而成。 指令操作码位宽为 8 bit。 指令中可有子操作码，具体位宽看具体的指令格式。 32 bit 寄存器内可以存储 32 bit的整数、浮点数。 64 bit 寄存器内可以存储 64 bit的整数、浮点数。 位宽小于 32 位的值，需要进行扩展（零扩展、符号扩展）到 32 bit。 助记符中的 I 表示寄存器索引，后面的数字表示索引位宽 指令格式 总体格式：\n操作码 + [ 操作子码 ] + ( 操作数 )*\r操作子码可选。 操作数可以有多个。 寄存器位宽索引支持的寄存器数量：\n位宽 寄存器数量 索引范围 4 bit 16 [ 0, 15 ] 8 bit 256 [ 0, 255 ] 16 bit 65536 [ 0, 65535 ] 空指令 文本格式： nop\n助记符 操作码 对齐 注解 格式 8 bit 8bit 指令宽度：16 bit nop 0 空操作，用于对齐 常量赋值指令 文本格式： op des, imm 助记符 操作码 目的寄存器 立即数 注解 8 bit 4 bit 4 bit 4 bit 立即数，指令宽度：16 bit const-w32-I4-i4 des imm imm为有符号整数，有符号扩展至 32bit。 const-w64-I4-i4 des imm imm为有符号整数，有符号扩展至 32bit。 const-w32-I4-u4 des imm imm为无符号整数，无符号扩展至 32bit。 const-w64-I4-u4 des imm imm为无符号整数，无符号扩展至 32bit。 8 bit 8 bit 16 bit 16 bit 立即数，指令宽度：32 bit const-w32-I8-i16 des imm imm为有符号整数，有符号扩展至 32bit。 const-w64-I8-i16 des imm imm为有符号整数，有符号扩展至 64bit。 const-w32-I8-u16 des imm imm为无符号整数，无符号扩展至 32bit。 const-w64-I8-u16 des imm imm为无符号整数，无符号扩展至 64bit。 const-w32-I8-L16 des imm imm为无符号整数。imm存放在寄存器的低 16 bit，不改变高 16 bit。 const-w32-I8-H16 des imm imm为无符号整数。imm存放在寄存器的高 16 bit，不改变低 16 bit。 8 bit 8 bit 32 bit 32 bit 立即数，指令宽度：48 bit const-w32-I8 des imm 原样拷贝，支持32 bit 整数和浮点。 const-w64-I8-i32 des imm imm为有符号整数，有符号扩展至 32bit。 const-w64-I8-u32 des imm imm为无符号整数，无符号扩展至 64bit。 8 bit 8 bit 64 bit 64 bit 立即数，指令宽度：80 bit const-w64-I8 des imm 原样拷贝，支持64 bit整数和浮点。 文本格式：op.sub des,imm 助记符 操作码 操作子码 目的寄存器 立即数 注解 8 bit 8 bit 8 bit 8 bit 指令宽度：32 bit const-w32-I8 subop des imm imm为无符号整数 操作子码定义 助记符 操作子码 注解 B0 imm存放在寄存器的第1个字节，不改变其他字节。 B1 imm存放在寄存器的第2个字节，不改变其他字节。 B2 imm存放在寄存器的第3个字节，不改变其他字节。 B3 imm存放在寄存器的第4个字节，不改变其他字节。 寄存器赋值指令 文本格式：op des,src\n文本格式：op des,src 助记符 操作码 目的寄存器 源寄存器 注解 8 bit 4 bit 4 bit 指令宽度：16 bit move-w32-I4 des src 32位寄存器值传递 move-w64-I4 des src 64位寄存器值传递 8 bit 8 bit 16 bit 指令宽度：32 bit move-w32-I8I16 des src 32位寄存器值传递 move-w64-I8I16 des src 64位寄存器值传递 文本格式：op.sub des,src 助记符 操作码 操作子码 目的寄存器 源寄存器 注解 8 bit 8 bit 8 bit 8 bit 指令宽度：32 bit mov-I8 sub des src 8 bit 8 bit 16 bit 16 bit 指令宽度：48 bit mov-I16 sub des src 操作子码定义 助记符含义：\n目标位宽-源数据获取转换位宽\ni:符号扩展。 u:零扩展。 只有目标位宽时，表示源位宽直接拷贝传递。 目标类型-源类型\n表示从源类型转换到目标类型 助记符 操作子码 注解 w32-B0-i8 0 w32-B0-u8 w32-B1-i8 w32-B1-u8 w32-B2-i8 w32-B2-u8 w32-B3-i8 w32-B3-u8 w32-L16-i16 w32-L16-u16 w32-H16-i16 w32-H16-u16 w32 w64-B0-i8 0 w64-B0-u8 w64-B1-i8 w64-B1-u8 w64-B2-i8 w64-B2-u8 w64-B3-i8 w64-B3-u8 w64-L16-i16 w64-L16-u16 w64-H16-i16 w64-H16-u16 w64-i32 w64-u32 w64 i32-f32 i32-f64 u32-f32 u32-f64 i64-f32 i64-f64 u64-f32 u64-f64 f32-i32 f32-i64 f32-u32 f32-u64 f32-f64 f64-i32 f64-i64 f64-u32 f64-u64 f64-f32 数学运算指令 有二地址、三地址分类。 每类的主操作码不一致。 三地址操作 三地址文本格式： op.sub des,src,src2\n助记符 操作码 操作子码 目的寄存器 源寄存器 源操作数 注解 8 bit 8 bit 8 bit 4 bit 4 bit 指令宽度：32 bit math-I4 sub des src src2 8 bit 8 bit 16 bit 8 bit 8 bit 指令宽度：48 bit math-I16I8 sub des src src2 8 bit 8 bit 16 bit 16 bit 16 bit 指令宽度：64 bit math-I16 sub des src src2 子码定义 助记符 操作子码 注解 add-int32 sub-int32 mul-int32 div-int32 mod-int32 add-uint32 sub-uint32 mul-uint32 div-uint32 mod-uint32 add-int64 sub-int64 mul-int64 div-int64 mod-int64 add-uint64 sub-uint64 mul-uint64 div-uint64 mod-uint64 add-flt32 sub-flt32 mul-flt32 div-flt32 mod-flt32 add-flt64 sub-flt64 mul-flt64 div-flt64 mod-flt64 sl-w32 sr-w32 sra-w32 rol-w32 ror-w32 and-w32 or-w32 xor-w32 sl-w64 sr-w64 sra-w64 rol-w32 ror-w32 and-w64 or-w64 xor-w64 cmp-int32 src \u003c src2 : des=-1 cmp-uint32 src == src2 : des=0 cmp-int64 src \u003e src2 : des=1 cmp-uint64 cmp-flt32 cmp-flt64 二地址操作 二地址文本格式： op.sub des,src\n助记符 操作码 操作子码 目的寄存器 源寄存器 源操作数 注解 8 bit 8 bit 8 bit 8 bit 指令宽度：32 bit math-I8 sub des src 8 bit 8 bit 16 bit 16 bit 指令宽度：48 bit math-I16 sub des src 子码定义 助记符 操作子码 注解 not-w32 not-w64 neg-int32 neg-int64 neg-flt32 neg-flt64 abs-int32 abs-int64 abs-flt32 abs-flt64 sin-flt32 cos-flt32 tan-flt32 asin-flt32 acos-flt32 atan-flt32 sin-flt64 cos-flt64 tan-flt64 asin-flt64 acos-flt64 atan-flt64 跳转指令 直接跳转指令 文本格式： goto imm 助记符|操作码|对齐|立即数|注解 —|—|—|—| | |8 bit| | 8 bit |指令宽度： 16 bit goto-imm8| | imm |8 bit有符号偏移 | |8 bit|8 bit | 16 bit |指令宽度： 32 bit goto-imm16 | imm | | |8 bit|8 bit | 32 bit |指令宽度： 48 bit goto-imm32 | imm |\n分支跳转指令 文本格式： jbr src,src2,imm 助记符 操作码 源操作数 源操作数 立即数 注解 8 bit 8 bit 8 bit 8 bit 指令宽度： 32 bit 8 bit 8 bit 16 bit 16 bit 指令宽度： 48 bit 8 bit 8 bit 16 bit 32 bit 指令宽度： 64 bit if-eq-w32 src src2 imm if-eq-w64 src src2 imm if-ne-w32 src src2 imm if-ne-w64 src src2 imm if-lt-int32 src src2 imm if-lt-uint32 src src2 imm if-lt-int64 src src2 imm if-lt-uint64 src src2 imm if-lt-flt32 src src2 imm if-lt-flt64 src src2 imm if-le-int32 src src2 imm if-le-uint32 src src2 imm if-le-int64 src src2 imm if-le-uint64 src src2 imm if-le-flt32 src src2 imm if-le-flt64 src src2 imm if-gt-int32 src src2 imm if-gt-uint32 src src2 imm if-gt-int64 src src2 imm if-gt-uint64 src src2 imm if-gt-flt32 src src2 imm if-gt-flt64 src src2 imm if-ge-int32 src src2 imm if-ge-uint32 src src2 imm if-ge-int64 src src2 imm if-ge-uint64 src src2 imm if-ge-flt32 src src2 imm if-ge-flt64 src src2 imm 文本格式： jbr src,imm 助记符 操作码 源操作数 立即数 注解 8 bit 8 bit 16 bit bit指令宽度： 32 bit 8 bit 8 bit 32 bit bit指令宽度： 48 bit if-eqz-w32 src imm if-eqz-w64 src imm if-nez-w32 src imm if-nez-w64 src imm if-ltz-int32 src imm if-ltz-uint32 src imm if-ltz-int64 src imm if-ltz-uint64 src imm if-ltz-flt32 src imm if-ltz-flt64 src imm if-lez-int32 src imm if-lez-uint32 src imm if-lez-int64 src imm if-lez-uint64 src imm if-lez-flt32 src imm if-lez-flt64 src imm if-gtz-int32 src imm if-gtz-uint32 src imm if-gtz-int64 src imm if-gtz-uint64 src imm if-gtz-flt32 src imm if-gtz-flt64 src imm if-gez-int32 src imm if-gez-uint32 src imm if-gez-int64 src imm if-gez-uint64 src imm if-gez-flt32 src imm if-gez-flt64 src imm 返回指令 文本格式： op src\n助记符 操作码 源寄存器 注解 8 bit 8 bit 指令宽度： 16 bit return-void 无参数返回 return-w32-I8 返回 32 bit 值 return-w64-I8 返回 64 bit 值 函数调用指令 不固定参数调用 文本格式：op argcnt, arg,arg2,…,func\n助记符 操作码 参数个数 参数寄存器 函数 注解 8 bit 8 bit 32 bit invoke-virtual argcnt arg… func 调用虚函数 invoke-direct argcnt arg… func 直接调用函数 invoke-static argcnt arg… func 调用静态函数 invoke-interface argcnt arg… func 调用接口函数 invoke-native argcnt arg… func 调用C语言函数 范围参数调用 文本格式：op argcnt,start, end,func\n助记符 操作码 参数个数 起始寄存器 结束寄存器索引 函数 注解 8 bit 8 bit 16 bit 16 bit 32 bit 获取返回值指令 文本格式：op des\n助记符 操作码 对齐 源寄存器 注解 8 bit 8 bit 指令宽度： 16 bit get-result-w32-I8 des 获取32位返回值 get-result-w64-I8 des 获取64位返回值 get-result-obj-I8 des 获取对象返回值 8 bit 8 bit 16 bit 指令宽度： 32 bit get-result-w32-I16 des 获取32位返回值 get-result-w64-I16 des 获取64位返回值 get-result-obj-I16 des 获取对象返回值 异常处理指令 文本格式：op des\n助记符 操作码 对齐 源寄存器 注解 8 bit 8 bit 指令宽度： 16 bit get-exception-I8 des 获取异常对象 throw-I8 src 抛出异常对象 8 bit 8 bit 16 bit 指令宽度： 32 bit get-exception-I16 des 获取异常对象 throw-I16 src 抛出异常对象 ",
    "description": "",
    "tags": null,
    "title": "2 基于寄存器的指令集",
    "uri": "/compiler/7_instruction/2_registerbasedinsset/index.html"
  },
  {
    "content": "1 序 语法分析就是将词法分析提供单词(Token)流，按照语法规则构建抽象语法分析树，为语义分析提供数据骨架。\n2 目录 1 类型系统设计与实现 2 抽象语法树设计与实现 3 代码文件文件管理 4 顶层语法解析实现 5 解析表达式 6 解析声明 7 解析声明续 ",
    "description": "",
    "tags": null,
    "title": "2 语法分析",
    "uri": "/compiler/2_parser/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "单向节点链表",
    "uri": "/struct/list/singlelinkedlist/index.html"
  },
  {
    "content": "目录 链表 单向节点链表 双向节点链表 待续 ",
    "description": "",
    "tags": null,
    "title": "数据结构",
    "uri": "/struct/index.html"
  },
  {
    "content": "// 向上大小对齐 template \u003ctypename T\u003e inline constexpr T alignup(T num, T base) { return (num + base - 1) \u0026 (~(base - 1)); } // 向下大小对齐 template \u003ctypename T\u003e inline constexpr T aligndown(T num, T base) { return (num \u0026 ~(base - 1)); }",
    "description": "",
    "tags": [
      "Cxx",
      "Align"
    ],
    "title": "整数对齐",
    "uri": "/algorithms/align/index.html"
  },
  {
    "content": "待续\n",
    "description": "",
    "tags": null,
    "title": "3 代码文件文件管理",
    "uri": "/compiler/2_parser/3_fileunit/index.html"
  },
  {
    "content": "待续\n",
    "description": "",
    "tags": null,
    "title": "3 工程文件解析",
    "uri": "/compiler/1_lexer/3_project/index.html"
  },
  {
    "content": "airlang 的关键字分为两种：普通关键字，宏关键字。 两者差别不大，但是宏关键字有特殊的标记作用，一般用于注解一些信息。\n宏关键字 关键字 注解 @file 代码中获取文件的名称字符串 @line 代码中获取代码所作行号数字 @func 代码中获取函数声明字符串 @debug 用于标记只在debug标志下启用的代码 @NotNulptr 用于标记需要检查函数的指针参数非空 @override 标记非静态成员函数是重写父类的函数 普通关键字 固定位宽类型关键字 注解 位宽(bit) void 空，一般用于表示无返回值 0 bool 布尔类型 8 flt32 32位单精度浮点 32 flt64 64位双精度浮点 32 int8 8位有符号整数 8 int16 8位有符号整数 16 int32 8位有符号整数 32 int64 8位有符号整数 64 uint8 8位无符号整数 8 uint16 16位无符号整数 16 uint32 32位无符号整数 32 uint64 64位无符号整数 64 char 字符 8 可变位宽类型的位宽由编译的目标CPU架构有关。\n可变位宽类型关键字注解CPU32CPU64\rsint有符号整数 3264\ruint无符号整数 3264\ruintptr指针 3264\rcstring字符串指针 3264\r修饰关键字 注解 static 静态 public 完全公开的 protected 对部分成员公开的 private 私有的 成员 const 常量化，只读 friend 友元定义 分支关键字 注解 if 比较分支 elsif 次比较分支 else 比较默认分支 for 循环 foreach 循环 while 循环 do 循环 break 跳出循环 continue 继续下一轮循环 goto 跳转到标签 return 函数返回 类型定义关键字 注解 enum 枚举 struct 结构体 union 联合体 interface 接口 class 类 entrust 委托指针 其他关键字 注解 false true nullptr this super ",
    "description": "",
    "tags": null,
    "title": "3 关键字",
    "uri": "/compiler/8_langdef/3_keyword/index.html"
  },
  {
    "content": "本章节描述的是作者按照 RISC 指令系统设计的虚拟机指令集。\n其类似与硬件指令集，可作为编译器后端指令系统目标，用于提供类似硬件指令系统环境，避免编译原理初学者陷入对硬件指令系统不了解的深渊。 降低学习难度，提高学习效率。\n这类指令的主要特点如下：\n1 寄存器的数量固定； 2 指令所操作的寄存器数量固定； 3 指令的含义简单； 1 寄存器 虚拟机的寄存器分为三种：\n1 整数寄存器：主要用于整数运算，位宽为 64 bit，根据指令的含义可选择 32 bit 和 64 bit 运算模式。 2 浮点寄存器：主要用于浮点数运算，位宽为 64 bit，和通用寄存器一致，可选择位宽模式。 3 系统寄存器：对用户不可见，与虚拟机运行系统相关，对其进行操作隐藏在相关指令的实现细节中。 4 根据指令格式，整数寄存器、浮点寄存器最多可以有32个。 2 指令格式 每条指令是 32bit 大小对齐的，其中最低 9bit 是操作码，其余23bit作为操作数或者操作码的补充。如下表所示：\n操作码 操作数 9 bit 23 bit 2.1 格式1 操作码 操作数 9 bit 23 bit 2.2 格式2 多数指令使用此格式。\n操作码 目的操作数 源操作数 源操作数 操作子码 9 bit 5 bit 5 bit 5 bit 8 bit 2.3 格式3 该格式主要用于比较指令后的三元选择赋值操作。\n操作码 目的操作数 源操作数 源操作数 源操作数 操作子码 9 bit 5 bit 5 bit 5 bit 5 bit 3 bit 2.4 格式4 当指令中需要使用立即数时，且在指令中没有足够的空间可以存储时，可以使用指令后跟32bit对齐的立即数操作数。\n32bit立即数：32bit 指令跟 1 个 32bit 立即数，虚拟机解析执行时，按照指令表达的语义参与运算。 64bit立即数：32bit 指令跟 2 个 32bit 立即数，虚拟机解析执行时，按照指令表达的语义，组合成 64bit，后参与运算。 其他位宽的立即数类似。 格式如下所示：\n指令 立即数 1 立即数 2 … 立即数 n 32 bit 32 bit 32 bit … 32 bit 3 寄存器与寄存器—指令集 3.1 空指令 空指令一般用于对齐，在本指令集中没有特殊含义，执行空操作。\n格式如下：\n助记符 操作码 操作数 9 bit 23 bit Nop 0 0 3.2 算术运算 算术运算包含 +、-、*、/、%，支持的运算类型有 int32、uint32、int64、uint64、flt32、flt64。\n文本格式： op des,src,src2 指令含义：des = src op src2 子操作码：可以用于将运算结果进行截断、扩展。 助记符后缀的数字(32、64)标识指令运算使用的寄存器位宽。 助记符后缀的 i 表示进行有符号运算。 助记符后缀的 u 表示进行无符号运算。 助记符后缀的 f 表示进行有符号运算。 指令格式如下所示：\n助记符 操作码 目的操作数 源操作数 源操作数 操作子码 9 bit 5 bit 5 bit 5 bit 8 bit add-i32 des src src2 sub-i32 des src src2 mul-i32 des src src2 div-i32 des src src2 mod-i32 des src src2 add-u32 des src src2 sub-u32 des src src2 mul-u32 des src src2 div-u32 des src src2 mod-u32 des src src2 add-i64 des src src2 sub-i64 des src src2 mul-i64 des src src2 div-i64 des src src2 mod-i64 des src src2 add-u64 des src src2 sub-u64 des src src2 mul-u64 des src src2 div-u64 des src src2 mod-u64 des src src2 add-f32 des src src2 sub-f32 des src src2 mul-f32 des src src2 div-f32 des src src2 add-f64 des src src2 sub-f64 des src src2 mul-f64 des src src2 div-f64 des src src2 3.2 位运算 位运算包括位相关的与、或、非、异或、移位、取反等运算。\n支持的运算类型有 uint32、uint64。\n文本格式： op des,src,src2 指令含义：des = src op src2 子操作码：可以用于将运算结果进行截断、扩展。 i32：表示进行 32bit 的位运算。 i64：表示进行 64bit 的位运算。 位运算都是看作无符号运算。 指令格式如下所示：\n助记符 操作码 目的操作数 源操作数 源操作数 操作子码 9 bit 5 bit 5 bit 5 bit 8 bit sl-i32 des src src2 sr-i32 des src src2 sra-i32 des src src2 and-i32 des src src2 or-i32 des src src2 xor-i32 des src src2 andn-i32 des src src2 orn-i32 des src src2 xorn-i32 des src src2 not-i32 des src src2 sl-i64 des src src2 sr-i64 des src src2 sra-i64 des src src2 and-i64 des src src2 or-i64 des src src2 xor-i64 des src src2 andn-i64 des src src2 orn-i64 des src src2 xorn-i64 des src src2 not-i64 des src src2 3.3 逻辑比较 逻辑比较运算包括：\u003c、\u003e、\u003c=、\u003e=、==、!=、 ==0、！=0. 支持的运算类型有 int32、uint32、int64、uint64、flt32\\flt64。\n文本格式： op des,src,src2 指令含义：des = src op src2 子操作码：可以用于标识比较的方法。 比较的结果，存储在整数寄存器中，且使用位宽 64 bit，即des是整数寄存器。 指令格式如下所示： 助记符 操作码 目的操作数 源操作数 源操作数 操作子码 9 bit 5 bit 5 bit 5 bit 8 bit cmp-i32 des src src2 cmp-u32 des src src2 cmp-i64 des src src2 cmp-u64 des src src2 cmp-f32 des src src2 cmp-f64 des src src2 操作子码定义如下：\n助记符 操作码 含义 lt \u003c le \u003c= gt \u003e ge \u003e= eq == ne != ez ==0，此时没有源操作数src2 nz !=0，此时没有源操作数src2 当不使用操作子码，而是使用下面方式运算：\nsrc \u003c src2，设置des寄存器为 -1。 src == src2，设置des寄存器为 0。 src \u003e src2，设置des寄存器为 -1。 3.4 条件赋值 条件赋值指令使用比较指令的结果，对另外 2 个源操作数进行选择，传递个目标操作数。\n指令格式如下所示： 助记符|操作码|目的操作数|源操作数|源操作数|源操作数|操作子码 —|—|—|—|—|—| | |9 bit| 5 bit| 5 bit| 5 bit| 5 bit| 3 bit sel-i32| |des|src|src2|cond sel-u32| |des|src|src2|cond sel-i64| |des|src|src2|cond sel-u64| |des|src|src2|cond sel-f32| |des|src|src2|cond sel-f64| |des|src|src2|cond\n当比较系列指令使用操作子码方式时：\ncond == 0 ：des = src cond != 0 ：des = src2 当比较系列指令不使用操作子码方式时，本系列指令要求使用操作子码进行判断：\n操作子码定义如下：\n助记符 操作码 含义 lt \u003c ：des = cond == -1 ? src : src2 le \u003c= ：des = cond \u003c 1 ? src : src2 gt \u003e ：des = cond == 1 ? src : src2 ge \u003e= ：des = cond \u003e -1 ? src : src2 eq == ：des = cond == 0 ? src : src2 ne != ：des = cond != 0 ? src : src2 3.5 赋值指令 此系列包括寄存器间赋值或类型转换。\n助记符 操作码 目的操作数 源操作数 源操作数 操作子码 9 bit 5 bit 5 bit 5 bit 8 bit mov des src 操作子码用于获取源操作数并转换到响应的类型。\n操作子码定义如下：\n助记符 操作码 含义 i8-i32 u8-i32 i8-i64 u8-u64 i16-i32 u16-i32 i16-i64 u16-i64 i32_i32 i32-i64 i32-f32 i32-f64 u32-u32 u32-u64 u32-f32 u32-f64 i64-i64 i64-f32 i64-f64 u64-u64 u64-f32 u64-f64 f32-i32 f32-u32 f32-i64 f32-u64 f32-f32 f32-f64 f64-i32 f64-u32 f64-i64 f64-u64 f64-f32 f64-f64 f32-bit-u32 位转换 u32-bit-f32 位转换 f64-bit-u64 位转换 u64-bit-f64 位转换 3.6 加载存储指令 此系列指令功能是从内存中读取、存储特定类型数据。\n助记符 操作码 目的操作数 源操作数 源操作数 操作子码 注释 9 bit 5 bit 5 bit 5 bit 8 bit load des base offset 从基址内存中获取数据 store des base offset gload des base offset 从全局内存中获取数据 gstore des base offset 操作子码定义如下：\n助记符 操作码 含义 i8 u8 i16 u16 i32 u32 i64 u64 f32 f64 3.7 出入栈指令 此系列指令用于将数据入栈，同时可以进行类型转换。 注意：入栈数据应当进行 32bit 对齐。以加快虚拟机执行速度数据\n助记符 操作码 目的操作数 源操作数 源操作数 操作子码 9 bit 5 bit 5 bit 5 bit 8 bit push des pop des 操作子码定义如下： 助记符 操作码 含义 — — — i8 u8 i16 u16 i32 u32 i64 u64 f32 f64 3.8 栈内存分配释放 此系列指令用于栈内存分配释放。 注意：立即数是无符号整数。\n助记符 操作码 目的操作数 立即数 注释 9 bit 5 bit 18 bit grown des imm 分配栈内存，将分配后的栈指针值传递到 des 寄存器 9 bit 23 bit 释放栈内存， shrunk imm 3.9 跳转指令 跳转的偏移量是无符号整数值； 相对于函数代码的起始地址； 偏移量是偏移的指令条数； 助记符 操作码 目的操作数 立即数 注释 9 bit 23 bit jmp imm 直接跳转 9 bit 5 bit 18 bit jmpx reg 偏移量在 reg 寄存器中 9 bit 5 bit 18 bit jtab reg imm reg 表示偏移量索引，imm表示偏移量数组中偏移数据条数，指令后面接 32 bit 对齐的偏移量数组 3.10 分支指令 此系列指令用于条件分支跳转。\n助记符 操作码 目的操作数 源操作数 源操作数 操作子码 偏移立即数 9 bit 5 bit 5 bit 5 bit 8 bit 32 bit jbr-i32 src src2 cond offset jbr-u32 src src2 cond offset jbr-i64 src src2 cond offset jbr-u64 src src2 cond offset jbr-f32 src src2 cond offset jbr-f64 src src2 cond offset 操作子码定义如下：\n助记符 操作码 含义 lt \u003c le \u003c= gt \u003e ge \u003e= eq == ne != ez ==0，此时没有源操作数src2 nz !=0，此时没有源操作数src2 3.11 函数指令 助记符 操作码 目的操作数 立即数 注释 9 bit 23 bit 32 bit call imm imm表示函数的偏移量或者是编号，看虚拟机的具体实现 9 bit 5 bit 18 bit callx reg reg 寄存器中保存函数的偏移量或者是编号，看虚拟机的具体实现 9 bit 23 bit ret 函数返回 4 寄存器与立即数–指令集 ",
    "description": "",
    "tags": null,
    "title": "3 基于栈和寄存器的指令集",
    "uri": "/compiler/7_instruction/3_mixedinsset/index.html"
  },
  {
    "content": "目录 1 词法分析 2 语法分析 3 语义分析 4 中间优化 5 目标生成 6 中间代码 7 指令集 8 语言定义 引言 编译原理是将文本字符流，通过一系列的分析、转换，最后生成确定的指令文件的数据分析转换技术。\r编译器是利用编译原理，将一种程序（源程序）翻译成另一种程序（目标程序）的计算机程序。业界也将编译器分为三个部分：前端、中端、后端。\n编译器所做的工作流程如下图所示。\n",
    "description": "",
    "tags": null,
    "title": "编译器设计与实现",
    "uri": "/compiler/index.html"
  },
  {
    "content": "节点模板类定义 template \u003ctypename Node\u003e class IListNode { Node *mNext; Node *mPrev; public: inline IListNode() : mNext(nullptr), mPrev(nullptr) { } // 初始化节点 inline void init() { mNext = nullptr, mPrev = nullptr; } // 获取后继节点 inline Node *getNext() { return mNext; } // 获取前驱节点 inline Node *getPrev() { return mPrev; }; // 设置后继节点 inline void setNext(Node *next) { mNext = next; } // 设置前驱节点 inline void setPrev(Node *prev) { mPrev = prev; }; // 设置节点 inline void setNode(Node *next, Node *prev) { mNext = next, mPrev = prev; } };链表模板类定义 template \u003ctypename Node\u003e class IList { IListNode\u003cNode\u003e mRoot; // 链表根节点 uint mCount; // 节点计数 public: // 链表初始化 inline IList() : mCount(0) { mRoot.setNode((Node *)\u0026mRoot, (Node *)\u0026mRoot); } // 初始链表 inline void initList() { mCount = 0, mRoot.setNode((Node *)\u0026mRoot, (Node *)\u0026mRoot); } // 获取根，只读 inline Node *getRoot() { return (Node *)\u0026mRoot; } // 获取节点计数 inline uint getCount() const { return mCount; } // 获取第一个节点 inline Node *getEntry() { Node *ret = mRoot.getNext(); /* if (ret == \u0026mRoot) ret = nullptr;*/ return ret; } inline Node *front() { return getEntry(); } // 获取最后一个节点 inline Node *getTail() { Node *ret = mRoot.getPrev(); /* if (ret == \u0026mRoot) ret = nullptr;*/ return ret; } inline Node *back() { return getTail(); } // 从头部插入 inline void insertEntry(Node *node) { Node *head = mRoot.getNext(); node-\u003esetPrev((Node *)\u0026mRoot); node-\u003esetNext(head); head-\u003esetPrev(node); mRoot.setNext(node); ++mCount; } // 从尾部插入 inline void insertTail(Node *node) { Node *tail = mRoot.getPrev(); node-\u003esetPrev(tail); node-\u003esetNext((Node *)\u0026mRoot); tail-\u003esetNext(node); mRoot.setPrev(node); ++mCount; } // 从iter前面插入 inline void insert(Node *iter, Node *node) { iter-\u003egetPrev()-\u003esetNext(node); node-\u003esetPrev(iter-\u003egetPrev()); node-\u003esetNext(iter); iter-\u003esetPrev(node); ++mCount; } // 移除节点 inline Node *remove(Node *entry) { // 根节点并不能移除 if ((Node *)\u0026mRoot == entry) return nullptr; Node *prev = entry-\u003egetPrev(); Node *next = entry-\u003egetNext(); prev-\u003esetNext(next); next-\u003esetPrev(prev); entry-\u003einit(); --mCount; return entry; } // 移除头部节点 inline Node *removeEntry() { return remove(mRoot.getNext()); } // 移除尾部节点 inline Node *removeTail() { return remove(mRoot.getPrev()); } };",
    "description": "",
    "tags": [
      "Cxx",
      "List"
    ],
    "title": "双向节点链表",
    "uri": "/struct/list/doublelinkedlist/index.html"
  },
  {
    "content": "1 序 语义分析就是分析语法树中所有的符号是否存在声明，从语义层次进一步规范程序所表达的含义。\n分析符号的含义和类型。 分析变量的位置偏移。 分析表达式的类型，并进行类型匹配。 2 目录 ",
    "description": "",
    "tags": null,
    "title": "3 语义分析",
    "uri": "/compiler/3_analysis/index.html"
  },
  {
    "content": "成员访问操作符 成员访问操作符的优先级最高。\n成员范文操作符 优先级 注解 . 0 成员访问 .? 0 带null检查的成员访问 一元操作符 一元操作符优先级一致，主要查看其声明的先后顺序。\n一元操作符 优先级 注解 ~ -10 按位取反 ! -10 逻辑取反 - -10 符号取反 + -10 取绝对值 ++ -10 自增 -- -10 自减 括号操作符 括号表达式中的括号操作符，用于提升表达式的优先级。\n括号操作符 优先级 注解 （） -20 括号操作符 二元操作符 在语法解析表达式中，二元表达式最复杂的。\n二元操作符 优先级 注解 * 乘运算操作符 / 除运算操作符 % 模运算操作符 + 加运算操作符 - 减运算操作符 \u003c 小于操作符 \u003c= 小于等于操作符 \u003e 大于于操作符 \u003e= 大于等于操作符 == 等于操作符 != 不等于操作符 \u0026\u0026 逻辑与操作符 || 逻辑或操作符 \u0026 位与操作符 ^ 位异或操作符 | 位或操作符 \u003c\u003c 左移操作符 \u003e\u003e 逻辑右移操作符 \u003e\u003e\u003e 算术右移操作符 三元操作符 三元操作符主要用于比较赋值、简单得比较分支操作。\n三元操作符 优先级 注解 ? : 赋值操作符 赋值类操作符的优先级一致。\n赋值操作符 优先级 注解 = 赋值操作符 *= 乘运算复合赋值操作符 /= 除运算复合赋值操作符 %= 模运算复合赋值操作符 += 加运算复合赋值操作符 -= 减运算复合赋值操作符 \u0026= 位与运算复合赋值操作符 = 位或运算复合赋值操作符 ^= 位异或运算复合赋值操作符 \u003c\u003c= 左移运算复合赋值操作符 \u003e\u003e= 逻辑右移运算复合赋值操作符 \u003e\u003e\u003e= 算术右移运算复合赋值操作符 ",
    "description": "",
    "tags": null,
    "title": "4 操作符",
    "uri": "/compiler/8_langdef/4_operator/index.html"
  },
  {
    "content": "待续\n",
    "description": "",
    "tags": null,
    "title": "4 顶层语法解析实现",
    "uri": "/compiler/2_parser/4_parserbase/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "4 中间优化",
    "uri": "/compiler/4_optimize/index.html"
  },
  {
    "content": "测试 ",
    "description": "",
    "tags": null,
    "title": "操作系统",
    "uri": "/os/index.html"
  },
  {
    "content": "待续\n",
    "description": "",
    "tags": null,
    "title": "5 解析表达式",
    "uri": "/compiler/2_parser/5_parserexp/index.html"
  },
  {
    "content": "基本类型 固定位宽类型 注解 位宽(bit) void 空，一般用于表示无返回值 — bool 布尔类型 8 flt32 32位单精度浮点 32 flt64 64位双精度浮点 32 int8 8位有符号整数 8 int16 8位有符号整数 16 int32 8位有符号整数 32 int64 8位有符号整数 64 uint8 8位无符号整数 8 uint16 16位无符号整数 16 uint32 32位无符号整数 32 uint64 64位无符号整数 64 char 字符 8 可变位宽类型的位宽由编译的目标CPU架构有关。\n可变位宽类型注解CPU32CPU64\rsint有符号整数 3264\ruint无符号整数 3264\ruintptr指针 3264\rcstring字符串指针 3264\r枚举类型 枚举定义只能是定义整数类的值，其占用的字节数、有无符号性，通过基类标识指定。\n如下所示：\nenum Color:uint32{ Red, Black, }结构体 结构体在airlang中是值类型，不会进入GC系统，除通过API分配独立的堆内存。\n一般用于构成类中的共同属性。\nstruct Vec2{ int32 x; int32 y; } struct Vec3 :Vec2{ int32 z; }联合体 union Int32{ int32 i32; struct{ int8 [4] v4; } }接口 interface IEvent{ void eat(); }类 class Parent{ int32 i32; void doing(){} } class Child :Parent [IEvent]{ int64 i64; void eat()@override{} }委托 entrust Func = void (int32,int64)@clang;",
    "description": "",
    "tags": null,
    "title": "5 类型系统",
    "uri": "/compiler/8_langdef/5_typesystem/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "5 目标生成",
    "uri": "/compiler/5_target/index.html"
  },
  {
    "content": " BMP 文件格式 ",
    "description": "",
    "tags": null,
    "title": "文件格式",
    "uri": "/format/index.html"
  },
  {
    "content": "待续\n",
    "description": "",
    "tags": null,
    "title": "6 解析声明",
    "uri": "/compiler/2_parser/6_parserdecl/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "6 中间代码",
    "uri": "/compiler/6_ir/index.html"
  },
  {
    "content": "待续\n",
    "description": "",
    "tags": null,
    "title": "7 解析声明续",
    "uri": "/compiler/2_parser/7_parserdecl2/index.html"
  },
  {
    "content": "1 序 指令集可分为两大类，真实硬件指令集和虚拟机指令集。\n真实硬件指令集又分为两类：\nCISC (复杂指令集)：CISC 以 X86 系列为代表，指令系统较为复杂，硬件实现也比较复杂。 RISC (精简指令集)：RISC 的指令系统较为精简，目的是降低硬件实现的复杂度，以 RISC-V 、ARM为代表。 虚拟机指令集可分为三种：\n基于栈的指令集：纯栈操作，所有的运算都基于栈，其中以 Java 字节码指令集为代表。 基于寄存器的指令集：纯寄存器操作，所有的运算基于寄存器，其中以安卓的 Dalvik 字节码指令集为代表。 基于栈和寄存器的指令集：混合式操作，类似于 RISC 指令集，但是又与真实硬件系统有差异。 2 目录 1 基于栈的指令集 2 基于寄存器的指令集 3 基于栈和寄存器的指令集 ",
    "description": "",
    "tags": null,
    "title": "7 指令集",
    "uri": "/compiler/7_instruction/index.html"
  },
  {
    "content": "air语言是C语法系的编程语言，提供面向对象、函数式、模板等高级语言功能。\n目录 1 语法定义 2 代码结构 3 关键字 4 操作符 5 类型系统 ",
    "description": "",
    "tags": null,
    "title": "8 语言定义",
    "uri": "/compiler/8_langdef/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": [
      "BMP",
      "Format"
    ],
    "title": "BMP 文件格式",
    "uri": "/format/bmp/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "标签 :: Align",
    "uri": "/tags/align/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "标签 :: Cxx",
    "uri": "/tags/cxx/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "标签 :: List",
    "uri": "/tags/list/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "标签",
    "uri": "/tags/index.html"
  },
  {
    "content": "目标 用于存储、展示、收集计算机技术相关的资料，同时用于展示个人项目或相关技术记录。\n归档 存在以下分类： 算法 数据结构 编译器设计与实现 操作系统 文件格式 ",
    "description": "",
    "tags": null,
    "title": "主页",
    "uri": "/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "标签 :: BMP",
    "uri": "/tags/bmp/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "类别",
    "uri": "/categories/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "标签 :: Format",
    "uri": "/tags/format/index.html"
  }
]
