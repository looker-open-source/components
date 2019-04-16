```js noeditor
const StatusAndResources = require('../../../../styleguide_components/StatusAndResources')
  .StatusAndResources

;<StatusAndResources
  status="experimental"
  figmaURL="https://www.figma.com/file/h7RYPRCSlz3k8fLzEMRSzy/Color-Wheel?node-id=83%3A3"
  githubURL="https://github.com/looker/lens/blob/master/src/components/Colors/Swatch.tsx"
  feedbackTitle="Swatch Component Feedback"
/>
```

### Swatch

This simple component is passed a color and displays that color. The default `Swatch` is a 28px by 28px square, but can be passed `width` and `height` props.

```js
import { Swatch } from './Swatch'
;<Swatch color="purple" />
```
