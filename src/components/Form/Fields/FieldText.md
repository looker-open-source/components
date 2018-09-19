```js noeditor
const StatusAndResources = require('../../../../styleguide_components/StatusAndResources').StatusAndResources;

<StatusAndResources
  status="experimental"
  figmaURL="https://www.figma.com/file/2MG6DoSjk4IaLnjjFCnKFf/Forms"
  githubURL="https://github.com/looker/lens/blob/master/src/components/Form/Fields/FieldText.tsx"
  feedbackTitle="FieldText Component Feedback" />
```

```js
  <FieldText id="theme-name" name="themeName" label="Theme Name" />
  <FieldText alignValidationMessage="bottom" validationState={{type: "error", message: "hey"}}id="theme-name" name="themeName" label="Theme Name" />
```

```js

<form>
  <FieldText id="first_name" name="first_name" label="First Name" />
  <FieldText id="last_name" name="last_name" label="Last Name" />
  <FieldCheckbox id="subscribe" name="subscribe" label="Subscribe" />
  <Button>Submit</Button>
</form>
```

### FieldText Validation

The `<FieldText />` components accepts `validationError` as a property. This is a string that will show up in red below the input field when set. If set, it will also highlight the input field in red. If you have multiple fields in need of validation, it is recommended that you wrap them in a `<Form />` component and pass to it a dictionary with key as field name and value as corresponding validation error message.

___Note: In the current implementation, any `validationError` set in a `<FieldText />` component will be overriden by `validationErrors` set in the parent `<Form />` component, even if the error is empty or null. Because of this, it is highly recommended that you only ever directly set `validationError` if a `<FieldText />` is outside a `<Form />`.___

```js
<FieldText name="someField" label="Some Field" validationError="This is invalid" />
```
