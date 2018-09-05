```js noeditor
const StatusAndResources = require('../../../../styleguide_components/StatusAndResources').StatusAndResources;

<StatusAndResources
  status="experimental"
  figmaURL="https://www.figma.com/file/2MG6DoSjk4IaLnjjFCnKFf/Forms"
  githubURL="https://github.com/looker/relens/blob/master/src/components/Form/Inputs/Checkbox.tsx"
  feedbackTitle="Checkbox Component Feedback" />
```

### Default Checkbox

The `<Checkbox />` component should rarely be used directly. Rather, it is implemented in higher level components, such as `<FieldCheckbox />`.

### Name and ID

A name and ID can be specified in the `<Checkbox />` component. Names are important if the checkbox is used in the context of a form, in which case a name is required for the value of the checkbox to be captured.

```js
  <Checkbox name="someName" id="someId" />
```

### Checked Property

The `<Checkbox />` component accepts the `checked` property, allowing the user to force the checkbox as always checked or never checked.

```js
  <Checkbox checked={true} />
  <Checkbox checked={false} />
```

### Disabled Property

Use the disable property to gray out the checkbox, making it unclickable.

```js
  <Checkbox disabled />
  <Checkbox disabled checked />

```
