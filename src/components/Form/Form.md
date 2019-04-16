```js noeditor
const StatusAndResources = require('../../../styleguide_components/StatusAndResources')
  .StatusAndResources

;<StatusAndResources
  status="experimental"
  figmaURL="https://www.figma.com/file/2MG6DoSjk4IaLnjjFCnKFf/Forms"
  githubURL="https://github.com/looker/relens/blob/master/src/components/Form/Form.tsx"
  feedbackTitle="Form Component Feedback"
/>
```

### Form Validation

The `<Form />` component wraps a collection of field components and allows for multi-field validation message rendering by accepting a `validationMessages` property. The property takes a dictionary with key as field name and value as a `ValidationMessage` object which has a `type` and a `message`:

See `ValidationMessage` [here](/#!/ValidationMessage)

```js
import { Form } from './Form'
import { FieldText } from './Fields/FieldText'
import { Button } from '../Button'

;<Form
  validationMessages={{
    alpha: { type: 'error', message: 'This is an error' },
    bravo: { type: 'error', message: 'This is another error' },
  }}
>
  <FieldText label="Alpha" name="alpha" />
  <FieldText label="Bravo" name="bravo" />
  <FieldText label="Charlie" name="charlie" />
  <Button>Submit</Button>
</Form>
```

A complete implementation that keeps track of state and updates validation messages onChange.

```js noeditor
const FormValidationDemo = require('../../../styleguide_components/FormValidationDemo')
  .FormValidationDemo

;<FormValidationDemo />
```
