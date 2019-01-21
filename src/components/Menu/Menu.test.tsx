import 'jest-styled-components'
import * as React from 'react'
import { assertSnapshot } from '../../../test/utils/snapshot'

// import { Menu } from './Menu'
// import { MenuGroup } from './MenuGroup'
// import { MenuItem } from './MenuItem'

test('Menu', () => {
  assertSnapshot(<p>Needs work...</p>)
})

// test('Menu', () => {
//   assertSnapshot(
//     <Menu>
//       <MenuItem>boo!</MenuItem>
//     </Menu>
//   )
// })

// test('Menu - focusOnMount', () => {
//   assertSnapshot(
//     <Menu focusOnMount>
//       <MenuItem>boo!</MenuItem>
//     </Menu>
//   )
// })

// test('Menu - composed', () => {
//   assertSnapshot(
//     <Menu>
//       <MenuGroup>
//         <MenuItem icon="LogoRings">Looker</MenuItem>
//         <MenuItem icon="Validate">Validate</MenuItem>
//         <MenuItem icon="ChartPie">Pizza!</MenuItem>
//       </MenuGroup>
//       <MenuGroup canActivate label="Cheeses">
//         <MenuItem>Gouda</MenuItem>
//         <MenuItem>Cheddar</MenuItem>
//         <MenuItem>Swiss</MenuItem>
//       </MenuGroup>
//       <MenuGroup>
//         <MenuItem icon="Beaker">Scary Stuff</MenuItem>
//       </MenuGroup>
//     </Menu>
//   )
// })
