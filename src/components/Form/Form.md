```js noeditor
const StatusAndResources = require('../../../styleguide_components/StatusAndResources').StatusAndResources;

<StatusAndResources
  status="experimental"
  figmaURL="https://www.figma.com/file/2MG6DoSjk4IaLnjjFCnKFf/Forms"
  githubURL="https://github.com/looker/relens/blob/master/src/components/Form/Form.tsx"
  feedbackTitle="Form Component Feedback" />
```

### Form Validation

The `<Form />` component wraps a collection of field components and allows for multi-field validation message rendering by accepting a `validationMessages` property. The property takes a dictionary with key as field name and value as a `ValidationState` object which has a `type` and a `message`:

`
interface ValidationState {
  type: ValidationType
  message: string
}
`

`ValidationType` is a string literal, which accepts:
* error
* warning
* info
* success


```js
<Form validationMessages={{"alpha": {type: "error", message: "This is an error"}, "bravo": {type: "warning", message: "This is warning"}}}>
  <FieldCheckbox label="Alpha" name="alpha" />
  <FieldText label="Bravo" name="bravo" />
  <FieldText label="Charlie" name="charlie" />
  <Button>Submit</Button>
</Form>
```
