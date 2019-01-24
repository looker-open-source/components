```js noeditor
const StatusAndResources = require('../../../../../styleguide_components/StatusAndResources').StatusAndResources;

<StatusAndResources
  status="experimental"
  figmaURL="https://www.figma.com/file/2MG6DoSjk4IaLnjjFCnKFf/Forms"
  githubURL="https://github.com/looker/lens/blob/master/src/components/Form/ToggleSwitch/ToggleSwitch.tsx"
  feedbackTitle="ToggleSwitch Component Feedback" />
```

### Toggle Switch

The `ToggleSwitch` component is essentially a decorated checkbox that is either toggled on or off. Its size can be changed using the `size` prop, which accepts px value as a number. Its default size is 20px. The `ToggleSwitch` requires a `label` for accessibility purpose and should be a succinct description of the switch's purpose (e.g. Development Mode or Hide Legend).

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
        label="Switch Label"
      />
    )
  }
}

<ToggleSwitchParent />

```
