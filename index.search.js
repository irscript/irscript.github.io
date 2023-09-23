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
    "content": "1 序 2 目录 1 ELF32 格式 2 ELF64 格式 ",
    "description": "",
    "tags": null,
    "title": "1 ELF 格式",
    "uri": "/format/2_program/1_elf/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "1 ELF32 格式",
    "uri": "/format/2_program/1_elf/1_elf32/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "1 RGBA",
    "uri": "/format/3_color/1_rgba/index.html"
  },
  {
    "content": "1 序 二进制文件的格式一般采用 ***文件头 + 核心内容*** 的结构。\r文件头：标识文件的基本信息，其设计方法基本一致。 核心内容：这部分是真正的文件数据内容。 2 目录 1 文件头 2 段节格式 3 TLV格式 ",
    "description": "",
    "tags": null,
    "title": "1 通用格式设计",
    "uri": "/format/1_general/index.html"
  },
  {
    "content": "\r描述了文件的整体信息，常见的字段有魔数、检验码、版本号、文件大小等。\r顾名思义，即是将文件的整体信息通常放在文件的开头。\n在少数情况下，也会将文件头放在文件的尾部，也就是‘文件尾’，但是一般还是叫做 文件头。\n1 魔数 魔数作为文件格式的标识，一般用于识别文件是否程序所能处理的文件。其值可以随意选取，主要看设计者自身的喜好。\r例如 zip 格式的魔数就是 “PK\\x03\\x04”,其中 PK 就是设计者 Philip Katz 的名字首字母。\n一般程序在分析文件时，会先判断魔数的值是否匹配，不匹配就表明文件格式不正确。\n需要注意的是，假如魔数正确，文件格式并非一定能够读取正确，还需要进一步判断。\n2 检验码 文件头通常还会有个检验码，用于检验文件是否完整并且没有经过修改的。这个检验码可以使用 crc, 可以使用 md5，也可以使用其它算法。\r这也是检查文件格式的正确性中的重要一步，因为即便是魔数相同，校验码所采用的算法不同，和校验码所作的位置不同，所计算的校验码，基本上是不一的，所以进一步就，能区分出文件格式是否正确。\n3 版本号 文件头通常还会包含版本号。版本号不同，就表明文件格式发生变化，可能变化很小，也可能变化很大；可能是某些字段的值在解释上发生变化，也可能是直接添加了一些结构。所以导致文件的读取方式可能会有所不同。\r版本号有时只是单独一个数字，不断往上递增。有时也会拆分成两个数字，为主版本号和次版本号。主版本号修改，通常表示文件格式发生大变动。而次版本号修改，通常只是表示添加了一些小功能。\n4 字节顺序 字节顺序在文件格式设计中至关重要。\r字节顺序分为大端字节序和小端字节序。不同的机器字节序有可能不同，设计文件格式时需要考虑文件用什么字节序保存数据的。\n不然有可能在这一台机器上生成的文件，传输到另一台机器上就打开失败了。\n5 基本结构 基本结构定义如下：\r```c++\rstruct FileHeader{\ruint8 mMagic[4]; //魔数\ruint8 mHash[16]; //检验码\ruint32 mEndian; //字节序\ruint32 mVersion; //文件版本\r...\r};\r```",
    "description": "",
    "tags": null,
    "title": "1 文件头",
    "uri": "/format/1_general/1_fileheader/index.html"
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
    "content": "Dalvik 字节码指令集的字节码指令集不支持无符号整数运算，因此参照 Dalvik 设计了以下指令集。\n基于纯寄存器的指令集，指令系统存在下列的要求：\n每条指令按照 16 bit 对齐。 寄存器的索引位宽有 4 bit、8 bit、16 bit。 最多支持 65536 个寄存器。 每个寄存器 32 bit。 64 bit寄存器由相邻的两个 32 bit 寄存器组合而成。 指令操作码位宽为 8 bit。 指令中可有子操作码，具体位宽看具体的指令格式。 32 bit 寄存器内可以存储 32 bit的整数、浮点数。 64 bit 寄存器内可以存储 64 bit的整数、浮点数。 位宽小于 32 位的值，需要进行扩展（零扩展、符号扩展）到 32 bit。 助记符中的 I 表示寄存器索引，后面的数字表示索引位宽 指令格式 总体格式：\n操作码 + [ 操作子码 ] + ( 操作数 )*\r操作子码可选。 操作数可以有多个。 寄存器位宽索引支持的寄存器数量：\n位宽 寄存器数量 索引范围 4 bit 16 [ 0, 15 ] 8 bit 256 [ 0, 255 ] 16 bit 65536 [ 0, 65535 ] 空指令 文本格式： nop\n助记符 操作码 对齐 注解 格式 8 bit 8bit 指令宽度：16 bit nop 0 空操作，用于对齐 常量赋值指令 文本格式： op des, imm 助记符 操作码 目的寄存器 立即数 注解 8 bit 4 bit 4 bit 4 bit 立即数，指令宽度：16 bit const-w32-I4-i4 des imm imm 为有符号整数，有符号扩展至 32 bit。 const-w64-I4-i4 des imm imm 为有符号整数，有符号扩展至 32 bit。 const-w32-I4-u4 des imm imm 为无符号整数，无符号扩展至 32 bit。 const-w64-I4-u4 des imm imm 为无符号整数，无符号扩展至 32 bit。 8 bit 8 bit 16 bit 16 bit 立即数，指令宽度：32 bit const-w32-I8-i16 des imm imm 为有符号整数，有符号扩展至 32 bit。 const-w64-I8-i16 des imm imm 为有符号整数，有符号扩展至 64 bit。 const-w32-I8-u16 des imm imm 为无符号整数，无符号扩展至 32 bit。 const-w64-I8-u16 des imm imm 为无符号整数，无符号扩展至 64 bit。 const-w32-I8-L16 des imm imm 为无符号整数。imm 存放在寄存器的低 16 bit，不改变高 16 bit。 const-w32-I8-H16 des imm imm 为无符号整数。imm 存放在寄存器的高 16 bit，不改变低 16 bit。 8 bit 8 bit 32 bit 32 bit 立即数，指令宽度：48 bit const-w32-I8 des imm 原样拷贝，支持32 bit 整数和浮点。 const-w64-I8-i32 des imm imm 为有符号整数，有符号扩展至 64 bit。 const-w64-I8-u32 des imm imm 为无符号整数，无符号扩展至 64 bit。 8 bit 8 bit 64 bit 64 bit 立即数，指令宽度：80 bit const-w64-I8 des imm 原样拷贝，支持64 bit整数和浮点。 文本格式：op.sub des,imm 助记符 操作码 操作子码 目的寄存器 立即数 注解 8 bit 8 bit 8 bit 8 bit 指令宽度：32 bit const-w32-I8 subop des imm imm 为无符号整数 操作子码定义 助记符 操作子码 注解 B0 imm存放在寄存器的第 1 个字节，不改变其他字节。 B1 imm存放在寄存器的第 2 个字节，不改变其他字节。 B2 imm存放在寄存器的第 3 个字节，不改变其他字节。 B3 imm存放在寄存器的第 4 个字节，不改变其他字节。 寄存器赋值指令 文本格式：op des,src\n文本格式：op des,src 助记符 操作码 目的寄存器 源寄存器 注解 8 bit 4 bit 4 bit 指令宽度：16 bit move-w32-I4 des src 32 位寄存器值传递 move-w64-I4 des src 64 位寄存器值传递 8 bit 8 bit 16 bit 指令宽度：32 bit move-w32-I8I16 des src 32 位寄存器值传递 move-w64-I8I16 des src 64 位寄存器值传递 文本格式：op.sub des,src 助记符 操作码 操作子码 目的寄存器 源寄存器 注解 8 bit 8 bit 8 bit 8 bit 指令宽度：32 bit mov-I8 sub des src 8 bit 8 bit 16 bit 16 bit 指令宽度：48 bit mov-I16 sub des src 操作子码定义 助记符含义：\n目标位宽-源数据获取转换位宽\ni:符号扩展。 u:零扩展。 只有目标位宽时，表示源位宽直接拷贝传递。 目标类型-源类型\n表示从源类型转换到目标类型 助记符 操作子码 注解 w32-B0-i8 0 获取寄存器的第 1 个字节，进行符号扩展到 32 位 w32-B0-u8 1 获取寄存器的第 1 个字节，进行零扩展到 32 位 w32-B1-i8 2 获取寄存器的第 2 个字节，进行符号扩展到 32 位 w32-B1-u8 3 获取寄存器的第 2 个字节，进行零扩展到 32 位 w32-B2-i8 4 获取寄存器的第 3 个字节，进行符号扩展到 32 位 w32-B2-u8 5 获取寄存器的第 3 个字节，进行零扩展到 32 位 w32-B3-i8 6 获取寄存器的第 4 个字节，进行符号扩展到 32 位 w32-B3-u8 7 获取寄存器的第 4 个字节，进行零扩展到 32 位 w32-L16-i16 8 获取寄存器的低 16 位，进行符号扩展到 32 位 w32-L16-u16 9 获取寄存器的低 16 位，进行零扩展到 32 位 w32-H16-i16 10 获取寄存器的高 16 位，进行符号扩展到 32 位 w32-H16-u16 11 获取寄存器的高 16 位，进行零扩展到 32 位 w32 12 32 位原值拷贝传递 w64-B0-i8 13 获取寄存器的第 1 个字节，进行符号扩展到 64 位 w64-B0-u8 14 获取寄存器的第 1 个字节，进行零扩展到 64 位 w64-B1-i8 15 获取寄存器的第 2 个字节，进行符号扩展到 64 位 w64-B1-u8 16 获取寄存器的第 2 个字节，进行零扩展到 64 位 w64-B2-i8 17 获取寄存器的第 3 个字节，进行符号扩展到 64 位 w64-B2-u8 18 获取寄存器的第 3 个字节，进行零扩展到 64 位 w64-B3-i8 19 获取寄存器的第 4 个字节，进行符号扩展到 64 位 w64-B3-u8 20 获取寄存器的第 4 个字节，进行零扩展到 64 位 w64-L16-i16 21 获取寄存器的低 16 位，进行符号扩展到 32 位 w64-L16-u16 22 获取寄存器的低 16 位，进行零扩展到 32 位 w64-H16-i16 23 获取寄存器的高 16 位，进行符号扩展到 32 位 w64-H16-u16 24 获取寄存器的高 16 位，进行零扩展到 32 位 w64-i32 25 获取寄存器的 32 位，进行符号扩展到 64 位 w64-u32 26 获取寄存器的 32 位，进行零扩展到 64 位 w64 27 64 位原值拷贝传递 i32-f32 28 32 位有符号整数转 32 位浮点数 i32-f64 29 32 位有符号整数转 64 位浮点数 u32-f32 30 32 位无符号整数转 32 位浮点数 u32-f64 31 32 位无符号整数转 64 位浮点数 i64-f32 32 64 位有符号整数转 32 位浮点数 i64-f64 33 64 位有符号整数转 32 位浮点数 u64-f32 34 64 位无符号整数转 32 位浮点数 u64-f64 35 64 位无符号整数转 64 位浮点数 f32-i32 36 32 位浮点数转 32 位有符号 f32-i64 37 32 位浮点数转 64 位有符号 f32-u32 38 32 位浮点数转 32 位无符号 f32-u64 39 32 位浮点数转 64 位无符号 f32-f64 49 32 位浮点数转 64 位浮点数 f64-i32 41 64 位浮点数转 32 位有符号 f64-i64 42 64 位浮点数转 64 位有符号 f64-u32 43 64 位浮点数转 32 位无符号 f64-u64 44 64 位浮点数转 64 位无符号 f64-f32 45 64 位浮点数转 32 位浮点数 数学运算指令 有二地址、三地址分类。 每类的主操作码不一致。 三地址操作 三地址文本格式： op.sub des,src,src2\n助记符 操作码 操作子码 目的寄存器 源寄存器 源操作数 注解 8 bit 8 bit 8 bit 4 bit 4 bit 指令宽度：32 bit math-I4 sub des src src2 8 bit 8 bit 16 bit 8 bit 8 bit 指令宽度：48 bit math-I16I8 sub des src src2 8 bit 8 bit 16 bit 16 bit 16 bit 指令宽度：64 bit math-I16 sub des src src2 子码定义 助记符 操作子码 注解 add-int32 0 32 位有符号 加 + sub-int32 1 32 位有符号 减 - mul-int32 2 32 位有符号 乘 * div-int32 3 32 位有符号 除 / mod-int32 4 32 位有符号 模 % add-uint32 5 32 位无符号 加 + sub-uint32 6 32 位无符号 减 - mul-uint32 7 32 位无符号 乘 * div-uint32 8 32 位无符号 除 / mod-uint32 9 32 位无符号 模 % add-int64 10 64 位有符号 加 + sub-int64 11 64 位有符号 减 - mul-int64 12 64 位有符号 乘 * div-int64 13 64 位有符号 除 / mod-int64 14 64 位有符号 add-uint64 15 64 位无符号 加 + sub-uint64 16 64 位无符号 减 - mul-uint64 17 64 位无符号 乘 * div-uint64 18 64 位无符号 除 / mod-uint64 19 64 位无符号 模 % add-flt32 20 32 位浮点 加 + sub-flt32 21 32 位浮点 减 - mul-flt32 22 32 位浮点 乘 * div-flt32 23 32 位浮点 除 / mod-flt32 24 32 位浮点 模 % add-flt64 25 64 位浮点 加 + sub-flt64 26 64 位浮点 减 - mul-flt64 27 64 位浮点 乘 * div-flt64 28 64 位浮点 除 / mod-flt64 29 64 位浮点 模 % sl-w32 30 32 位 左移 sr-w32 31 32 位 右移 sra-w32 32 32 位 算术右移 rol-w32 33 32 位 循环左移 ror-w32 34 32 位 循环右移 and-w32 35 32 位 位与 or-w32 36 32 位 位或 xor-w32 37 32 位 位异或 sl-w64 38 64 位 左移 sr-w64 39 64 位 右移 sra-w64 40 64 位 算术右移 rol-w32 41 64 位 循环左移 ror-w32 42 64 位 循环右移 and-w64 43 64 位 位与 or-w64 44 64 位 位或 xor-w64 45 64 位 位异或 andl-w32 46 32 位 逻辑与 orl-w32 47 32 位 逻辑或 cmp-int32 48 src \u003c src2 : des=-1 cmp-uint32 49 src == src2 : des=0 cmp-int64 50 src \u003e src2 : des=1 cmp-uint64 51 cmp-flt32 52 cmp-flt64 53 二地址操作 二地址文本格式： op.sub des,src\n助记符 操作码 操作子码 目的寄存器 源寄存器 源操作数 注解 8 bit 8 bit 8 bit 8 bit 指令宽度：32 bit math-I8 sub des src 8 bit 8 bit 16 bit 16 bit 指令宽度：48 bit math-I16 sub des src 子码定义 助记符 操作子码 注解 not-w32 0 32 位 按位取反 not-w64 1 64 位 按位取反 inv-w32 2 32 位 逻辑取反 inv-w64 3 64 位 逻辑取反 neg-int32 4 32 位 符号取反 neg-int64 5 64 位 符号取反 neg-flt32 6 32 位 符号取反 neg-flt64 7 64 位 符号取反 abs-int32 8 32 位 取绝对值 abs-int64 9 64 位 取绝对值 abs-flt32 10 32 位 取绝对值 abs-flt64 11 64 位 取绝对值 sin-flt32 12 三角函数 cos-flt32 13 三角函数 tan-flt32 14 三角函数 asin-flt32 15 三角函数 acos-flt32 16 三角函数 atan-flt32 17 三角函数 sin-flt64 18 三角函数 cos-flt64 19 三角函数 tan-flt64 20 三角函数 asin-flt64 21 三角函数 acos-flt64 22 三角函数 atan-flt64 23 三角函数 跳转指令 直接跳转指令 文本格式： goto imm\n助记符 操作码 对齐 立即数 注解 8 bit 8 bit 指令宽度： 16 bit goto8 imm 8 bit有符号偏移 8 bit 8 bit 16 bit 指令宽度： 32 bit goto16 imm 8 bit 8 bit 32 bit 指令宽度： 48 bit goto32 imm 分支跳转指令 文本格式 jbr src,src2,imm\rjbr src,imm\r类型编码：标识操作数的类型。 操作子码：标识比较方法。 和 0 比较时，无源操作数 src2。 助记符 操作码 操作子码 类型码 源操作数 源操作数 立即数 注解 8 bit 4 bit 4 bit 8 bit 8 bit 16 bit 指令宽度： 32 bit 8 bit 8 bit 32 bit 指令宽度： 32 bit 16 bit 16 bit 16 bit 指令宽度： 32 bit 16 bit 16 bit 32 bit 指令宽度： 32 bit src src2 imm 操作子码 助记符 操作子码 注解 eq 0 if( src == src2 ) goto imm ne 1 if( src != src2 ) goto imm lt 2 if( src \u003c src2 ) goto imm le 3 if( src \u003c= src2 ) goto imm gt 4 if( src \u003e src2 ) goto imm ge 5 if( src \u003e= src2 ) goto imm eqz 6 if( src == 0 ) goto imm nez 7 if( src != 0 ) goto imm ltz 8 if( src \u003c 0 ) goto imm lez 9 if( src \u003c= 0 ) goto imm gtz 10 if( src \u003e 0 ) goto imm gez 11 if( src \u003e= 0 ) goto imm 注意： 和 0 比较时，无源操作数 src2。\n类型码 助记符 操作子码 注解 int32 0 32 位有符号比较 uint32 1 32 位无符号比较 int64 2 64 位有符号比较 uint64 3 64 位无符号比较 flt32 4 32 位浮点数比较 flt64 5 64 位浮点数比较 返回指令 文本格式： op src op imm\n助记符 操作码 操作子码 立即数码 源操作数 注解 8 bit 8 bit 指令宽度： 16 bit return-void 无参数返回 return-w32-I8 返回 32 bit 值 return-w64-I8 返回 64 bit 值 8 bit 4 bit 4 bit 16/32/64 bit 操作子码 助记符 操作子码 注解 I16 0 寄存器索引16位 int32 1 立即数转换到32位有符号整数 uint32 2 立即数转换到32位有符号整数 int64 3 立即数转换到32位有符号整数 uint64 4 立即数转换到32位有符号整数 flt32 5 立即数转换到32位有符号整数 flt64 6 立即数转换到32位有符号整数 立即数码 助记符 操作子码 注解 B16 0 16 位立即数 B32 1 32 位立即数 B64 2 64 位立即数 函数调用指令 不固定参数调用 文本格式：op argcnt, arg,arg2,…,func\n助记符 操作码 参数个数 参数寄存器 函数 注解 8 bit 8 bit 16 bit 32 bit invoke-virtual-nofix argcnt arg… func 调用虚函数 invoke-direct-nofix argcnt arg… func 直接调用函数 invoke-static-nofix argcnt arg… func 调用静态函数 invoke-interface-nofix argcnt arg… func 调用接口函数 invoke-native-nofix argcnt arg… func 调用C语言函数 范围参数调用 文本格式：op argcnt,start, end,func\n助记符 操作码 参数个数 起始寄存器 结束寄存器索引 函数 注解 8 bit 8 bit 16 bit 16 bit 32 bit invoke-virtual-range argcnt arg… func 调用虚函数 invoke-direct-range argcnt arg… func 直接调用函数 invoke-static-range argcnt arg… func 调用静态函数 invoke-interface-range argcnt arg… func 调用接口函数 invoke-native-range argcnt arg… func 调用C语言函数 获取返回值指令 文本格式：op des\n助记符 操作码 对齐 源寄存器 注解 8 bit 8 bit 指令宽度： 16 bit get-result-w32-I8 des 获取32位返回值 get-result-w64-I8 des 获取64位返回值 get-result-obj-I8 des 获取对象返回值 8 bit 8 bit 16 bit 指令宽度： 32 bit get-result-w32-I16 des 获取32位返回值 get-result-w64-I16 des 获取64位返回值 get-result-obj-I16 des 获取对象返回值 异常处理指令 文本格式：op des\n助记符 操作码 对齐 源寄存器 注解 8 bit 8 bit 指令宽度： 16 bit get-exception-I8 des 获取异常对象 throw-I8 src 抛出异常对象 8 bit 8 bit 16 bit 指令宽度： 32 bit get-exception-I16 des 获取异常对象 throw-I16 src 抛出异常对象 ",
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
    "content": "",
    "description": "",
    "tags": null,
    "title": "2 ELF64 格式",
    "uri": "/format/2_program/1_elf/2_elf64/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "2 HSL/HSV",
    "uri": "/format/3_color/2_hsl/index.html"
  },
  {
    "content": "1 序 2 目录 1 ELF 格式 1 ELF32 格式 2 ELF64 格式 ",
    "description": "",
    "tags": null,
    "title": "2 程序格式",
    "uri": "/format/2_program/index.html"
  },
  {
    "content": "分段(或叫分节，后续默认叫法为分段)的二进制文件格式是比较常见的，比如编译器 GCC 输出的目标文件一般为 ELF 的分段文件。\n1 整体结构 这类文件一般采用 文件头 + 分段 的结构：\nfile header section 0\rsection 1\r....\rsection N\r文件头设计方法在 序言 中介绍，本章节主要描述分段式存储数据的方法。\n2 分段方法 一般有两种结构：\n分散式：在分区的头部的描述分段的大小等信息。 段表式：存在统一的结构描述分段的大小、相对偏移等信息。 分散式 分散式分结构在分区的头部的描述分段的大小等信息，然后各个分段首尾相连的，分段写入。\n分段的每一个段的结构通常是：\ntag + length\rsection data\rtag 和 length 合起来是分区头部，描述分段中的数据标识，后面紧跟着体数据。\ntag 一般是一个整数，用来标识分区的类型。不同的分区用不同的 tag 值表示，不同的分区种类可以使用不同的读取方式。\n整体结构如下：\nfile header section 0\rtag //section 0 的标识\rlength //section 0 的数据长度\rdata[] //section 0 的数据\rsection 1\r....\rsection N\r段表式 段表式的结构是有一个描述分段信息的段表，后面存储各个分区的数据。\n主要优点就是，可以通过段描述表(简称段表)快速的访问分段的内容，其格式如下。\nsection table\rsection 0\rsection 1\r....\rsection N\r段表一般描述分段的类型、数据长度、相对偏移等，结构如下。\nkind\rlength\roffset\rC 语言定义如下：\nstruct SegTabItem{ uint32 kind; //类型 uint32 length; //数据长度 uint32 offset; //相对偏移 };整体结构如下：\nfile header section table\rkind //section 0 的类型\rlength //section 0 的数据长度\roffset //section 0 的相对偏移\rkind //section 1 的类型\rlength //section 1 的数据长度\roffset //section 1 的相对偏移\r...\rkind //section N 的类型\rlength //section N 的数据长度\roffset //section N 的相对偏移\rsection 0\rsection 1\r....\rsection N ",
    "description": "",
    "tags": null,
    "title": "2 段节格式",
    "uri": "/format/1_general/2_segmentformat/index.html"
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
    "content": "本章节描述的是作者按照 RISC 指令系统设计的虚拟机指令集。\n其类似与硬件指令集，可作为编译器后端指令系统目标，用于提供类似硬件指令系统环境，避免编译原理初学者陷入对硬件指令系统不了解的深渊。 降低学习难度，提高学习效率。\n这类指令的主要特点如下：\n1 寄存器的数量固定； 2 指令所操作的寄存器数量固定； 3 指令的含义简单； 1 寄存器 虚拟机的寄存器分为三种：\n1 整数寄存器：主要用于整数运算，位宽为 64 bit，根据指令的含义可选择 32 bit 和 64 bit 运算模式。 2 浮点寄存器：主要用于浮点数运算，位宽为 64 bit，和通用寄存器一致，可选择位宽模式。 3 系统寄存器：对用户不可见，与虚拟机运行系统相关，对其进行操作隐藏在相关指令的实现细节中。 4 根据指令格式，整数寄存器、浮点寄存器最多可以有32个。 2 指令格式 每条指令是 32bit 大小对齐的，其中最低 9bit 是操作码，其余23bit作为操作数或者操作码的补充。如下表所示：\n操作码 操作数 9 bit 23 bit 2.1 格式1 操作码 操作数 9 bit 23 bit 2.2 格式2 多数指令使用此格式。\n操作码 目的操作数 源操作数 源操作数 操作子码 9 bit 5 bit 5 bit 5 bit 8 bit 2.3 格式3 该格式主要用于比较指令后的三元选择赋值操作。\n操作码 目的操作数 源操作数 源操作数 源操作数 操作子码 9 bit 5 bit 5 bit 5 bit 5 bit 3 bit 2.4 格式4 当指令中需要使用立即数时，且在指令中没有足够的空间可以存储时，可以使用指令后跟32bit对齐的立即数操作数。\n32bit立即数：32bit 指令跟 1 个 32bit 立即数，虚拟机解析执行时，按照指令表达的语义参与运算。 64bit立即数：32bit 指令跟 2 个 32bit 立即数，虚拟机解析执行时，按照指令表达的语义，组合成 64bit，后参与运算。 其他位宽的立即数类似。 格式如下所示：\n指令 立即数 1 立即数 2 … 立即数 n 32 bit 32 bit 32 bit … 32 bit 3 寄存器与寄存器—指令集 3.1 空指令 空指令一般用于对齐，在本指令集中没有特殊含义，执行空操作。\n格式如下：\n助记符 操作码 操作数 9 bit 23 bit Nop 0 0 3.2 算术运算 算术运算包含 +、-、*、/、%，支持的运算类型有 int32、uint32、int64、uint64、flt32、flt64。\n文本格式： op des,src,src2 指令含义：des = src op src2 子操作码：可以用于将运算结果进行截断、扩展。 助记符后缀的数字(32、64)标识指令运算使用的寄存器位宽。 助记符后缀的 i 表示进行有符号运算。 助记符后缀的 u 表示进行无符号运算。 助记符后缀的 f 表示进行有符号运算。 指令格式如下所示：\n助记符 操作码 目的操作数 源操作数 源操作数 操作子码 9 bit 5 bit 5 bit 5 bit 8 bit add-i32 des src src2 sub-i32 des src src2 mul-i32 des src src2 div-i32 des src src2 mod-i32 des src src2 add-u32 des src src2 sub-u32 des src src2 mul-u32 des src src2 div-u32 des src src2 mod-u32 des src src2 add-i64 des src src2 sub-i64 des src src2 mul-i64 des src src2 div-i64 des src src2 mod-i64 des src src2 add-u64 des src src2 sub-u64 des src src2 mul-u64 des src src2 div-u64 des src src2 mod-u64 des src src2 add-f32 des src src2 sub-f32 des src src2 mul-f32 des src src2 div-f32 des src src2 add-f64 des src src2 sub-f64 des src src2 mul-f64 des src src2 div-f64 des src src2 3.2 位运算 位运算包括位相关的与、或、非、异或、移位、取反等运算。\n支持的运算类型有 uint32、uint64。\n文本格式： op des,src,src2 指令含义：des = src op src2 子操作码：可以用于将运算结果进行截断、扩展。 i32：表示进行 32bit 的位运算。 i64：表示进行 64bit 的位运算。 位运算都是看作无符号运算。 指令格式如下所示：\n助记符 操作码 目的操作数 源操作数 源操作数 操作子码 9 bit 5 bit 5 bit 5 bit 8 bit sl-i32 des src src2 sr-i32 des src src2 sra-i32 des src src2 and-i32 des src src2 or-i32 des src src2 xor-i32 des src src2 andn-i32 des src src2 orn-i32 des src src2 xorn-i32 des src src2 not-i32 des src src2 sl-i64 des src src2 sr-i64 des src src2 sra-i64 des src src2 and-i64 des src src2 or-i64 des src src2 xor-i64 des src src2 andn-i64 des src src2 orn-i64 des src src2 xorn-i64 des src src2 not-i64 des src src2 3.3 逻辑比较 逻辑比较运算包括：\u003c、\u003e、\u003c=、\u003e=、==、!=、 ==0、！=0. 支持的运算类型有 int32、uint32、int64、uint64、flt32\\flt64。\n文本格式： op des,src,src2 指令含义：des = src op src2 子操作码：可以用于标识比较的方法。 比较的结果，存储在整数寄存器中，且使用位宽 64 bit，即des是整数寄存器。 指令格式如下所示：\n助记符 操作码 目的操作数 源操作数 源操作数 操作子码 9 bit 5 bit 5 bit 5 bit 8 bit cmp-i32 des src src2 cmp-u32 des src src2 cmp-i64 des src src2 cmp-u64 des src src2 cmp-f32 des src src2 cmp-f64 des src src2 操作子码定义如下：\n助记符 操作码 含义 lt \u003c le \u003c= gt \u003e ge \u003e= eq == ne != ez ==0，此时没有源操作数src2 nz !=0，此时没有源操作数src2 当不使用操作子码，而是使用下面方式运算：\nsrc \u003c src2，设置des寄存器为 -1。 src == src2，设置des寄存器为 0。 src \u003e src2，设置des寄存器为 -1。 3.4 条件赋值 条件赋值指令使用比较指令的结果，对另外 2 个源操作数进行选择，传递个目标操作数。\n指令格式如下所示：\n助记符 操作码 目的操作数 源操作数 源操作数 源操作数 操作子码 9 bit 5 bit 5 bit 5 bit 5 bit 3 bit sel-i32 des src src2 cond sel-u32 des src src2 cond sel-i64 des src src2 cond sel-u64 des src src2 cond sel-f32 des src src2 cond sel-f64 des src src2 cond 当比较系列指令使用操作子码方式时：\ncond == 0 ：des = src cond != 0 ：des = src2 当比较系列指令不使用操作子码方式时，本系列指令要求使用操作子码进行判断：\n操作子码定义如下：\n助记符 操作码 含义 lt \u003c ：des = cond == -1 ? src : src2 le \u003c= ：des = cond \u003c 1 ? src : src2 gt \u003e ：des = cond == 1 ? src : src2 ge \u003e= ：des = cond \u003e -1 ? src : src2 eq == ：des = cond == 0 ? src : src2 ne != ：des = cond != 0 ? src : src2 3.5 赋值指令 此系列包括寄存器间赋值或类型转换。\n助记符 操作码 目的操作数 源操作数 源操作数 操作子码 9 bit 5 bit 5 bit 5 bit 8 bit mov des src 操作子码用于获取源操作数并转换到响应的类型。\n操作子码定义如下：\n助记符 操作码 含义 i8-i32 u8-i32 i8-i64 u8-u64 i16-i32 u16-i32 i16-i64 u16-i64 i32_i32 i32-i64 i32-f32 i32-f64 u32-u32 u32-u64 u32-f32 u32-f64 i64-i64 i64-f32 i64-f64 u64-u64 u64-f32 u64-f64 f32-i32 f32-u32 f32-i64 f32-u64 f32-f32 f32-f64 f64-i32 f64-u32 f64-i64 f64-u64 f64-f32 f64-f64 f32-bit-u32 位转换 u32-bit-f32 位转换 f64-bit-u64 位转换 u64-bit-f64 位转换 3.6 加载存储指令 此系列指令功能是从内存中读取、存储特定类型数据。\n助记符 操作码 目的操作数 源操作数 源操作数 操作子码 注释 9 bit 5 bit 5 bit 5 bit 8 bit load des base offset 从基址内存中获取数据 store des base offset gload des base offset 从全局内存中获取数据 gstore des base offset 操作子码定义如下：\n助记符 操作码 含义 i8 u8 i16 u16 i32 u32 i64 u64 f32 f64 3.7 出入栈指令 此系列指令用于将数据入栈，同时可以进行类型转换。 注意：入栈数据应当进行 32bit 对齐。以加快虚拟机执行速度数据\n助记符 操作码 目的操作数 源操作数 源操作数 操作子码 9 bit 5 bit 5 bit 5 bit 8 bit push des pop des 操作子码定义如下： 助记符 操作码 含义 — — — i8 u8 i16 u16 i32 u32 i64 u64 f32 f64 3.8 栈内存分配释放 此系列指令用于栈内存分配释放。 注意：立即数是无符号整数。\n助记符 操作码 目的操作数 立即数 注释 9 bit 5 bit 18 bit grown des imm 分配栈内存，将分配后的栈指针值传递到 des 寄存器 9 bit 23 bit 释放栈内存， shrunk imm 3.9 跳转指令 跳转的偏移量是无符号整数值； 相对于函数代码的起始地址； 偏移量是偏移的指令条数； 助记符 操作码 目的操作数 立即数 注释 9 bit 23 bit jmp imm 直接跳转 9 bit 5 bit 18 bit jmpx reg 偏移量在 reg 寄存器中 9 bit 5 bit 18 bit jtab reg imm reg 表示偏移量索引，imm表示偏移量数组中偏移数据条数，指令后面接 32 bit 对齐的偏移量数组 3.10 分支指令 此系列指令用于条件分支跳转。\n助记符 操作码 目的操作数 源操作数 源操作数 操作子码 偏移立即数 9 bit 5 bit 5 bit 5 bit 8 bit 32 bit jbr-i32 src src2 cond offset jbr-u32 src src2 cond offset jbr-i64 src src2 cond offset jbr-u64 src src2 cond offset jbr-f32 src src2 cond offset jbr-f64 src src2 cond offset 操作子码定义如下：\n助记符 操作码 含义 lt \u003c le \u003c= gt \u003e ge \u003e= eq == ne != ez ==0，此时没有源操作数src2 nz !=0，此时没有源操作数src2 3.11 函数指令 助记符 操作码 目的操作数 立即数 注释 9 bit 23 bit 32 bit call imm imm表示函数的偏移量或者是编号，看虚拟机的具体实现 9 bit 5 bit 18 bit callx reg reg 寄存器中保存函数的偏移量或者是编号，看虚拟机的具体实现 9 bit 23 bit ret 函数返回 4 寄存器与立即数–指令集 待续\n",
    "description": "",
    "tags": null,
    "title": "3 基于栈和寄存器的指令集",
    "uri": "/compiler/7_instruction/3_mixedinsset/index.html"
  },
  {
    "content": "目录 1 词法分析 2 语法分析 3 语义分析 4 中间优化 5 目标生成 6 中间代码 7 指令集 8 语言定义 9 字节码文件格式 10 虚拟机设计与实现 引言 编译原理是将文本字符流，通过一系列的分析、转换，最后生成确定的指令文件的数据分析转换技术。\r编译器是利用编译原理，将一种程序（源程序）翻译成另一种程序（目标程序）的计算机程序。业界也将编译器分为三个部分：前端、中端、后端。\n编译器所做的工作流程如下图所示。\n",
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
    "content": "1 简介 TLV 是一种可变的格式，由三个域构成：标识域（Tag）+长度域（Length）+值域（Value），简称TLV格式。\n其中：\nT 可以理解为 Tag 或 Type ，用于标识标签或者编码格式信息； L 定义数值的长度； V 表示实际的数值。 T 和 L 的长度固定，一般是2或4个字节，V 的长度由 Length 指定。\nT 和 L 一般都是整数值。 V 可以存储整数、浮点、字符串、字节串，其类型是由格式定义者根据 T 的不同值，指定不同的类型。 2 基本结构 data 0\rT = 1\rL = 1\rV = 1\rdata 1\rT = 1\rL = 1\rV = 2\r...\rdata N\rT = 1\rL = 1\rV = n\r当然V中的数据也是可以嵌套,至于嵌套几层看设计者的规定的。\n结构如下：\ndata 0\rT = 1\rL = 3\rV =[\rdata x\rT = 1\rL = 1\rV = 1\r]\rdata 1\rT = 1\rL = 1\rV = 2\r...\rdata N\rT = 1\rL = 1\rV = n ",
    "description": "",
    "tags": null,
    "title": "3 TLV格式",
    "uri": "/format/1_general/3_tlvformat/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "3 YUV",
    "uri": "/format/3_color/3_yuv/index.html"
  },
  {
    "content": "1 序 颜色常用颜色空间来表示。颜色空间是用一种数学方法形象化表示颜色，人们用它来指定和产生颜色。例如，\n对于人来说，我们可以通过色调、饱和度和明度来定义颜色； 对于显示设备来说，人们使用红、绿和蓝磷光体的发光量来描述颜色； 对于打印或者印刷设备来说，人们使用青色、品红色、黄色和黑色的反射和吸收来产生指定的颜色。 颜色空间有设备相关和设备无关之分。\n设备相关的颜色空间是指颜色空间指定生成的颜色与生成颜色的设备有关。例如，RGB颜色空间是与显示系统相关的颜色空间，计算机显示器使用RGB来显示颜色，用像素值(例如，R＝250,G＝123,B＝23)生成的颜色将随显示器的亮度和对比度的改变而改变。\n设备无关的颜色空间是指颜色空间指定生成的颜色与生成颜色的设备无关，例如，CIE Lab*颜色空间就是设备无关的颜色空间，它构建在HSV(hue, saturation and value)颜色空间的基础上，用该空间指定的颜色无论在什么设备上生成的颜色都相同。\n2 目录 1 RGBA 2 HSL/HSV 3 YUV 4 XYZ 5 LAB 6 CMYK ",
    "description": "",
    "tags": null,
    "title": "3 颜色格式",
    "uri": "/format/3_color/index.html"
  },
  {
    "content": "1 序 语义分析就是分析语法树中所有的符号是否存在声明，从语义层次进一步规范程序所表达的含义。\n分析符号的含义和类型。 分析变量的位置偏移。 分析表达式的类型，并进行类型匹配。 2 目录 ",
    "description": "",
    "tags": null,
    "title": "3 语义分析",
    "uri": "/compiler/3_analysis/index.html"
  },
  {
    "content": "成员访问操作符 成员访问操作符的优先级最高。\n成员访问操作符 优先级 注解 . 0 成员访问 .? 0 带null检查的成员访问 一元操作符 一元操作符优先级一致，主要查看其声明的先后顺序。\n一元操作符 优先级 注解 ~ -10 按位取反 ! -10 逻辑取反 - -10 符号取反 + -10 取绝对值 ++ -10 自增 -- -10 自减 二元操作符 在语法解析表达式中，二元表达式最复杂的。\n二元操作符 优先级 注解 * -20 乘运算操作符 / -20 除运算操作符 % -20 模运算操作符 + -30 加运算操作符 - -30 减运算操作符 \u003c\u003c -40 左移操作符 \u003e\u003e -40 逻辑右移操作符 \u003e\u003e\u003e -40 算术右移操作符 \u003c -50 小于操作符 \u003c= -50 小于等于操作符 \u003e -50 大于于操作符 \u003e= -50 大于等于操作符 == -60 等于操作符 != -60 不等于操作符 \u0026 -70 位与操作符 ^ -71 位异或操作符 | -72 位或操作符 \u0026\u0026 -80 逻辑与操作符 || -81 逻辑或操作符 三元操作符 三元操作符主要用于比较赋值、简单的比较分支操作。\n三元操作符 优先级 注解 ? : -90 赋值操作符 赋值类操作符的优先级一致，优先级最低。\n赋值操作符 优先级 注解 = -100 赋值操作符 *= -100 乘运算复合赋值操作符 /= -100 除运算复合赋值操作符 %= -100 模运算复合赋值操作符 += -100 加运算复合赋值操作符 -= -100 减运算复合赋值操作符 \u0026= -100 位与运算复合赋值操作符 = -100 位或运算复合赋值操作符 ^= -100 位异或运算复合赋值操作符 ~= -100 位取反运算复合赋值操作符 \u003c\u003c= -100 左移运算复合赋值操作符 \u003e\u003e= -100 逻辑右移运算复合赋值操作符 \u003e\u003e\u003e= -100 算术右移运算复合赋值操作符 其他操作符 括号表达式中的括号操作符，用于提升表达式的优先级，在算符优先解析算法，该系列是作为基本表达式进行解析的。\n括号操作符 优先级 注解 （） -10 括号操作符 [] -10 数组下标 cast -10 静态类型转换 dyn_cast -10 动态类型转换 () -10 函数调用 ",
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
    "title": "4 XYZ",
    "uri": "/format/3_color/4_xyz/index.html"
  },
  {
    "content": "1 序 2 目录 ",
    "description": "",
    "tags": null,
    "title": "4 压缩格式",
    "uri": "/format/4_compress/index.html"
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
    "content": "基本类型 固定位宽类型 注解 位宽(bit) void 空，一般用于表示无返回值 — bool 布尔类型 8 flt32 32位单精度浮点 32 flt64 64位双精度浮点 32 int8 8位有符号整数 8 int16 8位有符号整数 16 int32 8位有符号整数 32 int64 8位有符号整数 64 uint8 8位无符号整数 8 uint16 16位无符号整数 16 uint32 32位无符号整数 32 uint64 64位无符号整数 64 char 字符 8 可变位宽类型的位宽由编译的目标CPU架构有关。\n可变位宽类型注解CPU32CPU64\rsint有符号整数 3264\ruint无符号整数 3264\ruintptr指针 3264\rcstring字符串指针 3264\r枚举类型 枚举定义只能是定义整数类的值，其占用的字节数、有无符号性，通过基类标识指定。\n如下所示：\nenum Color:uint32{ Red, Black, }结构体 结构体在airlang中是值类型，不会进入GC系统，除通过API分配独立的堆内存。\n一般用于构成类中的共同属性。\nstruct Vec2{ int32 x; int32 y; } struct Vec3 :Vec2{ int32 z; }联合体 union Int32{ int32 i32; struct{ int8 [4] v4; } }接口 interface IEvent{ void eat(); }类 class Parent{ int32 i32; void doing(){} } class Child :Parent \u003cIEvent\u003e{ int64 i64; void eat()@override{} }委托 entrust Func = void (int32,int64)@clang;",
    "description": "",
    "tags": null,
    "title": "5 类型系统",
    "uri": "/compiler/8_langdef/5_typesystem/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "5 LAB",
    "uri": "/format/3_color/5_lab/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "5 目标生成",
    "uri": "/compiler/5_target/index.html"
  },
  {
    "content": "1 序 2 目录 ",
    "description": "",
    "tags": null,
    "title": "5 图片格式",
    "uri": "/format/5_picture/index.html"
  },
  {
    "content": "1 序 本篇章收集一些文件的详细格式格式，为程序开发提供参考。\n2 目录 1 通用格式设计 1 文件头 2 段节格式 3 TLV格式 2 程序格式 1 ELF 格式 1 ELF32 格式 2 ELF64 格式 3 颜色格式 1 RGBA 2 HSL/HSV 3 YUV 4 XYZ 5 LAB 6 CMYK 4 压缩格式 5 图片格式 6 视频格式 7 音频格式 8 模型3D ",
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
    "title": "6 CMYK",
    "uri": "/format/3_color/6_cmyk/index.html"
  },
  {
    "content": "1 序 2 目录 ",
    "description": "",
    "tags": null,
    "title": "6 视频格式",
    "uri": "/format/6_video/index.html"
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
    "content": "1 序 指令集可分为两大类，真实硬件指令集和虚拟机指令集。\n真实硬件指令集又分为两类：\nCISC (复杂指令集)：CISC 以 X86 系列为代表，指令系统较为复杂，硬件实现也比较复杂。 RISC (精简指令集)：RISC 的指令系统较为精简，目的是降低硬件实现的复杂度，以 RISC-V 、ARM为代表。 虚拟机指令集可分为三种：\n基于栈的指令集：纯栈操作，所有的运算都基于栈，其中以 Java 字节码指令集为代表。 基于寄存器的指令集：纯寄存器操作，所有的运算基于寄存器，其中以安卓的 Dalvik 字节码指令集为代表。 基于栈和寄存器的指令集：混合式操作，类似于 RISC 指令集，但是又与真实硬件系统有差异。 虚拟机的指令与设计的字节码保存文件存在较强相关性，所以要真正理解虚拟机指令，还需要理解字节码文件的存储格式。\n2 目录 1 基于栈的指令集 2 基于寄存器的指令集 3 基于栈和寄存器的指令集 ",
    "description": "",
    "tags": null,
    "title": "7 指令集",
    "uri": "/compiler/7_instruction/index.html"
  },
  {
    "content": "1 序 2 目录 ",
    "description": "",
    "tags": null,
    "title": "7 音频格式",
    "uri": "/format/7_audio/index.html"
  },
  {
    "content": "air语言是C语法系的编程语言，提供面向对象、函数式、模板等高级语言功能。\n目录 1 语法定义 2 代码结构 3 关键字 4 操作符 5 类型系统 ",
    "description": "",
    "tags": null,
    "title": "8 语言定义",
    "uri": "/compiler/8_langdef/index.html"
  },
  {
    "content": "1 序 2 目录 ",
    "description": "",
    "tags": null,
    "title": "8 模型3D",
    "uri": "/format/8_model/index.html"
  },
  {
    "content": "字节码文件的设计是虚拟机资源加载的核心，其中的设计会影响到虚拟机指令集的设计。\n目录 ",
    "description": "",
    "tags": null,
    "title": "9 字节码文件格式",
    "uri": "/compiler/9_bcf/index.html"
  },
  {
    "content": "虚拟机的设计与实现，其核心是指令集、字节码文件的设计，这两者包含了虚拟运行的机制。只有明白两者为什么这样设计，才能快速写出执行代码。\n目录 ",
    "description": "",
    "tags": null,
    "title": "10 虚拟机设计与实现",
    "uri": "/compiler/10_vmimp/index.html"
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
    "content": " 技术收集、随笔、总结。\n目录 存在以下分类： 算法 整数对齐 数据结构 链表 编译器设计与实现 1 词法分析 2 语法分析 3 语义分析 4 中间优化 5 目标生成 6 中间代码 7 指令集 8 语言定义 9 字节码文件格式 10 虚拟机设计与实现 操作系统 文件格式 1 通用格式设计 2 程序格式 3 颜色格式 4 压缩格式 5 图片格式 6 视频格式 7 音频格式 8 模型3D 网址收藏 文件格式相关 文件格式汇编: https://www.moon-soft.com/program/FORMAT/ 算法相关 加解密算法: https://www.cnblogs.com/Kingfans/category/2198205.html 快速位运算算法: http://graphics.stanford.edu/~seander/bithacks.html x86/x64指令相关 x86-64的指令编码入门: https://blog.csdn.net/JimFire/article/details/112652145 x86_64指令编码方式: https://zhuanlan.zhihu.com/p/464774687 X86 Opcode and Instruction Reference: http://ref.x86asm.net/geek64.html X86-64_Instruction_Encoding: https://wiki.osdev.org/X86-64_Instruction_Encoding 游戏引擎相关 游戏引擎 浅入浅出: https://www.thisisgame.com.cn/tutorial?book=cpp-game-engine-book\u0026lang=zh\u0026md=Introduction.md ",
    "description": "",
    "tags": null,
    "title": "主页",
    "uri": "/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "类别",
    "uri": "/categories/index.html"
  }
]
