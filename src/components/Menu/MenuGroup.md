`MenuGroup` is a way to group together similar collections of `MenuItems`. It supports an optional `label` prop

```js
<Menu bg="white">
  <MenuGroup>
    <MenuItem icon="LogoRings">Looker</MenuItem>
    <MenuItem icon="Validate">Validate</MenuItem>
    <MenuItem icon="ChartPie">Pizza!</MenuItem>
  </MenuGroup>
  <MenuGroup label="Cheeses">
    <MenuItem icon="FavoriteOutline">Cheddar</MenuItem>
    <MenuItem icon="FavoriteOutline">Cheddar</MenuItem>
    <MenuItem icon="FavoriteOutline" active>
      Swiss
    </MenuItem>
  </MenuGroup>
  <MenuGroup label="Cheeses" canActivate>
    <MenuItem>Cheddar</MenuItem>
    <MenuItem>Cheddar</MenuItem>
    <MenuItem active>Swiss</MenuItem>
  </MenuGroup>
  <MenuGroup label="Cheeses">
    <MenuItem icon="FavoriteOutline">Cheddar</MenuItem>
    <MenuItem icon="FavoriteOutline">Cheddar</MenuItem>
    <MenuItem icon="FavoriteOutline">Swiss</MenuItem>
  </MenuGroup>
</Menu>
```
