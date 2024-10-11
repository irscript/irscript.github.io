+++
title = "图标(icon)"
weight = 6
serialing = true
+++

`icon`简码使用 [Font Awesome](https://fontawesome.com)  库显示图标。

{{% icon exclamation-triangle %}}
{{% icon angle-double-up %}}
{{% icon skull-crossbones %}}

## Usage

{{< tabs groupid="shortcode-parameter">}}
{{% tab title="简码" %}}

````go
{{%/* icon icon="exclamation-triangle" */%}}
{{%/* icon icon="angle-double-up" */%}}
{{%/* icon icon="skull-crossbones" */%}}
````

{{% /tab %}}
{{% tab title="简码 (positional)" %}}

````go
{{%/* icon exclamation-triangle */%}}
{{%/* icon angle-double-up */%}}
{{%/* icon skull-crossbones */%}}
````

{{% /tab %}}

{{< /tabs >}}

### 参数

| 名称                  | 位置 | 默认         | 注释       |
|-----------------------|----------|-----------------|-------------|
| **icon**              | 1        |  | 要显示的[Font Awesome icon name](#finding-an-icon) 。它将以其相应上下文的文本颜色显示。 |

### 查找图标

浏览 [Font Awesome Gallery](https://fontawesome.com/v5/search?m=free) 中的可用图标。请注意，免费过滤器已启用，因为默认情况下只有免费图标可用。

进入特定图标的 Font Awesome 页面（例如[心形`heart`](https://fontawesome.com/v5/icons/heart?s=solid)页面）后，复制图标名称并粘贴到 Markdown 内容中。


### 自定义图标

Font Awesome提供了许多修改图标的方法

- 更改颜色（默认情况下，图标将继承父颜色）
- 增大或减小尺寸
- 旋转
- 与其他图标结合使用

查看有关使用 [CSS 的 Web 字体](https://fontawesome.com/how-to-use/web-fonts-with-css) 的完整文档，了解更多信息。


## 案例

### 标准用法

````go
Built with {{%/* icon heart */%}} by Relearn and Hugo
````

Built with {{% icon heart %}} by Relearn and Hugo

### 高级 HTML 用法

虽然简码简化了标准图标的使用，但 Font Awesome 库的图标自定义和其他高级功能要求您直接使用 HTML。将 `<i> `HTML 粘贴到标记中，Font Awesome 将加载相关图标。

````html
Built with <i class="fas fa-heart"></i> by Relearn and Hugo
````

<i class="fas fa-heart"></i>
由 Relearn 和 Hugo 构建。

要在 Markdown 中使用这些原生 HTML 元素，请将其添加到`hugo.toml`:

````toml
[markup.goldmark.renderer]
    unsafe = true
````
