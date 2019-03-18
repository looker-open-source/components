Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.

```js
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
          This is some content in the Dialog <a href="#">Focus here...</a>
        </Dialog>
        <Button onClick={this.open}>Open Dialog</Button>
      </>
    )
  }
}
;<Component />
```

---

### Simple Confirmation Dialog

A confirmation dialog can be easily assembled using the Dialog and its sibling components DialogHeader and DialogFooter.

```js
const ModalContext = require('../ModalContext').ModalContext

const content = (
  <>
    <ModalHeader>
      <Heading>Are you sure you want to delete "Stuff"?</Heading>
    </ModalHeader>
    <ModalContext.Consumer>
      {({ closeModal }) => (
        <ModalFooter>
          <Button onClick={closeModal} variant="transparent" mr="small">
            Cancel
          </Button>
          <Button
            onClick={() => {
              alert("doin' things...")
              closeModal && closeModal()
            }}
            color="danger"
          >
            Yes, Delete "Stuff"
          </Button>
        </ModalFooter>
      )}
    </ModalContext.Consumer>
  </>
)
;<DialogManager content={content}>
  {onClick => (
    <Button variant="outline" color="danger" autoFocus onClick={onClick}>
      Delete Stuff
    </Button>
  )}
</DialogManager>
```
