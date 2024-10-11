+++
title = "高亮(highlight)"
weight = 5
serialing = true
+++

`highlight` 使用语法高亮显示来呈现您的代码。

{{< highlight lineNos="true" type="py" wrap="true" title="python" >}}
print("Hello World!")
{{< /highlight >}}

## 用法
这个简码与 `Hugo` 的 `highlight` 简码但提供了一些扩展。

它的调用方式与 Hugo 自己的短代码相同，提供位置参数或简单地使用 codefences。

您也可以自由地从自己的部分调用此短代码。在这种情况下，它类似于雨果的highlight功能语法，如果使用兼容性语法将此简码称为部分。

虽然示例使用带有命名参数的短代码，但建议改用 codefences。这是因为越来越多的其他软件支持共同防御（例如。GitHub），因此您的 Markdown 变得更加可移植。

{{< tabs groupid="shortcode-parameter">}}
{{% tab title="codefence" %}}

````md
```py { lineNos="true" wrap="true" title="python" }
print("Hello World!")
```
````

{{% /tab %}}
{{% tab title="shortcode" %}}

````go
{{</* highlight lineNos="true" type="py" wrap="true" title="python" */>}}
print("Hello World!")
{{</* /highlight */>}}
````

{{% /tab %}}
{{% tab title="shortcode (positional)" %}}

````go
{{</* highlight py "lineNos=true,wrap=true,title=python" */>}}
print("Hello World!")
{{</* /highlight */>}}
````

{{% /tab %}}

{{< /tabs >}}

### 参数

| 名称                  | 位置 | 默认          | Note注释s       |
|-----------------------|--------- | -----------------|-------------|
| **type**              | 1        | _&lt;空&gt;_  | 要突出显示的代码语言。从[支持的语言](https://gohugo.io/content-management/syntax-highlighting/#list-of-chroma-highlighting-languages)之一中进行选择。不区分大小写。 |
| **title**             |          | _&lt;空&gt;_  | **扩展**。 代码的任意标题。如果出现以下情况，则会像单个选项卡一样显示代码`hl_inline=false`（这是 Hugos 的默认设置）。 |
| **wrap**              |          |          | **扩展**。 当内容可以换行时，否则它将是可滚动的。<br>默认值true,可以在`hugo.toml`并通过 `frontmatter` 覆盖。见[下文](#configuration)。 |
| **options**           | 2        | _&lt;空&gt;_  | 此表中零个或多个 [Hugo 支持的选项](https://gohugo.io/functions/highlight/#options) 以及扩展参数的可选逗号分隔列表。|
| _**&lt;option&gt;**_  |          | _&lt;空&gt;_  |  [Hugo 支持的任何选项](https://gohugo.io/functions/highlight/#options). |
| _**&lt;content&gt;**_ |          | _&lt;空&gt;_  | 需要语法高亮的代码. |


## 配置
[Hugo 支持选项](https://gohugo.io/functions/highlight/#options) 的默认值可以通过 `goldmark` 设置`hugo.toml`

扩展选项的默认值可以通过`hugo.toml`或被每个单独页面的 `frontmatter` 覆盖。

### 全局配置文件
您可以在[颜色变体样式表](https://github.com/chase-moskal/mermaid-live-editor/blob/master/src/components/editor/editor.styles.scss)文件中配置用于代码块的颜色样式。
#### 推荐设置

```toml
[markup]
  [markup.highlight]
    lineNumbersInTable = false
    noClasses = false
```

#### 可选设置

```toml
[params]
  highlightWrap = true
```

### 页面 Frontmatter

```toml
highlightWrap = true
```

## 案例

### 带起始偏移量的行号

如上所述，如果代码换行，布局中的行号将发生变化，因此最好使用`table` `inline`.为了让您更轻松，请将`lineNumbersInTable = false`在你的`hugo.toml`并添加`lineNos = true`调用简码而不是特定值时，或者`table` `inline`.

````go
{{</* highlight lineNos="true" lineNoStart="666" type="py" */>}}
# the hardest part is to start writing code; here's a kickstart; just copy and paste this; it's free; the next lines will cost you serious credits
print("Hello")
print(" ")
print("World")
print("!")
{{</* /highlight */>}}
````

{{< highlight lineNos="true" lineNoStart="666" type="py" >}}
# the hardest part is to start writing code; here's a kickstart; just copy and paste this; it's free; the next lines will cost you serious credits
print("Hello")
print(" ")
print("World")
print("!")
{{< /highlight >}}

### 有标题的Codefence


````md
```py { title="python" }
# a bit shorter
print("Hello World!")
```
````

```py { title="python" }
# a bit shorter
print("Hello World!")
```



### 带装饰

````go
{{</* highlight type="py" wrap="true" hl_lines="2" */>}}
# Quicksort Python One-liner
lambda L: [] if L==[] else qsort([x for x in L[1:] if x< L[0]]) + L[0:1] + qsort([x for x in L[1:] if x>=L[0]])
# Some more stuff
{{</* /highlight */>}}
````

{{< highlight type="py" wrap="true" hl_lines="2" >}}
# Quicksort Python One-liner
lambda L: [] if L==[] else qsort([x for x in L[1:] if x< L[0]]) + L[0:1] + qsort([x for x in L[1:] if x>=L[0]])
# Some more stuff
{{< /highlight >}}

### 无装饰

````go
{{</* highlight type="py" wrap="false" hl_lines="2" */>}}
# Quicksort Python One-liner
lambda L: [] if L==[] else qsort([x for x in L[1:] if x< L[0]]) + L[0:1] + qsort([x for x in L[1:] if x>=L[0]])
# Some more stuff
{{</* /highlight */>}}
````

{{< highlight type="py" wrap="false" hl_lines="2">}}
# Quicksort Python One-liner
lambda L: [] if L==[] else qsort([x for x in L[1:] if x< L[0]]) + L[0:1] + qsort([x for x in L[1:] if x>=L[0]])
# Some more stuff
{{< /highlight >}}
