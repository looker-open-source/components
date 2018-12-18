A simple Tooltip component with out of the box styles and behavior.

```js noeditor
const StatusAndResources = require('../../../styleguide_components/StatusAndResources')
  .StatusAndResources
;<StatusAndResources
  status="experimental"
  githubURL="https://github.com/looker/lens/blob/master/src/components/Overlays/Tooltip.tsx"
  feedbackTitle="Tooltip Component Feedback"
/>
```

```js
<Tooltip content="More things you should know..." open>
  <Button>Hover for Tooltip</Button>
</Tooltip>
```

```js
const content =
  'Lorem ipsum dolor amet artisan meditation four loko poutine pinterest meh cold-pressed flexitarian vaporware umami kale chips selvage salvia waistcoat occupy. Jianbing jean shorts VHS austin bushwick.'
;<Tooltip content={content}>
  <Button>Hover me! (with lots of text)</Button>
</Tooltip>
```
