# Menu

`Menu` is a specific implementation of [`Popover`](popover) that accepts an array
(or React Fragment) of [`MenuItem`](menuitem)s in the content prop.

**Note:** The direct child of `Menu` should be able to accept the following props. TypeScript currently doesn't support the enforcement of this.

- `onClick` for toggling the menu
- `ref` for popover placement
- aria attributes for accessibility

```tsx
function Basic(props: MenuProps) {
  const {
    content = (
      <>
        <MenuItem icon={<MaterialIcons.Favorite />}>Gouda</MenuItem>
        <MenuItem icon={<MaterialIcons.Favorite />}>Swiss</MenuItem>
      </>
    ),
    ...rest
  } = props;

  return (
    <Menu content={content} {...rest}>
      <Button>Cheese</Button>
    </Menu>
  );
}
```

Use the `density` prop to set the size and spacing of your `Menu`. As `density` decreases, so does the height and spacing of child `MenuItem`s.

`density` values range from -3 to 1.

```tsx
function Density() {
  return (
    <Menu
      content={
        <>
          <MenuItem icon={<MaterialIcons.Favorite />}>Gouda</MenuItem>
          <MenuItem icon={<MaterialIcons.Favorite />}>Swiss</MenuItem>
        </>
      }
      density={-3}
    >
      <Button>Cheese</Button>
    </Menu>
  );
}
```

## Tooltip

To add a tooltip to the menu button, nest a `Tooltip` inside `Menu`.

```tsx
function WithTooltip() {
  return (
    <Menu
      content={
        <>
          <MenuItem icon={<MaterialIcons.Favorite />}>Gouda</MenuItem>
          <MenuItem icon={<MaterialIcons.Favorite />}>Swiss</MenuItem>
        </>
      }
    >
      <Tooltip placement="top" content="Select your favorite kind">
        <Button>Cheese</Button>
      </Tooltip>
    </Menu>
  );
}
```

## Placement

Use the `placement` prop to position the overlay that contains the list.
The `pin` props allow you to enforce the placement to varying degrees.

```tsx
function Placement() {
  return (
    <Menu
      placement={'left'}
      content={
        <>
          <MenuItem icon={<MaterialIcons.Favorite />}>Gouda</MenuItem>
          <MenuItem icon={<MaterialIcons.Favorite />}>Swiss</MenuItem>
        </>
      }
    >
      <Button>Cheese</Button>
    </Menu>
  );
}
```

## Nested Menu

Add `nestedMenu` to a `MenuItem` to create a nested menu.

```tsx
function Nested() {
  return (
    <Menu
      content={
        <>
          <MenuItem
            nestedMenu={
              <>
                <MenuItem>Camembert</MenuItem>
                <MenuItem>Comté</MenuItem>
              </>
            }
          >
            French
          </MenuItem>
          <MenuItem
            nestedMenu={
              <>
                <MenuItem>Gouda</MenuItem>
                <MenuItem>Limburger</MenuItem>
              </>
            }
          >
            Dutch
          </MenuItem>
        </>
      }
    >
      <Button>Cheese</Button>
    </Menu>
  );
}
```

## Controlled Menu

Control the state of the menu with the React `useState` hook.

```tsx
function Controlled() {
  const [isOpen, setOpen] = useState(false);

  return (
    <Space>
      <Menu
        isOpen={isOpen}
        setOpen={setOpen}
        content={
          <>
            <MenuItem icon={<MaterialIcons.Email />}>Email</MenuItem>
            <MenuItem icon={<MaterialIcons.TableChart />}>Spreadsheet</MenuItem>
          </>
        }
      >
        <Button>Export</Button>
      </Menu>
      <Text>{isOpen ? 'Menu Open' : 'Menu Closed'}</Text>
    </Space>
  );
}
```

## Toggling the menu button on hover

```tsx
function Hover() {
  const hoverRef = useRef<HTMLDivElement>(null);
  return (
    <Card ref={hoverRef} p="u5">
      <Flex justifyContent="space-between">
        <Paragraph>Hovering in this card will show the menu button.</Paragraph>
        <Menu
          hoverDisclosureRef={hoverRef}
          content={
            <>
              <MenuItem>Edit item</MenuItem>
              <MenuItem>Create new sub-item</MenuItem>
            </>
          }
        >
          <IconButton icon={<MaterialIcons.MoreVert />} label="More Options" />
        </Menu>
      </Flex>
    </Card>
  );
}
```

## Adding icon placeholder space

If a `Menu` contains some number of `MenuItem`s with icons and some without, use the `iconGutter` prop to properly align all item labels with each other.

More specifically, when `iconGutter` is true on a `Menu`, all `MenuItem`s without `icon` prop values will allocate icon placeholder space.

```tsx
function IconPlaceholder() {
  return (
    <Space>
      <Menu
        content={
          <>
            <MenuItem icon={<MaterialIcons.DateRange />}>Calendar</MenuItem>
            <MenuItem>No icon</MenuItem>
            <MenuItem icon={<MaterialIcons.PivotTableChart />}>Pivot</MenuItem>
          </>
        }
      >
        <Button>No Icon Gutter</Button>
      </Menu>
      <Menu
        iconGutter
        content={
          <>
            <MenuItem icon={<MaterialIcons.DateRange />}>Calendar</MenuItem>
            <MenuItem>No icon</MenuItem>
            <MenuItem icon={<MaterialIcons.PivotTableChart />}>Pivot</MenuItem>
          </>
        }
      >
        <Button>Icon Gutter</Button>
      </Menu>
    </Space>
  );
}
```

## MenuHeading and MenuDivider

`MenuHeading` is typically used as a title for a group of `MenuItem`s. `MenuHeading` children must be of type string.

`MenuDivider` is a divider element used to separate groups of `MenuItem`s.

**Note:** As a convenience feature, `MenuDivider` will not render a divider if it is the first or last child of a `Menu`.

```tsx
function HeadingDivider() {
  return (
    <Menu
      content={
        <>
          <MenuHeading>Good Cheeses</MenuHeading>
          <MenuItem>Cheddar</MenuItem>
          <MenuItem>Swiss</MenuItem>
          <MenuItem>Brie</MenuItem>
          <MenuDivider></MenuDivider>
          <MenuHeading>Great Cheeses</MenuHeading>
          <MenuItem>Pepper Jack</MenuItem>
          <MenuItem>String Cheese</MenuItem>
        </>
      }
    >
      <Button>Menu with headings and dividers</Button>
    </Menu>
  );
}
```
