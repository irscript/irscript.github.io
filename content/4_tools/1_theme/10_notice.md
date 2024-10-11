+++
title = "注解(Notice)"
weight = 10
serialing = true
description = "免责声明可帮助您构建页面"
+++

`notice` 简码显示各种类型的免责声明，并带有可调节的颜色、标题和图标，以帮助您构建页面。

{{% notice style="primary" title="There may be pirates" icon="skull-crossbones" %}}
这一切都与盒子有关。
{{% /notice %}}

## 用法

{{< tabs groupid="shortcode-parameter">}}
{{% tab title="shortcode" %}}

````go
{{%/* notice style="primary" title="There may be pirates" icon="skull-crossbones" */%}}
It is all about the boxes.
{{%/* /notice */%}}
````

{{% /tab %}}
{{% tab title="shortcode (positional)" %}}

````go
{{%/* notice primary "There may be pirates" "skull-crossbones" */%}}
It is all about the boxes.
{{%/* /notice */%}}
````

{{% /tab %}}
{{< /tabs >}}

### 参数

| 名称      | 位置 | 默认   | 注释       |
|-----------|----------|-----------|-------------|
| **style** | 1        | `default` | 框使用的样式方案。<br/><br/>- 严重程度： `info`, `note`, `tip`, `warning`<br/>- 印记颜色：`primary`, `secondary`, `accent`<br/>- 颜色： `blue`, `green`, `grey`, `orange`, `red`<br/>- 特殊颜色: `default`, `transparent`, `code`|
| **color** |          | see notes | 要使用的 [CSS 颜色值](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)。如果未设置，则选择的颜色取决于样式。任何给定的值都将覆盖默认值。<br/><br/>- 对于严重性样式：严重性匹配的漂亮颜色<br/>- 对于所有其他样式：相应的颜色 |
| **title** | 2        | see notes |框的标题的任意文本。根据样式的不同，可能会有一个默认标题。任何给定的值都将覆盖默认值。<br/><br/>- 对于严重性样式：严重性匹配的标题<br/>- 对于所有其他样式：<空><br/><br/>如果您不希望严重性样式的标题，则必须将此参数设置为`" "`（一个充满空格的非空字符串）。|
| **icon**  | 3        | see notes | [Font Awesome icon name](https://fontawesome.com.cn/v5) 设置在标题的左侧。根据样式的不同，可能会有一个默认图标。任何给定的值都将覆盖默认值。<br/><br/>- 对于严重性样式：严重性匹配的漂亮图标<br/>- 对于所有其他样式：_&lt;空&gt;_ <br/><br/>如果您不想为严重性样式使用图标，则必须将此参数设置为`" "`（填充空格的非空字符串） |
| _**&lt;content&gt;**_ |          | _&lt;empty&gt;_ | 要在框中显示的任意文本。|

## 案例

### 按严重性

#### 带有标记的信息

````go
{{%/* notice style="info" */%}}
An **information** disclaimer

You can add standard markdown syntax:

- multiple paragraphs
- bullet point lists
- _emphasized_, **bold** and even ***bold emphasized*** text
- [links](https://example.com)
- etc.

```plaintext
...and even source code
```

> the possibilities are endless (almost - including other shortcodes may or may not work)
{{%/* /notice */%}}
````

{{% notice style="info" %}}
An **information** disclaimer

You can add standard markdown syntax:

- multiple paragraphs
- bullet point lists
- _emphasized_, **bold** and even **_bold emphasized_** text
- [links](https://example.com)
- etc.

```plaintext
...and even source code
```

> the possibilities are endless (almost - including other shortcodes may or may not work)
{{% /notice %}}

#### Note

````go
{{%/* notice style="note" */%}}
A **notice** disclaimer
{{%/* /notice */%}}
````

{{% notice style="note" %}}
A **notice** disclaimer
{{% /notice %}}

#### Tip

````go
{{%/* notice style="tip" */%}}
A **tip** disclaimer
{{%/* /notice */%}}
````

{{% notice style="tip" %}}
A **tip** disclaimer
{{% /notice %}}

#### Warning

````go
{{%/* notice style="warning" */%}}
A **warning** disclaimer
{{%/* /notice */%}}
````

{{% notice style="warning" %}}
A **warning** disclaimer
{{% /notice %}}

#### 带有非默认标题和图标的 Warning

````go
{{%/* notice style="warning" title="Here are dragons" icon="dragon" */%}}
A **warning** disclaimer
{{%/* /notice */%}}
````

{{% notice style="warning" title="Here are dragons" icon="dragon" %}}
A **warning** disclaimer
{{% /notice %}}

#### 没有标题和图标的 Warning

````go
{{%/* notice style="warning" title=" " icon=" " */%}}
A **warning** disclaimer
{{%/* /notice */%}}
````

{{% notice style="warning" title=" " icon=" " %}}
A **warning** disclaimer
{{% /notice %}}

### 按品牌颜色

#### 仅具有标题 Primary

````go
{{%/* notice style="primary" title="Primary" */%}}
A **primary** disclaimer
{{%/* /notice */%}}
````

{{% notice style="primary" title="Primary" %}}
A **primary** disclaimer
{{% /notice %}}

#### 仅具有图标的 Secondary

````go
{{%/* notice style="secondary" icon="stopwatch" */%}}
A **secondary** disclaimer
{{%/* /notice */%}}
````

{{% notice style="secondary" icon="stopwatch" %}}
A **secondary** disclaimer
{{% /notice %}}

#### Accent

````go
{{%/* notice style="accent" */%}}
An **accent** disclaimer
{{%/* /notice */%}}
````

{{% notice style="accent" %}}
An **accent** disclaimer
{{% /notice %}}

### 按颜色

#### 没有标题和图标的 Blue

````go
{{%/* notice style="blue" */%}}
A **blue** disclaimer
{{%/* /notice */%}}
````

{{% notice style="blue" %}}
A **blue** disclaimer
{{% /notice %}}

#### 仅带标题的 Green

````go
{{%/* notice style="green" title="Green" */%}}
A **green** disclaimer
{{%/* /notice */%}}
````

{{% notice style="green" title="Green" %}}
A **green** disclaimer
{{% /notice %}}

#### 仅带图标的 Grey

````go
{{%/* notice style="grey" icon="bug" */%}}
A **grey** disclaimer
{{%/* /notice */%}}
````

{{% notice style="grey" icon="bug" %}}
A **grey** disclaimer
{{% /notice %}}

#### 带有标题和图标的 Orange

````go
{{%/* notice style="orange" title="Orange" icon="bug" */%}}
A **orange** disclaimer
{{%/* /notice */%}}
````

{{% notice style="orange" title="Orange" icon="bug" %}}
A **orange** disclaimer
{{% /notice %}}

#### 没有标题和图标的 Red

````go
{{%/* notice style="red" */%}}
A **red** disclaimer
{{%/* /notice */%}}
````

{{% notice style="red" %}}
A **red** disclaimer
{{% /notice %}}

### 按特殊颜色

#### 使用位置参数的默认值

````go
{{%/* notice default "Pay Attention to this Note!" "skull-crossbones" */%}}
Some serious information.
{{%/* /notice */%}}
````

{{% notice default "Pay Attention to this Note!" "skull-crossbones" %}}
Some serious information.
{{% /notice %}}

#### 透明的标题和图标

````go
{{%/* notice style="transparent" title="Pay Attention to this Note!" icon="skull-crossbones" */%}}
Some serious information.
{{%/* /notice */%}}
````

{{% notice style="transparent" title="Pay Attention to this Note!" icon="skull-crossbones" %}}
Some serious information.
{{% /notice %}}

### 具有用户定义的颜色、Font Awesome 字体的品牌图标和 Markdown 标题

````go
{{%/* notice color="fuchsia" title="**Hugo**" icon="fab fa-hackerrank" */%}}
Victor? Is it you?
{{%/* /notice */%}}
````

{{% notice color="fuchsia" title="**Hugo**" icon="fab fa-hackerrank" %}}
Victor? Is it you?
{{% /notice %}}
