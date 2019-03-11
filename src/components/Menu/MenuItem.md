`MenuItem` is an `HTMLButtonElement` that supports all of the `BoxProps` properties. Use this for triggering actions from with in a `Menu` or `Drawer`, for example opening a modal. Use the `MenuLink` component is you want to route the user to a new page.

An icon can be optionally be assigned to each item via the `icon` property.

```js
<MenuItem>Home</MenuItem>
<MenuItem icon="Home">Home</MenuItem>
<MenuItem href="https://google.com" target="_blank" icon="Public">Away</MenuItem>
```

### Detail Text

Use the `detail` prop to provide explanatory detail to a given item.

```js
<MenuItem detail="Get regular updates">Schedule</MenuItem>
<MenuItem icon="Beaker" detail="Try the newest toys!">
  Labs
</MenuItem>
```

### Active & MenuGroup canActivate

Use the `active` prop to indicate the selected item(s).

Note: This property behaves slightly differently depending on the context of the `MenuGroup` it is contained within. If the `MenuGroup` has the `canActivate` prop it will reserve space for the checkmark next to `active` items and any `icon` assignments on the items will be ignored.

```js
<Menu>
  <MenuGroup
    label="canActivate=false, no icons"
    labelProps={{ transform: 'none' }}
  >
    <MenuItem active>Gouda</MenuItem>
    <MenuItem
      detail={
        <Tooltip content="More things you should know..." open>
          <Box>
            <Icon name="CircleInfo" />
          </Box>
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
const palette = require('../../style').palette

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
    <MenuLink icon="Home">Gouda</MenuLink>
    <MenuLink
      icon="FavoriteOutline"
      current
      currentMarker
      detail="Is often orange"
    >
      Cheddar
    </MenuLink>
    <MenuLink icon="Dashboard">Swiss</MenuLink>
  </MenuGroup>
</Menu>
```

### Digital Marketing Style Menu

It's possible to selectively customize only select pieces of the menu as well as in this example below.

```js
const palette = require('../../style').palette

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
