+++
title = "多标签页"
weight = 13
serialing = true
description = "显示多个标签页"
+++

`tabs` 简码在无限数量的选项卡中显示任意内容。

例如，这派上用场。用于提供多种语言的代码片段。

如果您只想要一个选项卡，则可以改为将选项卡称为独立选项卡简码。

{{< tabs title="hello." >}}
{{% tab title="py" %}}

```python
print("Hello World!")
```

{{% /tab %}}
{{% tab title="sh" %}}

```bash
echo "Hello World!"
```

{{% /tab %}}
{{% tab title="c" %}}

```c
printf("Hello World!");
```

{{% /tab %}}
{{< /tabs >}}

## 用法

有关嵌套选项卡参数的说明，请参阅`tab`选项卡简码。

{{< tabs groupid="shortcode-parameter">}}
{{% tab title="shortcode" %}}

````go
{{</* tabs title="hello." */>}}
{{%/* tab title="py" */%}}
```python
print("Hello World!")
```
{{%/* /tab */%}}
{{%/* tab title="sh" */%}}
```bash
echo "Hello World!"
```
{{%/* /tab */%}}
{{%/* tab title="c" */%}}
```c
printf"Hello World!");
```
{{%/* /tab */%}}
{{</* /tabs */>}}
````

{{% /tab %}}
{{% tab title="partial" %}}

````go
{{ partial "shortcodes/tabs.html" (dict
  "page"  .
  "title" "hello."
  "content" (slice
    (dict
      "title" "py"
      "content" ("```python\nprint(\"Hello World!\")\n```" | .RenderString)
    )
    (dict
      "title" "sh"
      "content" ("```bash\necho \"Hello World!\"\n```" | .RenderString)
    )
    (dict
      "title" "c"
      "content" ("```c\nprintf(\"Hello World!\");\n```" | .RenderString)
    )
  )
)}}
````

{{% /tab %}}
{{< /tabs >}}

### 参数

| 名称                  | 默认              | 注释       |
|-----------------------|----------------------|-------------|
| **groupid**           | _&lt;random&gt;_     | 选项卡视图所属的组的任意名称。<br/>具有相同 groupid 的选项卡视图会同步其所选选项卡。选项卡选择会根据groupid用于选项卡视图。如果在选项卡组中找不到所选选项卡，则改为选择第一个选项卡。<br/>这种同步适用于整个网站！ |
| **style**             | _&lt;empty&gt;_      | 为每个包含的选项卡设置默认值。可以被每个选项卡覆盖。有关可能的值，请参阅选项卡简码。|
| **color**             | _&lt;empty&gt;_      | 为每个包含的选项卡设置默认值。可以被每个选项卡覆盖。有关可能的值，请参阅选项卡简码。|
| **title**             | _&lt;empty&gt;_      | 写在选项卡视图前面的任意标题。|
| **icon**              | _&lt;empty&gt;_      | `Font Awesome icon name`设置在标题的左侧 |
| _**&lt;content&gt;**_ | _&lt;empty&gt;_      | 使用子简码定义的任意数量的`tab`选项卡|

## 案例

###  `groupid` 的行为

查看在选择不同选项卡时选项卡视图会发生什么情况。

按下 A 组的选项卡可同步切换 A 组的所有选项卡视图（如果选项卡可用），则 B 组的选项卡保持不变。

{{< tabs >}}
{{% tab title="Group A, Tab View 1" %}}
````go
{{</* tabs groupid="a" */>}}
{{%/* tab title="json" */%}}
{{</* highlight json "linenos=true" */>}}
{ "Hello": "World" }
{{</* /highlight */>}}
{{%/* /tab */%}}
{{%/* tab title="_**XML**_ stuff" */%}}
```xml
<Hello>World</Hello>
```
{{%/* /tab */%}}
{{%/* tab title="text" */%}}
    Hello World
{{%/* /tab */%}}
{{</* /tabs */>}}
````
{{% /tab %}}
{{% tab title="Group A, Tab View 2" %}}
````go
{{</* tabs groupid="a" */>}}
{{%/* tab title="json" */%}}
{{</* highlight json "linenos=true" */>}}
{ "Hello": "World" }
{{</* /highlight */>}}
{{%/* /tab */%}}
{{%/* tab title="XML stuff" */%}}
```xml
<Hello>World</Hello>
```
{{%/* /tab */%}}
{{</* /tabs */>}}
````
{{% /tab %}}
{{% tab title="Group B" %}}
````go
{{</* tabs groupid="b" */>}}
{{%/* tab title="json" */%}}
{{</* highlight json "linenos=true" */>}}
{ "Hello": "World" }
{{</* /highlight */>}}
{{%/* /tab */%}}
{{%/* tab title="XML stuff" */%}}
```xml
<Hello>World</Hello>
```
{{%/* /tab */%}}
{{</* /tabs */>}}
````
{{% /tab %}}
{{< /tabs >}}


