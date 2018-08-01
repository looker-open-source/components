<div class="component-desc"><p>Borders help define the space and structure of the interface. </p></div>

<div class="doc-section-divider"></div>

```js noeditor
const charcoal000 = '#FBFBFC';
const charcoal100 = '#F5F6F7';
const charcoal200 = '#DEE1E5';
const charcoal300 = '#C1C6CC';
const charcoal400 = '#939BA5';
const charcoal500 = '#707781';
const charcoal600 = '#4C535B';
const charcoal700 = '#343C42';
const charcoal800 = '#262D33';
const charcoal900 = '#262D33';

renderBorder = (border, index) => {
  console.log(border)
  let labels = [['Theme Name', border.themeName], ['Lens Color' , border.name], ['Hex Value', border.hex]];
  let headerCells = ["Theme Name", "Lens Color","Hex"]
  let tableCells = [border.themeName, border.name, border.hex]

   return(
     <div>
     <Heading size="6" weight="semiBold">{border.label}</Heading>

      <div className="border-examples">
        {border.examples.map((example) => (
          <div className="border-example" style={{borderColor: border.hex, background: example.bgColor}}>
            <div className={border.textClass}><Text size='6' weight='semi-bold'>On {example.name}</Text></div>
            <div className='border-divider-example' style={{background: border.hex}}> </div>
          </div>
        ))}
      </div>
      <div className="border-labels">
        {labels.map((label) => (
            <div className="border-label-group">
              <Text mode="subdued" size="5" weight="semi-bold">{label[0]}</Text>
              <Text size="5" element="code">{label[1]}</Text>
            </div>
        ))}
      </div>



    </div>
  )
}
class BorderRender extends React.Component{

  constructor () {
  super()
  this.state = {
      'borders' : [
        {
          label: 'Default Border',
          hex:  charcoal300,
          name: 'charcoal300',
          themeName: 'borderColor',
          examples: [
            {name: 'White', bgColor: '#ffffff'},
            {name: 'Charcoal000', bgColor: charcoal000 },
            {name: 'Charcoal100', bgColor: charcoal100}
          ]
        },
        {
          label: 'Dark Border',
          hex:  charcoal400,
          name: 'charcoal400',
          themeName: 'borderColorDark',
          examples: [
            {name: 'White', bgColor: '#ffffff'},
            {name: 'Charcoal000', bgColor: charcoal000 },
            {name: 'Charcoal100', bgColor: charcoal100},
            {name: 'Charcoal200', bgColor: charcoal200}
          ]
        },
        {
          label: 'Light Border',
          hex:  charcoal200,
          name: 'charcoal200',
          themeName: 'borderColorLight',
          examples: [
            {name: 'White', bgColor: '#ffffff'},
            {name: 'Charcoal000', bgColor: charcoal000 },
            {name: 'Charcoal100', bgColor: charcoal100},
          ]
        },
        {
          label: 'Border on Dark',
          textClass: 'border-on-dark-text',
          hex:  charcoal500,
          name: 'charcoal500',
          themeName: 'borderOnDark',
          examples: [
            {name: 'Charcoal800', bgColor: charcoal800},
            {name: 'Charcoal700', bgColor: charcoal700 },
            {name: 'Charcoal600', bgColor: charcoal600},
          ]
        }
      ]
    }
  }


render() {
  return(

    <div>
          {this.state.borders.map((border, index) => (
            renderBorder(border, index)
          ))}
    </div>
    )
  }
}

<BorderRender />
```
