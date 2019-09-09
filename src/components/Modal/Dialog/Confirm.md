Wrap Confirm around a component whose action needs confirmation, e.g. a delete button.

```js
import { Confirm } from './Confirm'
import { Button } from '../../Button'

const handleConfirm = close => {
  alert('You did something')
  close()
}
;<Confirm
  title="Confirm Something"
  message="Is this what you want to do?"
  onConfirm={handleConfirm}
>
  {open => <Button onClick={open}>Do Something</Button>}
</Confirm>
```
