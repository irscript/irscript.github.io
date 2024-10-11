+++
title = "按钮(button)"
weight = 2
serialing = true
+++

`按钮(button)`简码显示一个可点击的按钮，颜色、标题和图标可调整。

{{% button href="https://gohugo.io/" %}}Get Hugo{{% /button %}}

{{% button href="https://gohugo.io/" style="warning" icon="dragon" %}}Get Hugo{{% /button %}}

## 用法

{{% tab title="简码" %}}

````go
{{%/* button href="https://gohugo.io/" %}}Get Hugo{{% /button */%}}
{{%/* button href="https://gohugo.io/" style="warning" icon="dragon" %}}Get Hugo{{% /button */%}}
````

{{% /tab %}}

单击该按钮后，它将为给定的 URL 打开另一个浏览器选项卡。

## 参数
| 名称|默认 | 描述 |
|:----|:-----|:-----|
| href |  | 链接地址 |
| style |`transparent`| 徽章使用的样式方案。<br/><br/>- 严重程度： `info`, `note`, `tip`, `warning`<br/>- 印记颜色：`primary`, `secondary`, `accent`<br/>- 颜色： `blue`, `green`, `grey`, `orange`, `red`<br/>- 特殊颜色: `default`, `transparent`, `code`|
| color |  |要使用的 [CSS 颜色值](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)。如果未设置，则选择的颜色取决于样式。任何给定的值都将覆盖默认值。<br/><br/>- 对于严重性样式：严重性匹配的漂亮颜色<br/>- 对于所有其他样式：相应的颜色                    |
| icon  | |[Font Awesome icon name](https://fontawesome.com.cn/v5) 设置在标题的左侧。根据样式的不同，可能会有一个默认图标。任何给定的值都将覆盖默认值。<br/><br/>- 对于严重性样式：严重性匹配的漂亮图标<br/>- 对于所有其他样式：_&lt;空&gt;_<br/><br/>如果您不想为严重性样式使用图标，则必须将此参数设置为`" "`（填充空格的非空字符串）|
| **iconposition**      | `left`          | 设置图标的位置。<br/><br/>- `left` :图标在标题的左侧。<br/>- `right`：图标在标题的右侧。 |
| **target**            |       | 如果 href 是 URL，则为目标框架/窗口。否则，不使用该参数。这的行为类似于普通链接。如果未给出该参数，则默认为：<br/>- 设置`externalLinkTarget `或`_blank`如果未设置，则适用于任何以`http://`或`https://`<br/>- 所有其他链接没有特定值|
| **type**              |       | 如果 `href` 是 `JavaScript`，则按钮类型。否则，不使用该参数。如果未给出该参数，则默认为`button` |
| _**&lt;txt&gt;**_ |      | 按钮标题的任意文本。根据样式的不同，可能会有一个默认标题。任何给定值都将覆盖默认值。<br/><br/>- 对于严重性样式：严重性<br/>- 对于所有其他样式的匹配标题：_&lt;空&gt;_ <br/><br/>如果不希望严重性样式的标题，则必须将此参数设置为`" "`（充满空格的非空字符串）|

## 案例

### 样式

#### 严重性

````go
{{%/* button href="https://gohugo.io/" style="info" %}}Get Hugo{{% /button */%}}
{{%/* button href="https://gohugo.io/" style="note" %}}Get Hugo{{% /button */%}}
{{%/* button href="https://gohugo.io/" style="tip" %}}Get Hugo{{% /button */%}}
{{%/* button href="https://gohugo.io/" style="warning" %}}Get Hugo{{% /button */%}}
````

{{% button href="https://gohugo.io/" style="info" %}}Get Hugo{{% /button %}}
{{% button href="https://gohugo.io/" style="note" %}}Get Hugo{{% /button %}}
{{% button href="https://gohugo.io/" style="tip" %}}Get Hugo{{% /button %}}
{{% button href="https://gohugo.io/" style="warning" %}}Get Hugo{{% /button %}}


#### 印记颜色

````go
{{%/* button href="https://gohugo.io/" style="primary" %}}Get Hugo{{% /button */%}}
{{%/* button href="https://gohugo.io/" style="secondary" %}}Get Hugo{{% /button */%}}
{{%/* button href="https://gohugo.io/" style="accent" %}}Get Hugo{{% /button */%}}
````

{{% button href="https://gohugo.io/" style="primary" %}}Get Hugo{{% /button %}}

{{% button href="https://gohugo.io/" style="secondary" %}}Get Hugo{{% /button %}}

{{% button href="https://gohugo.io/" style="accent" %}}Get Hugo{{% /button %}}

#### 颜色

````go
{{%/* button href="https://gohugo.io/" style="blue" %}}Get Hugo{{% /button */%}}
{{%/* button href="https://gohugo.io/" style="green" %}}Get Hugo{{% /button */%}}
{{%/* button href="https://gohugo.io/" style="grey" %}}Get Hugo{{% /button */%}}
{{%/* button href="https://gohugo.io/" style="orange" %}}Get Hugo{{% /button */%}}
{{%/* button href="https://gohugo.io/" style="red" %}}Get Hugo{{% /button */%}}
````

{{% button href="https://gohugo.io/" style="blue" %}}Get Hugo{{% /button %}}

{{% button href="https://gohugo.io/" style="green" %}}Get Hugo{{% /button %}}

{{% button href="https://gohugo.io/" style="grey" %}}Get Hugo{{% /button %}}

{{% button href="https://gohugo.io/" style="orange" %}}Get Hugo{{% /button %}}

{{% button href="https://gohugo.io/" style="red" %}}Get Hugo{{% /button %}}

#### 特殊颜色

````go
{{%/* button href="https://gohugo.io/" style="default" %}}Get Hugo{{% /button */%}}
{{%/* button href="https://gohugo.io/" style="transparent" %}}Get Hugo{{% /button */%}}
````

{{% button href="https://gohugo.io/" style="default" %}}Get Hugo{{% /button %}}

{{% button href="https://gohugo.io/" style="transparent" %}}Get Hugo{{% /button %}}

### 图标

#### 无

````go
{{%/* button href="https://gohugo.io/" icon=" " %}}{{% /button */%}}
````

{{% button href="https://gohugo.io/" icon=" " %}}{{% /button %}}

#### 有

````go
{{%/* button href="https://gohugo.io/" icon="download" %}}{{% /button */%}}
````

{{% button href="https://gohugo.io/" icon="download" %}}{{% /button %}}

#### 左侧

````go
{{%/* button href="https://gohugo.io/" icon="download" %}}Get Hugo{{% /button */%}}
````

{{% button href="https://gohugo.io/" icon="download" %}}Get Hugo{{% /button %}}

#### 右侧

````go
{{%/* button href="https://gohugo.io/" icon="download" iconposition="right" %}}Get Hugo{{% /button */%}}
````

{{% button href="https://gohugo.io/" icon="download" iconposition="right" %}}Get Hugo{{% /button %}}

#### 重载严重性样式

````go
{{%/* button href="https://gohugo.io/" icon="dragon" style="warning" %}}Get Hugo{{% /button */%}}
````

{{% button href="https://gohugo.io/" icon="dragon" style="warning" %}}Get Hugo{{% /button %}}

### 目标

````go
{{%/* button href="https://gohugo.io/" target="_self" %}}Get Hugo in same window{{% /button */%}}
{{%/* button href="https://gohugo.io/" %}}Get Hugo in new Window/Frame (default){{% /button */%}}
````
{{% button href="https://gohugo.io/" target="_self" %}}Get Hugo in same Window/Frame{{% /button %}}

{{% button href="https://gohugo.io/" %}}Get Hugo in new Window/Frame (default){{% /button %}}

### 其他

#### 具有用户定义的颜色、字体、图标和 Markdown 标题

````go
{{%/* button href="https://gohugo.io/" color="fuchsia" icon="fab fa-hackerrank" %}}Get **Hugo**{{% /button */%}}
````

{{% button href="https://gohugo.io/" color="fuchsia" icon="fab fa-hackerrank" %}}Get **Hugo**{{% /button %}}

#### 具有所有默认值的严重性样式

````go
{{%/* button href="https://gohugo.io/" style="tip" %}}{{% /button */%}}
````

{{% button href="https://gohugo.io/" style="tip" %}}{{% /button %}}

#### 按钮到内部页面

````go
{{%/* button href="/index.html" %}}Home{{% /button */%}}
````

{{% button href="/index.html" %}}Home{{% /button %}}

#### Button with JavaScript Action

如果您的 JavaScript 操作之后没有更改焦点，请确保调用`this.blur()` 最后取消选择按钮。 

````go
{{%/* button style="primary" icon="bullhorn" href="javascript:alert('你好，世界！');this.blur();" %}}你好，世界！{{% /button */%}}
````

{{% button style="primary" icon="bullhorn" href="javascript:alert('你好，世界！');this.blur();" %}}你好，世界！{{% /button %}}

####  `form`元素中的按钮 

要在 Markdown 中使用原生 HTML 元素，请将其添加到 `hugo.toml`

````toml
[markup.goldmark.renderer]
    unsafe = true
````

````html
<form action="../../search.html" method="get">
  <input name="search-by-detail" class="search-by" type="search">
  {{%/* button type="submit" style="secondary" icon="search" %}}搜索{{% /button */%}}
</form>
````

<form action="../../search.html" method="get">
  <div class="searchform" style="width: 20vw;">
    <input name="search-by-detail" class="search-by" type="search" placeholder="Search...">
    {{% button type="submit" style="secondary" icon="search" %}}搜索{{% /button %}}
  </div>
</form>
