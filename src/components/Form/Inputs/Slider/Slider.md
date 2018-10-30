```js noeditor
const StatusAndResources = require('../../../../../styleguide_components/StatusAndResources').StatusAndResources;

<StatusAndResources
  status="experimental"
  githubURL="https://github.com/looker/lens/blob/master/src/components/Form/Inputs/Slider/Slider.tsx"
  feedbackTitle="Slider Component Feedback" />
```

### Default Slider

The `<Slider />` component renders a single slider element on the page, with no accompanying label.

```js
<Slider />
```

### Value, Min, Max and step

The `<Slider />` component accepts a `value` property, allowing the user to set the initial value at which the slider is initialized.
It also accepts a `min` and `max` value, as well as the `step` to set the granularity between values.

```js
class VolumeSlider extends React.Component {

  constructor () {
    this.state = {
      value: 11
    }
  }

  handleChange (value) {
    this.setState({value})
  }

  render () {
    return (
      <div>
        <Slider min={1}
                    max={11}
                    value={this.state.value}
                    step={1}
                    onChange={(event) => this.handleChange(event.target.value)} />
        <Text>Volume {this.state.value}</Text>
      </div>
    )
  }
}

<VolumeSlider />
```

### Disabled Property

Use the disable property to gray out the Input, making it a fixed value.

```js
<Slider disabled />
```
