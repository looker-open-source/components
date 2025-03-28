# MenuItem

`MenuItem` is an list item containing a button for triggering actions from with in a [`Menu`](menu) or [`MenuList`](menulist).

For accessibility reasons, if you want your `MenuItem` to link somewhere then you can use the `itemRole` prop to identify it as a link.
**Note:** If using the props `itemRole` don't use the prop `disabled` as it is bad-form and defeats the purpose.

An icon can optionally be assigned to each item via the `icon` property.

**Note:** `itemRole="link"` and `disabled` cannot be combined (use `itemRole="button" if you need to offer a disabled`MenuItem`)

```tsx
function Basic(props: MenuItemProps) {
  return <MenuItem {...props}>Menu Item</MenuItem>;
}
```

## Detail & Description

Use the `detail` and/or `description` prop to provide extra explanatory information on a given item.

function Detail() {
return <MenuItem detail={'A Detail'}>Menu Item</MenuItem>;
}

```tsx

```

```tsx
function Description() {
  return <MenuItem description={'A Description'}>Menu Item</MenuItem>;
}
```

## Tooltip

To implement a tooltip on a `MenuItem`, wrap the `MenuItem` in a `Tooltip` element.

```tsx
function WithTooltip() {
  return (
    <MenuList>
      <Tooltip content="It is gouda!" placement="left">
        <MenuItem>Gouda</MenuItem>
      </Tooltip>
    </MenuList>
  );
}
```

## Icon

```tsx
function Icon() {
  return <MenuItem icon={<MaterialIcons.Person />}>Menu Item</MenuItem>;
}
```

## Artwork

```tsx
function Artwork() {
  return (
    <MenuItem
      icon={
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
            fill="#7FFFD4"
          />
        </svg>
      }
    >
      Artwork
    </MenuItem>
  );
}
```

## Disabled

Use the `disabled` prop to indicate an option that is not currently available.

```tsx
function Disabled() {
  return <MenuItem disabled={true}>Menu Item</MenuItem>;
}
```

## Selected

Use the `selected` prop to indicate an option is selected.

```tsx
function Selected() {
  return <MenuItem selected={true}>Menu Item</MenuItem>;
}
```

## Link

Use the `itemRole` and `href` props to create an option that is a link.

```tsx
function Link() {
  return (
    <MenuItem itemRole="link" href="https://google.com" target="_blank">
      MenuItem that links to Google
    </MenuItem>
  );
}
```
