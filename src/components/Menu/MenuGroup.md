`MenuGroup` is a way to group together similar collections of `MenuItem`s.

It supports an optional `label` prop to place a heading above the `MenuItem`s. When placed within a scrolling container the label will stick to the top edge while the MenuGroup is visible. Look at the "Menu + Drawer" example above and try scrolling.

`labelProps` and `labelStyles` can be used to apply styling to the label.

```js
import { Menu } from './Menu'
import { MenuGroup } from './MenuGroup'
import { MenuItem } from './MenuItem'
;<Menu>
  <MenuGroup>
    <MenuItem icon="LogoRings">Looker</MenuItem>
    <MenuItem icon="Validate">Validate</MenuItem>
    <MenuItem icon="ChartPie">Pizza!</MenuItem>
  </MenuGroup>
  <MenuGroup label="Cheeses">
    <MenuItem icon="FavoriteOutline">Cheddar</MenuItem>
    <MenuItem icon="FavoriteOutline">Mozerella</MenuItem>
    <MenuItem icon="FavoriteOutline">Swiss</MenuItem>
  </MenuGroup>
  <MenuGroup label="Meats">
    <MenuItem icon="FavoriteOutline">Sausage</MenuItem>
    <MenuItem icon="FavoriteOutline">Pepperoni</MenuItem>
    <MenuItem icon="FavoriteOutline">Salami</MenuItem>
  </MenuGroup>
  <MenuGroup label="Vegetables">
    <MenuItem icon="FavoriteOutline">Onion</MenuItem>
    <MenuItem icon="FavoriteOutline">Mushroom</MenuItem>
    <MenuItem icon="FavoriteOutline">Peppers</MenuItem>
  </MenuGroup>
</Menu>
```

Real world `MenuGroup` example for how it might be used in helltool.

```js
import { Box } from '../Box'
import { Menu } from './Menu'
import { MenuGroup } from './MenuGroup'
import { MenuItem } from './MenuItem'
import { ToggleSwitch } from '../Form'
;<Box>
<Menu compact>
  <MenuGroup>
    <MenuItem detail={<ToggleSwitch />}>Developer Mode</MenuItem>
  </MenuGroup>
  <MenuGroup>
    <MenuItem>SQL Runner</MenuItem>
    <MenuItem>Content Validator</MenuItem>
    <MenuItem>Manage LookML Projects</MenuItem>
  </MenuGroup>
  <MenuGroup>
    <MenuItem>apps</MenuItem>
    <MenuItem>apps-config</MenuItem>
    <MenuItem>marketing</MenuItem>
     <MenuItem>marketing-config</MenuItem>
      <MenuItem>events</MenuItem>
  </MenuGroup>
</Menu>

<Menu compact mt="xxlarge">
  <MenuGroup label="Application GA360">
    <MenuItem>Ga Sessions</MenuItem>
  </MenuGroup>
  <MenuGroup label="Auth">
    <MenuItem>Audit</MenuItem>
    <MenuItem>User</MenuItem>
  </MenuGroup>

    <MenuGroup label="Bq Pinger">
    <MenuItem>Dashboard First Run Render</MenuItem>
    <MenuItem>EC2 Restarts</MenuItem>
    <MenuItem>GA Sessions</MenuItem>
     <MenuItem>Looker app restarts (hosted)</MenuItem>
      <MenuItem>New Relic Monitoring</MenuItem>
  </MenuGroup>
</Menu>
</Box>
```
