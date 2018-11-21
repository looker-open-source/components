<div class="component-desc"><p>The Lens color palette aims to help communicate the intent of an interface as well as to help establish clear hierarchy throughout an application. </p></div>

<div class="doc-section-divider"></div>

#### Guidelines

These guidelines lay a few ground rules on how to most effectively use color when creating Looker experiences.

##### **Purposeful**
It is important to use color with intent. Color should support the content and not the other way around. Avoid only using color as a way to show intent.

##### **Respectful**
Use color to create hierarchy and focus attention. Understand that color can have different cultural connotations. Be judicious and use color to draw attention to things the user should take action on.

##### **Accessible**
We want Looker to be accessible to the widest audience possible. Our color palettes are designed to meet or exceed the accessibility guidelines.

<div class="doc-section-divider"></div>

#### Color Palette

```js noeditor
const chroma = require('chroma-js');

checkContrast = (color) => {
  let swatchList = []
  let groupName = color.name
  color.children.forEach((swatch, i) => {

    // Extract swatch later and get fill color
    const swatchLayer = swatch.children.find(function(obj) { return obj.name === 'swatch'});
    const swatchFill = swatchLayer.fills[0].color
    const convertedFill = `rgba(${swatchFill.r * 255}, ${swatchFill.g * 255}, ${swatchFill.b * 255}, ${swatchFill.a * 1})`

    // Extract text layer and get color
    const swatchLabel = swatch.children.find(function(obj) { return obj.name === 'label'});

    const labelFill = swatchLabel.fills[0].color
    const convertedLabelFill = `rgba(${labelFill.r * 255}, ${labelFill.g * 255}, ${labelFill.b * 255}, ${labelFill.a * 1})`

    const hexValue = chroma(convertedFill).hex()

    const contrastCheck = chroma.contrast(convertedFill, convertedLabelFill);
    let wcag = ""

    if (contrastCheck >= 4.5) {
      wcag = "AAA"
    } else if (contrastCheck >= 3) {
      wcag = "AA"
    } else {
      wcag = "fail"
    }

    swatchList.push({fill: convertedFill, label: swatch.name, labelColor: convertedLabelFill, contrastLevel: wcag, hexValue: hexValue, group: groupName})
  })

  return swatchList

}

renderSwatch = (swatchList, key) => {
  let color = swatchList[0].group
  let fillColor = swatchList[5].fill
  let fill = color.toLowerCase();
  return(
    <div className="swatch-holder" key={key}>
      <div className="swatch-header" style={{background: fillColor}}>
        <Text size="large" weight="semi-bold" style={{color:'#fff'}} >{color}</Text>
        <Text size="medium" weight="semi-bold" style={{color:'#fff'}}>500</Text>
      </div>
      {swatchList.map((swatch, index) => (
        <Swatch key={index} contrastLevel={swatch.contrastLevel} labelColor={swatch.labelColor} hexValue={swatch.hexValue} group={swatch.group}>{swatch.label}</Swatch>
      ))}
    </div>
  )
}


class Swatch extends React.Component {
  render(props) {
    return(
      <div className="swatch" style={{background: this.props.hexValue}}>
        <Text className="swatch-label" weight="semi-bold" style={{color: this.props.labelColor}}>{this.props.children}</Text>
        <Text className="swatch-hex" weight="semi-bold" style={{color: this.props.labelColor}}>{this.props.hexValue}</Text>
        <div className="contrast-box">{this.props.contrastLevel}</div>
      </div>
    )
  }
}

class SwatchRender extends React.Component{

  constructor () {
  super()
  this.state = {
      'file': 'XZUILHEQBKTus121SD99nrFN',
      'page': 'Swatches',
      'frame': 'contrast',
      'ACCESS_TOKEN': '16-4ef5a47f-6cd6-4372-95c3-2d581b1d4bbf',
      'swatches': []
    }
  }

  apiRequest(endpoint) {
      return fetch('https://api.figma.com/v1' + endpoint, {
          method: 'GET',
          headers: { "x-figma-token": this.state.ACCESS_TOKEN }
      }).then(function(response) {
          return response.json();
      }).catch(function (error) {
          return { err: error };
      });
  }

  getComponentPage(obj, pageName, id)  {
    return obj.find( page => page.name === pageName );
  }

  loadFile() {

    this.apiRequest('/files/' + this.state.file)
    .then((response) => {
        let page = this.getComponentPage(response.document.children, this.state.page)
        let pageSwatches = this.getComponentPage(page.children, this.state.frame)
        let swatchList = []
        let palettes = pageSwatches.children;

        palettes.forEach((palette) => {
          swatchList.push(checkContrast(palette))
        })

        this.setState({
          swatches: swatchList
        })
    })
}

componentDidMount() {
  this.loadFile();
}

render() {
  return(

    <div className="swatches">
          {this.state.swatches.map((swatchList, index) => (
            renderSwatch(swatchList, index)
          ))}
    </div>
    )
  }
}

<SwatchRender />

```
