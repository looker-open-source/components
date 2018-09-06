```js noeditor
const StatusAndResources = require('../../../../styleguide_components/StatusAndResources').StatusAndResources;

<StatusAndResources
  status="experimental"
  figmaURL="https://www.figma.com/file/2MG6DoSjk4IaLnjjFCnKFf/Forms"
  githubURL="https://github.com/looker/relens/blob/master/src/components/Form/Inputs/InputText.tsx"
  feedbackTitle="InputText Component Feedback" />
```

### Defalut InputText

The `<InputText />` component renders a single input element on the page, with no accompanying label. It is generally used to construct higher-order components like the `<FieldText />`. If you are building a form, you probably want to use `<FieldText />` instead as it provides label support.

### Name and ID

A name and ID can be specified in the `<InputText />` component. Names are important if the checkbox is used in the context of a form, in which case a name is required for the value of the input to be captured.

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

Placeholders are used to give a hint to the user of the expected value for the input.

```js
  <InputText placeholder="Enter your text here..." />
```

### Input Types

Four types of input text are supported: email, number, password, and text.

**Email**: Will validate that the inputted value is an email address when submitted

**Number**: Forces a numeric value

**Password**: Hides typed characters

**Text**: Regular text input

_Note: Because components in Lens do not store state, if a component has a value specified (as they do in this example), it cannot be changed. In actual implementation, the user will need to define an onChange handler to update the value._

```js
  <InputText type="email" value="example@gmail.com"/>
  <InputText type="number" value="5" />
  <InputText type="password" value="password1234" />
  <InputText type="text" value="Regular old text" />
```

### ReadOnly Property

As the name suggests, `readOnly` makes the text uneditable.

```js
  <InputText value="You can't change me." readOnly />
```
