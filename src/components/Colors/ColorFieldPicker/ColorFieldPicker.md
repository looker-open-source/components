```js noeditor
const StatusAndResources = require('../../../../styleguide_components/StatusAndResources').StatusAndResources;

<StatusAndResources
  status="experimental"
  figmaURL="https://www.figma.com/file/h7RYPRCSlz3k8fLzEMRSzy/Color-Wheel?node-id=83%3A3"
  githubURL="https://github.com/looker/lens/blob/master/src/components/Colors/ColorWheel.tsx"
  feedbackTitle="ColorWheel Component Feedback" />
```

### ColorFieldPicker

This component is composed of a `FieldText` and a `ColorWheel` that appears in a `RichToolTip` upon hover above its color swatch.

```js
<ColorFieldPicker />
```

Like the `FieldText` component, `value` and `onChange` are passed in as props creating an interactive `ColorFieldPicker`.

```js
const ColorFieldPickerDemo = require('../../../../styleguide_components/ColorFieldPickerDemo').ColorFieldPickerDemo;
<ColorFieldPickerDemo />
```
