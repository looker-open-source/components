```js noeditor
const StatusAndResources = require('../../../../styleguide_components/StatusAndResources').StatusAndResources;

<StatusAndResources
  status="experimental"
  figmaURL="https://www.figma.com/file/2MG6DoSjk4IaLnjjFCnKFf/Forms"
  githubURL="https://github.com/looker/relens/blob/master/src/components/Form/Inputs/InputText.tsx"
  feedbackTitle="InputText Component Feedback" />
```

### Default InputText

The `<InputText />` component renders a single text input element on the page, with no accompanying label. It is generally used to construct higher-order components like the `<FieldText />`. If you are building a form, you probably want to use `<FieldText />` instead as it provides label support.

```js
<InputText />
```

### Name and ID

A name and ID can be specified in the `<InputText />` component. Names are important if the input is used in the context of a form, in which case a name is required for the value of the input to be captured.

```js
<InputText name="someName" id="someId" />
```

### Disabled Property

Use the disable property to make an input field uneditable.

```js
<InputText disabled />
<InputText value="Hello!" disabled />
```

### Placeholders

Placeholders are used to give a hint to the user of the expected value for the input. They should not be used as a complete replacement of labels.

```js
<InputText placeholder="Enter your text here..." />
```

### ReadOnly Property

As the name suggests, `readOnly` makes the text uneditable.

```js
<InputText value="You can't change me." readOnly />
```

### Required Property

When set for `<InputText />` in the context of a form, the input field must be filled out before submitting the form.
