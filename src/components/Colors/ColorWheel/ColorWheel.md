```js noeditor
const StatusAndResources = require('../../../../styleguide_components/StatusAndResources').StatusAndResources;

<StatusAndResources
  status="experimental"
  figmaURL="https://www.figma.com/file/2MG6DoSjk4IaLnjjFCnKFf/Forms"
  githubURL="https://github.com/looker/lens/blob/master/src/components/Form/Inputs/Checkbox.tsx"
  feedbackTitle="Checkbox Component Feedback" />
```

### Default Colorwheel

The `<ColorWheel/>` renders an HSV based color wheel.  The wheel can be rendered at any needed size by providing a `size` property.
The color wheel defaults to selecting a highly saturated and bright red hue.

```js
<ColorWheel size={300}/>
```

### Hue, saturation, and value properrites

The `<ColorWheel />` component accepts `hue`, `saturation`, and `value`. Setting the `value` will change the brightness of the
of the color wheel itself, while changing the `hue` and `saturation` will indicate what color has been selected on the color wheel.

```js
<ColorWheel size={200} hue={140} saturation={0.5} value={1} />
```

### onColorChanged property

Use this to provide a callback to allow parent to know what color was last selected.  Below shows a simple color swatch being changed
when a color is clicked in the wheel.

```js

class ColorState extends React.Component {
  constructor () {
    this.state = {
      color: {
        h: 140,
        s: 0.5,
        v: 0.5
      },
      size: 300
    }
  }

  handleColorStateChange(color) {
    color.v = this.state.color.v
    this.setState({color})
  }

  handleSliderChange(value) {
    const {color} = this.state
    color.v = value / 100
    this.setState({color})
  }

  render () {

    const h = Number(this.state.color.h).toFixed(2)
    const s = Number(this.state.color.s).toFixed(2)
    return (
        <div style={{display: 'flex'}}>
          <Card raised>
            <CardContent>
              <Heading level="2">Color wheel</Heading>
              <ColorWheel size={this.state.size}
                          hue={this.state.color.h}
                          saturation={this.state.color.s}
                          value={this.state.color.v}
                          onColorChange={(color) => this.handleColorStateChange(color)}/>

              <input id="typeinp"
                     type="range"
                     min="0" max="100"
                     value={this.state.color.v * 100}
                     onChange={(event) => this.handleSliderChange(event.target.value)}
                     step="1"/>
            </CardContent>
          </Card>
          <Card raised>
            <CardContent>
              <Heading level="2">HSV values</Heading>
              <Text>Hue: {h}</Text>
              <Text>Saturation: {s}</Text>
              <Text>Value: {this.state.color.v}</Text>
            </CardContent>
          </Card>
        </div>
    )
  }
}

<ColorState />
```
