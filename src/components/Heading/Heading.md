```js noeditor
const StatusAndResources = require('../../../styleguide_components/StatusAndResources')
  .StatusAndResources
;<StatusAndResources
  status="experimental"
  figmaURL="https://www.figma.com/file/SmIM3VUQUgo8xb4o7UUxflkT/Typography"
  githubURL="https://github.com/looker/lens/blob/master/src/components/Heading/Heading.tsx"
  feedbackTitle="Heading Component Feedback"
/>
```

### Heading Default

The `<Heading />` component is used to render a HTML `<h1>` - `<h6>` element, by default it will render a `<h2>` element

```js
// A heading component that defaults to a h3

<Heading>Hello Good Looker 👋</Heading>
```

<div class="doc-section-divider"></div>

### Heading Levels

To use a different HTML heading element, the `<Heading />` component accepts a `is` attribute that corresponds to the `<h1>` - `<h6>` elements. The font-size of each heading element maps to the Lens [type ramp](/#!/Typography)

```js
// Heading components using the level attribute (font-size / line-height)

<div>
  <Heading is="h1">I’m a h1 element (25px/40px)</Heading>
  <Heading is="h2">I’m a h2 element (22px/32px)</Heading>
  <Heading is="h3">I’m a h3 element (18px/28px)</Heading>
  <Heading is="h4">I’m a h4 element (16/24px)</Heading>
  <Heading is="h5">I’m a h5 element (14px/20px)</Heading>
  <Heading is="h6">I’m a h6 element (12px/16px)</Heading>
</div>
```

<div class="doc-section-divider"></div>

### Heading Sizes

When creating accessible pages it is important that headings create a [logical document outline](https://bitsofco.de/using-heading-elements-to-create-a-document-outline/), but sometimes the font-size of the heading element doesn't match to the needs of the design or layout. Composing the `is` and the `fontSize` attributes lets you choose the semantically correct level heading and the desired size. The available size values come from the [type ramp](/#!/Typography).

```js
// Heading components using the is and fontSize attribute (font-size / line-height)

<div>
  <Heading fontSize="xxxxlarge">Viral meditation live-edge</Heading>
  <Heading fontSize="xxxlarge">Pork belly beard mustache </Heading>
  <Heading fontSize="xxlarge">Iceland trust fund hell of plaid</Heading>
  <Heading fontSize="xlarge">Tofu heirloom hammock fam tweet</Heading>
  <Heading fontSize="large">Helvetica hashtag cronut unicorn</Heading>
  <Heading fontSize="medium">
    Franzen semiotics sustainable, gluten-free
  </Heading>
  <Heading fontSize="small">
    8-bit coloring book authentic squid pok pok
  </Heading>
  <Heading fontSize="xsmall">
    Beard truffaut fashion axe, butcher raclette
  </Heading>
  <Heading fontSize="xxsmall">Man bun cardigan succulents vice</Heading>
</div>
```

<div class="doc-section-divider"></div>

### **Weight and Transform**

Another common pattern for headings is to control the font-weight and the text-transform properties. The `<Heading />` component allows you to adjust those with the `weight` and `transform` attributes.

```js
// Heading components using the weight and transform attributes
<div>
  <Heading fontWeight="light" transform="lower">
    Light and lower
  </Heading>
  <Heading fontWeight="normal" transform="none">
    Normal and none (default)
  </Heading>
  <Heading fontWeight="semiBold" transform="upper">
    Semi-bold and upper
  </Heading>
  <Heading fontWeight="bold" transform="caps">
    Bold and caps
  </Heading>
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
