+++
title = "数学公式(math)"
weight = 8
serialing = true
description = "漂亮的数学和化学公式"
+++

`math`简码使用 [MathJax](https://mathjax.org/) 库生成漂亮的格式化数学和化学公式。

{{< math align="center" >}}
$$\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)$$
{{< /math >}}

{{% notice note %}}
这仅适用于现代浏览器。
{{% /notice %}}

## 用法

虽然示例使用带有命名参数的短代码，但建议改用 codefences。这是因为越来越多的其他软件支持数学协同防御（例如。GitHub），因此您的 Markdown 变得更加可移植。


{{< tabs groupid="shortcode-parameter">}}
{{% tab title="codefence" %}}

````md
```math { align="center" }
$$\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)$$
```
````

{{% /tab %}}
{{% tab title="shortcode" %}}

````go
{{</* math align="center" */>}}
$$\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)$$
{{</* /math */>}}
````

{{% /tab %}}

{{< /tabs >}}

### 参数

| 名称                  | 默认          | 注释       |
|-----------------------|------------------|-------------|
| **align**             | `center`         | 允许值 `left`, `center` or `right`. |
| _**&lt;content&gt;**_ | _&lt;empty&gt;_  | 公式内容. |

## 配置

MathJax 配置了默认设置。您可以通过 JSON 对象自定义 `MathJax` 对所有文件的默认设置`hugo.toml`或通过您的页面 frontmatter 覆盖每个页面的这些设置。

你的 JSON 对象`hugo.toml`/ frontmatter 被转发到 MathJax 的配置对象中。

有关所有允许的设置，请参阅 [MathJax 文档](https://docs.mathjax.org/en/latest/options/index.html)。

### 全局配置文件

```toml
[params]
  mathJaxInitialize = "{ \"chtml\": { \"displayAlign\": \"left\" } }"
```

### 页面 Frontmatter

```toml
mathJaxInitialize = "{ \"chtml\": { \"displayAlign\": \"left\" } }"
```

## 案例

### 内联数学公式

````md
如果果使用单个`$`作为公式周围的分隔符，则会生成内联数学: {{</* math */>}}$\sqrt{3}${{</* /math */>}}
````

如果果使用单个`$`作为公式周围的分隔符，则会生成内联数学: {{< math >}}$\sqrt{3}${{< /math >}}

### 右对齐的块级数学

````md
如果将公式分隔为两个连续的`$$`公式，则会生成一个新块。

{{</* math align="right" */>}}
$$\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)$$
{{</* /math */>}}
````

如果将公式分隔为两个连续的`$$`公式，则会生成一个新块。

{{< math align="right" >}}
$$\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)$$
{{< /math >}}

### Codefence


````md
```math
$$\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)$$
```
````

````math
$$\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)$$
````

### 化学式

````md
{{</* math */>}}
$$\ce{Hg^2+ ->[I-] HgI2 ->[I-] [Hg^{II}I4]^2-}$$
{{</* /math */>}}
`````

{{< math >}}
$$\ce{Hg^2+ ->[I-] HgI2 ->[I-] [Hg^{II}I4]^2-}$$
{{< /math >}}
