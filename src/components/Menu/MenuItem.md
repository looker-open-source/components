`MenuItem` is an `HTMLAnchorElement` that supports all of the `BoxProps` properties.

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
    labelProps={{ transform: 'none', bg: 'transparent' }}
  >
    <MenuItem active>Gouda</MenuItem>
    <MenuItem detail="Is often orange">Cheddar</MenuItem>
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

### Current Item

Use the `current` prop to indicate the current menu item, optionally use the `currentMarker` prop to add an additional border marker to the current item.


```js
<Menu>
  <MenuGroup>
    <MenuItem>Home</MenuItem>
    <MenuItem current>Browse (current)</MenuItem>
    <MenuItem>Favorites</MenuItem>
  </MenuGroup>
  <MenuGroup>
    <MenuItem current currentMarker icon="Favorite">
      Spaces (current with marker)
    </MenuItem>
    <MenuItem icon="Favorite" detail="Is often orange">
      Dashboards
    </MenuItem>
    <MenuItem icon="Favorite">Popular</MenuItem>
  </MenuGroup>
</Menu>
```




### Customized menu

`MenuItem` accepts a `customizableProp` prop which allows for flexibly styling of the item. Below is an example of customizing the menu's display.

```js
const palette = require('../../style').palette

const menuCustomizations =
  {
    bg: palette.purple500,
    color: palette.purple200,
    icon: {
      color: palette.purple300,
      size: 20
    },
    marker: {
      color: palette.purple300,
      size: 10
    },
    hover: {
      bg: palette.purple700,
      color: palette.white,
      icon: {
        color: palette.purple100,
      }
    },
    current: {
      bg: palette.purple200,
      color: palette.purple900,
      icon: {
        color: palette.purple500,
      }
    },
    activated: {
      color: palette.blue500
    },

  };

  <MenuGroup>
    <MenuItem icon="Home"  customizableProps={menuCustomizations}>
        Gouda
      </MenuItem>
      <MenuItem icon="FavoriteOutline" current  currentMarker  detail="Is often orange" customizableProps={menuCustomizations}>
        Cheddar
      </MenuItem>
    <MenuItem icon="Dashboard" customizableProps={menuCustomizations}>Swiss</MenuItem>
  </MenuGroup>

```

### Digital Marketing Menu
```js
const palette = require('../../style').palette

const menuCustomizations =
    {
    bg: palette.charcoal100,
    color: palette.charcoal800,
    icon: {
      color: palette.charcoal800,
      size: 20
    },
    hover: {
      bg: palette.charcoal100,
      color: palette.charcoal900,
      icon: {
        color: palette.purple500,
      }
    },
    current: {
      bg: palette.charcoal200,
      color: palette.charcoal900,
      icon: {
        color: palette.purple500,
      }
    },
    activated: {
      color: palette.blue500
    },
  };

  <MenuGroup label="GOOGLE ADS">
    <MenuItem icon="Home"  customizableProps={menuCustomizations}>
        Gouda
      </MenuItem>
      <MenuItem icon="FavoriteOutline" current detail="Is often orange" customizableProps={menuCustomizations}>
        Cheddar
      </MenuItem>
    <MenuItem icon="Dashboard" customizableProps={menuCustomizations}>Swiss</MenuItem>
  </MenuGroup>

```
