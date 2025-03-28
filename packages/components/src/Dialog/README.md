# Dialog

Dialogs break out of the standard application flow and UI to present new information or required actions.

Dialog provides a general purpose (empty & unstyled) overlay. `Confirm` will likely be more useful if your intent is to render a standard user confirmation dialog.

## Standard Use

`Dialog` operates in a "uncontrolled" manner.

```tsx
export function Basic(props: DialogProps) {
  return (
    <Dialog {...props} content="Simple Content">
      <ButtonOutline>Open Dialog</ButtonOutline>
    </Dialog>
  );
}
```

```tsx
export function MediumContent(props: DialogProps) {
  const DialogExampleLayout = () => {
    const { closeModal } = React.useContext(DialogContext);

    return (
      <DialogLayout
        header="Simple header"
        footer={
          <>
            <Button onClick={closeModal}>Done Reading</Button>
            <ButtonTransparent color="neutral" onClick={closeModal}>
              Finish Later
            </ButtonTransparent>
          </>
        }
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry\' s standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </DialogLayout>
    );
  };

  return (
    <Dialog {...props} content={<DialogExampleLayout />}>
      <ButtonOutline>Open Dialog</ButtonOutline>
    </Dialog>
  );
}
```

## Controlled

`Dialog` can be used in a "controlled" manner by specifying the `isOpen` property. An `onClose` callback should also be specified so that clicking the dialog's backdrop or calling the `DialogContext.closeModal` method will work as expected.

```tsx
export function Controlled(props: DialogProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Dialog
        {...props}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        content={
          <DialogLayout
            header="Simple header"
            footer={
              <>
                <Button onClick={() => setIsOpen(false)}>Done Reading</Button>
                <ButtonTransparent
                  color="neutral"
                  onClick={() => setIsOpen(false)}
                >
                  Finish Later
                </ButtonTransparent>
              </>
            }
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry\' s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </DialogLayout>
        }
      />
      <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
    </>
  );
}
```

## Hook: useDialog

`Dialog` is also offered as a React Hook via `useDialog`. It returns the `open` callback and rendered dialog.

```tsx
export function UseDialog(props: DialogProps) {
  const { dialog, setOpen } = useDialog({
    ...props,
    content: 'My Neat Dialog',
  });

  return (
    <>
      {dialog}
      <ButtonOutline onClick={() => setOpen(true)}>Open Dialog</ButtonOutline>
    </>
  );
}

export function WithCheckbox() {
  return (
    <Dialog
      content={
        <DialogLayout footer="Footer" header="Header">
          The top line & bottom shadow should not be there.
          <Checkbox checked />
        </DialogLayout>
      }
    >
      <ButtonOutline>Open Dialog</ButtonOutline>
    </Dialog>
  );
}
```

## onAfterClose and onAfterOpen function

onAfterClose: this function will be called after the `Dialog` is closed
onAfterOpne: this function will be called after the `Dialog` is open

```tsx
export function AnimationCallbacks(props: DialogProps) {
  return (
    <Dialog
      {...props}
      content="Simple Content"
      onAfterClose={() => {
        alert('Close');
      }}
      onAfterOpen={() => {
        alert('Open');
      }}
    >
      <ButtonOutline>Open Dialog</ButtonOutline>
    </Dialog>
  );
}
```

## Terminology

`Dialogs` are assembled of two pieces: an overlay and a surface. The `Backdrop` component is the semi-opaque full-screen overlay which signals that the the rest of the application is inaccessible. The `Surface` component sits on top of the overlay and renders the relevant content.

The most common pattern for a `Dialog` is the [`Confirm`](/components/dialogs/confirm) pattern.

### Backdrop

This provides the backdrop behind dialogs.

### Surface

`Surface` provides the container that contains the content.

## Width & minHeight

All variants of Dialog allow you to specify `width` - it can be specified as `small`, `medium`, & `large`.

By default, `width` defaults to `medium` so that Dialog Surface will conform to the width of its content. At the same time, `maxWidth` constrains the Dialog surface's width to be no larger than the specified value.

Specify a `minHeight` to prevent a `Dialog` from getting any shorter than the specified value.

```tsx
export function Height(props: DialogProps) {
  const { closeModal } = React.useContext(DialogContext);

  return (
    <Dialog
      {...props}
      height="1000rem"
      content={
        <DialogLayout
          header="Simple header"
          footer={
            <>
              <Button onClick={closeModal}>Done Reading</Button>
              <ButtonTransparent color="neutral" onClick={closeModal}>
                Finish Later
              </ButtonTransparent>
            </>
          }
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry\' s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </DialogLayout>
      }
    >
      <ButtonOutline>Open Dialog</ButtonOutline>
    </Dialog>
  );
}
```

## Placement

Determines how surface is positioned in the the viewport.

- `center` (default) - surface is centered horizontally and vertically above mobile breakpoint.
  - _mobile_: positioned at top of window and covers entire width.
  - _width_: defaults to 100% in mobile breakpoint and 37.5rem above that unless otherwise specified
  - _height_: fits content unless it's explicitly specified with `minHeight` prop
- `cover` - positioned to cover nearly the entire window.
  - _mobile & tablet_: cover the entire window.

```tsx
export function PlacementCover(props: DialogProps) {
  const { closeModal } = React.useContext(DialogContext);

  return (
    <Dialog
      {...props}
      placement="cover"
      content={
        <DialogLayout
          header="Simple header"
          footer={
            <>
              <Button onClick={closeModal}>Done Reading</Button>
              <ButtonTransparent color="neutral" onClick={closeModal}>
                Finish Later
              </ButtonTransparent>
            </>
          }
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry\' s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </DialogLayout>
      }
    >
      <ButtonOutline>Open Dialog</ButtonOutline>
    </Dialog>
  );
}
```

- `top` - vertically positioned near the top of edge of the window, horizontally centered.
  - _mobile_: identical to `default` placement
  - _height_: grows to fit content. Total height will keep surface a small amount from top and bottom of viewport
  - _width_: default `medium` above mobile breakpoint

```tsx
export function PlacementTop(props: DialogProps) {
  const { closeModal } = React.useContext(DialogContext);

  return (
    <Dialog
      {...props}
      placement="top"
      content={
        <DialogLayout
          header="Simple header"
          footer={
            <>
              <Button onClick={closeModal}>Done Reading</Button>
              <ButtonTransparent color="neutral" onClick={closeModal}>
                Finish Later
              </ButtonTransparent>
            </>
          }
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry\' s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </DialogLayout>
      }
    >
      <ButtonOutline>Open Dialog</ButtonOutline>
    </Dialog>
  );
}
```

## DialogContext

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

`DialogContext` is a [React Context](https://reactjs.org/docs/context.html) that provides
access to the `closeModal` function, which allows you to close the Dialog or Popover.

## Scroll Lock

A key part of dialog usability is the scroll lock, which disables scrolling on any part of the page except within the dialog.
When the `Dialog` component renders, it registers its portal element to both the `ScrollLockContext` and `FocusTrapContext`
in `ComponentsProvider`, which manage competing scroll locks and focus traps from other components.

In rare cases, such as nesting a popover from another library inside a `Dialog`, you may need to temporarily disable these behaviors:

```tsx
import { ScrollLockContext } from '@looker/components-providers';
import { useContext } from 'react';

const { activeTrapRef, disableCurrentTrap, enableCurrentTrap } =
  useContext(ScrollLockContext);

function toggleScrollLock() {
  if (activeTrapRef && activeTrapRef.current) {
    disableCurrentTrap();
  } else {
    enableCurrentTrap();
  }
}
```
