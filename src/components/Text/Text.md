```js noeditor
const StatusAndResources = require('../../../styleguide_components/StatusAndResources').StatusAndResources;

<StatusAndResources
  status="experimental"
  figmaURL="https://www.figma.com/file/SmIM3VUQUgo8xb4o7UUxflkT/Typography"
  githubURL="https://github.com/looker/lens/blob/master/src/components/Text/Text.tsx"
  feedbackTitle="Text Component Feedback" />
```


### Text Element

By default the `<Text />` component will render text wrapped in a `<div>`,  if you need another html element for semantic purposes you can use the `element` property

```js
<Text>I get wrapped in a div</Text>
<Span>Wrapped in a span</Span>
<Paragraph>Wrapped in a paragraph tag</Paragraph>
<Code>Wrapped in a code tag</Code>
```

<div class="doc-section-divider"></div>

### Text Size

If you need to adjust the font-size of the rendered text, you can use the `size` property and a value from the [type scale](/#!/Typography)

```js
 <Text size="d1">Sized to d1</Text>
 <Text size="1">Sized to 1</Text>
 <Text size="6">Sized to 6</Text>
```

<div class="doc-section-divider"></div>

### Weight & Transform

Common patterns for text is to adjust the font weight and transform the text. Below is an example of using the `weight` and `textTransform` properties to modify the rendered text

```js
  <Text size="6" textTransform="upper" weight="semiBold">A great story</Text>
  <Text size="d3" weight="light">This is a great headline</Text>
  <Text size="6" textTransform="caps">Some metadata about this story</Text>
```

<div class="doc-section-divider"></div>

### Text Alignment

You can use the `align` property to change the alignment of the rendered text, below is an example with aligned text put into `<Card />`s.

```js
<div>
  <Card>
    <CardContent>
      <Text> I am aligned left by default</Text>
    </CardContent>
  </Card>
  <Card>
    <CardContent>
      <Text align="center">This is how you can center align text</Text>
    </CardContent>
  </Card>
  <Card>
    <CardContent>
      <Text align="right">This is how you can right align text</Text>
    </CardContent>
  </Card>
</div>
```

<div class="doc-section-divider"></div>

### Text Mode

Lens provides a few modes for the `<Text />` component based on common patterns we use in our applications, the `mode` property will change that will change the color the rendered text.

```js
<Text>Regular Text</Text>
<Text variant="secondary">Secondary Text</Text>
<Text variant="subdued">Subdued Text</Text>
<Text variant="critical">Critical Text</Text>
<Text variant="positive">Positive Text</Text>
```


<div class="doc-section-divider"></div>

### Truncate

At times you may want your `<Text />` to truncate instead of the text wrapping, the `truncate` property will do that for you.

```js
<div style={{width: "40%"}}>
<Text truncate>Hello there I am some text that will truncate 🍕🥑🍪🥓</Text>
</div>
```
