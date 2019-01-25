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
      <FieldToggleSwitch
        label="Development Mode"
        alignLabel="left"
        onChange={this.handleChange.bind(this)}
        on={this.state.on}
      />
    )
  }
}

  <ToggleSwitchParent />
```
