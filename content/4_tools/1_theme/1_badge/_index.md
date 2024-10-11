+++
title = "徽章(badge)"
weight = 1
serialing = true
+++

`徽章(badge)`简码用于在文本中显示小标记，颜色、标题和图标，可调整。


{{% badge %}}重要{{% /badge %}}

{{% badge style="primary" title="版本" %}}6.6.6{{% /badge %}}

{{%badge style="red" icon="angle-double-up" %}}船长{{% /badge %}}

{{%badge style="info" %}}新增{{% /badge %}}

{{% badge color="fuchsia" icon="fab fa-hackerrank" %}}超棒！{{% /badge%}}

## 用法

{{% tab title="简码案例" %}}

````go
{{%/* badge %}}重要{{% /badge */%}}
{{%/* badge style="primary" title="版本" %}}6.6.6{{% /badge */%}}
{{%/* badge style="red" icon="angle-double-up" %}}船长{{% /badge */%}}
{{%/* badge style="info" %}}新增{{% /badge */%}}
{{%/* badge color="fuchsia" icon="fab fa-hackerrank" %}}超棒！{{% /badge */%}}
````

{{% /tab %}}

## 参数

| 名称  | 注释                 |
| ----- | -------------------- |
| style | 徽章使用的样式方案。<br/><br/>- 严重程度： `info`, `note`, `tip`, `warning`<br/>- 印记颜色：`primary`, `secondary`, `accent`<br/>- 颜色： `blue`, `green`, `grey`, `orange`, `red`<br/>- 特殊颜色: `default`, `transparent`, `code`|
| color |  要使用的 [CSS 颜色值](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)。如果未设置，则选择的颜色取决于样式。任何给定的值都将覆盖默认值。<br/><br/>- 对于严重性样式：严重性匹配的漂亮颜色<br/>- 对于所有其他样式：相应的颜色                    |
| title | 屏幕提醒标题的任意文本。根据样式的不同，可能会有一个默认标题。任何给定的值都将覆盖默认值。<br/><br/>- 对于严重性样式：严重性匹配的标题<br/>- 对于所有其他样式：<空><br/><br/>如果您不希望严重性样式的标题，则必须将此参数设置为`" "`（一个充满空格的非空字符串）。|
| icon  | [Font Awesome icon name](https://fontawesome.com.cn/v5) 设置在标题的左侧。根据样式的不同，可能会有一个默认图标。任何给定的值都将覆盖默认值。<br/><br/>- 对于严重性样式：严重性匹配的漂亮图标<br/>- 对于所有其他样式：_&lt;空&gt;_ <br/><br/>如果您不想为严重性样式使用图标，则必须将此参数设置为`" "`（填充空格的非空字符串）|
| _**&lt;txt&gt;**_  | 任意文本，可以为 _&lt;空&gt;_ |


## 案例
### 样式
#### 严重性样式

````go
{{%/* badge style="info" %}}New{{% /badge */%}}
{{%/* badge style="note" %}}Change{{% /badge */%}}
{{%/* badge style="tip" %}}Optional{{% /badge */%}}
{{%/* badge style="warning" %}}Breaking{{% /badge */%}}
````

{{% badge style="info" %}}New{{% /badge %}}

{{% badge style="note" %}}Change{{% /badge %}}

{{% badge style="tip" %}}Optional{{% /badge %}}

{{% badge style="warning" %}}Breaking{{% /badge %}}


#### 印记样式

````go
{{%/* badge style="primary" icon="bullhorn" title="Announcement" %}}命令{{% /badge */%}}
{{%/* badge style="secondary" icon="bullhorn" title="Announcement" %}}选项{{% /badge */%}}
{{%/* badge style="accent" icon="bullhorn" title="Announcement" %}}专辑{{% /badge */%}}
````

{{% badge style="primary" icon="bullhorn" title="公告" %}}命令{{% /badge %}}

{{% badge style="secondary" icon="bullhorn" title="公告" %}}选项{{% /badge %}}

{{% badge style="accent" icon="bullhorn" title="公告" %}}专辑{{% /badge %}}

#### 颜色样式

````go
{{%/* badge style="blue" icon="palette" title="Color" %}}蓝色{{% /badge */%}}
{{%/* badge style="green" icon="palette" title="Color" %}}绿色{{% /badge */%}}
{{%/* badge style="grey" icon="palette" title="Color" %}}灰色{{% /badge */%}}
{{%/* badge style="orange" icon="palette" title="Color" %}}橘色{{% /badge */%}}
{{%/* badge style="red" icon="palette" title="Color" %}}红色{{% /badge */%}}
````

{{% badge style="blue" icon="palette" title="Color" %}}蓝色{{% /badge %}}

{{% badge style="green" icon="palette" title="Color" %}}绿色{{% /badge %}}

{{% badge style="grey" icon="palette" title="Color" %}}灰色{{% /badge %}}

{{% badge style="orange" icon="palette" title="Color" %}}橘色{{% /badge %}}

{{% badge style="red" icon="palette" title="Color" %}}红色{{% /badge %}}

#### 特殊颜色

````go
{{%/* badge style="default" icon="palette" title="Color" %}}默认色{{% /badge */%}}
{{%/* badge style="transparent" icon="palette" title="Color" %}}透明色{{% /badge */%}}
````

{{% badge style="default" icon="palette" title="Color" %}}默认色{{% /badge %}}

{{% badge style="transparent" icon="palette" title="Color" %}}透明色{{% /badge %}}

### 变体

#### 没有图标和标题

````go
{{%/* badge %}}6.6.6{{% /badge */%}}
{{%/* badge style="info" icon=" " title=" " %}}Awesome{{% /badge */%}}
{{%/* badge style="red" %}}Captain{{% /badge */%}}
````

{{% badge %}}6.6.6{{% /badge %}}

{{% badge style="info" icon=" " title=" " %}}Awesome{{% /badge %}}

{{% badge style="red" %}}Captain{{% /badge %}}

#### 没有图标

````go
{{%/* badge title="Version" %}}6.6.6{{% /badge */%}}
{{%/* badge style="info" icon=" " %}}Awesome{{% /badge */%}}
{{%/* badge style="red" title="Rank" %}}Captain{{% /badge */%}}
````

{{% badge title="Version" %}}6.6.6{{% /badge %}}

{{% badge style="info" icon=" " %}}Awesome{{% /badge %}}

{{% badge style="red" title="Rank" %}}Captain{{% /badge %}}

#### 没有标题

````go
{{%/* badge icon="star" %}}6.6.6{{% /badge */%}}
{{%/* badge style="info" title=" " %}}Awesome{{% /badge */%}}
{{%/* badge style="red" icon="angle-double-up" %}}Captain{{% /badge */%}}
````

{{% badge icon="star" %}}6.6.6{{% /badge %}}

{{% badge style="info" title=" " %}}Awesome{{% /badge %}}

{{% badge style="red" icon="angle-double-up" %}}Captain{{% /badge %}}

#### 有标题和图标

````go
{{%/* badge icon="star" title="Version" %}}6.6.6{{% /badge */%}}
{{%/* badge style="info" %}}Awesome{{% /badge */%}}
{{%/* badge style="red" icon="angle-double-up" title="Rank" %}}Captain{{% /badge */%}}
````
{{%badge icon="star" title="Version" %}}6.6.6{{% /badge %}}

{{% badge style="info" %}}Awesome{{% /badge %}}

{{% badge style="red" icon="angle-double-up" title="Rank" %}}Captain{{% /badge %}}