```js noeditor
const StatusAndResources = require('../../../../../styleguide_components/StatusAndResources').StatusAndResources;

<StatusAndResources
  status="experimental"
  figmaURL="https://www.figma.com/file/2MG6DoSjk4IaLnjjFCnKFf/Forms"
  githubURL="https://github.com/looker/lens/blob/master/src/components/Form/Fields/FieldText.tsx"
  feedbackTitle="FieldText Component Feedback" />
```

### FieldText

The `<FieldText />` component is composed of an `<InputText />` component and a `<Label />` component. Using `<FieldText />` allows for rendering validation messages. By default, the label will render directly above the input field, which is the recommended convention, however this is adjustable with the `alignLabel` property.

```js
<FieldText name="firstName" label="First Name" />
<FieldText name="lastName" label=" Last Name" alignLabel="left" />
<FieldText name="requiredField" label="A required field" required />
```

### FieldText Validation

The `<FieldText />` component accepts `validationMessage` as a property. This is an object with properties `type` and `message`.

See `ValidationMessage` [here](/#!/ValidationMessage)

If you have multiple fields in need of validation, it is recommended that you wrap them in a `<Form />` component and pass to it a dictionary with key as field name and value as a `ValidationMessage`.

___Note: In the current implementation, any `ValidationMessage` set in a `<FieldText />` component will be overridden by `ValidationMessages` set in the parent `<Form />` component. Because of this, it is highly recommended that you only ever directly set `ValidationMessage` if a `<FieldText />` is outside a `<Form />`.___

```js
<FieldText name="someField" label="Some Field" validationMessage={{type: "error", message: "This is an error"}}/>
<FieldText name="someField2" label="Some Field2" validationMessage={{type: "warning", message: "Here is a warning"}} alignValidationMessage="right" />
```