#### A 组，选项卡视图 1

{{< tabs groupid="tab-example-a" >}}
{{% tab title="json" %}}
{{< highlight json "linenos=true" >}}
{ "Hello": "World" }
{{< /highlight >}}
{{% /tab %}}
{{% tab title="_**XML**_ stuff" %}}
```xml
<Hello>World</Hello>
```
{{% /tab %}}
{{% tab title="text" %}}

    Hello World

{{% /tab %}}
{{< /tabs >}}

#### A 组，选项卡视图 2

{{< tabs groupid="tab-example-a" >}}
{{% tab title="json" %}}
{{< highlight json "linenos=true" >}}
{ "Hello": "World" }
{{< /highlight >}}
{{% /tab %}}
{{% tab title="XML stuff" %}}
```xml
<Hello>World</Hello>
```
{{% /tab %}}
{{< /tabs >}}

#### B组

{{< tabs groupid="tab-example-b" >}}
{{% tab title="json" %}}
{{< highlight json "linenos=true" >}}
{ "Hello": "World" }
{{< /highlight >}}
{{% /tab %}}
{{% tab title="XML stuff" %}}
```xml
<Hello>World</Hello>
```
{{% /tab %}}
{{< /tabs >}}

### 嵌套选项卡视图和颜色


如果要嵌套选项卡视图，则需要使用`{{</* tab */>}}`而不是`{{%/* tab */%}}`。请注意，在这种情况下，无法将 markdown 放在父选项卡中。

您还可以为所有选项卡设置样式和颜色参数，并在选项卡级别覆盖它们。有关可能的值，请参阅`tab`选项卡简码。


````go
{{</* tabs groupid="main" style="primary" title="Rationale" icon="thumbtack" */>}}
{{</* tab title="Text" */>}}
  Simple text is possible here...
  {{</* tabs groupid="tabs-example-language" */>}}
  {{%/* tab title="python" */%}}
  Python is **super** easy.

  - most of the time.
  - if you don't want to output unicode
  {{%/* /tab */%}}
  {{%/* tab title="bash" */%}}
  Bash is for **hackers**.
  {{%/* /tab */%}}
  {{</* /tabs */>}}
{{</* /tab */>}}

{{</* tab title="Code" style="default" color="darkorchid" */>}}
  ...but no markdown
  {{</* tabs groupid="tabs-example-language" */>}}
  {{%/* tab title="python" */%}}
  ```python
  print("Hello World!")
  ```
  {{%/* /tab */%}}
  {{%/* tab title="bash" */%}}
  ```bash
  echo "Hello World!"
  ```
  {{%/* /tab */%}}
  {{</* /tabs */>}}
{{</* /tab */>}}
{{</* /tabs */>}}
````

{{< tabs groupid="main" style="primary" title="Rationale" icon="thumbtack" >}}
{{< tab title="Text" >}}
  Simple text is possible here...
  {{< tabs groupid="tabs-example-language" >}}
  {{% tab title="python" %}}
  Python is **super** easy.

  - most of the time.
  - if you don't want to output unicode
  {{% /tab %}}
  {{% tab title="bash" %}}
  Bash is for **hackers**.
  {{% /tab %}}
  {{< /tabs >}}
{{< /tab >}}

{{< tab title="Code" style="default" color="darkorchid" >}}
  ...but no markdown
  {{< tabs groupid="tabs-example-language" >}}
  {{% tab title="python" %}}
  ```python
  print("Hello World!")
  ```
  {{% /tab %}}
  {{% tab title="bash" %}}
  ```bash
  echo "Hello World!"
  ```
  {{% /tab %}}
  {{< /tabs >}}
{{< /tab >}}
{{< /tabs >}}
