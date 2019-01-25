```js noeditor
const StatusAndResources = require('../../../../../styleguide_components/StatusAndResources').StatusAndResources;

<StatusAndResources
  status="experimental"
  figmaURL="https://www.figma.com/file/2MG6DoSjk4IaLnjjFCnKFf/Forms"
  githubURL="https://github.com/looker/lens/blob/master/src/components/Form/ToggleSwitch/ToggleSwitch.tsx"
  feedbackTitle="ToggleSwitch Component Feedback" />
```

### Toggle Switch

The `ToggleSwitch` component is essentially a decorated checkbox that is either toggled on or off. For accessibility reasons you should always provide a label with your toggle switch, you can use the `<FieldToggleSwitch>` component to generate an accessible toggle switch. Its size can be changed using the `size` prop, which accepts px value as a number. Its default size is 20px.

```js
class ToggleSwitchParent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { on: false }
  }

  handleChange(event) {
    this.setState({ on: event.target.checked })
  }

  render() {
    return (
      <ToggleSwitch
        onChange={this.handleChange.bind(this)}
        on={this.state.on}
      />
    )
  }
}

<ToggleSwitchParent />

```
