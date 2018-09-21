```js noeditor
const StatusAndResources = require('../../../../styleguide_components/StatusAndResources').StatusAndResources;

<StatusAndResources
  status="experimental"
  figmaURL="https://www.figma.com/file/2MG6DoSjk4IaLnjjFCnKFf/Forms"
  githubURL="https://github.com/looker/lens/blob/master/src/components/Form/Inputs/Checkbox.tsx"
  feedbackTitle="Checkbox Component Feedback" />
```

### Default Checkbox

The `<Checkbox />` component renders a single checkbox element on the page, with no accompanying label. It is generally used to construct higher-order components like the `<FieldCheckbox />`. If you are building a form, you probably want to use `<FieldCheckbox />` instead as it provides label support.

```js
<Checkbox />
```

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
