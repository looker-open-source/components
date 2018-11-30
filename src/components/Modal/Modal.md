Modals are temporary overlays that offer contextual information or require user input/confirmation. Modals block interactions with the application until being explicitly dismissed. They can be used for lightweight tasks or hosting heavier temporary content.

At its most basic, a Modal is a container for content that should sit above or aside the primary content.

Currently Lens provides two kinds of Modals: [`Dialog`](/#!/Dialog) and [`Drawer`](/#!/Drawer). These components can used on their own or in combination with layout helpers designed expressly for use with modals, specifically: [`ModalHeader`](/#!/ModalHeader), [`ModalContent`](/#!/ModalContent) and [`ModalFooter`](/#!/ModalFooter).

Modals can have a single child. If a child is specified it will automatically be assigned on an `onClick` event that triggers the modal to open.

### Styling

Modals are assembled of two primary pieces a Backdrop (`ModalBackdrop`) and a Surface (`SurfaceBase`).

##### `ModalBackdrop`

This provides the backdrop behind Modal containers. It can be customized via the `backdropStyles` property. These must be a CSSProperty compatible key / value paired object.

```
<Dialog
  backdropStyles={{ background: 'purple', opacity: 1 }}
  content="Stuff and text"
>
  <Button>Purple Backdrop</Button>
</Dialog>
```

##### `ModalSurface`

`ModalSurface` provides the container that contains the content. It can be customized via the `surfaceStyles` property. These must be a CSSProperty compatible key / value paired object.

```
<Dialog
  surfaceStyles={{ background: 'pink', borderRadius: 0, padding: '3rem' }}
  content="Stuff and text"
>
  <Button>Pink Surface, No Radiae</Button>
</Dialog>
```

### ModalContext

`ModalContext` is a [React Context](https://reactjs.org/docs/context.html) that provides access to Modal functionality without requiring the developer to explicitly manage the Modal's state. Currently the context simply provides access to the `close()` method of the Modal.

```
const ModalContext = require('./ModalContext').ModalContext;

<ModalContext.Consumer>
  {({ close }) => <Button onClick={close}>Close!</Button>}
</ModalContext.Consumer>
```

#### `withModal`

Provides a React HOC (High Order Component) that will automatically inject any ModalContext properties into a compoonent wrapped with `withModal`.
