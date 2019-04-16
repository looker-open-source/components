`MenuItem` is an `HTMLButtonElement` that supports all of the `BoxProps` properties. Use this for triggering actions from with in a `Menu` or `Drawer`, for example opening a modal.

For accessibility reasons, if you want your `MenuItem` to link somewhere then you can use the `itemRole` prop to identify it as a link.

An icon can be optionally be assigned to each item via the `icon` property.

```js
import { Link } from '../Link'
import { MenuItem } from './MenuItem'
;<>
  <MenuItem>Home</MenuItem>
  <MenuItem icon="Home">Home</MenuItem>
  <Link href="https://google.com">
    <MenuItem itemRole="link" target="_blank" icon="Public">
      Away
    </MenuItem>
  </Link>
</>
```

### Detail Text

Use the `detail` prop to provide explanatory detail to a given item.

```js
import { MenuItem } from './MenuItem'
;<>
  <MenuItem detail="Get regular updates">Schedule</MenuItem>
  <MenuItem icon="Beaker" detail="Try the newest toys!">
    Labs
  </MenuItem>
</>
```

### Active & MenuGroup canActivate

Use the `active` prop to indicate the selected item(s).

Note: This property behaves slightly differently depending on the context of the `MenuGroup` it is contained within. If the `MenuGroup` has the `canActivate` prop it will reserve space for the checkmark next to `active` items and any `icon` assignments on the items will be ignored.

```js
import { Box } from '../Box'
import { IconButton } from '../Button'
import { Tooltip } from '../Overlay'
import { Menu } from './Menu'
import { MenuGroup } from './MenuGroup'
import { MenuItem } from './MenuItem'
;<Menu>
  <MenuGroup
    label="canActivate=false, no icons"
    labelProps={{ transform: 'none' }}
  >
    <MenuItem active>Gouda</MenuItem>
    <MenuItem
      detail={
        <Tooltip content="More things you should know...">
          {(eventHandlers, ref) => (
            <IconButton
              {...eventHandlers}
              icon="CircleInfo"
              label="Information"
              innerRef={ref}
              name="Home"
            />
          )}
        </Tooltip>
      }
    >
      Cheddar
    </MenuItem>
    <MenuItem>Swiss</MenuItem>
  </MenuGroup>
  <MenuGroup
    label="canActivate=false, icons"
    labelProps={{ transform: 'none', bg: 'transparent' }}
  >
    <MenuItem icon="Favorite" active>
      Gouda
    </MenuItem>
    <MenuItem icon="Favorite" detail="Is often orange">
      Cheddar
    </MenuItem>
    <MenuItem icon="Favorite">Swiss</MenuItem>
  </MenuGroup>
  <MenuGroup
    canActivate
    label="canActivate=true, icon ignored"
    labelProps={{ transform: 'none', bg: 'transparent' }}
  >
    <MenuItem active>Gouda</MenuItem>
    <MenuItem icon="Favorite" detail="Is often orange">
      Cheddar
    </MenuItem>
    <MenuItem>Swiss</MenuItem>
  </MenuGroup>
</Menu>
```

### Customizing a menu

`Menu` accepts a `customizationProps` prop which allows for flexibly styling of the item. Below is an example of customizing the menu's display. Below is an example of all the options you can customize.

```js
import { Link } from '../Link'
import { Menu } from './Menu'
import { MenuItem } from './MenuItem'
import { MenuGroup } from './MenuGroup'
import { palette } from '../../style'

const menuCustomizations = {
  bg: palette.purple500,
  color: palette.purple200,
  icon: {
    color: palette.purple300,
    size: 40,
  },
  marker: {
    color: palette.purple300,
    size: 10,
  },
  hover: {
    bg: palette.purple700,
    color: palette.white,
    icon: {
      color: palette.purple100,
    },
  },
  current: {
    bg: palette.purple200,
    color: palette.purple900,
    icon: {
      color: palette.purple500,
    },
  },
  activated: {
    color: palette.blue500,
  },
}
;<Menu customizationProps={menuCustomizations}>
  <MenuGroup>
    <Link href="https://en.wikipedia.org/wiki/Gouda_cheese">
      <MenuItem itemRole="link" icon="Home">
        Gouda
      </MenuItem>
    </Link>
    <Link href="https://en.wikipedia.org/wiki/Cheddar_cheese">
      <MenuItem
        itemRole="link"
        icon="FavoriteOutline"
        current
        currentMarker
        detail="Is often orange"
      >
        Cheddar
      </MenuItem>
    </Link>
    <Link href="https://en.wikipedia.org/wiki/Swiss_cheese`">
      <MenuItem itemRole="link" icon="Dashboard">
        Swiss
      </MenuItem>
    </Link>
  </MenuGroup>
</Menu>
```

### Digital Marketing Style Menu

It's possible to selectively customize only select pieces of the menu as well as in this example below.

```js
import { Menu } from './Menu'
import { MenuItem } from './MenuItem'
import { MenuGroup } from './MenuGroup'
import { palette } from '../../style'

const menuCustomizations = {
  bg: palette.charcoal100,
  icon: {
    color: palette.charcoal800,
  },
  hover: {
    icon: {
      color: palette.purple500,
    },
  },
  current: {
    bg: palette.charcoal200,
    icon: {
      color: palette.purple500,
    },
  },
}

;<Menu customizationProps={menuCustomizations}>
  <MenuGroup label="GOOGLE ADS" labelProps={{ bg: palette.charcoal100 }}>
    <MenuItem icon="Home">Gouda</MenuItem>
    <MenuItem icon="FavoriteOutline" current detail="Is often orange">
      Cheddar
    </MenuItem>
    <MenuItem icon="Dashboard">Swiss</MenuItem>
  </MenuGroup>
</Menu>
```
