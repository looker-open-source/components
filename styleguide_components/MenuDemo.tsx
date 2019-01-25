import * as React from 'react'
import { Menu, MenuGroup, MenuItem } from '../src/components/Menu'

const spacingSizes = [
  { value: 'xxsmall', label: '4px' },
  { value: 'xsmall', label: '8px' },
  { value: 'small', label: '12px' },
  { value: 'medium', label: '16px' },
  { value: 'large', label: '20px', active: true },
  { value: 'xlarge', label: '32px' },
  { value: 'xxlarge', label: '40px' },
  { value: 'xxxlarge', label: '60px' },
]

export const MenuGroupDemo: React.SFC = () => {
  const items = spacingSizes.map(({ value, label, active }) => (
    <MenuItem active={active} key={value} detail={label} children={value} />
  ))

  return (
    <Menu focusOnMount>
      <MenuGroup>
        <MenuItem icon="LogoRings">Looker</MenuItem>
        <MenuItem icon="Validate">Validate</MenuItem>
        <MenuItem icon="ChartPie">Pizza!</MenuItem>
      </MenuGroup>
      <MenuGroup canActivate label="Spacing">
        {items}
      </MenuGroup>
      <MenuGroup>
        <MenuItem icon="Beaker">Scary Stuff</MenuItem>
      </MenuGroup>
    </Menu>
  )
}
