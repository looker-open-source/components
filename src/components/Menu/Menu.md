```js noeditor
const StatusAndResources = require('../../../styleguide_components/StatusAndResources')
  .StatusAndResources
;<StatusAndResources
  status="experimental"
  figmaURL="https://www.figma.com/file/VyHO1Hv1XaW1v3lE9I4PVT/Menu"
  githubURL="https://github.com/looker/lens/blob/master/src/components/Menu/Menu.tsx"
  feedbackTitle="Menu Component Feedback"
/>
```

`Menu` displays a list of choices.

#### Focus & Keyboard Controls

When a menu is focused the `up` and `down` arrow keys will move focus through the menu items within the menu.

Set the `focusOnMount` prop to get the `Menu` to automatically have focus applied on compoment mount. Generally when loading with a ModalContext this prop should be set.

```js
<Menu>
  <MenuItem onClick={() => alert('Hello world!')}>Gouda</MenuItem>
  <MenuItem>Cheedar</MenuItem>
  <MenuItem>Swiss</MenuItem>
</Menu>
```

### Icon Support

```js
<Menu>
  <MenuItem icon="LogoRings">Looker</MenuItem>
  <MenuItem icon="Validate">Validate</MenuItem>
  <MenuItem icon="ChartPie">Pizza</MenuItem>
</Menu>
```

### Compose Menus

Menu can be easily composed with `Popover`, `Drawer` and `Dialog`

```js
<Popover
  content={
    <Menu focusOnMount>
      <MenuItem icon="FavoriteOutline">Gouda</MenuItem>
      <MenuItem icon="FavoriteOutline" detail="Is often orange">
        Cheddar
      </MenuItem>
      <MenuItem icon="FavoriteOutline">Swiss</MenuItem>
    </Menu>
  }
>
  <Button variant="outline" iconAfter="ArrowDropDown">
    Popover + Menu: Cheese Selector
  </Button>
</Popover>
```

```js
const MenuGroupDemo = require('../../../styleguide_components/MenuDemo')
  .MenuGroupDemo
;<Popover content={<MenuGroupDemo />}>
  <Button variant="outline" iconAfter="ArrowDropDown">
    Menu Example...
  </Button>
</Popover>
```

```js
const menuGroup = (
  <MenuGroup label="Spacing">
    <MenuItem>Scroll Filler A</MenuItem>
    <MenuItem>Scroll Filler B</MenuItem>
    <MenuItem>Scroll Filler C</MenuItem>
    <MenuItem>Scroll Filler D</MenuItem>
    <MenuItem>Scroll Filler E</MenuItem>
    <MenuItem>Scroll Filler F</MenuItem>
  </MenuGroup>
)
;<Drawer
  content={
    <>
      <ModalHeader>Menu Demo</ModalHeader>
      <ModalContent innerProps={{ p: 'none' }}>
        <Menu focusOnMount>
          <MenuGroup>
            <MenuItem icon="LogoRings">Looker</MenuItem>
            <MenuItem icon="Validate">Validate</MenuItem>
            <MenuItem icon="ChartPie">Pizza!</MenuItem>
          </MenuGroup>
          {menuGroup}
          {menuGroup}
          {menuGroup}
          {menuGroup}
          {menuGroup}
          <MenuGroup>
            <MenuItem icon="Beaker">Scary Stuff</MenuItem>
          </MenuGroup>
        </Menu>
      </ModalContent>
    </>
  }
>
  <Button variant="outline" iconAfter="ArrowDropDown">
    Drawer + Menu...
  </Button>
</Drawer>
```
