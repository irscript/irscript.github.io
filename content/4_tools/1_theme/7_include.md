+++
title = "包含文件(include)"
weight = 7
serialing = true
description = "从其他文件显示内容"
+++

`include`简码在当前页面中包含项目中的其他文件。

## 用法


{{< tabs groupid="shortcode-parameter">}}
{{% tab title="shortcode" %}}

````go
{{%/* include file="include_me.md" */%}}
````

{{% /tab %}}
{{% tab title="shortcode (positional)" %}}

````go
{{%/* include "include_me.md" */%}}
````

{{% /tab %}}

{{< /tabs >}}

包含的文件甚至可以包含 Markdown，并且在生成目录时会被考虑在内。

### 参数

| 名称                 | 位置 | 默认          | 注释       |
|----------------------|----------|------------------|-------------|
| **file**             | 1        | _&lt;empty&gt;_  | 要包含的文件的路径。路径分辨率遵循[Hugo的内置readFile功能](https://gohugo.io/functions/readfile/) |
| **hidefirstheading** | 2        | `false`          | `true`:当包含的文件包含标题时，第一个标题将被隐藏。例如，这派上用场。如果包含其他独立的 Markdown 文件。|

## 案例

### 任意内容

````go
{{%/* include "4_tools/1_theme/include_me.md" */%}}
````

{{% include "4_tools/1_theme/include_me.md" %}}