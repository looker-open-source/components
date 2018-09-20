```js noeditor
const StatusAndResources = require('../../../../../styleguide_components/StatusAndResources').StatusAndResources;

<StatusAndResources
  status="experimental"
  figmaURL="https://www.figma.com/file/2MG6DoSjk4IaLnjjFCnKFf/Forms"
  githubURL="https://github.com/looker/lens/blob/master/src/components/Form/Fields/FieldText.tsx"
  feedbackTitle="FieldText Component Feedback" />
```

### FieldText

The `<FieldText />` component has one required property: `label`. By default, the label will render directly above the input field, which is the recommended convention, however this is adjustable with the `alignLabel` property.

Additionally, it is highly recommended to include the `name` property, as this will be used by forms to capture the inputted data and for validation.

```js
<FieldText name="firstName" label="First Name" />
<FieldText name="lastName" label=" Last Name" alignLabel="left" />
```

### FieldText Validation

The `<FieldText />` components accepts `validationState` as a property. This is an object with properties `type` and `message`:
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


If you have multiple fields in need of validation, it is recommended that you wrap them in a `<Form />` component and pass to it a dictionary with key as field name and value as a `ValidationState`.

The `alignValidationMessage` can also be used to adjust where the validation message appears in relation to the input field. By default, it will render below, which is the best practice in most cases.

___Note: In the current implementation, any `validationState` set in a `<FieldText />` component will be overriden by `validationStates` set in the parent `<Form />` component. Because of this, it is highly recommended that you only ever directly set `validationState` if a `<FieldText />` is outside a `<Form />`.___

```js
<FieldText name="someField" label="Some Field" validationState={{type: "error", message: "This is an error"}}/>
<FieldText name="someField" label="Some Field" validationState={{type: "warning", message: "Here is a warning"}} alignValidationMessage="right" />
```
