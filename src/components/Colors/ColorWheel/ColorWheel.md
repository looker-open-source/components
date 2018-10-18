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

[This website has a nice treatment on the HSV color space,](http://learn.leighcotnoir.com/artspeak/elements-color/hue-value-saturation/) 
One takeaway is that HSV color space can be thought of as a cylinder,  where each slice of the cylinder is showing a circle at a particular
video between 0 and 1.  `Hue` can be thought of as the angle from the center of the circle can take on values between 0 and 360. 
`Saturation` is the distance from the center on a unit circle. 

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

Use this to provide a callback to to know when a new hue, saturation tuple has been changed.  Note that the brightness will never change for a given
slice of a color wheel, and should be handled outside the color wheel component. 

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

  // Using a slider to control the brightness of the 
  handleSliderChange(value) {
    const {color} = this.state
    color.v = value / 100
    this.setState({color})
  }

  render () {

    const h = Number(this.state.color.h).toFixed(0)
    const s = Number(this.state.color.s).toFixed(1)
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
