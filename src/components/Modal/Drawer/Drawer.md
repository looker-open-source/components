Drawers are modal overlays that provide contextual information. They are frequantly used for creation or management action by the user. The Drawer blocks interactions with the other content until dismissed either through clicking or tapping on the Backdrop or by selecting a close or completion action within the Drawer.

```js
<Drawer content="This is some content in the Drawer">
  <Button>Open Drawer</Button>
</Drawer>
```

---

### Composed Drawer

Drawers can be constructed with Modal helpers to create a complex layout a fixed-position header and footer as well as a content area that indicates overflow and allows the user to scroll through its contents.

```js
const ModalContext = require('../ModalContext').ModalContext

const boxProps = {
  alignItems: 'center',
  p: 'xxlarge',
  mb: 'xlarge',
  display: 'flex',
  height: '40%',
  justifyContent: 'center',
  bg: 'lavender',
}

const content = (
  <>
    <ModalHeader>
      <Heading fontWeight="semiBold">Some Things to Look at</Heading>
    </ModalHeader>
    <ModalContent>
      <Box {...boxProps}>Thing One</Box>
      <Box {...boxProps}>Thing Two</Box>
      <Box {...boxProps}>Thing Three</Box>
    </ModalContent>
    <ModalContext.Consumer>
      {({ closeModal }) => (
        <ModalFooter>
          <Button onClick={closeModal} variant="transparent" mr="small">
            Cancel
          </Button>
          <Button
            onClick={() => {
              alert("Oh yeah! You're done")
              closeModal && closeModal()
            }}
          >
            All Done
          </Button>
        </ModalFooter>
      )}
    </ModalContext.Consumer>
  </>
)
;<Drawer content={content}>
  <Button variant="outline">See some things, in a Drawer!</Button>
</Drawer>
```
