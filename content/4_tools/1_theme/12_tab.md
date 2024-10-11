+++
title = "标签页"
weight = 12
serialing = true
description = "显示单个标签页"
+++

`tab`简码来显示单个选项卡。

如果要使用显式语言标记代码示例，这将特别有用。

如果要将多个选项卡组合在一起，可以将选项卡包装到选项卡简码中。

{{% tab title="c" %}}

```c
printf("Hello World!");
```

{{% /tab %}}

## 用户



{{< tabs groupid="shortcode-parameter">}}
{{% tab title="shortcode" %}}

````go
{{%/* tab title="c" */%}}
```c
printf("Hello World!");
```
{{%/* /tab */%}}
````

{{% /tab %}}
{{< /tabs >}}

### 参数

| 名称                  | 默认         | 注释       |
|-----------------------|-----------------|-------------|
| **style**             | see notes       | 用于选项卡的样式方案。如果未设置样式，而是在选项卡内显示单个代码块，则其默认样式将适应块的样式。否则codedefault被使用。<br/>- 按严重性：`info`,`note`,`tip`,`warning`<br/>- 按品牌颜色：`primary`,`secondary`,`accent`<br/>- 按颜色：`blue`,`green`,`grey`,`orange`，<br/>- 按特殊颜色：`red`,`default`,`transparent`,`code`|
| **color**             | see notes       | 要使用的 [CSS 颜色值](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)。如果未设置，则选择的颜色取决于样式。任何给定的值都将覆盖默认值。<br/><br/>- 对于严重性样式：严重性匹配的漂亮颜色<br/>- 对于所有其他样式：相应的颜色  |
| **title**             | see notes       | 标题的任意文本。根据样式的不同，可能会有一个默认标题。任何给定的值都将覆盖默认值。<br/><br/>- 对于严重性样式：严重性匹配的标题<br/>- 对于所有其他样式：<空><br/><br/>如果您不希望严重性样式的标题，则必须将此参数设置为`" "`（一个充满空格的非空字符串）。|
| **icon**              | see notes       | [Font Awesome icon name](https://fontawesome.com.cn/v5) 设置在标题的左侧。根据样式的不同，可能会有一个默认图标。任何给定的值都将覆盖默认值。<br/><br/>- 对于严重性样式：严重性匹配的漂亮图标<br/>- 对于所有其他样式：_&lt;空&gt;_ <br/><br/>如果您不想为严重性样式使用图标，则必须将此参数设置为`" "`（填充空格的非空字符串）|
| _**&lt;content&gt;**_ | _&lt;empty&gt;_ | 任意文本，可以为 _&lt;空&gt;_ |

## 案例

### 具有折叠边距的单个代码块

````go
{{%/* tab title="Code" */%}}
```python
printf("Hello World!");
```
{{%/* /tab */%}}
````

{{% tab title="Code" %}}

```python
printf("Hello World!");
```

{{% /tab %}}

### 混合 Markdown 内容

````go
{{%/* tab title="_**Mixed**_" */%}}
选项卡不仅可以包含代码，还可以包含任意文本。在这种情况下，文本和代码将获得边距。
```python
printf("Hello World!");
```
{{%/* /tab */%}}
````

{{% tab title="_**Mixed**_" %}}

选项卡不仅可以包含代码，还可以包含任意文本。在这种情况下，文本和代码将获得边距。

```python
printf("Hello World!");
```

{{% /tab %}}

### 理解`style` 和 `color` 行为

该`style`参数会影响参数`color`的应用方式


````go
{{</* tabs */>}}
{{%/* tab title="just colored style" style="blue" */%}}
The `style` parameter is set to a color style.

This will set the background to a lighter version of the chosen style color as configured in your theme variant.
{{%/* /tab */%}}
{{%/* tab title="just color" color="blue" */%}}
Only the `color` parameter is set.

This will set the background to a lighter version of the chosen CSS color value.
{{%/* /tab */%}}
{{%/* tab title="default style and color" style="default" color="blue" */%}}
The `style` parameter affects how the `color` parameter is applied.

The `default` style will set the background to your `--MAIN-BG-color` as configured for your theme variant resembling the default style but with different color.
{{%/* /tab */%}}
{{%/* tab title="just severity style" style="info" */%}}
The `style` parameter is set to a severity style.

This will set the background to a lighter version of the chosen style color as configured in your theme variant and also affects the chosen icon.
{{%/* /tab */%}}
{{%/* tab title="severity style and color" style="info" color="blue" */%}}
The `style` parameter affects how the `color` parameter is applied.

This will set the background to a lighter version of the chosen CSS color value and also affects the chosen icon.
{{%/* /tab */%}}
{{</* /tabs */>}}
````

{{< tabs >}}
{{% tab title="just colored style" style="blue" %}}

The `style` parameter is set to a color style.

This will set the background to a lighter version of the chosen style color as configured in your theme variant.

{{% /tab %}}
{{% tab title="just color" color="blue" %}}

Only the `color` parameter is set.

This will set the background to a lighter version of the chosen CSS color value.

{{% /tab %}}
{{% tab title="default style and color" style="default" color="blue" %}}

The `style` parameter affects how the `color` parameter is applied.

The `default` style will set the background to your `--MAIN-BG-color` as configured for your theme variant resembling the default style but with different color.

{{% /tab %}}
{{% tab title="just severity style" style="info" %}}

The `style` parameter is set to a severity style.

This will set the background to a lighter version of the chosen style color as configured in your theme variant and also affects the chosen icon.

{{% /tab %}}
{{% tab title="severity style and color" style="info" color="blue" %}}

The `style` parameter affects how the `color` parameter is applied.

This will set the background to a lighter version of the chosen CSS color value and also affects the chosen icon.

{{% /tab %}}
{{< /tabs >}}
