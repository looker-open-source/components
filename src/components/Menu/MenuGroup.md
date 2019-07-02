`MenuGroup` is a way to group together similar collections of `MenuItem`s.

It supports an optional `label` prop to place a heading above the `MenuItem`s. When placed within a scrolling container the label will stick to the top edge while the MenuGroup is visible. Look at the "Menu + Drawer" example above and try scrolling.

`labelProps` and `labelStyles` can be used to apply styling to the label.

```js
import { Menu } from './Menu'
import { MenuGroup } from './MenuGroup'
import { MenuItem } from './MenuItem'
;<Menu groupDividers={false}>
  <MenuGroup>
    <MenuItem icon="LogoRings">Looker</MenuItem>
    <MenuItem icon="Validate">Validate</MenuItem>
    <MenuItem icon="ChartPie">Pizza!</MenuItem>
  </MenuGroup>
  <MenuGroup label="Cheeses">
    <MenuItem icon="FavoriteOutline">Cheddar</MenuItem>
    <MenuItem icon="FavoriteOutline">Cheddar</MenuItem>
    <MenuItem icon="FavoriteOutline">Swiss</MenuItem>
  </MenuGroup>
  <MenuGroup label="Cheeses">
    <MenuItem icon="FavoriteOutline">Cheddar</MenuItem>
    <MenuItem icon="FavoriteOutline">Cheddar</MenuItem>
    <MenuItem icon="FavoriteOutline">Swiss</MenuItem>
  </MenuGroup>
</Menu>
```

You can disable the shadows for `MenuGroup` `label`'s by setting the  `groupLabelShadow` prop to false either at the `Menu` level or individually on each `MenuGroup`

```js
import { Menu } from './Menu'
import { MenuGroup } from './MenuGroup'
import { MenuItem } from './MenuItem'
;<Menu groupLabelShadow={false}>
  <MenuGroup>
    <MenuItem icon="LogoRings">Looker</MenuItem>
    <MenuItem icon="Validate">Validate</MenuItem>
    <MenuItem icon="ChartPie">Pizza!</MenuItem>
  </MenuGroup>
  <MenuGroup label="Cheeses">
    <MenuItem icon="FavoriteOutline">Cheddar</MenuItem>
    <MenuItem icon="FavoriteOutline">Cheddar</MenuItem>
    <MenuItem icon="FavoriteOutline">Swiss</MenuItem>
  </MenuGroup>
  <MenuGroup label="Cheeses">
    <MenuItem icon="FavoriteOutline">Cheddar</MenuItem>
    <MenuItem icon="FavoriteOutline">Cheddar</MenuItem>
    <MenuItem icon="FavoriteOutline">Swiss</MenuItem>
  </MenuGroup>
</Menu>
