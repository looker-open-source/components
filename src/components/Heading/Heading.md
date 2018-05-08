
### **Heading Default**
The `<Heading />` component is used to render a HTML `<h1>` - `<h6>` element, by default it will render a `<h3>` element
```js
// A heading component that defaults to a h3

<Heading>Hello Good Looker 👋</Heading>
```

### **Heading Levels**

To use a different HTML heading element,  the `<Heading />` component accepts a `level` attribute that corresponds to the `<h1>` - `<h6>` elements. The font-size of each heading element maps to the Lens type ramp

```js
// Heading components using the level attribute (font-size / line-height)

<div>
  <Heading level="1">I’m a h1 element (28px/38px)</Heading>
  <Heading level="2">I’m a h2 element (22px/30px)</Heading>
  <Heading level="3">I’m a h3 element (19px/27px)</Heading>
  <Heading level="4">I’m a h4 element (16/24px)</Heading>
  <Heading level="5">I’m a h5 element (14px/24px)</Heading>
  <Heading level="6">I’m a h6 element (12px/16px)</Heading>
</div>
```

### **Heading Sizes**

When creating accessible pages it is important that headings create a [logical document outline](https://bitsofco.de/using-heading-elements-to-create-a-document-outline/), but sometimes the font-size of the heading element doesn't match to the needs of the design or layout. Composing the `level` and the `size` attributes lets you choose the semantically correct level heading and the desired size. The available size values come from the type ramp.

```js
// Heading components using the level and size attribute (font-size / line-height)

<div>
  <Heading size="d1">h3 sized to d1</Heading>
  <Heading size="d2">h3 sized to d2</Heading>
  <Heading size="d3">h3 sized to d1</Heading>
  <Heading level="4" size="1">h4 sized to 1 </Heading>
  <Heading level="4" size="2">h4 sized to 2 </Heading>
  <Heading level="4" size="3">h4 sized to 3 </Heading>
  <Heading level="2" size="4">h2 sized to 4 </Heading>
  <Heading level="2" size="5">h2 sized to 5 </Heading>
  <Heading level="2" size="6">h2 sized to 6 </Heading>
</div>
```

### **Weight and Transform**

Another common pattern for headings is to control the font-weight and the text-transform properties. The `<Heading />` component allows you to adjust those with the `weight` and `transform` attributes.

```js
// Heading components using the weight and transform attributes
<div>
  <Heading weight="light" transform="lower">Light and lower</Heading>
  <Heading weight="normal" transform="none">Normal and none (default)</Heading>
  <Heading weight="semi-bold" transform="upper">Semi-bold and upper</Heading>
  <Heading weight="bold" transform="caps">Bold and caps</Heading>
</div>
```

### **Heading Playground**

```js noeditor
class Inputer extends React.Component {

  constructor () {
    super()
    this.state = {
      level: '',
      size: '',
      weight: '',
      transform: '',
      levelString: '🎉 - Hello, I am a <h3> - 🎉',
      sizeString: '',
      weightString: '',
      transformString: ''
    }
  }

  onChangeLevel (event) {
    let string = ((event.target.value.length) && (event.target.value !=='-'))?  `🎉 - Hello, I am a <h${event.target.value}> - 🎉 ` : '🎉 - Hello, I am a <h3> - 🎉'
    this.setState({level: event.target.value, levelString: string})
  }

  onChangeSize (event) {
    //let string = event.target.value.length?  `at size ${event.target.value}` : ''
    this.setState({size: event.target.value})
  }

  onChangeWeight (event) {
     //let string = event.target.value.length?  `at size ${event.target.value}` : ''
     this.setState({weight: event.target.value})
  }

  onChangeTransform (event) {
     //let string = event.target.value.length?  `at size ${event.target.value}` : ''
     this.setState({transform: event.target.value})
  }



  render () {
    return (<div style={{backgroundColor: "#F2F2F9", padding: '16px', borderRadius: '6px'}}>
    <div style={{display: 'flex', marginBottom: '32px'}}>
    <div style={{marginRight: '16px'}}>
    <Text element="span" size="6" weight="semi-bold" style={{marginRight: '8px'}}><label>Level:</label></Text>
    <select onChange={this.onChangeLevel.bind(this)}>
      <option value="">Default</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
    </select>
    </div>

    <div style={{marginRight: '16px'}}>
     <Text element="span" size="6" weight="semi-bold" style={{marginRight: '8px'}}><label>Size</label></Text>
    <select onChange={this.onChangeSize.bind(this)}>
      <option value="">Default</option>
      <option value="d1">d1</option>
      <option value="d2">d2</option>
      <option value="d3">d3</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
    </select>
    </div>

    <div style={{marginRight: '16px'}}>
     <Text element="span" size="6" weight="semi-bold" style={{marginRight: '8px'}}><label>Weight</label></Text>
    <select onChange={this.onChangeWeight.bind(this)}>
      <option value="">-</option>
      <option value="light">Light</option>
      <option value="normal">Normal(Default)</option>
      <option value="semi-bold">Semi-Bold</option>
      <option value="bold">Bold</option>
    </select>
    </div>

    <div style={{marginRight: '16px'}}>
     <Text element="span" size="5" weight="semi-bold" style={{marginRight: '8px'}}><label>Transform</label></Text>
    <select onChange={this.onChangeTransform.bind(this)}>
      <option value="">-</option>
      <option value="lower">Lower</option>
      <option value="none">None</option>
      <option value="upper">Upper</option>
      <option value="caps">Caps</option>
    </select>
    </div>
    </div>


    <Heading level={this.state.level} size={this.state.size} weight={this.state.weight} transform={this.state.transform}> {this.state.levelString} {this.state.sizeString} {this.state.text}</Heading>

    <div style={{backgroundColor: '#304148', padding: '12px', color: "#C594C5", marginTop: '32px'}}>
    <Text element="code" size="6">
      &lt;Heading{this.state.level.length > 0 && ` level="${this.state.level}"` }
                  {this.state.size.length > 0 && ` size="${this.state.size}"` }
                  {this.state.weight.length > 0 && ` weight="${this.state.weight}"` }
                  {this.state.transform.length > 0 && ` transform="${this.state.transform}"` }&gt;
                  <Text element="code" style={{color:"#fff"}}>{this.state.levelString}</Text>
                  &lt;/Heading&gt;</Text>
    </div>


    </div>)
  }
}

<Inputer />
```
