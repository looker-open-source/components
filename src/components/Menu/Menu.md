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

Use `Menu` to let people navigate and get around to things...

```js
const MenuGroupDemo = require('../../../styleguide_components/MenuDemo')
  .MenuGroupDemo
;<Popover content={<MenuGroupDemo />}>
  <Button variant="outline">Menu Example</Button>
</Popover>
```

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

### Compose with Delight

Popover, Drawer and Dialog

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
;<Drawer
  content={
    <>
      <ModalHeader>Menu Demo</ModalHeader>
      <ModalContent>
        <MenuGroupDemo />
      </ModalContent>
    </>
  }
>
  <Button variant="outline" iconAfter="ArrowDropDown">
    Drawer + Menu...
  </Button>
</Drawer>
```
