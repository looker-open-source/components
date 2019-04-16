```js noeditor
const StatusAndResources = require('../../../styleguide_components/StatusAndResources')
  .StatusAndResources
;<StatusAndResources
  status="experimental"
  figmaURL="https://www.figma.com/file/SmIM3VUQUgo8xb4o7UUxflkT/Typography"
  githubURL="https://github.com/looker/lens/blob/master/src/components/Text/Text.tsx"
  feedbackTitle="Text Component Feedback"
/>
```

### Text Element

By default the `<Text />` component will render text wrapped in a `<span>`, if you need another html element for semantic purposes you can use the `element` property

```js
import { Code } from './Code'
import { Paragraph } from './Paragraph'
import { Text } from './Text'
;<>
  <Text>By default I am a span</Text>
  <Paragraph>Wrapped in a paragraph tag</Paragraph>
  <Code>Wrapped in a code tag</Code>
</>
```

<div class="doc-section-divider"></div>

### Text Size

If you need to adjust the font-size of the rendered text, you can use the `size` property and a value from the [type scale](/#!/Typography)

```js
import { Text } from './Text'
;<>
  <Text fontSize="xxxxlarge">Sized to xxxxlarge</Text>
  <Text fontSize="xxlarge">Sized to xxlarge</Text>
  <Text fontSize="small">Sized to small</Text>
</>
```

<div class="doc-section-divider"></div>

### Weight & Transform

Common patterns for text is to adjust the font weight and transform the text. Below is an example of using the `weight` and `textTransform` properties to modify the rendered text

```js
import { Text } from './Text'
;<>
  <Text fontSize="small" textTransform="upper" fontWeight="semiBold">
    A great story
  </Text>
  <Text fontSize="xxxxlarge" fontWeight="light">
    This is a great headline
  </Text>
  <Text fontSize="small" textTransform="caps">
    Some metadata about this story
  </Text>
</>
```

<div class="doc-section-divider"></div>

### Text Variants

Lens provides a few variants for the `<Text />` component based on common patterns we use in our applications, the `variant` property will change that will change the color the rendered text.

```js
import { Text } from './Text'
;<>
  <Text>Regular Text</Text>
  <Text variant="secondary">Secondary Text</Text>
  <Text variant="subdued">Subdued Text</Text>
  <Text variant="critical">Critical Text</Text>
  <Text variant="positive">Positive Text</Text>
</>
```

<div class="doc-section-divider"></div>

### Text Alignment

You can use the `align` property to change the alignment of the rendered text, below is an example with aligned text put into `<Card />`s.

```js
import { Card, CardContent } from '../Card'
import { Paragraph } from './Paragraph'

;<>
  <Card>
    <CardContent>
      <Paragraph> I am aligned left by default</Paragraph>
    </CardContent>
  </Card>
  <Card>
    <CardContent>
      <Paragraph align="center">
        This is how you can center align Paragraph text
      </Paragraph>
    </CardContent>
  </Card>
  <Card>
    <CardContent>
      <Paragraph align="right">
        This is how you can right align Paragraph text
      </Paragraph>
    </CardContent>
  </Card>
</>
```

### Truncate

At times you may want your `<Paragraph />` to truncate instead of the text wrapping, the `truncate` property will do that for you.

```js
import { Paragraph } from './Paragraph'

;<div style={{ width: '40%' }}>
  <Paragraph truncate>
    Hello there I am some text that will truncate 🍕🥑🍪🥓
  </Paragraph>
</div>
```
