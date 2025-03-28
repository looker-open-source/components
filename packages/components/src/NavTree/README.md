# NavTree

`NavTree`, along with its companion component `NavTreeItem`, renders a collapsible list of items. However, unlike standard `ul` and `li` elements, `NavTree` and `NavTreeItem` come prebuilt with a number of props to simplify item style and behavior customization.

```tsx
function Basic(props: NavTreeProps) {
  return (
    <NavTree
      {...props}
      defaultOpen
      icon={<MaterialIcons.Folder />}
      label="Cheeses"
    >
      <NavTreeItem>Cheddar</NavTreeItem>
    </NavTree>
  );
}
```

## As Links

A `NavTree` component will behave as a link by providing `href` and `target` props.

```tsx
function Link() {
  return (
    <NavTree
      defaultOpen
      label="Click me to go to Google"
      icon={<MaterialIcons.Folder />}
      href="https://google.com"
      target="_blank"
      indicatorLabel="Google Link Indicator"
    >
      <NavTreeItem href="https://google.com" target="_blank" parentIcon>
        Some Item
      </NavTreeItem>{' '}
    </NavTree>
  );
}
```

## Nested

A `NavTree` component can also be nested within another `NavTree`.

```tsx
function ParentIcon() {
  return (
    <>
      <NavTree
        defaultOpen
        label="Parent Tree with Icon"
        icon={<MaterialIcons.Folder />}
      >
        <NavTreeItem parentIcon>Cheddar</NavTreeItem>
        <NavTreeItem parentIcon>Cheddar 2</NavTreeItem>
        <NavTreeItem parentIcon>Cheddar 3</NavTreeItem>
      </NavTree>
      <NavTree
        defaultOpen
        label="Grandparent Tree with Icon"
        icon={<MaterialIcons.Folder />}
      >
        <NavTree defaultOpen label="Parent Tree with No Icon">
          <NavTreeItem>Swiss</NavTreeItem>
          <NavTreeItem>Swiss 2</NavTreeItem>
          <NavTreeItem>Swiss 3</NavTreeItem>
        </NavTree>
      </NavTree>
    </>
  );
}
```
