```js noeditor
const StatusAndResources = require('../../../styleguide_components/StatusAndResources')
  .StatusAndResources
;<StatusAndResources
  status="stable"
  githubURL="https://github.com/looker/lens/blob/master/src/components/Overlays/MenuOverlay.tsx"
  feedbackTitle="Popover Component Feedback"
/>
```

### Menu Overlay

The `MenuOverlay` component is composed of an `Overlay` with a transparent backdrop. The placement of the backdrop is also customizable.

Try scrolling down so the two menu buttons are at the top of the screen. The backdrop is adjusted 50px from the top, so clicking the other menu button while the current menu overlay is still open will close the current menu and open the new menu overlay.


```js
const Menus = () => {
  const content = (<Box width="260px" maxHeight="90vh" my="none" style={{ overflowY: 'auto' }}>
    <Text>Menu Content</Text>
    <List>
      <ListItem>Thing 1</ListItem>
      <ListItem>Thing 2</ListItem>
    </List>
  </Box>
  )
  return (
  <Flex justifyContent="space-evenly">
    <MenuOverlay placement="bottom" backdropTop="50px" content={content}>
      <Button>Menu One</Button>
    </MenuOverlay>
    <MenuOverlay placement="bottom" backdropTop="50px" content={content}>
      <Button>Menu Two</Button>
    </MenuOverlay>
  </Flex>
  )

}

<Menus />
```
