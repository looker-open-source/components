```js noeditor
const StatusAndResources = require('../../../../../styleguide_components/StatusAndResources')
  .StatusAndResources

;<StatusAndResources
  status="experimental"
  figmaURL="https://www.figma.com/file/2MG6DoSjk4IaLnjjFCnKFf/Forms"
  githubURL="https://github.com/looker/lens/blob/master/src/components/Form/Fields/FieldRadio.tsx"
  feedbackTitle="FieldRadio Component Feedback"
/>
```

### FieldRadio

The `<FieldRadio />` component is composed of a `<Radio />` component and a `<Label />` component. Using `<FieldRadio />` allows for rendering validation messages. By default, the label will render to the right of the radio button, however this is adjustable with the `alignLabel` property.

```js
import { FieldRadio } from './FieldRadio'
;<>
  <FieldRadio name="radio" label="Radio" />
  <FieldRadio name="radio" label="Radio 2" alignLabel="left" />
</>
```
