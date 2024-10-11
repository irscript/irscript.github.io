+++
title = "子页(children)"
weight = 3
serialing = true
+++

`子页(children)`简码列出了当前页面的子页面及其后代页面。

{{% children sort="weight" %}}

## 用法

{{% tab title="简码" %}}

````go
{{%/* children sort="weight" */%}}
````

{{% /tab %}}

## 参数
| 名称|默认 | 描述 |
|:----|:-----|:-----|
| **containerstyle** | `ul`              | Choose the style used to group all children. It could be any HTML tag name. |
| **style**          | `li`              | Choose the style used to display each descendant. It could be any HTML tag name. |
| **showhidden**     | `false`           | When `true`, child pages hidden from the menu will be displayed as well. |
| **description**    | `false`           | When `true` shows a short text under each page in the list. When no description or summary exists for the page, the first 70 words of the content is taken - [read more info about summaries on gohugo.io](https://gohugo.io/content/summaries/). |
| **depth**          | `1`               | The depth of descendants to display. For example, if the value is `2`, the shortcode will display two levels of child pages.  To get all descendants, set this value to a high  number eg. `999`. |
| **sort**           | `auto`            | The sort criteria of the displayed list.<br><br>- `auto` defaults to [`ordersectionsby` of the pages frontmatter]()<br>&nbsp;&nbsp;&nbsp;&nbsp;or to [`ordersectionsby` of the site configuration]()<br>&nbsp;&nbsp;&nbsp;&nbsp;or to `weight`<br>- `weight`<br>- `title`<br>- `linktitle`<br>- `modifieddate`<br>- `expirydate`<br>- `publishdate`<br>- `date`<br>- `length`<br>- `default` adhering to Hugo's default sort criteria|

## 案例

### 默认

````go
{{%/* children  */%}}
````

{{% children %}}

### 带描述

````go
{{%/* children description="true" */%}}
````

{{%children description="true" %}}

### 无限深度和隐藏页面

````go
{{%/* children depth="999" showhidden="true" */%}}
````

{{% children depth="999" showhidden="true" %}}

### 容器和元素的标题样式

````go
{{%/* children containerstyle="div" style="h2" depth="3" description="true" */%}}
````

{{% children containerstyle="div" style="h2" depth="3" description="true" %}}

### Div： 组和元素样式

````go
{{%/* children containerstyle="div" style="div" depth="3" */%}}
````

{{% children containerstyle="div" style="div" depth="3" %}}
