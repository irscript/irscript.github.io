+++
title = "站点参数"
weight = 11
serialing = true
description = "可获取你的站点参数"
+++

`siteparam` 简码打印站点参数的值。

## 用法

{{< tabs groupid="shortcode-parameter">}}
{{% tab title="shortcode" %}}

````go
{{%/* siteparam name="editURL" */%}}
````

{{% /tab %}}
{{% tab title="shortcode (positional)" %}}

````go
{{%/* siteparam "editURL" */%}}
````

{{% /tab %}}
{{< /tabs >}}

### 参数

| Name                 | Position | Default          | Notes       |
|----------------------|----------|------------------|-------------|
| **name**             | 1        | _&lt;empty&gt;_  | 要显示的站点参数的名称。 |

## 案例

### `editURL` from `hugo.toml`

```go
`editURL` value: {{%/* siteparam name="editURL" */%}}
```

`editURL` value: {{% siteparam name="editURL" %}}

### 具有 Markdown 和 HTML 格式的嵌套参数

要使用 formatted 参数，请将其添加到 `hugo.toml`:

```toml
[markup.goldmark.renderer]
  unsafe = true
```

现在，包含 Markdown 的值将正确设置格式。

```toml
[params]
  [params.siteparam.test]
    text = "A **nested** parameter <b>with</b> formatting"
```

```go
Formatted parameter: {{%/* siteparam name="siteparam.test.text" */%}}
```

Formatted parameter: 
{{% siteparam name="siteparam.test.text" %}}
