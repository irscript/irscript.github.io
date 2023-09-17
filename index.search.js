var relearn_search_index = [
  {
    "content": "每一个文件都必须定义一个作用域名，其他内容在此作用域定义。\n生成的声明符号都在该作用域内，只能通过该作用域才能访问代码文件中声明的符号内容。\n代码结构 包声明 package pkg.pkg2;\r依赖单元 Import file=“dir/file.ext” as file ;\r或者\nImport{\rile=“dir/file.ext” as file ;\rile2=“dir/file2.ext” as file2 ;\r}\r枚举定义 enum name : int32{\ritem=0,\ritem2=23,\r…\r}\r结构体定义 Struct name{\rInt32 i32;\rUnion{\rInt32 s32;\rFlt32 f32;\r}\r}\r联合体定义 Union name{\rInt32 s32;\rFlt32 f32;\rStruct{…}\r}\r接口定义 Interface IFather{\rvoid eat(int32 arg);\r}\rInterface IFather2{\rvoid say(int32 arg);\r}\rInterface IChild :[ IFather,IFather2 ]{\rvoid walk(int32 arg);\r}\r类定义 Class Parent {\rPrivate:\rInt32 mI32;\rPublic\tFlt32 mF32;\rPublic:\rVoid print(){}\rProtected void toString(){}\rVirtual void vfun()=0;\r}\rClass child: Parent :[ IChild ]{\rvoid eat(int32 arg) @override{}\rvoid say(int32 arg) @override{}\rvoid walk(int32 arg) @override{}\rvoid vfun()@override{}\r} ",
    "description": "",
    "tags": null,
    "title": "代码文件结构",
    "uri": "/compiler/8_langdef/1_codefile/index.html"
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
    "content": "1 序 词法分析就是将代码字符流，按照一定的规则进行分析，获取符合词法规则的字符串，并进行信息标注，为语法分析提供单词(Token)流。\n2 词法规则 词法分析按照规定的规则，可以从字符流中获取数据。\n规则定义为以下几类：\n标识符：由字母、数字、下划线( _ )构成，但是不得由数字为起始；其中存在特殊的字符串为关键字。 普通数字字面量：由数字和’.‘组成，其中分为整数、浮点数； 2进制数字字面量：由 ‘0B’起始，多个 ‘0’或'1’构成。 16进制数字字面量：由 ‘0X’起始，多个 十六进制字符 构成。 字符字面量：由 ‘‘‘起始和结尾，中间为可打印的字符。 3 Token 分类 4 关键字 5 解析标识符 6 解析数字 ",
    "description": "",
    "tags": null,
    "title": "词法分析",
    "uri": "/compiler/1_lexer/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "单向节点链表",
    "uri": "/struct/list/singlelinkedlist/index.html"
  },
  {
    "content": "airlang 的关键字分为两种：普通关键字，宏关键字。 两者差别不大，但是宏关键字有特殊的标记作用，一般用于注解一些信息。\n宏关键字 关键字 注解 @file 代码中获取文件的名称字符串 @line 代码中获取代码所作行号数字 @func 代码中获取函数声明字符串 @debug 用于标记只在debug标志下启用的代码 @NotNulptr 用于标记需要检查函数的指针参数非空 @override 标记非静态成员函数是重写父类的函数 普通关键字 固定位宽类型关键字 注解 位宽(bit) void 空，一般用于表示无返回值 0 bool 布尔类型 8 flt32 32位单精度浮点 32 flt64 64位双精度浮点 32 int8 8位有符号整数 8 int16 8位有符号整数 16 int32 8位有符号整数 32 int64 8位有符号整数 64 uint8 8位无符号整数 8 uint16 16位无符号整数 16 uint32 32位无符号整数 32 uint64 64位无符号整数 64 char 字符 8 可变位宽类型的位宽由编译的目标CPU架构有关。\n可变位宽类型关键字注解CPU32CPU64\rsint有符号整数 3264\ruint无符号整数 3264\ruintptr指针 3264\rcstring字符串指针 3264\r修饰关键字 注解 static 静态 public 完全公开的 protected 对部分成员公开的 private 私有的 成员 const 常量化，只读 friend 友元定义 分支关键字 注解 if 比较分支 elsif 次比较分支 else 比较默认分支 for 循环 foreach 循环 while 循环 do 循环 break 跳出循环 continue 继续下一轮循环 goto 跳转到标签 return 函数返回 类型定义关键字 注解 enum 枚举 struct 结构体 union 联合体 interface 接口 class 类 entrust 委托指针 其他关键字 注解 false true nullptr this super ",
    "description": "",
    "tags": null,
    "title": "关键字",
    "uri": "/compiler/8_langdef/2_keyword/index.html"
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
    "title": "语法分析",
    "uri": "/compiler/2_parser/index.html"
  },
  {
    "content": "目录 词法分析 语法分析 语义分析 中间优化 目标生成 中间代码 指令集 语言定义 引言 编译原理是将文本字符流，通过一系列的分析、转换，最后生成确定的指令文件的数据分析转换技术。\r编译器是利用编译原理，将一种程序（源程序）翻译成另一种程序（目标程序）的计算机程序。业界也将编译器分为三个部分：前端、中端、后端。\n编译器所做的工作流程如下图所示。\n",
    "description": "",
    "tags": null,
    "title": "编译器设计与实现",
    "uri": "/compiler/index.html"
  },
  {
    "content": " 操作符 优先级 注解 ",
    "description": "",
    "tags": null,
    "title": "操作符",
    "uri": "/compiler/8_langdef/3_operator/index.html"
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
    "content": "",
    "description": "",
    "tags": null,
    "title": "语义分析",
    "uri": "/compiler/3_analysis/index.html"
  },
  {
    "content": "基本类型 固定位宽类型 注解 位宽(bit) void 空，一般用于表示无返回值 — bool 布尔类型 8 flt32 32位单精度浮点 32 flt64 64位双精度浮点 32 int8 8位有符号整数 8 int16 8位有符号整数 16 int32 8位有符号整数 32 int64 8位有符号整数 64 uint8 8位无符号整数 8 uint16 16位无符号整数 16 uint32 32位无符号整数 32 uint64 64位无符号整数 64 char 字符 8 可变位宽类型的位宽由编译的目标CPU架构有关。\n可变位宽类型注解CPU32CPU64\rsint有符号整数 3264\ruint无符号整数 3264\ruintptr指针 3264\rcstring字符串指针 3264\r枚举类型 结构体 联合体 接口 类 函数指针 ",
    "description": "",
    "tags": null,
    "title": "类型系统",
    "uri": "/compiler/8_langdef/4_typesystem/index.html"
  },
  {
    "content": "测试 ",
    "description": "",
    "tags": null,
    "title": "操作系统",
    "uri": "/os/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "中间优化",
    "uri": "/compiler/4_optimize/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "目标生成",
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
    "content": "",
    "description": "",
    "tags": null,
    "title": "中间代码",
    "uri": "/compiler/6_ir/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "指令集",
    "uri": "/compiler/7_instruction/index.html"
  },
  {
    "content": "air语言是C语法系的编程语言，提供面向对象、函数式、模板等高级语言功能。\n目录 代码文件结构 关键字 操作符 类型系统 语法定义 文件单元\rFileUnit = PkgDef (ImportDef) Decl*\r包定义\rPkgDef = package ID (.ID)*\r依赖导入(可选)\rImportDef = 'import' STRING as ID; |'{' (STRING as ID; )* '}'\r声明定义\rDecl = ScopeDecl | VarDecl | FuncDecl | EnumDecl | StructDecl | UnionDecl | InterfaceDecl | ClassDecl | ~\r表达式\rExp = BaseExp | DotExp | UnaryExp | BinaryExp | TernaryExp | NewExp | PriorityExp\r基础表达式\rBaseExp = IDExp | ConstExp | CallExp | ArrarExp | ThisExp | SuperExp\rIDExp = ID\rConstExp = c\rCallExp = ID '(' ArgList')'\rArrarExp = ID '[' Exp ']'\rThisExp = 'this'\rSuperExp = 'super'\r成员访问表达式\rDotExp = BaseExp ( '.' BaseExp)*\r一元表达式\rUnaryExp = UnaryOP BaseExp\rUnaryOP = '-' | '+' | '--' | '++' | '~' | '!'\r二元表达式\rBinaryExp = Exp BinaryOP Exp\rBinaryOP = '+' | '-' | '*' | '/' | '%' |\r'\u0026' | '|' | '\u0026\u0026' | '||' |\r'\u003c\u003c' | '\u003e\u003e' | '\u003e\u003e\u003e' |\r'\u003c' | '\u003e' | '\u003c=' | '\u003e=' |\r'==' | '!=' | '=' |\r三元表达式\rTernaryExp = Exp '?' Exp ':' Exp\r括号表达式\rPriorityExp = '(' Exp ')'",
    "description": "",
    "tags": null,
    "title": "语言定义",
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
