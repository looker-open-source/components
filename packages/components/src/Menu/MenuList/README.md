# MenuList

`MenuList` displays a list of choices.

## Focus & Keyboard Controls

When a `MenuList` is focused the `up` and `down` arrow keys will move focus through the menu items within the list.

```tsx
function Basic(props: MenuListProps) {
  return (
    <MenuList {...props}>
      <MenuItem onClick={() => alert('Hello world!')}>Gouda</MenuItem>
      <MenuItem>Cheddar</MenuItem>
      <MenuItem>Swiss</MenuItem>
    </MenuList>
  );
}
```

## Density

Use the `density` prop to set the size and spacing of your `MenuList`. As `density` decreases, so does the height and spacing of child `MenuItem`s.

`density` values range from -3 to 1.

```tsx
function Density() {
  return (
    <Space>
      <MenuList density={1}>
        <MenuHeading>Biggest MenuList</MenuHeading>
        <MenuItem icon={<MaterialIcons.Favorite />}>Gouda</MenuItem>
        <MenuItem icon={<MaterialIcons.Favorite />}>Swiss</MenuItem>
      </MenuList>
      <MenuList density={0}>
        <MenuHeading>Smaller MenuList</MenuHeading>
        <MenuItem icon={<MaterialIcons.Favorite />}>Gouda</MenuItem>
        <MenuItem icon={<MaterialIcons.Favorite />}>Swiss</MenuItem>
      </MenuList>
      <MenuList density={-1}>
        <MenuHeading>Smaller MenuList</MenuHeading>
        <MenuItem icon={<MaterialIcons.Favorite />}>Gouda</MenuItem>
        <MenuItem icon={<MaterialIcons.Favorite />}>Swiss</MenuItem>
      </MenuList>
      <MenuList density={-2}>
        <MenuHeading>Smaller MenuList</MenuHeading>
        <MenuItem icon={<MaterialIcons.Favorite />}>Gouda</MenuItem>
        <MenuItem icon={<MaterialIcons.Favorite />}>Swiss</MenuItem>
      </MenuList>
      <MenuList density={-3}>
        <MenuHeading>Smallest MenuList</MenuHeading>
        <MenuItem icon={<MaterialIcons.Favorite />}>Gouda</MenuItem>
        <MenuItem icon={<MaterialIcons.Favorite />}>Swiss</MenuItem>
      </MenuList>
    </Space>
  );
}
```

## Windowing

If a `MenuList` contains more than 100 children it will use windowing to display
only the visible items for performance reasons. Windowing uses the item height to calculate
positioning for natural scrolling behavior.

**Note:** A parent element of your `MenuList` should have an explicit height. If no explicit height is set, your `MenuList` will attempt to render all child items and not utilize the windowing logic.
