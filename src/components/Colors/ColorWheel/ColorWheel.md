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

```js
<ColorWheel size={300}/>
```

### Color Property

The `<ColorWheel />` component accepts the `color` string property, allowing the the user to show a selected color on the wheel. The color
wheel will accept any valid CSS hex codes (e.g. `#123456`), or CSS color words (e.g `papayawhip`)

```js
<ColorWheel size={200} color={'red'} />
```

### onColorChanged property

Use this to provide a callback to allow parent to know what color was last selected.  Below shows a simple color swatch being changed
when a color is clicked in the wheel.

```js

class ColorState extends React.Component {
  constructor () {this.state = {color: '#61ff98', size: 300}}

  handleColorStateChange(color) {
    this.setState({color})
  }

  render () {

    const swatchStyle = {
       backgroundColor: this.state.color,
       height: this.state.size,
       width: `${this.state.size}px`
    };

    return (
        <div style={{display: 'flex'}}>
          <Card raised>
            <CardContent>
              <Heading level="2">Color wheel</Heading>
              <ColorWheel size={this.state.size} color={this.state.color} onColorChange={(color) => this.handleColorStateChange(color)}/>
            </CardContent>
          </Card>
          <Card raised>
            <CardContent>
              <Heading level="2">Use wheel to change color</Heading>
              <div style={swatchStyle} />
            </CardContent>
          </Card>
        </div>
    )
  }
}

<ColorState />
```
