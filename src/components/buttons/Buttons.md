---

## Primary

Use a primary button for the most frequently used action or most important action on a page. Primary buttons should only appear once on a page. They are sometimes accompanied by a secondary button.

```js
<table>
  <tbody>
    <tr>
      <td>
        <Button>Primary Idle</Button>
      </td>
    </tr>
    <tr>
      <td>
        <Button state="hover">Primary Hover</Button>
      </td>
    </tr>
    <tr>
      <td>
          <Button state="active">Primary Active</Button>
      </td>
    </tr>
  </tbody>
</table>
```

## Light

Use a light button alongside a primary button to provide alternative actions on a page. Secondary buttons should only appear alongside primary buttons. Use no more than two secondary buttons on a page.

```js
<table>
  <tbody>
    <tr>
      <td>
        <Button mode="light">Light Idle</Button>
      </td>
    </tr>
  </tbody>
</table>
```


## Sizes

```js
class Inputer extends React.Component {
  
  constructor () {
    super()
    this.state = {
      checked: false,
      text: 'small',
      mode: undefined
    }
  }
  
  onCheck (event) {
    this.setState({checked: event.target.checked ? 'active': 'hover' })
  }
  
  onChangeText (event) {
    this.setState({text: event.target.value})
  }
  
  onChangeMode (event) {
    
    
    this.setState({
      mode: event.target.value == '' ? undefined : event.target.value
    })
  }
  
  render () {
    return (<div>
    <select onChange={this.onChangeMode.bind(this)}>
      <option value="" selected>Default</option>
      <option value="light">Light</option>
      <option value="ghost">Ghost</option>
      <option value="scary">Scary</option>
    </select>
    <table>
      <tbody>
        <tr>
          <td><Button size="extraSmall" mode={this.state.mode}>X-Small</Button></td>
        </tr>
        <tr>
          <td>
            <Button size="small" mode={this.state.mode}>{this.state.text}</Button>
          </td>
        </tr>
        <tr>
          <td>
            <Button size="" mode={this.state.mode}>Normal</Button>
          </td>
        </tr>
        <tr>
          <td>
            <Button size="large" mode={this.state.mode}>Large</Button>
          </td>
        </tr>
      </tbody>
    </table>
    </div>)
  }
}

<Inputer />
```
