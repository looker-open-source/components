### Content and Padding

The `CardContent` component is used to add padding around a `Card`'s content.

By default is applies **1rem (16px)** of padding. You can change the amount of padding around the content by using the `pad` property, which accepts any [Spacing Value](/#!/Spacing).

```js
<CardGroup>
  <Card>
    <CardContent pad="s">
      <Text size="4">Small Padding</Text>
      <Text size="5" mode="subdued">0.5rem (8px)</Text>
    </CardContent>
  </Card>
  <Card>
    <CardContent>
      <Text size="4">Default Padding</Text>
      <Text size="5" mode="subdued">1rem (16px)</Text>
    </CardContent>
  </Card>

  <Card>
    <CardContent pad="l">
      <Text size="4">Large Padding</Text>
      <Text size="5" mode="subdued">1.25rem (20px)</Text>
    </CardContent>
  </Card>

  <Card>
    <CardContent pad="2xl">
      <Text size="4">2XLarge Padding</Text>
      <Text size="5" mode="subdued">1.875rem (30px)</Text>
    </CardContent>
  </Card>
</CardGroup>
```
