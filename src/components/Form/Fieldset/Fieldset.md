```js noeditor
const StatusAndResources = require('../../../../styleguide_components/StatusAndResources').StatusAndResources;

<StatusAndResources
  status="experimental"
  figmaURL="https://www.figma.com/file/2MG6DoSjk4IaLnjjFCnKFf/Forms"
  githubURL="https://github.com/looker/lens/blob/master/src/components/Form/Fieldset/Fieldset.tsx"
  feedbackTitle="Fieldset Component Feedback" />
```

### Fieldset

The `<Fieldset />` component is used to wrap Field components into meaningful groups. The `legend` property allows for a heading which is by default aligned above and to the left.

```js
<Fieldset legend="Legend">
  <FieldText label="First" />
  <FieldText label="Second" />
  <FieldText label="Third" />
</Fieldset>
<Button>Submit</Button>
```
