`ModalFooter` is attached to the bottom of modal. Generally, the terminal action for a modal as well as an option to abandon the process done via the modal are available within this component. This component is generally used in combination with the `ModalContext.Provider` to get access to the `ModalContext.closeModal()` method.

ModalFooter supports all [`Box`](/#!/Box) properties.

```js
import { Box } from '../../Box'
import { Button } from '../../Button'
import { Divider } from '../../Divider'
import { Icon } from '../../Icon'
import { ModalContent, ModalFooter } from '../Layout'
;<>
  <ModalFooter>
    <Button>Save Changes</Button>
  </ModalFooter>
  <Divider />
  <ModalFooter>
    <Button>Save Changes</Button>
    <Button variant="transparent">Cancel</Button>
  </ModalFooter>
  <Divider />
  <ModalFooter
    secondary={
      <Button variant="outline" iconBefore="Plus">
        Create Item
      </Button>
    }
  >
    <Button>Save Changes</Button>
    <Button variant="transparent">Cancel</Button>
  </ModalFooter>
  <Divider />
  <ModalFooter
    secondary={
      <>
        <Button variant="outline" iconBefore="Plus">
          Create Item
        </Button>
        <Button variant="outline" iconBefore="Plus">
          Yet Another
        </Button>
      </>
    }
  >
    <Button>Save Changes</Button>
    <Button variant="transparent">Cancel</Button>
  </ModalFooter>
  <Divider />
  <ModalContent>
    <Box bg="lavender" p="medium">
      Example content
    </Box>
  </ModalContent>
  <ModalFooter>
    <Button size="xsmall">Save Changes</Button>
    <Button size="xsmall" variant="transparent">
      Cancel
    </Button>
  </ModalFooter>
</>
```
