```js noeditor
const StatusAndResources = require('../../../styleguide_components/StatusAndResources')
  .StatusAndResources
;<StatusAndResources
  status="stable"
  githubURL="https://github.com/looker/lens/blob/master/src/components/Overlay/MenuOverlay.tsx"
  feedbackTitle="Popover Component Feedback"
/>
```

### Menu Overlay

The `MenuOverlay` component is composed of an `Overlay` with a transparent backdrop. The placement of the backdrop is also customizable.

Try scrolling down so the two menu buttons are at the top of the screen. The backdrop is adjusted 50px from the top, so clicking the other menu button while the current menu overlay is still open will close the current menu and open the new menu overlay.

```js
const Menus = () => {
  const content = (
    <Menu minWidth="12rem">
      <MenuItem>Thing 1</MenuItem>
      <MenuItem detail="Some details...">Thing 2</MenuItem>
      <MenuItem>Thing 3</MenuItem>
    </Menu>
  )
  return (
    <Flex justifyContent="space-evenly">
      <MenuOverlay placement="bottom" backdropOffset={{ top: '50px' }} content={content}>
        {(onClick, ref) => <Button onClick={onClick} innerRef={ref}>Menu One</Button>}
      </MenuOverlay>
      <MenuOverlay placement="bottom" backdropOffset={{ top: '50px' }} content={content}>
        {(onClick, ref) => <Button onClick={onClick} innerRef={ref}>Menu Two</Button>}
      </MenuOverlay>
    </Flex>
  )
}

<Menus />
```
