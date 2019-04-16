The `<FieldToggleSwitch />` component is composed of a `<ToggleSwitch />` component and a `<Label />` component. By default, the label will render to the right of the toggle switch, however this is adjustable with the alignLabel property.

```js
import { FieldToggleSwitch } from './FieldToggleSwitch'

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
      <FieldToggleSwitch
        label="Development Mode"
        alignLabel="left"
        onChange={this.handleChange.bind(this)}
        on={this.state.on}
      />
    )
  }
}

;<ToggleSwitchParent />
```
