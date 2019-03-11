`MenuLink` is an `HTMLAnchorElement` that supports all of the `BoxProps` properties its purpose to link to different pages from within a `Menu`, typically used building navigation from drop down menus.

### Example
The `MenuLink` components acts the same as `MenuItem` except that it also accepts an `href` prop to route to another page when clicked. Use the `current` prop to indicate the current menu item, optionally use the `currentMarker` prop to add an additional border marker to the current item.

```js
<Menu>
  <MenuGroup>
    <MenuLink href="/">Home</MenuLink>
    <MenuLink href="/browse">Browse (current)</MenuLink>
    <MenuLink href="/favorites">Favorites</MenuLink>
  </MenuGroup>
  <MenuGroup>
    <MenuLink href="/Spaces" current currentMarker icon="Pin">
      Spaces (current with marker)
    </MenuLink>
    <MenuLink href="/dashboards" icon="Dashboard" detail="Is often orange">
      Dashboards
    </MenuLink>
    <MenuLink href="/popular "icon="Popular">Popular</MenuLink>
  </MenuGroup>
</Menu>
```
