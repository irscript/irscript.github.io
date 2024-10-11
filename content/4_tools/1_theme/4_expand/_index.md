+++
title = "扩展(expand)"
weight = 4
+++


`expand`简码显示可展开/可折叠的文本部分

{{% expand title="展开我..." %}}Thank you!

That's some text with a footnote[^1]

[^1]: And that's the footnote.

That's some more text with a footnote.[^someid]

[^someid]:
    Anything of interest goes here.

    Blue light glows blue.
{{% /expand %}}

{{% notice note %}}
这只能在现代浏览器中完美运行。虽然 Internet Explorer 11 在显示它时存在问题，但该功能仍然有效。
{{% /notice %}}

## 用法


{{< tabs groupid="shortcode-parameter">}}
{{% tab title="简码" %}}

````go
{{%/* expand title="Expand me..." */%}}Thank you!{{%/* /expand */%}}
````

{{% /tab %}}
{{% tab title="简码 (positional)" %}}

````go
{{%/* expand "Expand me..." */%}}Thank you!{{%/* /expand */%}}
````

{{% /tab %}}
{{< /tabs >}}

### 参数

| Name                  | Position | Default          | Notes       |
|-----------------------|----------|------------------|-------------|
| **title**             | 1        | `"Expand me..."` | Arbitrary text to appear next to the expand/collapse icon. |
| **open**              | 2        | `false`          | When `true` the content text will be initially shown as expanded. |
| _**&lt;content&gt;**_ |          | _&lt;empty&gt;_  | Arbitrary text to be displayed on expand. |

## 案例

### 默认

````go
{{%/* expand */%}}Yes, you did it!{{%/* /expand */%}}
````

{{% expand %}}Yes, you did it!{{% /expand %}}

### 最初扩展

````go
{{%/* expand title="Expand me..." open="true" */%}}No need to press you!{{%/* /expand */%}}
````

{{% expand title="Expand me..." open="true" %}}No need to press you!{{% /expand %}}

### 任意文本

````go
{{%/* expand title="Show me almost **endless** possibilities" */%}}
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
{{%/* /expand */%}}
````

{{% expand title="Show me almost **endless** possibilities" %}}
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
{{% /expand %}}
