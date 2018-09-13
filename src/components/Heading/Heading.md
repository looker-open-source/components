```js noeditor
const StatusAndResources = require('../../../styleguide_components/StatusAndResources').StatusAndResources;

<StatusAndResources
  status="experimental"
  figmaURL="https://www.figma.com/file/SmIM3VUQUgo8xb4o7UUxflkT/Typography"
  githubURL="https://github.com/looker/relens/blob/master/src/components/Heading/Heading.tsx"
  feedbackTitle="Heading Component Feedback" />
```


### Heading Default
The `<Heading />` component is used to render a HTML `<h1>` - `<h6>` element, by default it will render a `<h3>` element
```js
// A heading component that defaults to a h3

<Heading>Hello Good Looker 👋</Heading>
```

<div class="doc-section-divider"></div>

### Heading Levels

To use a different HTML heading element,  the `<Heading />` component accepts a `level` attribute that corresponds to the `<h1>` - `<h6>` elements. The font-size of each heading element maps to the Lens [type ramp](/#!/Typography)

```js
// Heading components using the level attribute (font-size / line-height)

<div>
  <Heading level="1">I’m a h1 element (25px/40px)</Heading>
  <Heading level="2">I’m a h2 element (22px/32px)</Heading>
  <Heading level="3">I’m a h3 element (18px/28px)</Heading>
  <Heading level="4">I’m a h4 element (16/24px)</Heading>
  <Heading level="5">I’m a h5 element (14px/20px)</Heading>
  <Heading level="6">I’m a h6 element (12px/16px)</Heading>
</div>
```
<div class="doc-section-divider"></div>

### Heading Sizes

When creating accessible pages it is important that headings create a [logical document outline](https://bitsofco.de/using-heading-elements-to-create-a-document-outline/), but sometimes the font-size of the heading element doesn't match to the needs of the design or layout. Composing the `level` and the `size` attributes lets you choose the semantically correct level heading and the desired size. The available size values come from the [type ramp](/#!/Typography).

```js
// Heading components using the level and size attribute (font-size / line-height)

<div>
  <Heading size="d1">h3 sized to d1</Heading>
  <Heading size="d2">h3 sized to d2</Heading>
  <Heading size="d3">h3 sized to d3</Heading>
  <Heading level="4" size="1">h4 sized to 1 </Heading>
  <Heading level="4" size="2">h4 sized to 2 </Heading>
  <Heading level="4" size="3">h4 sized to 3 </Heading>
  <Heading level="2" size="4">h2 sized to 4 </Heading>
  <Heading level="2" size="5">h2 sized to 5 </Heading>
  <Heading level="2" size="6">h2 sized to 6 </Heading>
</div>
```

<div class="doc-section-divider"></div>

### **Weight and Transform**

Another common pattern for headings is to control the font-weight and the text-transform properties. The `<Heading />` component allows you to adjust those with the `weight` and `transform` attributes.

```js
// Heading components using the weight and transform attributes
<div>
  <Heading weight="light" transform="lower">Light and lower</Heading>
  <Heading weight="normal" transform="none">Normal and none (default)</Heading>
  <Heading weight="semiBold" transform="upper">Semi-bold and upper</Heading>
  <Heading weight="bold" transform="caps">Bold and caps</Heading>
</div>
```

<div class="doc-section-divider"></div>

### Heading alignment

The `align` property allows you to adjust the `text-align` property of your `<Heading />` component. This is useful if you need to center or right align the text.

```js
<Heading align="left">◀️ Align left (Default) </Heading>
<Heading align="center">◀️ Align Center ▶️</Heading>
<Heading align="right">Align Right ▶️</Heading>
```

<div class="doc-section-divider"></div>

### Truncation

At times you may want your `<Heading />` to truncate instead of the text wrapping, the `truncate` property will do that for you.

```js
<Heading size="d3" truncate>I am some long text that will truncate instead of wrapping</Heading>
```
