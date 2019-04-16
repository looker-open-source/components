`ModalFooter` is attached to the bottom of modal. Generally, the terminal action for a modal as well as an option to abandon the process done via the modal are available within this component. This component is generally used in combination with the `ModalContext.Provider` to get access to the `ModalContext.closeModal()` method.

ModalFooter supports all [`Box`](/#!/Box) properties.

```js
import { Button } from '../../Button'
import { ModalFooter } from '../Layout'

;<ModalFooter>
  <Button mx="medium" variant="transparent">
    Cancel
  </Button>
  <Button>Do stuff...</Button>
</ModalFooter>
```
