```js noeditor
const StatusAndResources = require('../../../../../styleguide_components/StatusAndResources')
  .StatusAndResources
;<StatusAndResources
  status="experimental"
  figmaURL="https://www.figma.com/file/2MG6DoSjk4IaLnjjFCnKFf/Forms"
  githubURL="https://github.com/looker/lens/blob/master/src/components/Form/Inputs/Select.tsx"
  feedbackTitle="Select Component Feedback"
/>
```

### Default Select

The `<Select />` component renders a single select element on the page, with no accompanying label. It is generally used to construct higher-order components like the `<FieldText />`. If you are building a form, you probably want to use `<FieldSelect />` instead as it provides label and validation support.

```js
import { Select } from './Select'
const options = [
  { value: 'cheddar', label: 'Cheddar' },
  { value: 'gouda', label: 'Gouda' },
  { value: 'swiss', label: 'Swiss' },
]
;<>
  <Select options={options} />
  <Select options={options} value="gouda" ml="large" />
  <Select placeholder="awesome!" />
  <Select
    value="Some Value"
    options={[
      { value: '1', label: 'thing' },
      { value: 'Some Value', label: "Some Value's Label" },
      { value: '2', label: 'other' },
    ]}
  />
</>
```

#### Option Groups

```js
import { Select } from './Select'
const options = [
  {
    key: 'Italian',
    options: [
      { value: 'asiago', label: 'Asiago' },
      { value: 'ricotta', label: 'Ricotta' },
      { value: 'grana', label: 'Grana' },
    ],
  },
  {
    key: 'American',
    options: [
      { value: 'american', label: 'American (not actually cheese)' },
      { value: 'colby-jack', label: 'Colby-Jack' },
      { value: 'swiss', label: 'Swiss' },
      { value: 'vermont', label: 'Vermont' },
    ],
  },
]
;<Select options={options} value="american" />
```

### Name and ID

A name and ID can be specified in the `<Select />` component. Names are important if the input is used in the context of a form, in which case a name is required for the value of the input to be captured.

```js
import { Select } from './Select'
const options = [
  { value: 'cheddar', label: 'Cheddar' },
  { value: 'gouda', label: 'Gouda' },
  { value: 'swiss', label: 'Swiss' },
]
;<Select name="someName" id="someId" options={options} />
```

### Disabled Property

Use the disable property to make an input field uneditable.

```js
import { Select } from './Select'
const options = [
  { value: 'cheddar', label: 'Cheddar' },
  { value: 'gouda', label: 'Gouda' },
  { value: 'swiss', label: 'Swiss' },
]
;<>
  <Select disabled options={options} />
  <Select value="gouda" disabled options={options} ml="large" />
</>
```

### Placeholders & `includeBlank`

Placeholders are used to give a hint to the user of the expected value for the input. They should not be used as a complete replacement of labels. The `includeBlank` property (default: true) includes an inital option without a value.

```js
import { Select } from './Select'
const options = [
  { value: 'cheddar', label: 'Cheddar' },
  { value: 'gouda', label: 'Gouda' },
  { value: 'swiss', label: 'Swiss' },
]
;<>
  <Select placeholder="Select your cheese of choice..." options={options} />
  <Select includeBlank={false} options={options} ml="large" />
</>
```

### ReadOnly Property

As the name suggests, "readOnly" makes the text uneditable.

```js
import { Select } from './Select'
const options = [
  { value: 'cheddar', label: 'Cheddar' },
  { value: 'gouda', label: 'Gouda' },
  { value: 'swiss', label: 'Swiss' },
]
;<Select value="gouda" readOnly options={options} />
```

### Required Property

When set for `<Select />` in the context of a form, the input field must be filled out before submitting the form.

```js
import { Select } from './Select'
import { Button } from '../../../Button'
const options = [
  { value: 'cheddar', label: 'Cheddar' },
  { value: 'gouda', label: 'Gouda' },
  { value: 'swiss', label: 'Swiss' },
]
;<form>
  <Select required options={options} />
  <br />
  <br />
  <Button>Submit</Button>
</form>
```
