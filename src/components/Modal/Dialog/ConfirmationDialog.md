If your usage does not lend itself to the render prop style (e.g. the confirmation is triggered from inside a hook), use `<ConfirmationDialog/>` and control it directly with the `isOpen` and `close` props.

```js
import { useToggle } from '../../../hooks'
import { ConfirmationDialog } from './ConfirmationDialog'
import { Button } from '../../Button'
import { Paragraph } from '../../Text/Paragraph'

const Component = () => {
  const [keyPressed, setKeypressed] = React.useState('none')
  const { value, setOn, setOff } = useToggle(false)

  function handleConfirm() {
    alert('You deleted it')
    setOff()
  }

  React.useEffect(() => {
    function onKeydown() {
      const key = event.keyCode || event.charCode
      if (key === 8 || key === 46) {
        setKeypressed(key === 8 ? 'Backspace' : 'Delete')
        setOn()
      }
    }
    window.addEventListener('keydown', onKeydown)
    return () => {
      window.removeEventListener('keydown', onKeydown)
    }
  }, [])

  return (
    <ConfirmationDialog
      isOpen={value}
      close={setOff}
      confirmLabel={'Yes, Delete'}
      color="danger"
      title={`You pressed ${keyPressed}`}
      message="Are you sure you want to delete it?"
      onConfirm={handleConfirm}
    />
  )
}
;<>
  <Component />
  <Paragraph>Hit the delete or backspace key.</Paragraph>
</>
```
