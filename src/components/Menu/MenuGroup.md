`MenuGroup` is a way to group together similar collections of `MenuItem`s.

It supports an optional `label` prop to place a heading above the `MenuItem`s. When placed within a scrolling container the label will stick to the top edge while the MenuGroup is visible. Look at the "Menu + Drawer" example above and try scrolling.

`labelProps` and `labelStyles` can be used to apply styling to the label.

The `canActivate` prop can be used to display `MenuItems` with a check list style. `MenuItem` `icon` prop will be ignored for any items within MenuGroup with canActivate assigned. Any items that should appear active simply need to `active` prop.

```js
import { Menu } from './Menu'
import { MenuGroup } from './MenuGroup'
import { MenuItem } from './MenuItem'

;<Menu bg="white">
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
