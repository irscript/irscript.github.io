var relearn_search_index = [
  {
    "content": "1 词法规则 词法分析按照规定的规则，可以从字符流中获取数据。\n规则定义为以下几类：\n标识符：由字母、数字、下划线( _ )构成，但是不得由数字为起始；其中存在特殊的字符串为关键字。 普通数字字面量：由数字和’.‘组成，其中分为整数、浮点数； 2进制数字字面量：由 ‘0B’起始，多个 ‘0’或'1’构成。 16进制数字字面量：由 ‘0X’起始，多个 十六进制字符 构成。 字符字面量：由 ‘‘‘起始和结尾，中间为可打印的字符。 2 Token 分类 3 位置信息 3 Token 定义 ",
    "description": "",
    "tags": null,
    "title": "1 Token 定义",
    "uri": "/3_compiler/1_lexer/1_tokendef/index.html"
  },
  {
    "content": "1 序 词法分析就是将代码字符流，按照一定的规则进行分析，获取符合词法规则的字符串，并进行信息标注，为语法分析提供单词(Token)流。\n2 目录 1 Token 定义 2 Lexer 实现 3 工程文件解析 ",
    "description": "",
    "tags": null,
    "title": "1 词法分析",
    "uri": "/3_compiler/1_lexer/index.html"
  },
  {
    "content": "基于栈的指令集参考Java的指令集。\n",
    "description": "",
    "tags": null,
    "title": "1 基于栈的指令集",
    "uri": "/3_compiler/7_instruction/1_stackbasedinsset/index.html"
  },
  {
    "content": "待续\n",
    "description": "",
    "tags": null,
    "title": "1 类型系统设计与实现",
    "uri": "/3_compiler/2_parser/1_typesystem/index.html"
  },
  {
    "content": "语法使用非严格的EBNF语法描述。\n文件单元\rFileUnit = PkgDef (ImportDef) Decl*\r包定义\rPkgDef = package ID (.ID)*\r依赖导入(可选)\rImportDef = 'import' STRING as ID; |'{' (STRING as ID; )* '}'\r声明定义\rDecl = ScopeDecl | VarDecl | FuncDecl | EnumDecl | StructDecl | UnionDecl | InterfaceDecl | ClassDecl | EntrustDecl | ~\r表达式\rExp = BaseExp | DotExp | UnaryExp | BinaryExp | TernaryExp | NewExp | PriorityExp\r基础表达式\rBaseExp = IDExp | ConstExp | CallExp | ArrarExp | ThisExp | SuperExp\rIDExp = ID\rConstExp = c\rCallExp = ID '(' ArgList')'\rArrarExp = ID '[' Exp ']'\rThisExp = 'this'\rSuperExp = 'super'\r成员访问表达式\rDotExp = BaseExp ( '.' BaseExp)* //BaseExp不得是ConstExp\r一元表达式\rUnaryExp = UnaryOP BaseExp\rUnaryOP = '-' | '+' | '--' | '++' | '~' | '!'\r二元表达式\rBinaryExp = Exp BinaryOP Exp\rBinaryOP = '+' | '-' | '*' | '/' | '%' |\r'\u0026' | '|' | '\u0026\u0026' | '||' |\r'\u003c\u003c' | '\u003e\u003e' | '\u003e\u003e\u003e' |\r'\u003c' | '\u003e' | '\u003c=' | '\u003e=' |\r'==' | '!=' | '=' |\r三元表达式\rTernaryExp = Exp '?' Exp ':' Exp\r括号表达式\rPriorityExp = '(' Exp ')'\r作用域声明\rScopeDecl = ( 'public' | 'protected' | 'private' ) ':'\r变量声明\rVarDecl = Scope Type 'id' [=initExp] ';'\rScope = ['public' | 'protected' | 'private'| 'extern' | 'static'] Type = ['const' ] 'id'( '.' 'id')*\r代理变量\rScope Type 'id''(' [ arglist] ')' 'delegate' ';'\r闭包变量\rScope Type 'id''(' [ arglist] ')' 'closure' ';'\r函数申明\rVarDecl = Scope Type 'id''(' [ arglist] ')'[@override] [@cfun] [const] [final] (';' | funbody )\rarglist = argitem (',' argitem)*\rargitem = type ['id']\rfunbody = BlkState\rBlkState = '{' [Statement] '}'\rStatement = ( BlkState | ExpState | IfState | ElseifState |\rElseState | SwitchState | ForState | DoState |\rWhileState | GotoState | BreakState | ContinueState |\rReturnState )*\rTypeDecl = EnumDecl | StructDecl | UnionDecl |EntrustDecl\rFuncDecl = Type 'id''(' [ arglist] ')' '=' Serial\rSerial = 'u32'\r枚举声明\rEnumDecl = 'enum' id [: BaseType]'{' EnumItem* '}'\rBaseType = 基本整数类型\rEnumItem = 'id'[=initExp] ','",
    "description": "",
    "tags": null,
    "title": "1 语法定义",
    "uri": "/3_compiler/8_langdef/1_langdef/index.html"
  },
  {
    "content": " 单向节点链表 双向节点链表 ",
    "description": "",
    "tags": null,
    "title": "链表",
    "uri": "/2_struct/list/index.html"
  },
  {
    "content": "1 序 2 目录 1 ELF32 格式 2 ELF64 格式 ",
    "description": "",
    "tags": null,
    "title": "1 ELF 格式",
    "uri": "/6_format/2_program/1_elf/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "1 ELF32 格式",
    "uri": "/6_format/2_program/1_elf/1_elf32/index.html"
  },
  {
    "content": "原文来自：https://www.cnblogs.com/Kingfans/p/16546430.html\n1 基本介绍 MD系列算法是信息摘要三大算法中的一种，全称：Message Digest算法，按照规范版本分为MD2、MD4、MD5三种算法，目前最常用的是MD5版本算法。本文介绍MD2算法的实现原理。\n1989年，MD2是由著名的非对称算法RSA发明人之一–麻省理工学院教授罗纳德-里维斯特开发的；这个算法首先对信息进行数据补位，使信息的字节长度是16的倍数，再以16位的检验和作为补充信息追加到原信息的末尾。最后根据这个新产生的信息计算出一个128位的散列值，MD2算法由此诞生。\n2 实现原理 有关MD2 算法详情请参见 RFC 1319 http://www.ietf.org/rfc/rfc1319.txt，RFC 1319 是MD2算法的官方文档，其实现原理共分为5步：\n第1步：字节填充(Append Padding Bytes) 填充1~16个字节，确保是16字节的倍数，填充规则如下：\n假设数据长度为m, 则需要填充16 - (m mod 16)个字节的数据，填充内容为16 - (m mod 16)。\n第2步：添加校验和(Append Checksum) 根据下列算法计算校验和，并追加到第1步填充数据的后面。\n/* Clear checksum. */\rFor i = 0 to 15 do:\rSet C[i] to 0.\rend /* of loop on i */\rSet L to 0.\r/* Process each 16-word block. */\rFor i = 0 to N/16-1 do\r/* Checksum block i. */\rFor j = 0 to 15 do\rSet c to M[i*16+j].\rSet C[j] to S[c xor L].\rSet L to C[j].\rend /* of loop on j */\rend /* of loop on i */第3步：初始化MD Buffer(Initialize MD Buffer) 最简单不过了，定义一个48字节数组X并初始化为0。\n第4步：处理消息块(Process Message in 16-Byte Blocks) 这个是MD2算法最核心的部分了，对第2步组装数据进行分块依次处理。\n/* Process each 16-word block. */\rFor i = 0 to N'/16-1 do\r/* Copy block i into X. */\rFor j = 0 to 15 do\rSet X[16+j] to M[i*16+j].\rSet X[32+j] to (X[16+j] xor X[j]).\rend /* of loop on j */\rSet t to 0.\r/* Do 18 rounds. */\rFor j = 0 to 17 do\r/* Round j. */\rFor k = 0 to 47 do\rSet t and X[k] to (X[k] xor S[t]).\rend /* of loop on k */\rSet t to (t+j) modulo 256.\rend /* of loop on j */\rend /* of loop on i */第5步：输出(Output) 这一步也非常简单，只需要将计算后的X前16字节进行输出就可以了\n3 示例讲解 4 代码实现 #include \u003cstring.h\u003e #include \u003cstdio.h\u003e #define HASH_BLOCK_SIZE 16 #define HASH_DIGEST_SIZE 16 #define HASH_ROUND_NUM 18 #define MD2_CHECKSUM_SIZE 16 #define ASSERT_RETURN_INT(x, d) if(!(x)) { return d; } /* * The S Box of MD2 are generated from Pi digits. */ static const unsigned char S[256] = { 0x29, 0x2E, 0x43, 0xC9, 0xA2, 0xD8, 0x7C, 0x01, 0x3D, 0x36, 0x54, 0xA1, 0xEC, 0xF0, 0x06, 0x13, 0x62, 0xA7, 0x05, 0xF3, 0xC0, 0xC7, 0x73, 0x8C, 0x98, 0x93, 0x2B, 0xD9, 0xBC, 0x4C, 0x82, 0xCA, 0x1E, 0x9B, 0x57, 0x3C, 0xFD, 0xD4, 0xE0, 0x16, 0x67, 0x42, 0x6F, 0x18, 0x8A, 0x17, 0xE5, 0x12, 0xBE, 0x4E, 0xC4, 0xD6, 0xDA, 0x9E, 0xDE, 0x49, 0xA0, 0xFB, 0xF5, 0x8E, 0xBB, 0x2F, 0xEE, 0x7A, 0xA9, 0x68, 0x79, 0x91, 0x15, 0xB2, 0x07, 0x3F, 0x94, 0xC2, 0x10, 0x89, 0x0B, 0x22, 0x5F, 0x21, 0x80, 0x7F, 0x5D, 0x9A, 0x5A, 0x90, 0x32, 0x27, 0x35, 0x3E, 0xCC, 0xE7, 0xBF, 0xF7, 0x97, 0x03, 0xFF, 0x19, 0x30, 0xB3, 0x48, 0xA5, 0xB5, 0xD1, 0xD7, 0x5E, 0x92, 0x2A, 0xAC, 0x56, 0xAA, 0xC6, 0x4F, 0xB8, 0x38, 0xD2, 0x96, 0xA4, 0x7D, 0xB6, 0x76, 0xFC, 0x6B, 0xE2, 0x9C, 0x74, 0x04, 0xF1, 0x45, 0x9D, 0x70, 0x59, 0x64, 0x71, 0x87, 0x20, 0x86, 0x5B, 0xCF, 0x65, 0xE6, 0x2D, 0xA8, 0x02, 0x1B, 0x60, 0x25, 0xAD, 0xAE, 0xB0, 0xB9, 0xF6, 0x1C, 0x46, 0x61, 0x69, 0x34, 0x40, 0x7E, 0x0F, 0x55, 0x47, 0xA3, 0x23, 0xDD, 0x51, 0xAF, 0x3A, 0xC3, 0x5C, 0xF9, 0xCE, 0xBA, 0xC5, 0xEA, 0x26, 0x2C, 0x53, 0x0D, 0x6E, 0x85, 0x28, 0x84, 0x09, 0xD3, 0xDF, 0xCD, 0xF4, 0x41, 0x81, 0x4D, 0x52, 0x6A, 0xDC, 0x37, 0xC8, 0x6C, 0xC1, 0xAB, 0xFA, 0x24, 0xE1, 0x7B, 0x08, 0x0C, 0xBD, 0xB1, 0x4A, 0x78, 0x88, 0x95, 0x8B, 0xE3, 0x63, 0xE8, 0x6D, 0xE9, 0xCB, 0xD5, 0xFE, 0x3B, 0x00, 0x1D, 0x39, 0xF2, 0xEF, 0xB7, 0x0E, 0x66, 0x58, 0xD0, 0xE4, 0xA6, 0x77, 0x72, 0xF8, 0xEB, 0x75, 0x4B, 0x0A, 0x31, 0x44, 0x50, 0xB4, 0x8F, 0xED, 0x1F, 0x1A, 0xDB, 0x99, 0x8D, 0x33, 0x9F, 0x11, 0x83, 0x14 }; int md2(unsigned char *out, const unsigned char* in, const int inlen) { ASSERT_RETURN_INT(out \u0026\u0026 in \u0026\u0026 (inlen \u003e= 0), 1); int i = 0, j = 0, k = 0; unsigned char L = 0, t = 0; // step 1: 字节填充(Append Padding Bytes) // 假设数据长度为m, 则需要填充16 - (m mod 16)个字节的数据，填充内容为16 - (m mod 16). int iLen = (inlen / HASH_BLOCK_SIZE + 1) * HASH_BLOCK_SIZE; unsigned char* M = malloc(iLen + MD2_CHECKSUM_SIZE); memcpy(M, in, inlen); for (i = inlen; i \u003c iLen; i++) { M[i] = iLen - inlen; } // step 2: 添加校验和(Append Checksum) unsigned char C[MD2_CHECKSUM_SIZE]; memset(C, 0, MD2_CHECKSUM_SIZE); for (i = 0; i \u003c iLen / HASH_BLOCK_SIZE; i++) { for (j = 0; j \u003c HASH_BLOCK_SIZE; j++) { unsigned char c = M[i * 16 + j]; C[j] = C[j] ^ S[c ^ L]; L = C[j]; } } memcpy(M + iLen, C, HASH_BLOCK_SIZE); // step 3: 初始化MD Buffer(Initialize MD Buffer): unsigned char X[48]; memset(X, 0, 48); // step 4: 处理消息块(Process Message in 16-Byte Blocks) for (i = 0; i \u003c (iLen + 16) / HASH_BLOCK_SIZE; i++) { /* Copy block i into X. */ for (j = 0; j \u003c HASH_BLOCK_SIZE; j++) { X[16 + j] = M[i * 16 + j]; X[32 + j] = X[16 + j] ^ X[j]; } t = 0; /* Do 18 rounds. */ for (j = 0; j \u003c HASH_ROUND_NUM; j++) { /* Round j */ for (k = 0; k \u003c 48; k++) { t = X[k] = X[k] ^ S[t]; } t = (t + j) % 256; } } memcpy(out, X, HASH_DIGEST_SIZE); free(M); return 0; } int main() { unsigned char digest[16] = { 0 }; md2(digest, \"Hello World!\", strlen(\"Hello World!\")); return 0; }",
    "description": "",
    "tags": [
      "Hash",
      "MD"
    ],
    "title": "1 MD2 算法",
    "uri": "/1_algorithms/2_hash/1_md/1_md2/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "1 RGBA",
    "uri": "/6_format/3_color/1_rgba/index.html"
  },
  {
    "content": "原文来自：https://www.cnblogs.com/Kingfans/p/16561821.html\n一、基本介绍 SHA (Security Hash Algorithm) 是美国的 NIST 和 NSA 设计的一种标准的 Hash 算法，SHA 用于数字签名的标准算法的 DSS 中，也是安全性很高的一种 Hash 算法。\nSHA-1 是第一代 SHA 算法标准，后来的 SHA-224、SHA-256、SHA-384 和 SHA-512 被统称为 SHA-2。\n二、实现原理 有关 SHA1 算法详情请参见 RFC 3174 http://www.ietf.org/rfc/rfc3174.txt。\nRFC 3174 是SHA1算法的官方文档，（建议了解SHA1算法前，先了解下MD4 md4算法实现原理深剖 ）其实现原理共分为5步：\n第1步：字节填充(Append Padding Bytes) 数据先补上1个1比特，再补上k个0比特，使得补位后的数据比特数(n+1+k)满足(n+1+k) mod 512 = 448，k取最小正整数。\n第2步：追加长度信息(Append Length) 数据比特位的数据长度追加到最后8字节中。【注意字节顺序与MD4不同 大小端之分】\n第3步：初始化MD Buffer(Initialize MD Buffer) 这一步最简单了，定义ABCD四个4字节数组，分别赋初值即可。【注意相对于MD4 添加了H4】\nuint32_t H0 = 0x67452301; // 0x01, 0x23, 0x45, 0x67 uint32_t H1 = 0xEFCDAB89; // 0x89, 0xAB, 0xCD, 0xEF uint32_t H2 = 0x98BADCFE; // 0xFE, 0xDC, 0xBA, 0x98 uint32_t H3 = 0x10325476; // 0x76, 0x54, 0x32, 0x10 uint32_t H4 = 0xC3D2E1F0; // 0xF0, 0xE1, 0xD2, 0xC3 第4步：处理消息块(Process Message in 16-Byte Blocks) 这个是SHA1算法最核心的部分了，对第2步组装数据进行分块依次处理。\n/* Process each 16-word block. */\rFor i = 0 to N/16-1 do\r/* Copy block i into X. */\rFor j = 0 to 15 do\rSet X[j] to M[i*16+j].\rend /* of loop on j */\ra. Divide M(i) into 16 words W(0), W(1), ... , W(15), where W(0) is the left-most word.\rb. For t = 16 to 79 let\rW(t) = S^1(W(t-3) XOR W(t-8) XOR W(t-14) XOR W(t-16)).\rc. Let A = H0, B = H1, C = H2, D = H3, E = H4.\rd. For t = 0 to 79 do\rTEMP = S^5(A) + f(t;B,C,D) + E + W(t) + K(t);\rE = D; D = C; C = S^30(B); B = A; A = TEMP;\re. Let H0 = H0 + A, H1 = H1 + B, H2 = H2 + C, H3 = H3 + D, H4 = H4 + E.\rend /* of loop on i */第5步：输出(Output) 这一步也非常简单，只需要将计算后的H0、H1、H2、H3、H4进行拼接输出即可。\n三、示例讲解 四、代码实现 以下为C/C++代码实现：\n#include \u003cstring.h\u003e #include \u003cstdio.h\u003e #define HASH_BLOCK_SIZE 64 /* 512 bits = 64 bytes */ #define HASH_LEN_SIZE 8 /* 64 bits = 8 bytes */ #define HASH_LEN_OFFSET 56 /* 64 bytes - 8 bytes */ #define HASH_DIGEST_SIZE 16 /* 128 bits = 16 bytes */ #define HASH_ROUND_NUM 80 typedef unsigned char uint8_t; typedef unsigned short int uint16_t; typedef unsigned int uint32_t; typedef unsigned long long uint64_t; /* Swap bytes in 32 bit value. 0x01234567 -\u003e 0x67452301 */ #define __bswap_32(x) \\ ((((x) \u0026 0xff000000) \u003e\u003e 24) \\ | (((x) \u0026 0x00ff0000) \u003e\u003e 8) \\ | (((x) \u0026 0x0000ff00) \u003c\u003c 8) \\ | (((x) \u0026 0x000000ff) \u003c\u003c 24)) /* SHA1 Constants */ static uint32_t K[4] = { 0x5A827999, /* [0, 19] */ 0x6ED9EBA1, /* [20, 39] */ 0x8F1BBCDC, /* [40, 59] */ 0xCA62C1D6 /* [60, 79] */ }; /* f(X, Y, Z) */ /* [0, 19] */ static uint32_t Ch(uint32_t X, uint32_t Y, uint32_t Z) { return (X \u0026 Y) ^ ((~X) \u0026 Z); } /* [20, 39] */ /* [60, 79] */ static uint32_t Parity(uint32_t X, uint32_t Y, uint32_t Z) { return X ^ Y ^ Z; } /* [40, 59] */ static uint32_t Maj(uint32_t X, uint32_t Y, uint32_t Z) { return (X \u0026 Y) ^ (X \u0026 Z) ^ (Y \u0026 Z); } /* 循环向左移动offset个比特位 */ static uint32_t MoveLeft(uint32_t X, uint8_t offset) { uint32_t res = (X \u003c\u003c offset) | (X \u003e\u003e (32 - offset)); return res; } #define ASSERT_RETURN_INT(x, d) if(!(x)) { return d; } int sha1(unsigned char *out, const unsigned char* in, const int inlen) { ASSERT_RETURN_INT(out \u0026\u0026 in \u0026\u0026 (inlen \u003e= 0), 1); int i = 0, j = 0, t = 0; // step 1: 字节填充(Append Padding Bytes) // 数据先补上1个1比特，再补上k个0比特，使得补位后的数据比特数(n+1+k)满足(n+1+k) mod 512 = 448，k取最小正整数 int iX = inlen / HASH_BLOCK_SIZE; int iY = inlen % HASH_BLOCK_SIZE; iX = (iY \u003c HASH_LEN_OFFSET) ? iX : (iX + 1); int iLen = (iX + 1) * HASH_BLOCK_SIZE; unsigned char* X = malloc(iLen); memcpy(X, in, inlen); // 先补上1个1比特+7个0比特 X[inlen] = 0x80; // 再补上(k-7)个0比特 for (i = inlen + 1; i \u003c (iX * HASH_BLOCK_SIZE + HASH_LEN_OFFSET); i++) { X[i] = 0; } // step 2: 追加长度信息(Append Length) uint8_t *pLen = (uint64_t*)(X + (iX * HASH_BLOCK_SIZE + HASH_LEN_OFFSET)); uint64_t iTempLen = inlen \u003c\u003c 3; uint8_t *pTempLen = \u0026iTempLen; pLen[0] = pTempLen[7]; pLen[1] = pTempLen[6]; pLen[2] = pTempLen[5]; pLen[3] = pTempLen[4]; pLen[4] = pTempLen[3]; pLen[5] = pTempLen[2]; pLen[6] = pTempLen[1]; pLen[7] = pTempLen[0]; // Step 3. 初始化MD Buffer(Initialize MD Buffer) uint32_t H0 = 0x67452301; // 0x01, 0x23, 0x45, 0x67 uint32_t H1 = 0xEFCDAB89; // 0x89, 0xAB, 0xCD, 0xEF uint32_t H2 = 0x98BADCFE; // 0xFE, 0xDC, 0xBA, 0x98 uint32_t H3 = 0x10325476; // 0x76, 0x54, 0x32, 0x10 uint32_t H4 = 0xC3D2E1F0; // 0xF0, 0xE1, 0xD2, 0xC3 uint32_t M[HASH_BLOCK_SIZE / 4] = { 0 }; uint32_t W[HASH_ROUND_NUM] = { 0 }; // step 4: 处理消息块(Process Message in 64-Byte Blocks) for (i = 0; i \u003c iLen / HASH_BLOCK_SIZE; i++) { /* Copy block i into X. */ for (j = 0; j \u003c HASH_BLOCK_SIZE; j = j + 4) { uint64_t k = i * HASH_BLOCK_SIZE + j; M[j / 4] = (X[k] \u003c\u003c 24) | (X[k + 1] \u003c\u003c 16) | (X[k + 2] \u003c\u003c 8) | X[k + 3]; } /* a. Divide M(i) into 16 words W(0), W(1), ..., W(15), where W(0) is the left - most word. */ for (t = 0; t \u003c= 15; t++) { W[t] = M[t]; } /* b. For t = 16 to 79 let W(t) = S^1(W(t-3) XOR W(t-8) XOR W(t-14) XOR W(t-16)). */ for (t = 16; t \u003c= 79; t++) { W[t] = MoveLeft(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1); } /* c. Let A = H0, B = H1, C = H2, D = H3, E = H4. */ uint32_t A = H0; uint32_t B = H1; uint32_t C = H2; uint32_t D = H3; uint32_t E = H4; /* d. For t = 0 to 79 do TEMP = S^5(A) + f(t;B,C,D) + E + W(t) + K(t); E = D; D = C; C = S^30(B); B = A; A = TEMP; */ for (t = 0; t \u003c= 19; t++) { uint32_t temp = MoveLeft(A, 5) + Ch(B, C, D) + E + W[t] + K[0]; E = D; D = C; C = MoveLeft(B, 30); B = A; A = temp; } for (t = 20; t \u003c= 39; t++) { uint32_t temp = MoveLeft(A, 5) + Parity(B, C, D) + E + W[t] + K[1]; E = D; D = C; C = MoveLeft(B, 30); B = A; A = temp; } for (t = 40; t \u003c= 59; t++) { uint32_t temp = MoveLeft(A, 5) + Maj(B, C, D) + E + W[t] + K[2]; E = D; D = C; C = MoveLeft(B, 30); B = A; A = temp; } for (t = 60; t \u003c= 79; t++) { uint32_t temp = MoveLeft(A, 5) + Parity(B, C, D) + E + W[t] + K[3]; E = D; D = C; C = MoveLeft(B, 30); B = A; A = temp; } /* e. Let H0 = H0 + A, H1 = H1 + B, H2 = H2 + C, H3 = H3 + D, H4 = H4 + E. */ H0 = H0 + A; H1 = H1 + B; H2 = H2 + C; H3 = H3 + D; H4 = H4 + E; } // step 5: 输出ABCD uint32_t* pOut = (uint8_t*)out; pOut[0] = __bswap_32(H0); pOut[1] = __bswap_32(H1); pOut[2] = __bswap_32(H2); pOut[3] = __bswap_32(H3); pOut[4] = __bswap_32(H4); free(X); return 0; } int main() { unsigned char digest[20] = { 0 }; sha1(digest, \"Hello World!\", strlen(\"Hello World!\")); return 0; }",
    "description": "",
    "tags": [
      "Hash",
      "SHA"
    ],
    "title": "1 SHA1 算法",
    "uri": "/1_algorithms/2_hash/2_sha/1_sha1/index.html"
  },
  {
    "content": "符号定义 a :待运算的值 b :待运算的值 r :运算结果 计算 r = (a + b) \u003e\u003e 1\r总结 \u003e\u003e 1 ,相当于 除 2。\n",
    "description": "",
    "tags": [
      "Bitwise"
    ],
    "title": "1 快速平均值",
    "uri": "/1_algorithms/3_bitwise/1_average/index.html"
  },
  {
    "content": "1 序 二进制文件的格式一般采用结构 文件头 + 核心内容。\n文件头：标识文件的基本信息，其设计方法基本一致。 核心内容：这部分是真正的文件数据内容。 2 目录 1 文件头 2 段节格式 3 TLV格式 ",
    "description": "",
    "tags": null,
    "title": "1 通用格式设计",
    "uri": "/6_format/1_general/index.html"
  },
  {
    "content": "\r描述了文件的整体信息，常见的字段有魔数、检验码、版本号、文件大小等。\n顾名思义，即是将文件的整体信息通常放在文件的开头。\n在少数情况下，也会将文件头放在文件的尾部，也就是‘文件尾’，但是一般还是叫做 文件头。\n1 魔数 魔数作为文件格式的标识，一般用于识别文件是否程序所能处理的文件。其值可以随意选取，主要看设计者自身的喜好。\n例如 zip 格式的魔数就是 “PK\\x03\\x04”,其中 PK 就是设计者 Philip Katz 的名字首字母。\n一般程序在分析文件时，会先判断魔数的值是否匹配，不匹配就表明文件格式不正确。\n需要注意的是，假如魔数正确，文件格式并非一定能够读取正确，还需要进一步判断。\n2 检验码 文件头通常还会有个检验码，用于检验文件是否完整并且没有经过修改的。这个检验码可以使用 crc, 可以使用 md5，也可以使用其它算法。\n这也是检查文件格式的正确性中的重要一步，因为即便是魔数相同，校验码所采用的算法不同，和校验码所作的位置不同，所计算的校验码，基本上是不一的，所以进一步就，能区分出文件格式是否正确。\n3 版本号 文件头通常还会包含版本号。\n版本号不同，就表明文件格式发生变化，可能变化很小，也可能变化很大；可能是某些字段的值在解释上发生变化，也可能是直接添加了一些结构。所以导致文件的读取方式可能会有所不同。\n版本号有时只是单独一个数字，不断往上递增。有时也会拆分成两个数字，为主版本号和次版本号。主版本号修改，通常表示文件格式发生大变动。而次版本号修改，通常只是表示添加了一些小功能。\n4 字节顺序 字节顺序在文件格式设计中至关重要。\n字节顺序分为大端字节序和小端字节序。不同的机器字节序有可能不同，设计文件格式时需要考虑文件用什么字节序保存数据的。\n读取和存储的字节序不一致就会导致程序出错。\n5 通用结构 通用结构定义如下：\nstruct FileHeader{ uint8 mMagic[4]; //魔数 uint8 mHash[16]; //检验码 uint32 mEndian; //字节序 uint32 mVersion; //文件版本 ... };",
    "description": "",
    "tags": null,
    "title": "1 文件头",
    "uri": "/6_format/1_general/1_fileheader/index.html"
  },
  {
    "content": "简介 MD系列算法是信息摘要三大算法中的一种，全称：Message Digest算法，按照规范版本分为MD2、MD4、MD5三种算法，目前最常用的是MD5版本算法。\nMD系列家族 1 MD2 算法 2 MD4 算法 3 MD5 算法 ",
    "description": "",
    "tags": [
      "Hash"
    ],
    "title": "1 消息摘要算法",
    "uri": "/1_algorithms/2_hash/1_md/index.html"
  },
  {
    "content": "// 向上大小对齐 template \u003ctypename T\u003e inline constexpr T alignup(T num, T base) { return (num + base - 1) \u0026 (~(base - 1)); } // 向下大小对齐 template \u003ctypename T\u003e inline constexpr T aligndown(T num, T base) { return (num \u0026 ~(base - 1)); }",
    "description": "",
    "tags": [
      "Align"
    ],
    "title": "1 整数对齐",
    "uri": "/1_algorithms/1_align/index.html"
  },
  {
    "content": "目录 1 整数对齐 2 哈希函数 1 消息摘要算法 1 MD2 算法 2 MD4 算法 3 MD5 算法 2 签名算法 1 SHA1 算法 2 SHA2-224 算法 3 SHA2-256 算法 4 SHA2-384 算法 5 SHA2-512 算法 3 CRC 哈希函数 3 快速位算法 1 快速平均值 2 位域值提取 3 INT_MAX和INT_MIN 4 应用 n + (~n) = -1 5 应用 n ^ n = 0 和 n ^ 0 = n 6 应用 x\u0026(x-1) 7 应用 2的次方 8 取两数的最 大/小 值 ",
    "description": "",
    "tags": null,
    "title": "算法",
    "uri": "/1_algorithms/index.html"
  },
  {
    "content": "待续\n",
    "description": "",
    "tags": null,
    "title": "2 Lexer 实现",
    "uri": "/3_compiler/1_lexer/2_lexer/index.html"
  },
  {
    "content": "待续\n",
    "description": "",
    "tags": null,
    "title": "2 抽象语法树设计与实现",
    "uri": "/3_compiler/2_parser/2_astnode/index.html"
  },
  {
    "content": "每一个文件都必须定义一个作用域名，其他内容在此作用域定义。\n生成的声明符号都在该作用域内，只能通过该作用域才能访问代码文件中声明的符号内容。\n代码结构 包声明 package pkg.pkg2;\r依赖单元 Import file=“dir/file.ext”;\rImport file2=“dir/file2.ext”;\r或者\nImport{\rfile=“dir/file.ext” ;\rfile2=“dir/file2.ext”;\r}\r枚举定义 enum name : int32{\ritem=0,\ritem2=23,\r…\r}\r结构体定义 Struct name{\rInt32 i32;\rUnion{\rInt32 s32;\rFlt32 f32;\r}\r}\r联合体定义 Union name{\rInt32 s32;\rFlt32 f32;\rStruct{…}\r}\r接口定义 Interface IFather{\rvoid eat(int32 arg);\r}\rInterface IFather2{\rvoid say(int32 arg);\r}\rInterface IChild :[ IFather,IFather2 ]{\rvoid walk(int32 arg);\r}\r类定义 Class Parent {\rPrivate:\rInt32 mI32;\rPublic\tFlt32 mF32;\rPublic:\rVoid print(){}\rProtected void toString(){}\rVirtual void vfun()=0;\r}\rClass child: Parent :[ IChild ]{\rvoid eat(int32 arg) @override{}\rvoid say(int32 arg) @override{}\rvoid walk(int32 arg) @override{}\rvoid vfun()@override{}\r} ",
    "description": "",
    "tags": null,
    "title": "2 代码结构",
    "uri": "/3_compiler/8_langdef/2_codefile/index.html"
  },
  {
    "content": "Dalvik 字节码指令集的字节码指令集不支持无符号整数运算，因此参照 Dalvik 设计了以下指令集。\n基于纯寄存器的指令集，指令系统存在下列的要求：\n每条指令按照 16 bit 对齐。 寄存器的索引位宽有 4 bit、8 bit、16 bit。 最多支持 65536 个寄存器。 每个寄存器 32 bit。 64 bit寄存器由相邻的两个 32 bit 寄存器组合而成。 指令操作码位宽为 8 bit。 指令中可有子操作码，具体位宽看具体的指令格式。 32 bit 寄存器内可以存储 32 bit的整数、浮点数。 64 bit 寄存器内可以存储 64 bit的整数、浮点数。 位宽小于 32 位的值，需要进行扩展（零扩展、符号扩展）到 32 bit。 助记符中的 I 表示寄存器索引，后面的数字表示索引位宽 指令格式 总体格式：\n操作码 + [ 操作子码 ] + ( 操作数 )*\r操作子码可选。 操作数可以有多个。 寄存器位宽索引支持的寄存器数量：\n位宽 寄存器数量 索引范围 4 bit 16 [ 0, 15 ] 8 bit 256 [ 0, 255 ] 16 bit 65536 [ 0, 65535 ] 空指令 文本格式： nop\n助记符 操作码 对齐 注解 格式 8 bit 8bit 指令宽度：16 bit nop 0 空操作，用于对齐 常量赋值指令 文本格式： op des, imm 助记符 操作码 目的寄存器 立即数 注解 8 bit 4 bit 4 bit 4 bit 立即数，指令宽度：16 bit const-w32-I4-i4 des imm imm 为有符号整数，有符号扩展至 32 bit。 const-w64-I4-i4 des imm imm 为有符号整数，有符号扩展至 32 bit。 const-w32-I4-u4 des imm imm 为无符号整数，无符号扩展至 32 bit。 const-w64-I4-u4 des imm imm 为无符号整数，无符号扩展至 32 bit。 8 bit 8 bit 16 bit 16 bit 立即数，指令宽度：32 bit const-w32-I8-i16 des imm imm 为有符号整数，有符号扩展至 32 bit。 const-w64-I8-i16 des imm imm 为有符号整数，有符号扩展至 64 bit。 const-w32-I8-u16 des imm imm 为无符号整数，无符号扩展至 32 bit。 const-w64-I8-u16 des imm imm 为无符号整数，无符号扩展至 64 bit。 const-w32-I8-L16 des imm imm 为无符号整数。imm 存放在寄存器的低 16 bit，不改变高 16 bit。 const-w32-I8-H16 des imm imm 为无符号整数。imm 存放在寄存器的高 16 bit，不改变低 16 bit。 8 bit 8 bit 32 bit 32 bit 立即数，指令宽度：48 bit const-w32-I8 des imm 原样拷贝，支持32 bit 整数和浮点。 const-w64-I8-i32 des imm imm 为有符号整数，有符号扩展至 64 bit。 const-w64-I8-u32 des imm imm 为无符号整数，无符号扩展至 64 bit。 8 bit 8 bit 64 bit 64 bit 立即数，指令宽度：80 bit const-w64-I8 des imm 原样拷贝，支持64 bit整数和浮点。 文本格式：op.sub des,imm 助记符 操作码 操作子码 目的寄存器 立即数 注解 8 bit 8 bit 8 bit 8 bit 指令宽度：32 bit const-w32-I8 subop des imm imm 为无符号整数 操作子码定义 助记符 操作子码 注解 B0 imm存放在寄存器的第 1 个字节，不改变其他字节。 B1 imm存放在寄存器的第 2 个字节，不改变其他字节。 B2 imm存放在寄存器的第 3 个字节，不改变其他字节。 B3 imm存放在寄存器的第 4 个字节，不改变其他字节。 寄存器赋值指令 文本格式：op des,src\n文本格式：op des,src 助记符 操作码 目的寄存器 源寄存器 注解 8 bit 4 bit 4 bit 指令宽度：16 bit move-w32-I4 des src 32 位寄存器值传递 move-w64-I4 des src 64 位寄存器值传递 8 bit 8 bit 16 bit 指令宽度：32 bit move-w32-I8I16 des src 32 位寄存器值传递 move-w64-I8I16 des src 64 位寄存器值传递 文本格式：op.sub des,src 助记符 操作码 操作子码 目的寄存器 源寄存器 注解 8 bit 8 bit 8 bit 8 bit 指令宽度：32 bit mov-I8 sub des src 8 bit 8 bit 16 bit 16 bit 指令宽度：48 bit mov-I16 sub des src 操作子码定义 助记符含义：\n目标位宽-源数据获取转换位宽\ni:符号扩展。 u:零扩展。 只有目标位宽时，表示源位宽直接拷贝传递。 目标类型-源类型\n表示从源类型转换到目标类型 助记符 操作子码 注解 w32-B0-i8 0 获取寄存器的第 1 个字节，进行符号扩展到 32 位 w32-B0-u8 1 获取寄存器的第 1 个字节，进行零扩展到 32 位 w32-B1-i8 2 获取寄存器的第 2 个字节，进行符号扩展到 32 位 w32-B1-u8 3 获取寄存器的第 2 个字节，进行零扩展到 32 位 w32-B2-i8 4 获取寄存器的第 3 个字节，进行符号扩展到 32 位 w32-B2-u8 5 获取寄存器的第 3 个字节，进行零扩展到 32 位 w32-B3-i8 6 获取寄存器的第 4 个字节，进行符号扩展到 32 位 w32-B3-u8 7 获取寄存器的第 4 个字节，进行零扩展到 32 位 w32-L16-i16 8 获取寄存器的低 16 位，进行符号扩展到 32 位 w32-L16-u16 9 获取寄存器的低 16 位，进行零扩展到 32 位 w32-H16-i16 10 获取寄存器的高 16 位，进行符号扩展到 32 位 w32-H16-u16 11 获取寄存器的高 16 位，进行零扩展到 32 位 w32 12 32 位原值拷贝传递 w64-B0-i8 13 获取寄存器的第 1 个字节，进行符号扩展到 64 位 w64-B0-u8 14 获取寄存器的第 1 个字节，进行零扩展到 64 位 w64-B1-i8 15 获取寄存器的第 2 个字节，进行符号扩展到 64 位 w64-B1-u8 16 获取寄存器的第 2 个字节，进行零扩展到 64 位 w64-B2-i8 17 获取寄存器的第 3 个字节，进行符号扩展到 64 位 w64-B2-u8 18 获取寄存器的第 3 个字节，进行零扩展到 64 位 w64-B3-i8 19 获取寄存器的第 4 个字节，进行符号扩展到 64 位 w64-B3-u8 20 获取寄存器的第 4 个字节，进行零扩展到 64 位 w64-L16-i16 21 获取寄存器的低 16 位，进行符号扩展到 32 位 w64-L16-u16 22 获取寄存器的低 16 位，进行零扩展到 32 位 w64-H16-i16 23 获取寄存器的高 16 位，进行符号扩展到 32 位 w64-H16-u16 24 获取寄存器的高 16 位，进行零扩展到 32 位 w64-i32 25 获取寄存器的 32 位，进行符号扩展到 64 位 w64-u32 26 获取寄存器的 32 位，进行零扩展到 64 位 w64 27 64 位原值拷贝传递 i32-f32 28 32 位有符号整数转 32 位浮点数 i32-f64 29 32 位有符号整数转 64 位浮点数 u32-f32 30 32 位无符号整数转 32 位浮点数 u32-f64 31 32 位无符号整数转 64 位浮点数 i64-f32 32 64 位有符号整数转 32 位浮点数 i64-f64 33 64 位有符号整数转 32 位浮点数 u64-f32 34 64 位无符号整数转 32 位浮点数 u64-f64 35 64 位无符号整数转 64 位浮点数 f32-i32 36 32 位浮点数转 32 位有符号 f32-i64 37 32 位浮点数转 64 位有符号 f32-u32 38 32 位浮点数转 32 位无符号 f32-u64 39 32 位浮点数转 64 位无符号 f32-f64 49 32 位浮点数转 64 位浮点数 f64-i32 41 64 位浮点数转 32 位有符号 f64-i64 42 64 位浮点数转 64 位有符号 f64-u32 43 64 位浮点数转 32 位无符号 f64-u64 44 64 位浮点数转 64 位无符号 f64-f32 45 64 位浮点数转 32 位浮点数 数学运算指令 有二地址、三地址分类。 每类的主操作码不一致。 三地址操作 三地址文本格式： op.sub des,src,src2\n助记符 操作码 操作子码 目的寄存器 源寄存器 源操作数 注解 8 bit 8 bit 8 bit 4 bit 4 bit 指令宽度：32 bit math-I4 sub des src src2 8 bit 8 bit 16 bit 8 bit 8 bit 指令宽度：48 bit math-I16I8 sub des src src2 8 bit 8 bit 16 bit 16 bit 16 bit 指令宽度：64 bit math-I16 sub des src src2 子码定义 助记符 操作子码 注解 add-int32 0 32 位有符号 加 + sub-int32 1 32 位有符号 减 - mul-int32 2 32 位有符号 乘 * div-int32 3 32 位有符号 除 / mod-int32 4 32 位有符号 模 % add-uint32 5 32 位无符号 加 + sub-uint32 6 32 位无符号 减 - mul-uint32 7 32 位无符号 乘 * div-uint32 8 32 位无符号 除 / mod-uint32 9 32 位无符号 模 % add-int64 10 64 位有符号 加 + sub-int64 11 64 位有符号 减 - mul-int64 12 64 位有符号 乘 * div-int64 13 64 位有符号 除 / mod-int64 14 64 位有符号 add-uint64 15 64 位无符号 加 + sub-uint64 16 64 位无符号 减 - mul-uint64 17 64 位无符号 乘 * div-uint64 18 64 位无符号 除 / mod-uint64 19 64 位无符号 模 % add-flt32 20 32 位浮点 加 + sub-flt32 21 32 位浮点 减 - mul-flt32 22 32 位浮点 乘 * div-flt32 23 32 位浮点 除 / mod-flt32 24 32 位浮点 模 % add-flt64 25 64 位浮点 加 + sub-flt64 26 64 位浮点 减 - mul-flt64 27 64 位浮点 乘 * div-flt64 28 64 位浮点 除 / mod-flt64 29 64 位浮点 模 % sl-w32 30 32 位 左移 sr-w32 31 32 位 右移 sra-w32 32 32 位 算术右移 rol-w32 33 32 位 循环左移 ror-w32 34 32 位 循环右移 and-w32 35 32 位 位与 or-w32 36 32 位 位或 xor-w32 37 32 位 位异或 sl-w64 38 64 位 左移 sr-w64 39 64 位 右移 sra-w64 40 64 位 算术右移 rol-w32 41 64 位 循环左移 ror-w32 42 64 位 循环右移 and-w64 43 64 位 位与 or-w64 44 64 位 位或 xor-w64 45 64 位 位异或 andl-w32 46 32 位 逻辑与 orl-w32 47 32 位 逻辑或 cmp-int32 48 src \u003c src2 : des=-1 cmp-uint32 49 src == src2 : des=0 cmp-int64 50 src \u003e src2 : des=1 cmp-uint64 51 cmp-flt32 52 cmp-flt64 53 二地址操作 二地址文本格式： op.sub des,src\n助记符 操作码 操作子码 目的寄存器 源寄存器 源操作数 注解 8 bit 8 bit 8 bit 8 bit 指令宽度：32 bit math-I8 sub des src 8 bit 8 bit 16 bit 16 bit 指令宽度：48 bit math-I16 sub des src 子码定义 助记符 操作子码 注解 not-w32 0 32 位 按位取反 not-w64 1 64 位 按位取反 inv-w32 2 32 位 逻辑取反 inv-w64 3 64 位 逻辑取反 neg-int32 4 32 位 符号取反 neg-int64 5 64 位 符号取反 neg-flt32 6 32 位 符号取反 neg-flt64 7 64 位 符号取反 abs-int32 8 32 位 取绝对值 abs-int64 9 64 位 取绝对值 abs-flt32 10 32 位 取绝对值 abs-flt64 11 64 位 取绝对值 sin-flt32 12 三角函数 cos-flt32 13 三角函数 tan-flt32 14 三角函数 asin-flt32 15 三角函数 acos-flt32 16 三角函数 atan-flt32 17 三角函数 sin-flt64 18 三角函数 cos-flt64 19 三角函数 tan-flt64 20 三角函数 asin-flt64 21 三角函数 acos-flt64 22 三角函数 atan-flt64 23 三角函数 跳转指令 直接跳转指令 文本格式： goto imm\n助记符 操作码 对齐 立即数 注解 8 bit 8 bit 指令宽度： 16 bit goto8 imm 8 bit有符号偏移 8 bit 8 bit 16 bit 指令宽度： 32 bit goto16 imm 8 bit 8 bit 32 bit 指令宽度： 48 bit goto32 imm 分支跳转指令 文本格式 jbr src,src2,imm\rjbr src,imm\r类型编码：标识操作数的类型。 操作子码：标识比较方法。 和 0 比较时，无源操作数 src2。 助记符 操作码 操作子码 类型码 源操作数 源操作数 立即数 注解 8 bit 4 bit 4 bit 8 bit 8 bit 16 bit 指令宽度： 32 bit 8 bit 8 bit 32 bit 指令宽度： 32 bit 16 bit 16 bit 16 bit 指令宽度： 32 bit 16 bit 16 bit 32 bit 指令宽度： 32 bit src src2 imm 操作子码 助记符 操作子码 注解 eq 0 if( src == src2 ) goto imm ne 1 if( src != src2 ) goto imm lt 2 if( src \u003c src2 ) goto imm le 3 if( src \u003c= src2 ) goto imm gt 4 if( src \u003e src2 ) goto imm ge 5 if( src \u003e= src2 ) goto imm eqz 6 if( src == 0 ) goto imm nez 7 if( src != 0 ) goto imm ltz 8 if( src \u003c 0 ) goto imm lez 9 if( src \u003c= 0 ) goto imm gtz 10 if( src \u003e 0 ) goto imm gez 11 if( src \u003e= 0 ) goto imm 注意： 和 0 比较时，无源操作数 src2。\n类型码 助记符 操作子码 注解 int32 0 32 位有符号比较 uint32 1 32 位无符号比较 int64 2 64 位有符号比较 uint64 3 64 位无符号比较 flt32 4 32 位浮点数比较 flt64 5 64 位浮点数比较 返回指令 文本格式： op src op imm\n助记符 操作码 操作子码 立即数码 源操作数 注解 8 bit 8 bit 指令宽度： 16 bit return-void 无参数返回 return-w32-I8 返回 32 bit 值 return-w64-I8 返回 64 bit 值 8 bit 4 bit 4 bit 16/32/64 bit 操作子码 助记符 操作子码 注解 I16 0 寄存器索引16位 int32 1 立即数转换到32位有符号整数 uint32 2 立即数转换到32位有符号整数 int64 3 立即数转换到32位有符号整数 uint64 4 立即数转换到32位有符号整数 flt32 5 立即数转换到32位有符号整数 flt64 6 立即数转换到32位有符号整数 立即数码 助记符 操作子码 注解 B16 0 16 位立即数 B32 1 32 位立即数 B64 2 64 位立即数 函数调用指令 不固定参数调用 文本格式：op argcnt, arg,arg2,…,func\n助记符 操作码 参数个数 参数寄存器 函数 注解 8 bit 8 bit 16 bit 32 bit invoke-virtual-nofix argcnt arg… func 调用虚函数 invoke-direct-nofix argcnt arg… func 直接调用函数 invoke-static-nofix argcnt arg… func 调用静态函数 invoke-interface-nofix argcnt arg… func 调用接口函数 invoke-native-nofix argcnt arg… func 调用C语言函数 范围参数调用 文本格式：op argcnt,start, end,func\n助记符 操作码 参数个数 起始寄存器 结束寄存器索引 函数 注解 8 bit 8 bit 16 bit 16 bit 32 bit invoke-virtual-range argcnt arg… func 调用虚函数 invoke-direct-range argcnt arg… func 直接调用函数 invoke-static-range argcnt arg… func 调用静态函数 invoke-interface-range argcnt arg… func 调用接口函数 invoke-native-range argcnt arg… func 调用C语言函数 获取返回值指令 文本格式：op des\n助记符 操作码 对齐 源寄存器 注解 8 bit 8 bit 指令宽度： 16 bit get-result-w32-I8 des 获取32位返回值 get-result-w64-I8 des 获取64位返回值 get-result-obj-I8 des 获取对象返回值 8 bit 8 bit 16 bit 指令宽度： 32 bit get-result-w32-I16 des 获取32位返回值 get-result-w64-I16 des 获取64位返回值 get-result-obj-I16 des 获取对象返回值 异常处理指令 文本格式：op des\n助记符 操作码 对齐 源寄存器 注解 8 bit 8 bit 指令宽度： 16 bit get-exception-I8 des 获取异常对象 throw-I8 src 抛出异常对象 8 bit 8 bit 16 bit 指令宽度： 32 bit get-exception-I16 des 获取异常对象 throw-I16 src 抛出异常对象 ",
    "description": "",
    "tags": null,
    "title": "2 基于寄存器的指令集",
    "uri": "/3_compiler/7_instruction/2_registerbasedinsset/index.html"
  },
  {
    "content": "1 序 语法分析就是将词法分析提供单词(Token)流，按照语法规则构建抽象语法分析树，为语义分析提供数据骨架。\n2 目录 1 类型系统设计与实现 2 抽象语法树设计与实现 3 代码文件文件管理 4 顶层语法解析实现 5 解析表达式 6 解析声明 7 解析声明续 ",
    "description": "",
    "tags": null,
    "title": "2 语法分析",
    "uri": "/3_compiler/2_parser/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "单向节点链表",
    "uri": "/2_struct/list/singlelinkedlist/index.html"
  },
  {
    "content": "目录 链表 单向节点链表 双向节点链表 待续 ",
    "description": "",
    "tags": null,
    "title": "数据结构",
    "uri": "/2_struct/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "2 ELF64 格式",
    "uri": "/6_format/2_program/1_elf/2_elf64/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "2 HSL/HSV",
    "uri": "/6_format/3_color/2_hsl/index.html"
  },
  {
    "content": "原文来自：https://www.cnblogs.com/Kingfans/p/16552308.html\n一、基本介绍 MD系列算法是信息摘要三大算法中的一种，全称：Message Digest算法，按照规范版本分为MD2、MD4、MD5三种算法，目前最常用的是MD5版本算法。本文介绍MD4算法的实现原理。\n1990 年，罗纳德·李维斯特教授开发出较之 MD2 算法有着更高安全性的 MD4 算法。在这个算法中，我们仍需对信息进行数据补位。不同的是，这种补位使其信息的字节长度加上 448 个字节后能成为 512 的倍数（信息字节长度 mod 512 = 448）。此外，关于 MD4 算法的处理与 MD2 算法又有很大差别。但最终仍旧是会获得一个 128 位的散列值。MD4 算法对后续消息摘要算法起到了推动作用，许多比较有名的消息摘要算法都是在 MD4 算法的基础上发展而来的，如 MD5、SHA-1、RIPE-MD 和 HAVAL 算法等。\n二、实现原理 有关 MD4 算法详情请参见 RFC 1320 http://www.ietf.org/rfc/rfc1320.txt，RFC 1320 是MD4算法的官方文档，其实现原理共分为5步：\n第1步：字节填充(Append Padding Bytes) 数据先补上1个1比特，再补上k个0比特，使得补位后的数据比特数(n+1+k)满足(n+1+k) mod 512 = 448，k取最小正整数。\n第2步：追加长度信息(Append Length) 数据比特位的数据长度追加到最后8字节中。\n第3步：初始化MD Buffer(Initialize MD Buffer) 这一步最简单了，定义ABCD四个4字节数组，分别赋初值即可。\n1\r2\r3\r4\ruint32_t A = 0x67452301; // [ 0x01, 0x23, 0x45, 0x67 ]\ruint32_t B = 0xEFCDAB89; // [ 0x89, 0xAB, 0xCD, 0xEF ]\ruint32_t C = 0x98BADCFE; // [ 0xFE, 0xDC, 0xBA, 0x98 ]\ruint32_t D = 0x10325476; // [ 0x76, 0x54, 0x32, 0x10 ] 第4步：处理消息块(Process Message in 16-Byte Blocks) 这个是MD4算法最核心的部分了，对第2步组装数据进行分块依次处理。\nProcess each 16-word block. */\rFor i = 0 to N/16-1 do\r/* Copy block i into X. */\rFor j = 0 to 15 do\rSet X[j] to M[i*16+j].\rend /* of loop on j */\r/* Save A as AA, B as BB, C as CC, and D as DD. */\rAA = A\rBB = B\rCC = C\rDD = D\r/* Round 1. */\r/* Let [abcd k s] denote the operation\ra = (a + F(b,c,d) + X[k]) \u003c\u003c\u003c s. */\r/* Do the following 16 operations. */\r[ABCD 0 3] [DABC 1 7] [CDAB 2 11] [BCDA 3 19]\r[ABCD 4 3] [DABC 5 7] [CDAB 6 11] [BCDA 7 19]\r[ABCD 8 3] [DABC 9 7] [CDAB 10 11] [BCDA 11 19]\r[ABCD 12 3] [DABC 13 7] [CDAB 14 11] [BCDA 15 19]\r/* Round 2. */\r/* Let [abcd k s] denote the operation\ra = (a + G(b,c,d) + X[k] + 5A827999) \u003c\u003c\u003c s. */\r/* Do the following 16 operations. */\r[ABCD 0 3] [DABC 4 5] [CDAB 8 9] [BCDA 12 13]\r[ABCD 1 3] [DABC 5 5] [CDAB 9 9] [BCDA 13 13]\r[ABCD 2 3] [DABC 6 5] [CDAB 10 9] [BCDA 14 13]\r[ABCD 3 3] [DABC 7 5] [CDAB 11 9] [BCDA 15 13]\r/* Round 3. */\r/* Let [abcd k s] denote the operation\ra = (a + H(b,c,d) + X[k] + 6ED9EBA1) \u003c\u003c\u003c s. */\r/* Do the following 16 operations. */\r[ABCD 0 3] [DABC 8 9] [CDAB 4 11] [BCDA 12 15]\r[ABCD 2 3] [DABC 10 9] [CDAB 6 11] [BCDA 14 15]\r[ABCD 1 3] [DABC 9 9] [CDAB 5 11] [BCDA 13 15]\r[ABCD 3 3] [DABC 11 9] [CDAB 7 11] [BCDA 15 15]\r/* Then perform the following additions. (That is, increment each\rof the four registers by the value it had before this block\rwas started.) */\rA = A + AA\rB = B + BB\rC = C + CC\rD = D + DD\rend /* of loop on i */第5步：输出(Output) 这一步也非常简单，只需要将计算后的A、B、C、D进行拼接输出即可。\n三、示例讲解 代码实现 #include \u003cstring.h\u003e #include \u003cstdio.h\u003e #define HASH_BLOCK_SIZE 64 /* 512 bits = 64 bytes */ #define HASH_LEN_SIZE 8 /* 64 bits = 8 bytes */ #define HASH_LEN_OFFSET 56 /* 64 bytes - 8 bytes */ #define HASH_DIGEST_SIZE 16 /* 128 bits = 16 bytes */ #define HASH_ROUND_NUM 64 typedef unsigned char uint8_t; typedef unsigned short int uint16_t; typedef unsigned int uint32_t; typedef unsigned long long uint64_t; static uint32_t F(uint32_t X, uint32_t Y, uint32_t Z) { return (X \u0026 Y) | ((~X) \u0026 Z); } static uint32_t G(uint32_t X, uint32_t Y, uint32_t Z) { return (X \u0026 Y) | (X \u0026 Z) | (Y \u0026 Z); } static uint32_t H(uint32_t X, uint32_t Y, uint32_t Z) { return X ^ Y ^ Z; } /* 循环向左移动offset个单位 */ static uint32_t MoveLeft(uint32_t X, uint8_t offset) { return (X \u003c\u003c offset) | (X \u003e\u003e (32 - offset)); } static uint32_t Round1(uint32_t A, uint32_t B, uint32_t C, uint32_t D, uint32_t M, uint32_t N) { return MoveLeft(A + F(B, C, D) + M, N); } static uint32_t Round2(uint32_t A, uint32_t B, uint32_t C, uint32_t D, uint32_t M, uint32_t N) { return MoveLeft(A + G(B, C, D) + M + 0x5A827999, N); } static uint32_t Round3(uint32_t A, uint32_t B, uint32_t C, uint32_t D, uint32_t M, uint32_t N) { return MoveLeft(A + H(B, C, D) + M + 0x6ED9EBA1, N); } #define ASSERT_RETURN_INT(x, d) if(!(x)) { return d; } int md4(unsigned char *out, const unsigned char* in, const int inlen) { ASSERT_RETURN_INT(out \u0026\u0026 in \u0026\u0026 (inlen \u003e 0), 1); int i = 0, j = 0, k = 0; unsigned char L = 0, t = 0; // step 1: 字节填充(Append Padding Bytes) // 数据先补上1个1比特，再补上k个0比特，使得补位后的数据比特数(n+1+k)满足(n+1+k) mod 512 = 448，k取最小正整数 int iX = inlen / HASH_BLOCK_SIZE; int iY = inlen % HASH_BLOCK_SIZE; iX = (iY \u003c HASH_LEN_OFFSET) ? iX : (iX + 1); int iLen = (iX + 1) * HASH_BLOCK_SIZE; unsigned char* M = malloc(iLen); memcpy(M, in, inlen); // 先补上1个1比特+7个0比特 M[inlen] = 0x80; // 再补上(k-7)个0比特 for (i = inlen + 1; i \u003c (iX * HASH_BLOCK_SIZE + HASH_LEN_OFFSET); i++) { M[i] = 0; } // step 2: 追加长度信息(Append Length) uint64_t *pLen = (uint64_t*)(M + (iX * HASH_BLOCK_SIZE + HASH_LEN_OFFSET)); *pLen = inlen \u003c\u003c 3; // Step 3. 初始化MD Buffer(Initialize MD Buffer) uint32_t A = 0x67452301; // [ 0x01, 0x23, 0x45, 0x67 ] uint32_t B = 0xEFCDAB89; // [ 0x89, 0xAB, 0xCD, 0xEF ] uint32_t C = 0x98BADCFE; // [ 0xFE, 0xDC, 0xBA, 0x98 ] uint32_t D = 0x10325476; // [ 0x76, 0x54, 0x32, 0x10 ] uint32_t X[HASH_BLOCK_SIZE / 4] = { 0 }; // step 4: 处理消息块(Process Message in 64-Byte Blocks) for (i = 0; i \u003c iLen / HASH_BLOCK_SIZE; i++) { /* Copy block i into X. */ for (j = 0; j \u003c HASH_BLOCK_SIZE; j = j + 4) { uint32_t* temp = \u0026M[i * HASH_BLOCK_SIZE + j]; X[j/4] = *temp; } /* Save A as AA, B as BB, C as CC, and D as DD. */ uint32_t AA = A; uint32_t BB = B; uint32_t CC = C; uint32_t DD = D; /* Round 1. */ /* Let [abcd k s] denote the operation a = (a + F(b,c,d) + X[k]) \u003c\u003c\u003c s. */ /* Do the following 16 operations. [ABCD 0 3][DABC 1 7][CDAB 2 11][BCDA 3 19] [ABCD 4 3][DABC 5 7][CDAB 6 11][BCDA 7 19] [ABCD 8 3][DABC 9 7][CDAB 10 11][BCDA 11 19] [ABCD 12 3][DABC 13 7][CDAB 14 11][BCDA 15 19] */ A = Round1(A, B, C, D, X[0], 3); D = Round1(D, A, B, C, X[1], 7); C = Round1(C, D, A, B, X[2], 11); B = Round1(B, C, D, A, X[3], 19); A = Round1(A, B, C, D, X[4], 3); D = Round1(D, A, B, C, X[5], 7); C = Round1(C, D, A, B, X[6], 11); B = Round1(B, C, D, A, X[7], 19); A = Round1(A, B, C, D, X[8], 3); D = Round1(D, A, B, C, X[9], 7); C = Round1(C, D, A, B, X[10], 11); B = Round1(B, C, D, A, X[11], 19); A = Round1(A, B, C, D, X[12], 3); D = Round1(D, A, B, C, X[13], 7); C = Round1(C, D, A, B, X[14], 11); B = Round1(B, C, D, A, X[15], 19); /* Round 2. */ /* Let [abcd k s] denote the operation a = (a + G(b,c,d) + X[k] + 5A827999) \u003c\u003c\u003c s. */ /* Do the following 16 operations. [ABCD 0 3][DABC 4 5][CDAB 8 9][BCDA 12 13] [ABCD 1 3][DABC 5 5][CDAB 9 9][BCDA 13 13] [ABCD 2 3][DABC 6 5][CDAB 10 9][BCDA 14 13] [ABCD 3 3][DABC 7 5][CDAB 11 9][BCDA 15 13] */ A = Round2(A, B, C, D, X[0], 3); D = Round2(D, A, B, C, X[4], 5); C = Round2(C, D, A, B, X[8], 9); B = Round2(B, C, D, A, X[12], 13); A = Round2(A, B, C, D, X[1], 3); D = Round2(D, A, B, C, X[5], 5); C = Round2(C, D, A, B, X[9], 9); B = Round2(B, C, D, A, X[13], 13); A = Round2(A, B, C, D, X[2], 3); D = Round2(D, A, B, C, X[6], 5); C = Round2(C, D, A, B, X[10], 9); B = Round2(B, C, D, A, X[14], 13); A = Round2(A, B, C, D, X[3], 3); D = Round2(D, A, B, C, X[7], 5); C = Round2(C, D, A, B, X[11], 9); B = Round2(B, C, D, A, X[15], 13); /* Round 3. */ /* Let [abcd k s] denote the operation a = (a + H(b,c,d) + X[k] + 6ED9EBA1) \u003c\u003c\u003c s. */ /* Do the following 16 operations. [ABCD 0 3][DABC 8 9][CDAB 4 11][BCDA 12 15] [ABCD 2 3][DABC 10 9][CDAB 6 11][BCDA 14 15] [ABCD 1 3][DABC 9 9][CDAB 5 11][BCDA 13 15] [ABCD 3 3][DABC 11 9][CDAB 7 11][BCDA 15 15] */ A = Round3(A, B, C, D, X[0], 3); D = Round3(D, A, B, C, X[8], 9); C = Round3(C, D, A, B, X[4], 11); B = Round3(B, C, D, A, X[12], 15); A = Round3(A, B, C, D, X[2], 3); D = Round3(D, A, B, C, X[10], 9); C = Round3(C, D, A, B, X[6], 11); B = Round3(B, C, D, A, X[14], 15); A = Round3(A, B, C, D, X[1], 3); D = Round3(D, A, B, C, X[9], 9); C = Round3(C, D, A, B, X[5], 11); B = Round3(B, C, D, A, X[13], 15); A = Round3(A, B, C, D, X[3], 3); D = Round3(D, A, B, C, X[11], 9); C = Round3(C, D, A, B, X[7], 11); B = Round3(B, C, D, A, X[15], 15); /* Then perform the following additions. (That is, increment each of the four registers by the value it had before this block was started.) */ A = A + AA; B = B + BB; C = C + CC; D = D + DD; } // step 5: 输出ABCD memcpy(out + 0, \u0026A, 4); memcpy(out + 4, \u0026B, 4); memcpy(out + 8, \u0026C, 4); memcpy(out + 12, \u0026D, 4); free(M); return 0; } int main() { unsigned char digest[16] = { 0 }; md4(digest, \"Hello World!\", strlen(\"Hello World!\")); return 0; }",
    "description": "",
    "tags": [
      "Hash",
      "MD"
    ],
    "title": "2 MD4 算法",
    "uri": "/1_algorithms/2_hash/1_md/2_md4/index.html"
  },
  {
    "content": "原文来自:https://www.cnblogs.com/Kingfans/p/16572411.html\n一、基本介绍 SHA (Security Hash Algorithm) 是美国的 NIST 和 NSA 设计的一种标准的 Hash 算法，SHA 用于数字签名的标准算法的 DSS 中，也是安全性很高的一种 Hash 算法。\nSHA-1 是第一代 SHA 算法标准，后来的 SHA-224、SHA-256、SHA-384 和 SHA-512 被统称为 SHA-2。本文介绍SHA2-224算法的实现原理。\n二、实现原理 有关 SHA2-224 算法详情请参见 NIST.FIPS.180-4 。\nNIST.FIPS.180-4 是SHA2-224算法的官方文档，（建议了解SHA2-224算法前，先了解下SHA2-256 sha2-256算法实现原理深剖 ）其实现原理共分为5步：\n第1步：字节填充(Append Padding Bytes) 数据先补上1个1比特，再补上k个0比特，使得补位后的数据比特数(n+1+k)满足(n+1+k) mod 512 = 448，k取最小正整数。\n第2步：追加长度信息(Append Length) 数据比特位的数据长度追加到最后8字节中。\n第3步：初始化MD Buffer(Initialize MD Buffer) 这一步最简单了，定义ABCD四个4字节数组，分别赋初值即可。\nuint32_t H0 = 0xC1059ED8; uint32_t H1 = 0x367CD507; uint32_t H2 = 0x3070DD17; uint32_t H3 = 0xF70E5939; uint32_t H4 = 0xFFC00B31; uint32_t H5 = 0x68581511; uint32_t H6 = 0x64F98FA7; uint32_t H7 = 0xBEFA4FA4;第4步：处理消息块(Process Message in 16-Byte Blocks) 这个是SHA2-224算法最核心的部分了，对第2步组装数据进行分块依次处理。\n第5步：输出(Output) 这一步也非常简单，只需要将计算后的H0、H1、H2、H3、H4、H5、H6进行拼接输出即可。\n三、示例讲解 由于SHA2–224与SHA2-256算法完全一致，只是hash value初始赋值和输出结果不同。\n具体示例讲解看参考SHA2-256示例讲解，此处不再重复。\n四、代码实现 以下为C/C++代码实现：\n#include \u003cstring.h\u003e #include \u003cstdio.h\u003e #define HASH_BLOCK_SIZE 64 /* 512 bits = 64 bytes */ #define HASH_LEN_SIZE 8 /* 64 bits = 8 bytes */ #define HASH_LEN_OFFSET 56 /* 64 bytes - 8 bytes */ #define HASH_DIGEST_SIZE 16 /* 128 bits = 16 bytes */ #define HASH_ROUND_NUM 64 typedef unsigned char uint8_t; typedef unsigned short int uint16_t; typedef unsigned int uint32_t; typedef unsigned long long uint64_t; /* SHA256 Constants */ static const uint32_t K[HASH_ROUND_NUM] = { 0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786, 0x0FC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA, 0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2 }; /* Swap bytes in 32 bit value. 0x01234567 -\u003e 0x67452301 */ #define __bswap_32(x) \\ ((((x) \u0026 0xff000000) \u003e\u003e 24) \\ | (((x) \u0026 0x00ff0000) \u003e\u003e 8) \\ | (((x) \u0026 0x0000ff00) \u003c\u003c 8) \\ | (((x) \u0026 0x000000ff) \u003c\u003c 24)) static uint32_t Ch(uint32_t X, uint32_t Y, uint32_t Z) { return (X \u0026 Y) ^ ((~X) \u0026 Z); } static uint32_t Maj(uint32_t X, uint32_t Y, uint32_t Z) { return (X \u0026 Y) ^ (X \u0026 Z) ^ (Y \u0026 Z); } /* 循环向右移动offset个比特位 */ static uint32_t ROTR(uint32_t X, uint8_t offset) { uint32_t res = (X \u003e\u003e offset) | (X \u003c\u003c (32 - offset)); return res; } /* 向右移动offset个比特位 */ static uint32_t SHR(uint32_t X, uint8_t offset) { uint32_t res = X \u003e\u003e offset; return res; } /* SIGMA0 */ static uint32_t SIGMA0(uint32_t X) { return ROTR(X, 2) ^ ROTR(X, 13) ^ ROTR(X, 22); } /* SIGMA1 */ static uint32_t SIGMA1(uint32_t X) { return ROTR(X, 6) ^ ROTR(X, 11) ^ ROTR(X, 25); } /* sigma0, different from SIGMA0 */ static uint32_t sigma0(uint32_t X) { uint32_t res = ROTR(X, 7) ^ ROTR(X, 18) ^ SHR(X, 3); return ROTR(X, 7) ^ ROTR(X, 18) ^ SHR(X, 3); } /* sigma1, different from SIGMA1 */ static uint32_t sigma1(uint32_t X) { return ROTR(X, 17) ^ ROTR(X, 19) ^ SHR(X, 10); } #define ASSERT_RETURN_INT(x, d) if(!(x)) { return d; } int sha2_224(unsigned char *out, const unsigned char* in, const int inlen) { ASSERT_RETURN_INT(out \u0026\u0026 in \u0026\u0026 (inlen \u003e= 0), 1); int i = 0, j = 0, t = 0; // step 1: 字节填充(Append Padding Bytes) // 数据先补上1个1比特，再补上k个0比特，使得补位后的数据比特数(n+1+k)满足(n+1+k) mod 512 = 448，k取最小正整数 int iX = inlen / HASH_BLOCK_SIZE; int iY = inlen % HASH_BLOCK_SIZE; iX = (iY \u003c HASH_LEN_OFFSET) ? iX : (iX + 1); int iLen = (iX + 1) * HASH_BLOCK_SIZE; unsigned char* X = malloc(iLen); memcpy(X, in, inlen); // 先补上1个1比特+7个0比特 X[inlen] = 0x80; // 再补上(k-7)个0比特 for (i = inlen + 1; i \u003c (iX * HASH_BLOCK_SIZE + HASH_LEN_OFFSET); i++) { X[i] = 0; } // step 2: 追加长度信息(Append Length) uint8_t *pLen = (uint64_t*)(X + (iX * HASH_BLOCK_SIZE + HASH_LEN_OFFSET)); uint64_t iTempLen = inlen \u003c\u003c 3; uint8_t *pTempLen = \u0026iTempLen; pLen[0] = pTempLen[7]; pLen[1] = pTempLen[6]; pLen[2] = pTempLen[5]; pLen[3] = pTempLen[4]; pLen[4] = pTempLen[3]; pLen[5] = pTempLen[2]; pLen[6] = pTempLen[1]; pLen[7] = pTempLen[0]; // Step 3. 初始化MD Buffer(Initialize MD Buffer) uint32_t H0 = 0xC1059ED8; uint32_t H1 = 0x367CD507; uint32_t H2 = 0x3070DD17; uint32_t H3 = 0xF70E5939; uint32_t H4 = 0xFFC00B31; uint32_t H5 = 0x68581511; uint32_t H6 = 0x64F98FA7; uint32_t H7 = 0xBEFA4FA4; uint32_t M[HASH_BLOCK_SIZE / 4] = { 0 }; uint32_t W[HASH_ROUND_NUM] = { 0 }; // step 4: 处理消息块(Process Message in 64-Byte Blocks) for (i = 0; i \u003c iLen / HASH_BLOCK_SIZE; i++) { /* Copy block i into M. */ for (j = 0; j \u003c HASH_BLOCK_SIZE; j = j + 4) { uint64_t k = i * HASH_BLOCK_SIZE + j; M[j / 4] = (X[k] \u003c\u003c 24) | (X[k + 1] \u003c\u003c 16) | (X[k + 2] \u003c\u003c 8) | X[k + 3]; } /* W[t]=M[t]; t:[0,15] */ for (t = 0; t \u003c= 15; t++) { W[t] = M[t]; } /* W[t] = sigma1(W[t - 2]) + W[t - 7] + sigma0(W[t - 15]) + W[t - 16]; t:[16,63] */ for (t = 16; t \u003c HASH_ROUND_NUM; t++) { W[t] = sigma1(W[t - 2]) + W[t - 7] + sigma0(W[t - 15]) + W[t - 16]; } uint32_t A = H0; uint32_t B = H1; uint32_t C = H2; uint32_t D = H3; uint32_t E = H4; uint32_t F = H5; uint32_t G = H6; uint32_t H = H7; for (t = 0; t \u003c HASH_ROUND_NUM; t++) { uint32_t T1 = H + SIGMA1(E) + Ch(E, F, G) + K[t] + W[t]; uint32_t T2 = SIGMA0(A) + Maj(A, B, C); H = G; G = F; F = E; E = D + T1; D = C; C = B; B = A; A = T1 + T2; } H0 = H0 + A; H1 = H1 + B; H2 = H2 + C; H3 = H3 + D; H4 = H4 + E; H5 = H5 + F; H6 = H6 + G; H7 = H7 + H; } // step 5: 输出 uint32_t* pOut = (uint8_t*)out; pOut[0] = __bswap_32(H0); pOut[1] = __bswap_32(H1); pOut[2] = __bswap_32(H2); pOut[3] = __bswap_32(H3); pOut[4] = __bswap_32(H4); pOut[5] = __bswap_32(H5); pOut[6] = __bswap_32(H6); free(X); return 0; } int main() { unsigned char digest[28] = { 0 }; sha2_224(digest, \"Hello World!\", strlen(\"Hello World!\")); return 0; }",
    "description": "",
    "tags": [
      "Hash",
      "SHA"
    ],
    "title": "2 SHA2-224 算法",
    "uri": "/1_algorithms/2_hash/2_sha/2_sha2_224/index.html"
  },
  {
    "content": "1 序 2 目录 1 ELF 格式 1 ELF32 格式 2 ELF64 格式 ",
    "description": "",
    "tags": null,
    "title": "2 程序格式",
    "uri": "/6_format/2_program/index.html"
  },
  {
    "content": " 分段(或叫分节，后续默认叫法为分段)的二进制文件格式是比较常见的，比如编译器 GCC 输出的目标文件一般为 ELF 的分段文件。\n1 整体结构 这类文件一般采用 文件头 + 分段 的结构：\nfile header section 0\rsection 1\r....\rsection N\r文件头设计方法在 文件头 中介绍，本章节主要描述分段式存储数据的方法。\n2 分段方法 一般有两种结构：\n分散式：在分区的头部的描述分段的大小等信息。 段表式：存在统一的结构描述分段的大小、相对偏移等信息。 分散式 分散式分结构在分区的头部的描述分段的大小等信息，然后各个分段首尾相连的，分段写入。\n分段的每一个段的结构通常是：\ntag + length\rsection data\rtag 和 length 合起来是分区头部，描述分段中的数据标识，后面紧跟着体数据。\ntag 一般是一个整数，用来标识分区的类型。不同的分区用不同的 tag 值表示，不同的分区种类可以使用不同的读取方式。\n整体结构如下：\nfile header section 0\rtag //section 0 的标识\rlength //section 0 的数据长度\rdata[] //section 0 的数据\rsection 1\r....\rsection N\r段表式 段表式的结构是有一个描述分段信息的段表，后面存储各个分区的数据。\n主要优点就是，可以通过段描述表(简称段表)快速的访问分段的内容，其格式如下。\nsection table\rsection 0\rsection 1\r....\rsection N\r段表一般描述分段的类型、数据长度、相对偏移等，结构如下。\nkind\rlength\roffset\rC 语言定义如下：\nstruct SegTabItem{ uint32 kind; //类型 uint32 length; //数据长度 uint32 offset; //相对偏移 };整体结构如下：\nfile header section table\rkind //section 0 的类型\rlength //section 0 的数据长度\roffset //section 0 的相对偏移\rkind //section 1 的类型\rlength //section 1 的数据长度\roffset //section 1 的相对偏移\r...\rkind //section N 的类型\rlength //section N 的数据长度\roffset //section N 的相对偏移\rsection 0\rsection 1\r....\rsection N ",
    "description": "",
    "tags": null,
    "title": "2 段节格式",
    "uri": "/6_format/1_general/2_segmentformat/index.html"
  },
  {
    "content": "目录 1 消息摘要算法 1 MD2 算法 2 MD4 算法 3 MD5 算法 2 签名算法 1 SHA1 算法 2 SHA2-224 算法 3 SHA2-256 算法 4 SHA2-384 算法 5 SHA2-512 算法 3 CRC 哈希函数 ",
    "description": "",
    "tags": null,
    "title": "2 哈希函数",
    "uri": "/1_algorithms/2_hash/index.html"
  },
  {
    "content": "原文来自：https://www.cnblogs.com/Kingfans/p/16546386.html\n简介 SHA (Security Hash Algorithm) 是美国的 NIST 和 NSA 设计的一种标准的 Hash 算法，SHA 用于数字签名的标准算法的 DSS 中，也是安全性很高的一种 Hash 算法。\nSHA系列家族 1 SHA1 算法 2 SHA2-224 算法 3 SHA2-256 算法 4 SHA2-384 算法 5 SHA2-512 算法 ",
    "description": "",
    "tags": [
      "Hash"
    ],
    "title": "2 签名算法",
    "uri": "/1_algorithms/2_hash/2_sha/index.html"
  },
  {
    "content": "位域定义 C语言中的位域定义：\nstruct Bits{ uint32_t b2:2; uint32_t b4:4; };提取位域定义的值算法如下：\n符号定义： w :定义的位宽，如 b2 的位宽为 2 bit； p :位域字段的位偏移，如 b2 的位偏移为 0，b4 的位偏移为 2； v :位域字段所在的整体数据值，如 b2 就在 uint32_t 的数据上； r :计算的结果； 第1步：计算位域掩码 mask = (1 \u003c\u003c w) - 1\r第2步：逻辑右移 tv = v \u003e\u003e p\r第3步：截取域至 v = tv \u0026 mask\r总结 r = (v \u003e\u003e p) \u0026 ( (1 \u003c\u003c w) - 1)\r如果v是有符号数，就需要进行符号扩展。\n符号扩展 第1步：计算符号掩码 smask = 1 \u003c\u003c (w-1)\r第2步：计算符号位值 signed = r \u0026 smask\r第3步：符号扩展 signed != 0 ? ( r = r | (-1 « w) ) : r\n总结 ( (1 « (w-1)) \u0026 r) != 0 ? ( r = r | (-1 « w) ) : r\n",
    "description": "",
    "tags": [
      "Bitwise"
    ],
    "title": "2 位域值提取",
    "uri": "/1_algorithms/3_bitwise/2_bitfield/index.html"
  },
  {
    "content": "待续\n",
    "description": "",
    "tags": null,
    "title": "3 代码文件文件管理",
    "uri": "/3_compiler/2_parser/3_fileunit/index.html"
  },
  {
    "content": "待续\n",
    "description": "",
    "tags": null,
    "title": "3 工程文件解析",
    "uri": "/3_compiler/1_lexer/3_project/index.html"
  },
  {
    "content": "airlang 的关键字分为两种：普通关键字，宏关键字。 两者差别不大，但是宏关键字有特殊的标记作用，一般用于注解一些信息。\n宏关键字 关键字 注解 @file 代码中获取文件的名称字符串 @line 代码中获取代码所作行号数字 @func 代码中获取函数声明字符串 @debug 用于标记只在debug标志下启用的代码 @NotNulptr 用于标记需要检查函数的指针参数非空 @override 标记非静态成员函数是重写父类的函数 普通关键字 固定位宽类型关键字 注解 位宽(bit) void 空，一般用于表示无返回值 0 bool 布尔类型 8 flt32 32位单精度浮点 32 flt64 64位双精度浮点 32 int8 8位有符号整数 8 int16 8位有符号整数 16 int32 8位有符号整数 32 int64 8位有符号整数 64 uint8 8位无符号整数 8 uint16 16位无符号整数 16 uint32 32位无符号整数 32 uint64 64位无符号整数 64 char 字符 8 可变位宽类型的位宽由编译的目标CPU架构有关。\n可变位宽类型关键字注解CPU32CPU64\rsint有符号整数 3264\ruint无符号整数 3264\ruintptr指针 3264\rcstring字符串指针 3264\r修饰关键字 注解 static 静态 public 完全公开的 protected 对部分成员公开的 private 私有的 成员 const 常量化，只读 friend 友元定义 分支关键字 注解 if 比较分支 elsif 次比较分支 else 比较默认分支 for 循环 foreach 循环 while 循环 do 循环 break 跳出循环 continue 继续下一轮循环 goto 跳转到标签 return 函数返回 类型定义关键字 注解 enum 枚举 struct 结构体 union 联合体 interface 接口 class 类 entrust 委托指针 其他关键字 注解 false true nullptr this super ",
    "description": "",
    "tags": null,
    "title": "3 关键字",
    "uri": "/3_compiler/8_langdef/3_keyword/index.html"
  },
  {
    "content": "本章节描述的是作者按照 RISC 指令系统设计的虚拟机指令集。\n其类似与硬件指令集，可作为编译器后端指令系统目标，用于提供类似硬件指令系统环境，避免编译原理初学者陷入对硬件指令系统不了解的深渊。 降低学习难度，提高学习效率。\n这类指令的主要特点如下：\n1 寄存器的数量固定； 2 指令所操作的寄存器数量固定； 3 指令的含义简单； 1 寄存器 虚拟机的寄存器分为三种：\n1 整数寄存器：主要用于整数运算，位宽为 64 bit，根据指令的含义可选择 32 bit 和 64 bit 运算模式。 2 浮点寄存器：主要用于浮点数运算，位宽为 64 bit，和通用寄存器一致，可选择位宽模式。 3 系统寄存器：对用户不可见，与虚拟机运行系统相关，对其进行操作隐藏在相关指令的实现细节中。 4 根据指令格式，整数寄存器、浮点寄存器最多可以有32个。 2 指令格式 每条指令是 32bit 大小对齐的，其中最低 9bit 是操作码，其余23bit作为操作数或者操作码的补充。如下表所示：\n操作码 操作数 9 bit 23 bit 2.1 格式1 操作码 操作数 9 bit 23 bit 2.2 格式2 多数指令使用此格式。\n操作码 目的操作数 源操作数 源操作数 操作子码 9 bit 5 bit 5 bit 5 bit 8 bit 2.3 格式3 该格式主要用于比较指令后的三元选择赋值操作。\n操作码 目的操作数 源操作数 源操作数 源操作数 操作子码 9 bit 5 bit 5 bit 5 bit 5 bit 3 bit 2.4 格式4 当指令中需要使用立即数时，且在指令中没有足够的空间可以存储时，可以使用指令后跟32bit对齐的立即数操作数。\n32bit立即数：32bit 指令跟 1 个 32bit 立即数，虚拟机解析执行时，按照指令表达的语义参与运算。 64bit立即数：32bit 指令跟 2 个 32bit 立即数，虚拟机解析执行时，按照指令表达的语义，组合成 64bit，后参与运算。 其他位宽的立即数类似。 格式如下所示：\n指令 立即数 1 立即数 2 … 立即数 n 32 bit 32 bit 32 bit … 32 bit 3 寄存器与寄存器—指令集 3.1 空指令 空指令一般用于对齐，在本指令集中没有特殊含义，执行空操作。\n格式如下：\n助记符 操作码 操作数 9 bit 23 bit Nop 0 0 3.2 算术运算 算术运算包含 +、-、*、/、%，支持的运算类型有 int32、uint32、int64、uint64、flt32、flt64。\n文本格式： op des,src,src2 指令含义：des = src op src2 子操作码：可以用于将运算结果进行截断、扩展。 助记符后缀的数字(32、64)标识指令运算使用的寄存器位宽。 助记符后缀的 i 表示进行有符号运算。 助记符后缀的 u 表示进行无符号运算。 助记符后缀的 f 表示进行有符号运算。 指令格式如下所示：\n助记符 操作码 目的操作数 源操作数 源操作数 操作子码 9 bit 5 bit 5 bit 5 bit 8 bit add-i32 des src src2 sub-i32 des src src2 mul-i32 des src src2 div-i32 des src src2 mod-i32 des src src2 add-u32 des src src2 sub-u32 des src src2 mul-u32 des src src2 div-u32 des src src2 mod-u32 des src src2 add-i64 des src src2 sub-i64 des src src2 mul-i64 des src src2 div-i64 des src src2 mod-i64 des src src2 add-u64 des src src2 sub-u64 des src src2 mul-u64 des src src2 div-u64 des src src2 mod-u64 des src src2 add-f32 des src src2 sub-f32 des src src2 mul-f32 des src src2 div-f32 des src src2 add-f64 des src src2 sub-f64 des src src2 mul-f64 des src src2 div-f64 des src src2 3.2 位运算 位运算包括位相关的与、或、非、异或、移位、取反等运算。\n支持的运算类型有 uint32、uint64。\n文本格式： op des,src,src2 指令含义：des = src op src2 子操作码：可以用于将运算结果进行截断、扩展。 i32：表示进行 32bit 的位运算。 i64：表示进行 64bit 的位运算。 位运算都是看作无符号运算。 指令格式如下所示：\n助记符 操作码 目的操作数 源操作数 源操作数 操作子码 9 bit 5 bit 5 bit 5 bit 8 bit sl-i32 des src src2 sr-i32 des src src2 sra-i32 des src src2 and-i32 des src src2 or-i32 des src src2 xor-i32 des src src2 andn-i32 des src src2 orn-i32 des src src2 xorn-i32 des src src2 not-i32 des src src2 sl-i64 des src src2 sr-i64 des src src2 sra-i64 des src src2 and-i64 des src src2 or-i64 des src src2 xor-i64 des src src2 andn-i64 des src src2 orn-i64 des src src2 xorn-i64 des src src2 not-i64 des src src2 3.3 逻辑比较 逻辑比较运算包括：\u003c、\u003e、\u003c=、\u003e=、==、!=、 ==0、！=0. 支持的运算类型有 int32、uint32、int64、uint64、flt32\\flt64。\n文本格式： op des,src,src2 指令含义：des = src op src2 子操作码：可以用于标识比较的方法。 比较的结果，存储在整数寄存器中，且使用位宽 64 bit，即des是整数寄存器。 指令格式如下所示：\n助记符 操作码 目的操作数 源操作数 源操作数 操作子码 9 bit 5 bit 5 bit 5 bit 8 bit cmp-i32 des src src2 cmp-u32 des src src2 cmp-i64 des src src2 cmp-u64 des src src2 cmp-f32 des src src2 cmp-f64 des src src2 操作子码定义如下：\n助记符 操作码 含义 lt \u003c le \u003c= gt \u003e ge \u003e= eq == ne != ez ==0，此时没有源操作数src2 nz !=0，此时没有源操作数src2 当不使用操作子码，而是使用下面方式运算：\nsrc \u003c src2，设置des寄存器为 -1。 src == src2，设置des寄存器为 0。 src \u003e src2，设置des寄存器为 -1。 3.4 条件赋值 条件赋值指令使用比较指令的结果，对另外 2 个源操作数进行选择，传递个目标操作数。\n指令格式如下所示：\n助记符 操作码 目的操作数 源操作数 源操作数 源操作数 操作子码 9 bit 5 bit 5 bit 5 bit 5 bit 3 bit sel-i32 des src src2 cond sel-u32 des src src2 cond sel-i64 des src src2 cond sel-u64 des src src2 cond sel-f32 des src src2 cond sel-f64 des src src2 cond 当比较系列指令使用操作子码方式时：\ncond == 0 ：des = src cond != 0 ：des = src2 当比较系列指令不使用操作子码方式时，本系列指令要求使用操作子码进行判断：\n操作子码定义如下：\n助记符 操作码 含义 lt \u003c ：des = cond == -1 ? src : src2 le \u003c= ：des = cond \u003c 1 ? src : src2 gt \u003e ：des = cond == 1 ? src : src2 ge \u003e= ：des = cond \u003e -1 ? src : src2 eq == ：des = cond == 0 ? src : src2 ne != ：des = cond != 0 ? src : src2 3.5 赋值指令 此系列包括寄存器间赋值或类型转换。\n助记符 操作码 目的操作数 源操作数 源操作数 操作子码 9 bit 5 bit 5 bit 5 bit 8 bit mov des src 操作子码用于获取源操作数并转换到响应的类型。\n操作子码定义如下：\n助记符 操作码 含义 i8-i32 u8-i32 i8-i64 u8-u64 i16-i32 u16-i32 i16-i64 u16-i64 i32_i32 i32-i64 i32-f32 i32-f64 u32-u32 u32-u64 u32-f32 u32-f64 i64-i64 i64-f32 i64-f64 u64-u64 u64-f32 u64-f64 f32-i32 f32-u32 f32-i64 f32-u64 f32-f32 f32-f64 f64-i32 f64-u32 f64-i64 f64-u64 f64-f32 f64-f64 f32-bit-u32 位转换 u32-bit-f32 位转换 f64-bit-u64 位转换 u64-bit-f64 位转换 3.6 加载存储指令 此系列指令功能是从内存中读取、存储特定类型数据。\n助记符 操作码 目的操作数 源操作数 源操作数 操作子码 注释 9 bit 5 bit 5 bit 5 bit 8 bit load des base offset 从基址内存中获取数据 store des base offset gload des base offset 从全局内存中获取数据 gstore des base offset 操作子码定义如下：\n助记符 操作码 含义 i8 u8 i16 u16 i32 u32 i64 u64 f32 f64 3.7 出入栈指令 此系列指令用于将数据入栈，同时可以进行类型转换。 注意：入栈数据应当进行 32bit 对齐。以加快虚拟机执行速度数据\n助记符 操作码 目的操作数 源操作数 源操作数 操作子码 9 bit 5 bit 5 bit 5 bit 8 bit push des pop des 操作子码定义如下： 助记符 操作码 含义 — — — i8 u8 i16 u16 i32 u32 i64 u64 f32 f64 3.8 栈内存分配释放 此系列指令用于栈内存分配释放。 注意：立即数是无符号整数。\n助记符 操作码 目的操作数 立即数 注释 9 bit 5 bit 18 bit grown des imm 分配栈内存，将分配后的栈指针值传递到 des 寄存器 9 bit 23 bit 释放栈内存， shrunk imm 3.9 跳转指令 跳转的偏移量是无符号整数值； 相对于函数代码的起始地址； 偏移量是偏移的指令条数； 助记符 操作码 目的操作数 立即数 注释 9 bit 23 bit jmp imm 直接跳转 9 bit 5 bit 18 bit jmpx reg 偏移量在 reg 寄存器中 9 bit 5 bit 18 bit jtab reg imm reg 表示偏移量索引，imm表示偏移量数组中偏移数据条数，指令后面接 32 bit 对齐的偏移量数组 3.10 分支指令 此系列指令用于条件分支跳转。\n助记符 操作码 目的操作数 源操作数 源操作数 操作子码 偏移立即数 9 bit 5 bit 5 bit 5 bit 8 bit 32 bit jbr-i32 src src2 cond offset jbr-u32 src src2 cond offset jbr-i64 src src2 cond offset jbr-u64 src src2 cond offset jbr-f32 src src2 cond offset jbr-f64 src src2 cond offset 操作子码定义如下：\n助记符 操作码 含义 lt \u003c le \u003c= gt \u003e ge \u003e= eq == ne != ez ==0，此时没有源操作数src2 nz !=0，此时没有源操作数src2 3.11 函数指令 助记符 操作码 目的操作数 立即数 注释 9 bit 23 bit 32 bit call imm imm表示函数的偏移量或者是编号，看虚拟机的具体实现 9 bit 5 bit 18 bit callx reg reg 寄存器中保存函数的偏移量或者是编号，看虚拟机的具体实现 9 bit 23 bit ret 函数返回 4 寄存器与立即数–指令集 待续\n",
    "description": "",
    "tags": null,
    "title": "3 基于栈和寄存器的指令集",
    "uri": "/3_compiler/7_instruction/3_mixedinsset/index.html"
  },
  {
    "content": "目录 1 词法分析 2 语法分析 3 语义分析 4 中间优化 5 目标生成 6 中间代码 7 指令集 8 语言定义 9 字节码文件格式 10 虚拟机设计与实现 引言 编译原理是将文本字符流，通过一系列的分析、转换，最后生成确定的指令文件的数据分析转换技术。\r编译器是利用编译原理，将一种程序（源程序）翻译成另一种程序（目标程序）的计算机程序。业界也将编译器分为三个部分：前端、中端、后端。\n编译器所做的工作流程如下图所示。\n",
    "description": "",
    "tags": null,
    "title": "编译原理",
    "uri": "/3_compiler/index.html"
  },
  {
    "content": "节点模板类定义 template \u003ctypename Node\u003e class IListNode { Node *mNext; Node *mPrev; public: inline IListNode() : mNext(nullptr), mPrev(nullptr) { } // 初始化节点 inline void init() { mNext = nullptr, mPrev = nullptr; } // 获取后继节点 inline Node *getNext() { return mNext; } // 获取前驱节点 inline Node *getPrev() { return mPrev; }; // 设置后继节点 inline void setNext(Node *next) { mNext = next; } // 设置前驱节点 inline void setPrev(Node *prev) { mPrev = prev; }; // 设置节点 inline void setNode(Node *next, Node *prev) { mNext = next, mPrev = prev; } };链表模板类定义 template \u003ctypename Node\u003e class IList { IListNode\u003cNode\u003e mRoot; // 链表根节点 uint mCount; // 节点计数 public: // 链表初始化 inline IList() : mCount(0) { mRoot.setNode((Node *)\u0026mRoot, (Node *)\u0026mRoot); } // 初始链表 inline void initList() { mCount = 0, mRoot.setNode((Node *)\u0026mRoot, (Node *)\u0026mRoot); } // 获取根，只读 inline Node *getRoot() { return (Node *)\u0026mRoot; } // 获取节点计数 inline uint getCount() const { return mCount; } // 获取第一个节点 inline Node *getEntry() { Node *ret = mRoot.getNext(); /* if (ret == \u0026mRoot) ret = nullptr;*/ return ret; } inline Node *front() { return getEntry(); } // 获取最后一个节点 inline Node *getTail() { Node *ret = mRoot.getPrev(); /* if (ret == \u0026mRoot) ret = nullptr;*/ return ret; } inline Node *back() { return getTail(); } // 从头部插入 inline void insertEntry(Node *node) { Node *head = mRoot.getNext(); node-\u003esetPrev((Node *)\u0026mRoot); node-\u003esetNext(head); head-\u003esetPrev(node); mRoot.setNext(node); ++mCount; } // 从尾部插入 inline void insertTail(Node *node) { Node *tail = mRoot.getPrev(); node-\u003esetPrev(tail); node-\u003esetNext((Node *)\u0026mRoot); tail-\u003esetNext(node); mRoot.setPrev(node); ++mCount; } // 从iter前面插入 inline void insert(Node *iter, Node *node) { iter-\u003egetPrev()-\u003esetNext(node); node-\u003esetPrev(iter-\u003egetPrev()); node-\u003esetNext(iter); iter-\u003esetPrev(node); ++mCount; } // 移除节点 inline Node *remove(Node *entry) { // 根节点并不能移除 if ((Node *)\u0026mRoot == entry) return nullptr; Node *prev = entry-\u003egetPrev(); Node *next = entry-\u003egetNext(); prev-\u003esetNext(next); next-\u003esetPrev(prev); entry-\u003einit(); --mCount; return entry; } // 移除头部节点 inline Node *removeEntry() { return remove(mRoot.getNext()); } // 移除尾部节点 inline Node *removeTail() { return remove(mRoot.getPrev()); } };",
    "description": "",
    "tags": [
      "Cxx",
      "List"
    ],
    "title": "双向节点链表",
    "uri": "/2_struct/list/doublelinkedlist/index.html"
  },
  {
    "content": "简介 CRC的全称为 Cyclic Redundancy Check，中文名称为循环冗余校验。它是一类重要的线性分组码，编码和解码方法简单，检错和纠错能力强，在通信领域广泛地用于实现差错控制。\n实际上，除数据通信外，CRC在其它很多领域也是大有用武之地的。例如我们读软盘上的文件，以及解压一个ZIP文件时，偶尔会碰到“Bad CRC”错误，由此它在数据存储方面的应用可略见一斑。\nCRC 系列算法 ",
    "description": "",
    "tags": [
      "Hash",
      "CRC"
    ],
    "title": "3 CRC 哈希函数",
    "uri": "/1_algorithms/2_hash/3_crc/index.html"
  },
  {
    "content": "假设 假设您有一个 32 位系统：\nINT_MAX是 01111111111111111111111111111111 ； INT_MIN是 10000000000000000000000000000000 ； 0 和 1 分别位于最高有效位位置，分别表示符号位。\n计算INT_MAX和INT_MIN 在 C/C++ 中： 数字 0 表示为 000…000（32个）。\n原理 我们计算 0 的 NOT 得到一个有 32 个 1 的数字。这个数字不等于INT_MAX因为符号位是1，即负数。 现在，这个数字的右移将产生011…111 这是INT_MAX。 将INT_MAX 按位取反 就得到INT_MIN。\n代码 unsigned int max = 0; max = ~max; max = max \u003e\u003e 1; int min = ~max; ",
    "description": "",
    "tags": [
      "Bitwise"
    ],
    "title": "3 INT_MAX和INT_MIN",
    "uri": "/1_algorithms/3_bitwise/3_intmaxmin/index.html"
  },
  {
    "content": "原文来自：https://www.cnblogs.com/Kingfans/p/16554047.html\n一、基本介绍 MD系列算法是信息摘要三大算法中的一种，全称：Message Digest算法，按照规范版本分为MD2、MD4、MD5三种算法，目前最常用的是MD5版本算法。本文介绍MD5算法的实现原理。\n1991年，继 MD4 算法后，罗纳德·李维斯特教授开发了 MD5 算法，将 MD 算法推向成熟。MD5 算法经 MD2、MD3 和 MD4 算法发展而来，算法复杂程度和安全强度大大提高。但不管是 MD2、MD4 还是 MD5 算法，其算法的最终结果均是产生一个 128 位的消息摘要，这也是 MD 系列算法的特点。MD5 算法执行效率略次于 MD4 算法，但在安全性方面，MD5 算法更胜一筹。随着计算机技术的发展和计算水平的不断提高，MD5 算法暴露出来的漏洞也越来越多。1996 年后被证实存在弱点，可以被加以破解，对于需要高度安全性的数据，专家一般建议改用其他算法，如 SHA-2。2004 年，证实 MD5 算法无法防止碰撞（collision），因此不适用于安全性认证，如 SSL 公开密钥认证或是数字签名等用途。\n二、实现原理 有关 MD5 算法详情请参见 RFC 1321 http://www.ietf.org/rfc/rfc1321.txt，RFC 1321 是MD5算法的官方文档，其实现原理共分为5步：\n第1步：字节填充(Append Padding Bytes) 数据先补上1个1比特，再补上k个0比特，使得补位后的数据比特数(n+1+k)满足(n+1+k) mod 512 = 448，k取最小正整数。\n第2步：追加长度信息(Append Length) 数据比特位的数据长度追加到最后8字节中。\n第3步：初始化MD Buffer(Initialize MD Buffer) 这一步最简单了，定义ABCD四个4字节数组，分别赋初值即可。\nuint32_t A = 0x67452301; // [ 0x01, 0x23, 0x45, 0x67 ]\ruint32_t B = 0xEFCDAB89; // [ 0x89, 0xAB, 0xCD, 0xEF ]\ruint32_t C = 0x98BADCFE; // [ 0xFE, 0xDC, 0xBA, 0x98 ]\ruint32_t D = 0x10325476; // [ 0x76, 0x54, 0x32, 0x10 ]以上操作与md4完全一致。\n第4步：处理消息块(Process Message in 16-Byte Blocks) 这个是MD5算法最核心的部分了，对第2步组装数据进行分块依次处理。\n/* Process each 16-word block. */\rFor i = 0 to N/16-1 do\r/* Copy block i into X. */\rFor j = 0 to 15 do\rSet X[j] to M[i*16+j].\rend /* of loop on j */\r/* Save A as AA, B as BB, C as CC, and D as DD. */\rAA = A\rBB = B\rCC = C\rDD = D\r/* Round 1. */\r/* Let [abcd k s i] denote the operation\ra = b + ((a + F(b,c,d) + X[k] + T[i]) \u003c\u003c\u003c s). */\r/* Do the following 16 operations. */\r[ABCD 0 7 1] [DABC 1 12 2] [CDAB 2 17 3] [BCDA 3 22 4]\r[ABCD 4 7 5] [DABC 5 12 6] [CDAB 6 17 7] [BCDA 7 22 8]\r[ABCD 8 7 9] [DABC 9 12 10] [CDAB 10 17 11] [BCDA 11 22 12]\r[ABCD 12 7 13] [DABC 13 12 14] [CDAB 14 17 15] [BCDA 15 22 16]\r/* Round 2. */\r/* Let [abcd k s i] denote the operation\ra = b + ((a + G(b,c,d) + X[k] + T[i]) \u003c\u003c\u003c s). */\r/* Do the following 16 operations. */\r[ABCD 1 5 17] [DABC 6 9 18] [CDAB 11 14 19] [BCDA 0 20 20]\r[ABCD 5 5 21] [DABC 10 9 22] [CDAB 15 14 23] [BCDA 4 20 24]\r[ABCD 9 5 25] [DABC 14 9 26] [CDAB 3 14 27] [BCDA 8 20 28]\r[ABCD 13 5 29] [DABC 2 9 30] [CDAB 7 14 31] [BCDA 12 20 32]\r/* Round 3. */\r/* Let [abcd k s t] denote the operation\ra = b + ((a + H(b,c,d) + X[k] + T[i]) \u003c\u003c\u003c s). */\r/* Do the following 16 operations. */\r[ABCD 5 4 33] [DABC 8 11 34] [CDAB 11 16 35] [BCDA 14 23 36]\r[ABCD 1 4 37] [DABC 4 11 38] [CDAB 7 16 39] [BCDA 10 23 40]\r[ABCD 13 4 41] [DABC 0 11 42] [CDAB 3 16 43] [BCDA 6 23 44]\r[ABCD 9 4 45] [DABC 12 11 46] [CDAB 15 16 47] [BCDA 2 23 48]\r/* Round 4. */\r/* Let [abcd k s t] denote the operation\ra = b + ((a + I(b,c,d) + X[k] + T[i]) \u003c\u003c\u003c s). */\r/* Do the following 16 operations. */\r[ABCD 0 6 49] [DABC 7 10 50] [CDAB 14 15 51] [BCDA 5 21 52]\r[ABCD 12 6 53] [DABC 3 10 54] [CDAB 10 15 55] [BCDA 1 21 56]\r[ABCD 8 6 57] [DABC 15 10 58] [CDAB 6 15 59] [BCDA 13 21 60]\r[ABCD 4 6 61] [DABC 11 10 62] [CDAB 2 15 63] [BCDA 9 21 64]\r/* Then perform the following additions. (That is increment each\rof the four registers by the value it had before this block\rwas started.) */\rA = A + AA\rB = B + BB\rC = C + CC\rD = D + DD\rend /* of loop on i */第5步：输出(Output) 这一步也非常简单，只需要将计算后的A、B、C、D进行拼接输出即可。\n三、示例讲解 四、代码实现 以下为C/C++代码实现：\n#include \u003cstring.h\u003e #include \u003cstdio.h\u003e #define HASH_BLOCK_SIZE 64 /* 512 bits = 64 bytes */ #define HASH_LEN_SIZE 8 /* 64 bits = 8 bytes */ #define HASH_LEN_OFFSET 56 /* 64 bytes - 8 bytes */ #define HASH_DIGEST_SIZE 16 /* 128 bits = 16 bytes */ typedef unsigned char uint8_t; typedef unsigned short int uint16_t; typedef unsigned int uint32_t; typedef unsigned long long uint64_t; /* T table */ static uint32_t T[64] = { /* Round 1 */ 0xD76AA478, 0xE8C7B756, 0x242070DB, 0xC1BDCEEE, 0xF57C0FAF, 0x4787C62A, 0xA8304613, 0xFD469501, 0x698098D8, 0x8B44F7AF, 0xFFFF5BB1, 0x895CD7BE, 0x6B901122, 0xFD987193, 0xA679438E, 0x49B40821, /* ROUND 2 */ 0xF61E2562, 0xC040B340, 0x265E5A51, 0xE9B6C7AA, 0xD62F105D, 0x02441453, 0xD8A1E681, 0xE7D3FBC8, 0x21E1CDE6, 0xC33707D6, 0xF4D50D87, 0x455A14ED, 0xA9E3E905, 0xFCEFA3F8, 0x676F02D9, 0x8D2A4C8A, /* ROUND 3 */ 0xFFFA3942, 0x8771F681, 0x6D9D6122, 0xFDE5380C, 0xA4BEEA44, 0x4BDECFA9, 0xF6BB4B60, 0xBEBFBC70, 0x289B7EC6, 0xEAA127FA, 0xD4EF3085, 0x04881D05, 0xD9D4D039, 0xE6DB99E5, 0x1FA27CF8, 0xC4AC5665, /* ROUND 4 */ 0xF4292244, 0x432AFF97, 0xAB9423A7, 0xFC93A039, 0x655B59C3, 0x8F0CCC92, 0xFFEFF47D, 0x85845DD1, 0x6FA87E4F, 0xFE2CE6E0, 0xA3014314, 0x4E0811A1, 0xF7537E82, 0xBD3AF235, 0x2AD7D2BB, 0xEB86D391 }; static uint32_t F(uint32_t X, uint32_t Y, uint32_t Z) { return (X \u0026 Y) | ((~X) \u0026 Z); } static uint32_t G(uint32_t X, uint32_t Y, uint32_t Z) { return (X \u0026 Z) | (Y \u0026 (~Z)); } static uint32_t H(uint32_t X, uint32_t Y, uint32_t Z) { return X ^ Y ^ Z; } static uint32_t I(uint32_t X, uint32_t Y, uint32_t Z) { return Y ^ ( X | (~Z)); } /* 循环向左移动offset个比特位 */ static uint32_t MoveLeft(uint32_t X, uint8_t offset) { uint32_t res = (X \u003c\u003c offset) | (X \u003e\u003e (32 - offset)); return res; } static uint32_t Round1(uint32_t A, uint32_t B, uint32_t C, uint32_t D, uint32_t M, uint32_t N, uint32_t T) { return B + MoveLeft(A + F(B, C, D) + M + T, N); } static uint32_t Round2(uint32_t A, uint32_t B, uint32_t C, uint32_t D, uint32_t M, uint32_t N, uint32_t T) { return B + MoveLeft(A + G(B, C, D) + M + T, N); } static uint32_t Round3(uint32_t A, uint32_t B, uint32_t C, uint32_t D, uint32_t M, uint32_t N, uint32_t T) { return B + MoveLeft(A + H(B, C, D) + M + T, N); } static uint32_t Round4(uint32_t A, uint32_t B, uint32_t C, uint32_t D, uint32_t M, uint32_t N, uint32_t T) { return B + MoveLeft(A + I(B, C, D) + M + T, N); } #define ASSERT_RETURN_INT(x, d) if(!(x)) { return d; } int md5(unsigned char *out, const unsigned char* in, const int inlen) { ASSERT_RETURN_INT(out \u0026\u0026 in \u0026\u0026 (inlen \u003e= 0), 1); int i = 0, j = 0; // step 1: 字节填充(Append Padding Bytes) // 数据先补上1个1比特，再补上k个0比特，使得补位后的数据比特数(n+1+k)满足(n+1+k) mod 512 = 448，k取最小正整数 int iX = inlen / HASH_BLOCK_SIZE; int iY = inlen % HASH_BLOCK_SIZE; iX = (iY \u003c HASH_LEN_OFFSET) ? iX : (iX + 1); int iLen = (iX + 1) * HASH_BLOCK_SIZE; unsigned char* M = malloc(iLen); memcpy(M, in, inlen); // 先补上1个1比特+7个0比特 M[inlen] = 0x80; // 再补上(k-7)个0比特 for (i = inlen + 1; i \u003c (iX * HASH_BLOCK_SIZE + HASH_LEN_OFFSET); i++) { M[i] = 0; } // step 2: 追加长度信息(Append Length) uint64_t *pLen = (uint64_t*)(M + (iX * HASH_BLOCK_SIZE + HASH_LEN_OFFSET)); *pLen = inlen \u003c\u003c 3; // Step 3. 初始化MD Buffer(Initialize MD Buffer) uint32_t A = 0x67452301; // 0x01, 0x23, 0x45, 0x67 uint32_t B = 0xEFCDAB89; // 0x89, 0xAB, 0xCD, 0xEF uint32_t C = 0x98BADCFE; // 0xFE, 0xDC, 0xBA, 0x98 uint32_t D = 0x10325476; // 0x76, 0x54, 0x32, 0x10 uint32_t X[HASH_BLOCK_SIZE / 4] = { 0 }; // step 4: 处理消息块(Process Message in 64-Byte Blocks) for (i = 0; i \u003c iLen / HASH_BLOCK_SIZE; i++) { /* Copy block i into X. */ for (j = 0; j \u003c HASH_BLOCK_SIZE; j = j + 4) { uint32_t* temp = \u0026M[i * HASH_BLOCK_SIZE + j]; X[j / 4] = *temp; } /* Save A as AA, B as BB, C as CC, and D as DD. */ uint32_t AA = A; uint32_t BB = B; uint32_t CC = C; uint32_t DD = D; /* Round 1. */ /* Let [abcd k s i] denote the operation a = b + ((a + F(b,c,d) + X[k] + T[i]) \u003c\u003c\u003c s). */ /* Do the following 16 operations. [ABCD 0 7 1][DABC 1 12 2][CDAB 2 17 3][BCDA 3 22 4] [ABCD 4 7 5][DABC 5 12 6][CDAB 6 17 7][BCDA 7 22 8] [ABCD 8 7 9][DABC 9 12 10][CDAB 10 17 11][BCDA 11 22 12] [ABCD 12 7 13][DABC 13 12 14][CDAB 14 17 15][BCDA 15 22 16] 此处T[i]有问题 应该是i-1 索引下标从0开始 */ A = Round1(A, B, C, D, X[0], 7, T[0]); D = Round1(D, A, B, C, X[1], 12, T[1]); C = Round1(C, D, A, B, X[2], 17, T[2]); B = Round1(B, C, D, A, X[3], 22, T[3]); A = Round1(A, B, C, D, X[4], 7, T[4]); D = Round1(D, A, B, C, X[5], 12, T[5]); C = Round1(C, D, A, B, X[6], 17, T[6]); B = Round1(B, C, D, A, X[7], 22, T[7]); A = Round1(A, B, C, D, X[8], 7, T[8]); D = Round1(D, A, B, C, X[9], 12, T[9]); C = Round1(C, D, A, B, X[10], 17, T[10]); B = Round1(B, C, D, A, X[11], 22, T[11]); A = Round1(A, B, C, D, X[12], 7, T[12]); D = Round1(D, A, B, C, X[13], 12, T[13]); C = Round1(C, D, A, B, X[14], 17, T[14]); B = Round1(B, C, D, A, X[15], 22, T[15]); /* Round 2. */ /* Let [abcd k s i] denote the operation a = b + ((a + G(b,c,d) + X[k] + T[i]) \u003c\u003c\u003c s). */ /* Do the following 16 operations. [ABCD 1 5 17][DABC 6 9 18][CDAB 11 14 19][BCDA 0 20 20] [ABCD 5 5 21][DABC 10 9 22][CDAB 15 14 23][BCDA 4 20 24] [ABCD 9 5 25][DABC 14 9 26][CDAB 3 14 27][BCDA 8 20 28] [ABCD 13 5 29][DABC 2 9 30][CDAB 7 14 31][BCDA 12 20 32] */ A = Round2(A, B, C, D, X[1], 5, T[16]); D = Round2(D, A, B, C, X[6], 9, T[17]); C = Round2(C, D, A, B, X[11], 14, T[18]); B = Round2(B, C, D, A, X[0], 20, T[19]); A = Round2(A, B, C, D, X[5], 5, T[20]); D = Round2(D, A, B, C, X[10], 9, T[21]); C = Round2(C, D, A, B, X[15], 14, T[22]); B = Round2(B, C, D, A, X[4], 20, T[23]); A = Round2(A, B, C, D, X[9], 5, T[24]); D = Round2(D, A, B, C, X[14], 9, T[25]); C = Round2(C, D, A, B, X[3], 14, T[26]); B = Round2(B, C, D, A, X[8], 20, T[27]); A = Round2(A, B, C, D, X[13], 5, T[28]); D = Round2(D, A, B, C, X[2], 9, T[29]); C = Round2(C, D, A, B, X[7], 14, T[30]); B = Round2(B, C, D, A, X[12], 20, T[31]); /* Round 3. */ /* Let [abcd k s t] denote the operation a = b + ((a + H(b,c,d) + X[k] + T[i]) \u003c\u003c\u003c s). */ /* Do the following 16 operations. [ABCD 5 4 33][DABC 8 11 34][CDAB 11 16 35][BCDA 14 23 36] [ABCD 1 4 37][DABC 4 11 38][CDAB 7 16 39][BCDA 10 23 40] [ABCD 13 4 41][DABC 0 11 42][CDAB 3 16 43][BCDA 6 23 44] [ABCD 9 4 45][DABC 12 11 46][CDAB 15 16 47][BCDA 2 23 48] */ A = Round3(A, B, C, D, X[5], 4, T[32]); D = Round3(D, A, B, C, X[8], 11, T[33]); C = Round3(C, D, A, B, X[11], 16, T[34]); B = Round3(B, C, D, A, X[14], 23, T[35]); A = Round3(A, B, C, D, X[1], 4, T[36]); D = Round3(D, A, B, C, X[4], 11, T[37]); C = Round3(C, D, A, B, X[7], 16, T[38]); B = Round3(B, C, D, A, X[10], 23, T[39]); A = Round3(A, B, C, D, X[13], 4, T[40]); D = Round3(D, A, B, C, X[0], 11, T[41]); C = Round3(C, D, A, B, X[3], 16, T[42]); B = Round3(B, C, D, A, X[6], 23, T[43]); A = Round3(A, B, C, D, X[9], 4, T[44]); D = Round3(D, A, B, C, X[12], 11, T[45]); C = Round3(C, D, A, B, X[15], 16, T[46]); B = Round3(B, C, D, A, X[2], 23, T[47]); /* Round 4. */ /* Let [abcd k s t] denote the operation a = b + ((a + I(b,c,d) + X[k] + T[i]) \u003c\u003c\u003c s). */ /* Do the following 16 operations. [ABCD 0 6 49][DABC 7 10 50][CDAB 14 15 51][BCDA 5 21 52] [ABCD 12 6 53][DABC 3 10 54][CDAB 10 15 55][BCDA 1 21 56] [ABCD 8 6 57][DABC 15 10 58][CDAB 6 15 59][BCDA 13 21 60] [ABCD 4 6 61][DABC 11 10 62][CDAB 2 15 63][BCDA 9 21 64] */ A = Round4(A, B, C, D, X[0], 6, T[48]); D = Round4(D, A, B, C, X[7], 10, T[49]); C = Round4(C, D, A, B, X[14], 15, T[50]); B = Round4(B, C, D, A, X[5], 21, T[51]); A = Round4(A, B, C, D, X[12], 6, T[52]); D = Round4(D, A, B, C, X[3], 10, T[53]); C = Round4(C, D, A, B, X[10], 15, T[54]); B = Round4(B, C, D, A, X[1], 21, T[55]); A = Round4(A, B, C, D, X[8], 6, T[56]); D = Round4(D, A, B, C, X[15], 10, T[57]); C = Round4(C, D, A, B, X[6], 15, T[58]); B = Round4(B, C, D, A, X[13], 21, T[59]); A = Round4(A, B, C, D, X[4], 6, T[60]); D = Round4(D, A, B, C, X[11], 10, T[61]); C = Round4(C, D, A, B, X[2], 15, T[62]); B = Round4(B, C, D, A, X[9], 21, T[63]); /* Then perform the following additions. (That is, increment each of the four registers by the value it had before this block was started.) */ A = A + AA; B = B + BB; C = C + CC; D = D + DD; } // step 5: 输出ABCD memcpy(out + 0, \u0026A, 4); memcpy(out + 4, \u0026B, 4); memcpy(out + 8, \u0026C, 4); memcpy(out + 12, \u0026D, 4); free(M); return 0; } int main() { unsigned char digest[16] = { 0 }; md5(digest, \"Hello World!\", strlen(\"Hello World!\")); return 0; }",
    "description": "",
    "tags": [
      "Hash",
      "MD"
    ],
    "title": "3 MD5 算法",
    "uri": "/1_algorithms/2_hash/1_md/3_md5/index.html"
  },
  {
    "content": "原文来自:https://www.cnblogs.com/Kingfans/p/16571435.html\n一、基本介绍 SHA (Security Hash Algorithm) 是美国的 NIST 和 NSA 设计的一种标准的 Hash 算法，SHA 用于数字签名的标准算法的 DSS 中，也是安全性很高的一种 Hash 算法。\nSHA-1 是第一代 SHA 算法标准，后来的 SHA-224、SHA-256、SHA-384 和 SHA-512 被统称为 SHA-2。本文介绍SHA2-256算法的实现原理。\n二、实现原理 有关 SHA2-256 算法详情请参见 NIST.FIPS.180-4 。\nNIST.FIPS.180-4 是SHA2-256算法的官方文档，（建议了解SHA2-256算法前，先了解下SHA1 sha1算法实现原理深剖 ）其实现原理共分为5步：\n第1步：字节填充(Append Padding Bytes) 数据先补上1个1比特，再补上k个0比特，使得补位后的数据比特数(n+1+k)满足(n+1+k) mod 512 = 448，k取最小正整数。\n第2步：追加长度信息(Append Length) 数据比特位的数据长度追加到最后8字节中。【以上与sha1完全一致】\n第3步：初始化MD Buffer(Initialize MD Buffer) 这一步最简单了，定义ABCD四个4字节数组，分别赋初值即可。\nuint32_t H0 = 0x6A09E667; uint32_t H1 = 0xBB67AE85; uint32_t H2 = 0x3C6EF372; uint32_t H3 = 0xA54FF53A; uint32_t H4 = 0x510E527F; uint32_t H5 = 0x9B05688C; uint32_t H6 = 0x1F83D9AB; uint32_t H7 = 0x5BE0CD19;第4步：处理消息块(Process Message in 16-Byte Blocks) 这个是SHA2-256算法最核心的部分了，对第2步组装数据进行分块依次处理。\n第5步：输出(Output) 这一步也非常简单，只需要将计算后的H0、H1、H2、H3、H4、H5、H6、H7进行拼接输出即可。\n三、示例讲解 四、代码实现 以下为C/C++代码实现：\n#include \u003cstring.h\u003e #include \u003cstdio.h\u003e #define HASH_BLOCK_SIZE 64 /* 512 bits = 64 bytes */ #define HASH_LEN_SIZE 8 /* 64 bits = 8 bytes */ #define HASH_LEN_OFFSET 56 /* 64 bytes - 8 bytes */ #define HASH_DIGEST_SIZE 16 /* 128 bits = 16 bytes */ #define HASH_ROUND_NUM 64 typedef unsigned char uint8_t; typedef unsigned short int uint16_t; typedef unsigned int uint32_t; typedef unsigned long long uint64_t; /* SHA256 Constants */ static const uint32_t K[HASH_ROUND_NUM] = { 0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786, 0x0FC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA, 0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2 }; /* Swap bytes in 32 bit value. 0x01234567 -\u003e 0x67452301 */ #define __bswap_32(x) \\ ((((x) \u0026 0xff000000) \u003e\u003e 24) \\ | (((x) \u0026 0x00ff0000) \u003e\u003e 8) \\ | (((x) \u0026 0x0000ff00) \u003c\u003c 8) \\ | (((x) \u0026 0x000000ff) \u003c\u003c 24)) static uint32_t Ch(uint32_t X, uint32_t Y, uint32_t Z) { return (X \u0026 Y) ^ ((~X) \u0026 Z); } static uint32_t Maj(uint32_t X, uint32_t Y, uint32_t Z) { return (X \u0026 Y) ^ (X \u0026 Z) ^ (Y \u0026 Z); } /* 循环向右移动offset个比特位 */ static uint32_t ROTR(uint32_t X, uint8_t offset) { uint32_t res = (X \u003e\u003e offset) | (X \u003c\u003c (32 - offset)); return res; } /* 向右移动offset个比特位 */ static uint32_t SHR(uint32_t X, uint8_t offset) { uint32_t res = X \u003e\u003e offset; return res; } /* SIGMA0 */ static uint32_t SIGMA0(uint32_t X) { return ROTR(X, 2) ^ ROTR(X, 13) ^ ROTR(X, 22); } /* SIGMA1 */ static uint32_t SIGMA1(uint32_t X) { return ROTR(X, 6) ^ ROTR(X, 11) ^ ROTR(X, 25); } /* sigma0, different from SIGMA0 */ static uint32_t sigma0(uint32_t X) { uint32_t res = ROTR(X, 7) ^ ROTR(X, 18) ^ SHR(X, 3); return ROTR(X, 7) ^ ROTR(X, 18) ^ SHR(X, 3); } /* sigma1, different from SIGMA1 */ static uint32_t sigma1(uint32_t X) { return ROTR(X, 17) ^ ROTR(X, 19) ^ SHR(X, 10); } #define ASSERT_RETURN_INT(x, d) if(!(x)) { return d; } int sha2_256(unsigned char *out, const unsigned char* in, const int inlen) { ASSERT_RETURN_INT(out \u0026\u0026 in \u0026\u0026 (inlen \u003e= 0), 1); int i = 0, j = 0, t = 0; // step 1: 字节填充(Append Padding Bytes) // 数据先补上1个1比特，再补上k个0比特，使得补位后的数据比特数(n+1+k)满足(n+1+k) mod 512 = 448，k取最小正整数 int iX = inlen / HASH_BLOCK_SIZE; int iY = inlen % HASH_BLOCK_SIZE; iX = (iY \u003c HASH_LEN_OFFSET) ? iX : (iX + 1); int iLen = (iX + 1) * HASH_BLOCK_SIZE; unsigned char* X = malloc(iLen); memcpy(X, in, inlen); // 先补上1个1比特+7个0比特 X[inlen] = 0x80; // 再补上(k-7)个0比特 for (i = inlen + 1; i \u003c (iX * HASH_BLOCK_SIZE + HASH_LEN_OFFSET); i++) { X[i] = 0; } // step 2: 追加长度信息(Append Length) uint8_t *pLen = (uint64_t*)(X + (iX * HASH_BLOCK_SIZE + HASH_LEN_OFFSET)); uint64_t iTempLen = inlen \u003c\u003c 3; uint8_t *pTempLen = \u0026iTempLen; pLen[0] = pTempLen[7]; pLen[1] = pTempLen[6]; pLen[2] = pTempLen[5]; pLen[3] = pTempLen[4]; pLen[4] = pTempLen[3]; pLen[5] = pTempLen[2]; pLen[6] = pTempLen[1]; pLen[7] = pTempLen[0]; // Step 3. 初始化MD Buffer(Initialize MD Buffer) uint32_t H0 = 0x6A09E667; uint32_t H1 = 0xBB67AE85; uint32_t H2 = 0x3C6EF372; uint32_t H3 = 0xA54FF53A; uint32_t H4 = 0x510E527F; uint32_t H5 = 0x9B05688C; uint32_t H6 = 0x1F83D9AB; uint32_t H7 = 0x5BE0CD19; uint32_t M[HASH_BLOCK_SIZE / 4] = { 0 }; uint32_t W[HASH_ROUND_NUM] = { 0 }; // step 4: 处理消息块(Process Message in 64-Byte Blocks) for (i = 0; i \u003c iLen / HASH_BLOCK_SIZE; i++) { /* Copy block i into M. */ for (j = 0; j \u003c HASH_BLOCK_SIZE; j = j + 4) { uint64_t k = i * HASH_BLOCK_SIZE + j; M[j / 4] = (X[k] \u003c\u003c 24) | (X[k + 1] \u003c\u003c 16) | (X[k + 2] \u003c\u003c 8) | X[k + 3]; } /* W[t]=M[t]; t:[0,15] */ for (t = 0; t \u003c= 15; t++) { W[t] = M[t]; } /* W[t] = sigma1(W[t - 2]) + W[t - 7] + sigma0(W[t - 15]) + W[t - 16]; t:[16,63] */ for (t = 16; t \u003c HASH_ROUND_NUM; t++) { W[t] = sigma1(W[t - 2]) + W[t - 7] + sigma0(W[t - 15]) + W[t - 16]; } uint32_t A = H0; uint32_t B = H1; uint32_t C = H2; uint32_t D = H3; uint32_t E = H4; uint32_t F = H5; uint32_t G = H6; uint32_t H = H7; for (t = 0; t \u003c HASH_ROUND_NUM; t++) { uint32_t T1 = H + SIGMA1(E) + Ch(E, F, G) + K[t] + W[t]; uint32_t T2 = SIGMA0(A) + Maj(A, B, C); H = G; G = F; F = E; E = D + T1; D = C; C = B; B = A; A = T1 + T2; //printf(\"t=%02d:\\t 0x%02X\\t\\t 0x%02X\\t\\t 0x%02X\\t\\t 0x%02X\\t\\t \\n\", t, E, F, G, H); } H0 = H0 + A; H1 = H1 + B; H2 = H2 + C; H3 = H3 + D; H4 = H4 + E; H5 = H5 + F; H6 = H6 + G; H7 = H7 + H; } // step 5: 输出 uint32_t* pOut = (uint8_t*)out; pOut[0] = __bswap_32(H0); pOut[1] = __bswap_32(H1); pOut[2] = __bswap_32(H2); pOut[3] = __bswap_32(H3); pOut[4] = __bswap_32(H4); pOut[5] = __bswap_32(H5); pOut[6] = __bswap_32(H6); pOut[7] = __bswap_32(H7); free(X); return 0; } int main() { unsigned char digest[32] = { 0 }; sha2_256(digest, \"Hello World!\", strlen(\"Hello World!\")); return 0; }",
    "description": "",
    "tags": [
      "Hash",
      "SHA"
    ],
    "title": "3 SHA2-256 算法",
    "uri": "/1_algorithms/2_hash/2_sha/3_sha2_256/index.html"
  },
  {
    "content": "\r1 简介 TLV 是一种可变的格式，由三个域构成：标识域（Tag）+长度域（Length）+值域（Value），简称TLV格式。\n其中：\nT 可以理解为 Tag 或 Type ，用于标识标签或者编码格式信息； L 定义数值的长度； V 表示实际的数值。 T 和 L 的长度固定，一般是2或4个字节，V 的长度由 Length 指定。\nT 和 L 一般都是整数值。 V 可以存储整数、浮点、字符串、字节串，其类型是由格式定义者根据 T 的不同值，指定不同的类型。 2 基本结构 data 0\rT = 1\rL = 1\rV = 1\rdata 1\rT = 1\rL = 1\rV = 2\r...\rdata N\rT = 1\rL = 1\rV = n\r当然V中的数据也是可以嵌套,至于嵌套几层看设计者的规定的。\n结构如下：\ndata 0\rT = 1\rL = 3\rV =[\rdata x\rT = 1\rL = 1\rV = 1\r]\rdata 1\rT = 1\rL = 1\rV = 2\r...\rdata N\rT = 1\rL = 1\rV = n ",
    "description": "",
    "tags": null,
    "title": "3 TLV格式",
    "uri": "/6_format/1_general/3_tlvformat/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "3 YUV",
    "uri": "/6_format/3_color/3_yuv/index.html"
  },
  {
    "content": "位运算符 \u0026 位与： 0 \u0026 0 = 0 ; 0 \u0026 1 = 0 ; 1 \u0026 0 = 0 ;1 \u0026 1 = 1 ; 同为 1 时， 结果为 1。 | 位或： 0 | 0 = 0 ; 0 | 1 = 1 ; 1 | 0 = 1 ;1 | 1 = 1 ; 存在 1 时， 结果为 1。 ^ 位异或： 0 \u0026 0 = 0 ; 0 \u0026 1 = 1 ; 1 \u0026 0 = 1 ;1 \u0026 1 = 0 ; 值相异时， 结果为 1。 ~ 位反： ~ 0 = 1 ; ~ 1 = 0 ; « 左移: \u003e\u003e 逻辑右移： \u003e» 算术右移： 位运算特性 与（\u0026）运算 一个数n与0进行与运算，值为0，n \u0026 0 = 0。\r一个数n与-1进行与运算，值为n，n \u0026 -1 = n。\r一个数n与自己进行与运算，值为n，n \u0026 n = n。\r或（|）运算 一个数n与0进行或运算，值为n，n | 0 = n。\r一个数n与-1进行或运算，值为-1，n | -1 = -1。\r非（~）运算 对二进制的每一位都按位取反。\r对于数n，n + (~n) = -1。\r异或（^）运算 运算的二进位结果，相异为1，相同为0。\n一个数n与0异或，值为n，n ^ 0 = n。\r一个数n与-1异或，值为~n，n ^ -1 = ~n。\r一个数n与自己异或，值为0，n ^ n = 0。\r左移（«）和右移（»）运算 向左进行移位操作，高位丢弃，低位补 0\r向右进行移位操作，对无符号数，高位补 0，对于有符号数，高位补符号位\r应用 1 快速平均值 2 位域值提取 3 INT_MAX和INT_MIN 4 应用 n + (~n) = -1 5 应用 n ^ n = 0 和 n ^ 0 = n 6 应用 x\u0026(x-1) 7 应用 2的次方 8 取两数的最 大/小 值 ",
    "description": "",
    "tags": null,
    "title": "3 快速位算法",
    "uri": "/1_algorithms/3_bitwise/index.html"
  },
  {
    "content": "1 序 颜色常用颜色空间来表示。颜色空间是用一种数学方法形象化表示颜色，人们用它来指定和产生颜色。例如，\n对于人来说，我们可以通过色调、饱和度和明度来定义颜色； 对于显示设备来说，人们使用红、绿和蓝磷光体的发光量来描述颜色； 对于打印或者印刷设备来说，人们使用青色、品红色、黄色和黑色的反射和吸收来产生指定的颜色。 颜色空间有设备相关和设备无关之分。\n设备相关的颜色空间是指颜色空间指定生成的颜色与生成颜色的设备有关。例如，RGB颜色空间是与显示系统相关的颜色空间，计算机显示器使用RGB来显示颜色，用像素值(例如，R＝250,G＝123,B＝23)生成的颜色将随显示器的亮度和对比度的改变而改变。\n设备无关的颜色空间是指颜色空间指定生成的颜色与生成颜色的设备无关，例如，CIE Lab*颜色空间就是设备无关的颜色空间，它构建在HSV(hue, saturation and value)颜色空间的基础上，用该空间指定的颜色无论在什么设备上生成的颜色都相同。\n2 目录 1 RGBA 2 HSL/HSV 3 YUV 4 XYZ 5 LAB 6 CMYK ",
    "description": "",
    "tags": null,
    "title": "3 颜色格式",
    "uri": "/6_format/3_color/index.html"
  },
  {
    "content": "1 序 语义分析就是分析语法树中所有的符号是否存在声明，从语义层次进一步规范程序所表达的含义。\n分析符号的含义和类型。 分析变量的位置偏移。 分析表达式的类型，并进行类型匹配。 2 目录 ",
    "description": "",
    "tags": null,
    "title": "3 语义分析",
    "uri": "/3_compiler/3_analysis/index.html"
  },
  {
    "content": "成员访问操作符 成员访问操作符的优先级最高。\n成员访问操作符 优先级 注解 . 0 成员访问 .? 0 带null检查的成员访问 一元操作符 一元操作符优先级一致，主要查看其声明的先后顺序。\n一元操作符 优先级 注解 ~ -10 按位取反 ! -10 逻辑取反 - -10 符号取反 + -10 取绝对值 ++ -10 自增 -- -10 自减 二元操作符 在语法解析表达式中，二元表达式最复杂的。\n二元操作符 优先级 注解 * -20 乘运算操作符 / -20 除运算操作符 % -20 模运算操作符 + -30 加运算操作符 - -30 减运算操作符 \u003c\u003c -40 左移操作符 \u003e\u003e -40 逻辑右移操作符 \u003e\u003e\u003e -40 算术右移操作符 \u003c -50 小于操作符 \u003c= -50 小于等于操作符 \u003e -50 大于于操作符 \u003e= -50 大于等于操作符 == -60 等于操作符 != -60 不等于操作符 \u0026 -70 位与操作符 ^ -71 位异或操作符 | -72 位或操作符 \u0026\u0026 -80 逻辑与操作符 || -81 逻辑或操作符 三元操作符 三元操作符主要用于比较赋值、简单的比较分支操作。\n三元操作符 优先级 注解 ? : -90 赋值操作符 赋值类操作符的优先级一致，优先级最低。\n赋值操作符 优先级 注解 = -100 赋值操作符 *= -100 乘运算复合赋值操作符 /= -100 除运算复合赋值操作符 %= -100 模运算复合赋值操作符 += -100 加运算复合赋值操作符 -= -100 减运算复合赋值操作符 \u0026= -100 位与运算复合赋值操作符 = -100 位或运算复合赋值操作符 ^= -100 位异或运算复合赋值操作符 ~= -100 位取反运算复合赋值操作符 \u003c\u003c= -100 左移运算复合赋值操作符 \u003e\u003e= -100 逻辑右移运算复合赋值操作符 \u003e\u003e\u003e= -100 算术右移运算复合赋值操作符 其他操作符 括号表达式中的括号操作符，用于提升表达式的优先级，在算符优先解析算法，该系列是作为基本表达式进行解析的。\n括号操作符 优先级 注解 （） -10 括号操作符 [] -10 数组下标 cast -10 静态类型转换 dyn_cast -10 动态类型转换 () -10 函数调用 ",
    "description": "",
    "tags": null,
    "title": "4 操作符",
    "uri": "/3_compiler/8_langdef/4_operator/index.html"
  },
  {
    "content": "待续\n",
    "description": "",
    "tags": null,
    "title": "4 顶层语法解析实现",
    "uri": "/3_compiler/2_parser/4_parserbase/index.html"
  },
  {
    "content": "原文来自\n",
    "description": "",
    "tags": [
      "Hash",
      "SHA"
    ],
    "title": "4 SHA2-384 算法",
    "uri": "/1_algorithms/2_hash/2_sha/4_sha2_384/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "4 XYZ",
    "uri": "/6_format/3_color/4_xyz/index.html"
  },
  {
    "content": "1 序 2 目录 ",
    "description": "",
    "tags": null,
    "title": "4 压缩格式",
    "uri": "/6_format/4_compress/index.html"
  },
  {
    "content": "原理 设整数 n 类型为 int_8，值为 3，则 3 + (~3) = 0000 0011 + 1111 1100 = 1111 1111 = -1，所以引出非运算的基础公式 n + (~n) = -1，也可以将 n ^ -1 = ~n 带入。\n位运算实现n+1与n-1 对n + (~n) = -1进行等式变换可得：\nint n; ~n = -(n + 1); n + 1 = -~n; n - 1 = ~-n;\t// 假设n = -n，可推出此等式 取相反数 一个数的相反数等于其按位取反后再加1，对上等式变换推出：\nint n; -n = ~n + 1;取绝对值 这一块内容也用到了n ^ 0 = n 和 n ^ -1 = ~n：\n若 n 为非负数，则 n » 31 = 0，所以 abs = n ^ 0 - 0 = n。 若 n 为负数，则 n » 31 = -1，所以 abs = n ^ (-1) + 1 = ~n + 1 = -1 - n + 1 = -n。 int abs, n; abs = (n ^ (n \u003e\u003e 31)) - (n \u003e\u003e 31)",
    "description": "",
    "tags": [
      "Bitwise"
    ],
    "title": "4 应用 n + (~n) = -1",
    "uri": "/1_algorithms/3_bitwise/4_application/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "4 中间优化",
    "uri": "/3_compiler/4_optimize/index.html"
  },
  {
    "content": "待续 ",
    "description": "",
    "tags": null,
    "title": "图形图像",
    "uri": "/4_graphical/index.html"
  },
  {
    "content": "待续\n",
    "description": "",
    "tags": null,
    "title": "5 解析表达式",
    "uri": "/3_compiler/2_parser/5_parserexp/index.html"
  },
  {
    "content": "基本类型 固定位宽类型 注解 位宽(bit) void 空，一般用于表示无返回值 — bool 布尔类型 8 flt32 32位单精度浮点 32 flt64 64位双精度浮点 32 int8 8位有符号整数 8 int16 8位有符号整数 16 int32 8位有符号整数 32 int64 8位有符号整数 64 uint8 8位无符号整数 8 uint16 16位无符号整数 16 uint32 32位无符号整数 32 uint64 64位无符号整数 64 char 字符 8 可变位宽类型的位宽由编译的目标CPU架构有关。\n可变位宽类型注解CPU32CPU64\rsint有符号整数 3264\ruint无符号整数 3264\ruintptr指针 3264\rcstring字符串指针 3264\r枚举类型 枚举定义只能是定义整数类的值，其占用的字节数、有无符号性，通过基类标识指定。\n如下所示：\nenum Color:uint32{ Red, Black, }结构体 结构体在airlang中是值类型，不会进入GC系统，除通过API分配独立的堆内存。\n一般用于构成类中的共同属性。\nstruct Vec2{ int32 x; int32 y; } struct Vec3 :Vec2{ int32 z; }联合体 union Int32{ int32 i32; struct{ int8 [4] v4; } }接口 interface IEvent{ void eat(); }类 class Parent{ int32 i32; void doing(){} } class Child :Parent \u003cIEvent\u003e{ int64 i64; void eat()@override{} }委托 entrust Func = void (int32,int64)@clang;",
    "description": "",
    "tags": null,
    "title": "5 类型系统",
    "uri": "/3_compiler/8_langdef/5_typesystem/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "5 LAB",
    "uri": "/6_format/3_color/5_lab/index.html"
  },
  {
    "content": "原文来自\n",
    "description": "",
    "tags": [
      "Hash",
      "SHA"
    ],
    "title": "5 SHA2-512 算法",
    "uri": "/1_algorithms/2_hash/2_sha/5_sha2_512/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "5 目标生成",
    "uri": "/3_compiler/5_target/index.html"
  },
  {
    "content": "1 序 2 目录 ",
    "description": "",
    "tags": null,
    "title": "5 图片格式",
    "uri": "/6_format/5_picture/index.html"
  },
  {
    "content": "交换两个数的值 不需要第三个临时变量，交换两个数的值\nint a, b; a ^= b;\t// a = a ^ b; b ^= a;\t// b = b ^ a = b ^ a ^ b = (b ^ b) ^ a = 0 ^ a = a a ^= b;\t// a = a ^ b = a ^ a ^ b = 0 ^ b = b 代替特定的条件赋值 如果 x = a，则 a ^ b ^ x = 0 ^ b；如果 x = b，则 a ^ b ^ x = 0 ^ a；\n所以下列代码可等价于：x = a ^ b ^ x。\nint a, b, x; if(x == a) x = b; else if(x == b) x = a; // 上面代码等价于 x = a ^ b ^ x",
    "description": "",
    "tags": [
      "Bitwise"
    ],
    "title": "5 应用 n ^ n = 0 和 n ^ 0 = n",
    "uri": "/1_algorithms/3_bitwise/5_application2/index.html"
  },
  {
    "content": "待续 ",
    "description": "",
    "tags": null,
    "title": "操作系统",
    "uri": "/5_os/index.html"
  },
  {
    "content": "待续\n",
    "description": "",
    "tags": null,
    "title": "6 解析声明",
    "uri": "/3_compiler/2_parser/6_parserdecl/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "6 CMYK",
    "uri": "/6_format/3_color/6_cmyk/index.html"
  },
  {
    "content": "1 序 2 目录 ",
    "description": "",
    "tags": null,
    "title": "6 视频格式",
    "uri": "/6_format/6_video/index.html"
  },
  {
    "content": "原理 x\u0026(x-1)可以消除数字x二进制表示的最后一个1，如：\nint x = 0xf6; printf(\"%x\\n\", x);\t//0b11110110 printf(\"%x\\n\", x\u0026(x-1));\t//0b11110100 判断一个正数是不是2的次幂 如果一个正数是2的次幂，则这个数的二进制表示中只含有一个1。\nint x; if(x\u0026(x-1)){ //x至少含有两个1，所以不是2的次幂 } 计算一个数的二进制含有多少个1 x中的最后一个1可以通过操作x = x\u0026(x-1)循环消去，当最后x值为0时，便可以求出二进制中1的个数。\nint x, total; while(x \u003e 0){ x = x\u0026(x-1); total++; }",
    "description": "",
    "tags": [
      "Bitwise"
    ],
    "title": "6 应用  x\u0026(x-1)",
    "uri": "/1_algorithms/3_bitwise/6_application3/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "6 中间代码",
    "uri": "/3_compiler/6_ir/index.html"
  },
  {
    "content": "1 简介 本篇章收集一些文件数据的详细格式格式，为程序开发提供参考。\n2 目录 1 通用格式设计 1 文件头 2 段节格式 3 TLV格式 2 程序格式 1 ELF 格式 1 ELF32 格式 2 ELF64 格式 3 颜色格式 1 RGBA 2 HSL/HSV 3 YUV 4 XYZ 5 LAB 6 CMYK 4 压缩格式 5 图片格式 6 视频格式 7 音频格式 8 模型3D ",
    "description": "",
    "tags": null,
    "title": "数据格式",
    "uri": "/6_format/index.html"
  },
  {
    "content": "待续\n",
    "description": "",
    "tags": null,
    "title": "7 解析声明续",
    "uri": "/3_compiler/2_parser/7_parserdecl2/index.html"
  },
  {
    "content": "1 序 指令集可分为两大类，真实硬件指令集和虚拟机指令集。\n真实硬件指令集又分为两类：\nCISC (复杂指令集)：CISC 以 X86 系列为代表，指令系统较为复杂，硬件实现也比较复杂。 RISC (精简指令集)：RISC 的指令系统较为精简，目的是降低硬件实现的复杂度，以 RISC-V 、ARM为代表。 虚拟机指令集可分为三种：\n基于栈的指令集：纯栈操作，所有的运算都基于栈，其中以 Java 字节码指令集为代表。 基于寄存器的指令集：纯寄存器操作，所有的运算基于寄存器，其中以安卓的 Dalvik 字节码指令集为代表。 基于栈和寄存器的指令集：混合式操作，类似于 RISC 指令集，但是又与真实硬件系统有差异。 虚拟机的指令与设计的字节码保存文件存在较强相关性，所以要真正理解虚拟机指令，还需要理解字节码文件的存储格式。\n2 目录 1 基于栈的指令集 2 基于寄存器的指令集 3 基于栈和寄存器的指令集 ",
    "description": "",
    "tags": null,
    "title": "7 指令集",
    "uri": "/3_compiler/7_instruction/index.html"
  },
  {
    "content": "1 序 2 目录 ",
    "description": "",
    "tags": null,
    "title": "7 音频格式",
    "uri": "/6_format/7_audio/index.html"
  },
  {
    "content": "整数对2的乘/除法 整数 n 向右移一位，相当于将 n 除以 2；数 n 向左移一位，相当于将 n 乘以 2。\nint n = 2; n \u003e\u003e 1; // 1 n \u003c\u003c 1; // 4 n 对“2的次方”取余 m 是2的次方，则其二进制数只有一个1，如 4 =\u003e 0100，8 =\u003e 1000。m-1 之后，原本 m 二进制的1变成0，原本1后面的0全变成1，如 4-1 = 3 =\u003e 0011，8-1 = 7 =\u003e 0111。\n2 ^ 0 = 1\n2 ^ 1 = 2\n2 ^ 2 = 4\n2^ 3 = 8\n2 ^ 4 = 16\n2 ^ 5 = 32\n…\n可以看出 2^(q + 1) 永远都是 2^q 的整数倍，而 2^q 比 2^(q - 1)+2^(q - 2) … + 2^0 的和还要大 1。\n假设 m = 2^q ，q 为正整数。n 的二进制数中，第[ n 的最高位, q ]位的和是 m 的整数倍，而第[ q-1, 0 ]位的和是 n/m 的余数，也就是说将n的二进制数的第[ q-1, 0 ]位截取，即可得到 n/m 的余数。\nm = 2^q ， m − 1 = 2^(q - 1)+2^(q - 2) … + 2^0 =\u003e 00011…1（[ q-1, 0 ]位全为1），所以 n \u0026 (m - 1) 的值为 n/m 的余数。\nint mod, n, m; // m是2的次方，如4,8等 mod = n \u0026 (m - 1);将 n 以“2的次方”倍数最小补全 有 n 和 m 两数，m 为2的次方，找到大于等于 n 且正好是 m 整数倍的最小数。\n假设 m = 2^q ，则 m 的倍数的二进制数中，第 q 位为1，其余位全为 0；(m - 1) 的二进制数中[ q-1, 0 ]位全为 1，其余位全为 0。\n所以有两种情况：\n如果n的二进制数中[ q-1, 0 ]位全为 0，则 n 就是 m 整数倍的最小数； 如果n的二进制数中[ q-1, 0 ]位不全为 0，在第 q 位上加 1，所得结果就是 m 整数倍的最小数。 现给 n 加上一个[ q-1, 0 ]位全为 1，其余位全为 0 的数（ m-1 就是这个数），并将所得结果的[ q-1, 0 ]位全部置为 0（结果与 ~(m - 1) 相与即可），便可满足这两种情况。\nint min, n, m; min = (n + m - 1) \u0026 ~(m - 1);",
    "description": "",
    "tags": [
      "Bitwise"
    ],
    "title": "7 应用 2的次方",
    "uri": "/1_algorithms/3_bitwise/7_2pow/index.html"
  },
  {
    "content": "air语言是C语法系的编程语言，提供面向对象、函数式、模板等高级语言功能。\n目录 1 语法定义 2 代码结构 3 关键字 4 操作符 5 类型系统 ",
    "description": "",
    "tags": null,
    "title": "8 语言定义",
    "uri": "/3_compiler/8_langdef/index.html"
  },
  {
    "content": "1 序 2 目录 ",
    "description": "",
    "tags": null,
    "title": "8 模型3D",
    "uri": "/6_format/8_model/index.html"
  },
  {
    "content": "原理 如果 a \u003e= b，则 a - b \u003e= 0 且 ~(a - b) \u003c 0，所以 ((a - b) » 31) = 0 且 (~(a - b) » 31) = -1。 如果 a \u003c b，则 a - b \u003c 0 且 ~(a - b) \u003e= 0，所以 ((a - b) » 31) = -1 且 (~(a - b) » 31) = 0。 实现 int max(int a, int b){ return (b \u0026 ((a - b) \u003e\u003e 31)) | (a \u0026 (~(a - b) \u003e\u003e 31)); } int min(int a, int b){ return (a \u0026 ((a - b) \u003e\u003e 31)) | (b \u0026 (~(a - b) \u003e\u003e 31)); }",
    "description": "",
    "tags": [
      "Bitwise"
    ],
    "title": "8 取两数的最 大/小 值",
    "uri": "/1_algorithms/3_bitwise/8_maxmin/index.html"
  },
  {
    "content": "字节码文件的设计是虚拟机资源加载的核心，其中的设计会影响到虚拟机指令集的设计。\n目录 ",
    "description": "",
    "tags": null,
    "title": "9 字节码文件格式",
    "uri": "/3_compiler/9_bcf/index.html"
  },
  {
    "content": "虚拟机的设计与实现，其核心是指令集、字节码文件的设计，这两者包含了虚拟运行的机制。只有明白两者为什么这样设计，才能快速写出执行代码。\n目录 ",
    "description": "",
    "tags": null,
    "title": "10 虚拟机设计与实现",
    "uri": "/3_compiler/10_vmimp/index.html"
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
    "content": " 技术收集、随笔、总结。\n目录 存在以下分类： 算法 1 整数对齐 2 哈希函数 3 快速位算法 数据结构 链表 编译原理 1 词法分析 2 语法分析 3 语义分析 4 中间优化 5 目标生成 6 中间代码 7 指令集 8 语言定义 9 字节码文件格式 10 虚拟机设计与实现 图形图像 操作系统 数据格式 1 通用格式设计 2 程序格式 3 颜色格式 4 压缩格式 5 图片格式 6 视频格式 7 音频格式 8 模型3D 网址收藏 文件格式相关 文件格式汇编: https://www.moon-soft.com/program/FORMAT/ 算法相关 加解密算法: https://www.cnblogs.com/Kingfans/category/2198205.html 快速位运算算法: http://graphics.stanford.edu/~seander/bithacks.html x86/x64指令相关 x86-64的指令编码入门: https://blog.csdn.net/JimFire/article/details/112652145 x86_64指令编码方式: https://zhuanlan.zhihu.com/p/464774687 X86 Opcode and Instruction Reference: http://ref.x86asm.net/geek64.html X86-64_Instruction_Encoding: https://wiki.osdev.org/X86-64_Instruction_Encoding 游戏引擎相关 游戏引擎 浅入浅出: https://www.thisisgame.com.cn/tutorial?book=cpp-game-engine-book\u0026lang=zh\u0026md=Introduction.md ",
    "description": "",
    "tags": null,
    "title": "主页",
    "uri": "/index.html"
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
    "title": "标签 :: Bitwise",
    "uri": "/tags/bitwise/index.html"
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
    "title": "标签 :: CRC",
    "uri": "/tags/crc/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "标签 :: Hash",
    "uri": "/tags/hash/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "标签 :: MD",
    "uri": "/tags/md/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "标签 :: SHA",
    "uri": "/tags/sha/index.html"
  }
]
