DialogManager gives an easy way to compose a Dialog without need to manage state.

```js
import { Button } from '../../Button'
import { DialogManager } from './DialogManager'
import { ModalContent } from '../'

const content = (
  <ModalContent>
    <p>Some content inside the Dialog</p>
    <Button>A button too!</Button>
  </ModalContent>
)
;<DialogManager content={content}>
  {onClick => <Button onClick={onClick}>Open Dialog </Button>}
</DialogManager>
```

Alternatively, `Dialog` requires that the developer manages the whether the Dialog is visible or not by assigning `true` or `false` to the `isOpen` prop

```js
import { Button } from '../../Button'
import { Dialog } from './Dialog'
import { ModalContent } from '../'

class Component extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
  }

  open() {
    this.setState({ isOpen: true })
  }
  close() {
    this.setState({ isOpen: false })
  }

  render() {
    return (
      <>
        <Dialog isOpen={this.state.isOpen} onClose={this.close}>
          <ModalContent>
            <p>This is some content in the Dialog</p>
            <Button>A button too!</Button>
          </ModalContent>
        </Dialog>
        <Button onClick={this.open}>Open Dialog</Button>
      </>
    )
  }
}
;<Component />
```
