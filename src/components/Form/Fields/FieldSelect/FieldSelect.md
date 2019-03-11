```js noeditor
const StatusAndResources = require('../../../../../styleguide_components/StatusAndResources')
  .StatusAndResources
;<StatusAndResources
  status="experimental"
  figmaURL="https://www.figma.com/file/2MG6DoSjk4IaLnjjFCnKFf/Forms"
  githubURL="https://github.com/looker/lens/blob/master/src/components/Form/Fields/FieldSelect.tsx"
  feedbackTitle="FieldSelect Component Feedback"
/>
```

### FieldSelect

The `<FieldSelect />` component is composed of an `<Select />` component and a `<Label />` component. Using `<FieldSelect />` allows for rendering validation messages. By default, the label will render directly above the input field, which is the recommended convention, however this is adjustable with the `alignLabel` property.

```js
const options = [
  { value: 'cheddar', label: 'Cheddar' },
  { value: 'gouda', label: 'Gouda' },
  { value: 'swiss', label: 'Swiss' },
]
;<>
  <FieldSelect
    name="Cheeses"
    label="Cheeses"
    value="cheddar"
    options={options}
  />
  <FieldSelect
    name="LeftCheese"
    label="Cheese to the Left"
    alignLabel="left"
    value="gouda"
    options={options}
  />
  <FieldSelect
    name="RequiredCheeses"
    label="Required Cheese"
    value="swiss"
    required
    options={options}
  />
</>
```

### FieldSelect Validation

The `<FieldSelect />` component accepts `validationMessage` as a property. This is an object with properties `type` and `message`.

See `ValidationMessage` [here](/#!/ValidationMessage)

If you have multiple fields in need of validation, it is recommended that you wrap them in a `<Form />` component and pass to it a dictionary with key as field name and value as a `ValidationMessage`.

**_Note: In the current implementation, any `ValidationMessage` set in a `<FieldSelect />` component will be overridden by `ValidationMessages` set in the parent `<Form />` component. Because of this, it is highly recommended that you only ever directly set `ValidationMessage` if a `<FieldSelect />` is outside a `<Form />`._**

```js
const options = [
  { value: 'cheddar', label: 'Cheddar' },
  { value: 'gouda', label: 'Gouda' },
  { value: 'swiss', label: 'Swiss' },
]
;<FieldSelect
  name="someField"
  label="Some Field"
  options={options}
  validationMessage={{ type: 'error', message: 'This is an error' }}
  alignValidationMessage="right"
/>
```
