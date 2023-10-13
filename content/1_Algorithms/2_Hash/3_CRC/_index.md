+++
tags = ["Hash","CRC"]
title = '3 CRC 哈希函数'
weight = 3
+++

## 简介

CRC的全称为 Cyclic Redundancy Check，中文名称为循环冗余校验。它是一类重要的线性分组码，编码和解码方法简单，检错和纠错能力强，在通信领域广泛地用于实现差错控制。

实际上，除数据通信外，CRC在其它很多领域也是大有用武之地的。例如我们读软盘上的文件，以及解压一个ZIP文件时，偶尔会碰到“Bad CRC”错误，由此它在数据存储方面的应用可略见一斑。 

## CRC 系列算法

{{% children sort="weight" %}}
