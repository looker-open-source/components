# DialogContext

`DialogContext` is a [React Context](https://reactjs.org/docs/context.html) that provides
access to the `closeModal` function, which allows you to close the Dialog or Popover.

```tsx
import React, { useContext } from 'react';
import { Button, DialogContext } from '@looker/components';

export function DialogContextDemo() {
  return (
    <DialogContext.Consumer>
      {({ close }) => <Button onClick={close}>Close!</Button>}
    </DialogContext.Consumer>
  );
}

export function DailogUseContextDemo() {
  const { close } = useContext(DialogContext);
  return <Button onClick={close}>Close!</Button>;
}
```
