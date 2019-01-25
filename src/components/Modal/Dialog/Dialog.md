Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.

```js
<Dialog
  content={
    <>
      This is some content in the Dialog <a href="#">Focus here...</a>
    </>
  }
>
  <Button>Open Dialog</Button>
</Dialog>
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
;<Dialog content={content}>
  <Button variant="outline" color="danger" autoFocus>
    Delete Stuff
  </Button>
</Dialog>
```
