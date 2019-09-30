A custom hook that returns the opener function and rendered confirmation dialog. The following example is a complex usage to illustrate how the opener can be called from another hook.

```js
import { useConfirm } from './Confirm'
import { Paragraph } from '../../Text/Paragraph'

const Component = () => {
  const [keyPressed, setKeypressed] = React.useState('none')
  const [confirmation, confirm] = useConfirm({
    confirmLabel: 'Yes, Delete',
    buttonColor: 'danger',
    title: `You pressed ${keyPressed}`,
    message: 'Are you sure you want to delete it?',
    onConfirm: handleConfirm,
  })

  function handleConfirm(close) {
    alert('You deleted it')
    close()
  }

  React.useEffect(() => {
    function onKeydown() {
      const key = event.keyCode || event.charCode
      if (key === 8 || key === 46) {
        setKeypressed(key === 8 ? 'Backspace' : 'Delete')
        confirm()
      }
    }
    window.addEventListener('keydown', onKeydown)
    return () => {
      window.removeEventListener('keydown', onKeydown)
    }
  }, [])

  return confirmation
}
;<>
  <Component />
  <Paragraph>
    To trigger a confirmation dialog, hit the delete or backspace key.
  </Paragraph>
</>
```

## Confirm

A render-props version, for use in class components.

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
