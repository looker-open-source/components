```js noeditor
const StatusAndResources = require('../../../styleguide_components/StatusAndResources').StatusAndResources;

<StatusAndResources
  status="experimental"
  figmaURL="https://www.figma.com/file/2MG6DoSjk4IaLnjjFCnKFf/Forms"
  githubURL="https://github.com/looker/relens/blob/master/src/components/Form/Form.tsx"
  feedbackTitle="Form Component Feedback" />
```

### Form Validation

The `<Form />` component wraps a collection of field components and allows for multi-field validation message rendering by accepting a `validationErrors` property. The property takes a dictionary with key as field name and value as corresponding validation error message.

```js
<Form validationStates={{"alpha": {type: "error", message: "what"}, "bravo":""}}>
  <FieldText name="alpha" />
  <FieldText name="bravo" />
  <FieldText name="charlie" />
  <Button>Submit</Button>
</Form>
```
