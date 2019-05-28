DrawerManager gives an easy way to compose a Drawer without the need to manage state.

```js
import { Button } from '../../Button'
import { DrawerManager } from './DrawerManager'
import { ModalContent } from '../'

const content = (
  <ModalContent>
    <p>Some content</p>
    <Button>A button too!</Button>
  </ModalContent>
)
;<DrawerManager content={content}>
  {onClick => <Button onClick={onClick}>Open Drawer</Button>}
</DrawerManager>
```
