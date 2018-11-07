```js noeditor
const StatusAndResources = require('../../../../../styleguide_components/StatusAndResources').StatusAndResources;

<StatusAndResources
  status="experimental"
  figmaURL="https://www.figma.com/file/2MG6DoSjk4IaLnjjFCnKFf/Forms"
  githubURL="https://github.com/looker/lens/blob/master/src/components/Form/Inputs/Radio.tsx"
  feedbackTitle="Radio Component Feedback" />
```

### Default Radio Button

The `<Radio />` component renders a single radio button on the page, with no accompanying label. It is generally used to construct higher-order components like the `<FieldRadio />`. If you are building a form, you probably want to use `<FieldRadio />` instead as it provides label support.

```js
<Radio />
```

### Name and ID

A name and ID can be specified in the `<Radio />` component. Radio buttons of the same `name` are considered to be in a 'radio group' and only one radio button in a radio group can be selected at a time.

```js
<Radio name="someName" id="one" /><br />
<Radio name="someName" id="two" /><br />
<Radio name="someName" id="three" />

```

### Checked Property

The `<Radio />` component accepts the `checked` property, which either sets the radio button as selected or not.

```js
<Radio checked={true} /><br />
<Radio checked={false} />
```

### Disabled Property

Use the disable property to gray out the radio button, making it unclickable.

```js
<Radio disabled /><br />
<Radio disabled checked />
```
