# Drawer

Drawer is a specialized form of `Dialog` that is attached to the edge of the viewport.

# Standard Use

```tsx
function Basic() {
  return (
    <Drawer content="Something in the drawer">
      <Button>Open Drawer</Button>
    </Drawer>
  );
}
```

## onAfterClose and onAfterOpen function

onAfterClose: this function will be called after the `Drawer` is closed

onAfterOpen: this function will be called after the `Drawer` is open

```tsx
function AnimationCallbacks() {
  return (
    <Drawer
      content="My neat drawer"
      onAfterClose={() => alert(`Close`)}
      onAfterOpen={() => alert(`Open`)}
    >
      <ButtonOutline>Open Drawer</ButtonOutline>
    </Drawer>
  );
}
```

# useDrawer

We provide a custom hook that returns the opener function and rendered drawer.

```tsx
function UseDrawer() {
  const { dialog, setOpen } = useDrawer({
    content: 'Drawer content',
  });

  return (
    <>
      {dialog}
      <ButtonOutline onClick={() => setOpen(true)}>Open Drawer</ButtonOutline>
    </>
  );
}
```

## Width

All variants of Drawer allow you to specify `width` - it can be specified as `xxsmall`, `xsmall`, `small`, `medium`, & `large`.

By default, `width` defaults to `small` so that Dialog Surface will conform to the width of its content.

```tsx
function Width() {
  return (
    <Drawer content="Something in the drawer" width="50rem">
      <Button>Open Drawer</Button>
    </Drawer>
  );
}
```

## Placement

Determines how surface is positioned in the the viewport.

- `right` (default) - surface is centered horizontally and vertically above mobile breakpoint.
  - _mobile_: positioned at top of window and covers entire width.
  - _width_: defaults to 100% in mobile breakpoint and 37.5rem above that unless otherwise specified
  - _height_: fits content unless it's explicitly specified with `minHeight` prop
- `left` - positioned to cover nearly the entire window.
  - _mobile & tablet_: cover the entire window.

```tsx
function Placement() {
  const options = [
    {
      label: 'Left',
      value: 'left',
    },
    {
      detail: 'default',
      label: 'Right',
      value: 'right',
    },
  ];
  const [placement, setPlacement] = useState<DrawerPlacements>('right');

  return (
    <Space>
      <Drawer placement={placement} content="Drawer content">
        <ButtonOutline>Open Drawer</ButtonOutline>
      </Drawer>
      <FieldRadioGroup
        label="Placement"
        inputsInline
        options={options}
        value={placement}
        onChange={drawerPlacement =>
          setPlacement(drawerPlacement as DrawerPlacements)
        }
      />
    </Space>
  );
}
```
