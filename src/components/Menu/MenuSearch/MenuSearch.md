```javascript
import { MenuSearch } from './MenuSearch'
import { Divider } from '../../Divider'
;<>
  <MenuSearch />
  <Divider my="medium" />
  <MenuSearch value="Stuff" summary="Faux results" />
  <Divider my="medium" />
  <MenuSearch value="Stuff" hideControls />
</>
```

```js
import { DrawerManager, ModalContent, ModalHeader } from '../../Modal'
import { Button } from '../../Button'
import { Link } from '../../Link'
import { Menu } from '../Menu'
import { MenuGroup } from '../MenuGroup'
import { MenuItem } from '../MenuItem'
import { MenuSearch } from './MenuSearch'

const Component = () => {
  const menuRef = React.useRef(null)
  const [keywords, setKeywords] = React.useState('')
  const onChange = e => setKeywords(e.currentTarget.value)
  const clearKeywords = () => setKeywords('')

  const link = text => (
    <MenuItem itemRole="link" href={`#${text}`} key={text}>
      Example Link {text.toUpperCase()}
    </MenuItem>
  )

  const button = text => (
    <MenuItem detail={`Detail ${text}`} key={text}>
      Example Item {text.toUpperCase()}
    </MenuItem>
  )

  const items = ['a', 'b', 'c', 'd', 'e']

  const menuGroupLinks = (
    <MenuGroup label="Spacing">{items.map(item => link(item))}</MenuGroup>
  )

  const menuGroupButtons = (
    <MenuGroup label="Spacing">{items.map(item => button(item))}</MenuGroup>
  )

  const menu = (
    <>
      <MenuSearch
        placeholder="Filter menu items"
        summary="33 matches"
        value={keywords}
        onChange={onChange}
        menuRef={menuRef}
      />
      <ModalContent innerProps={{ p: 'none' }}>
        <Menu>
          {menuGroupLinks}
          {menuGroupButtons}
          {menuGroupLinks}
          {menuGroupButtons}
          {menuGroupLinks}
          <MenuGroup>
            <MenuItem icon="Beaker">Scary Stuff</MenuItem>
          </MenuGroup>
        </Menu>
      </ModalContent>
    </>
  )

  return (
    <DrawerManager content={menu}>
      {onClick => (
        <Button variant="outline" onClick={onClick} iconAfter="ArrowDropDown">
          Drawer w/ Searchable Menu
        </Button>
      )}
    </DrawerManager>
  )
}
;<Component />
```
