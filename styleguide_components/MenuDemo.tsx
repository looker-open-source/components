import * as React from 'react'
import { Menu, MenuGroup, MenuItem } from '../src/components/Menu'

const spacingSizes = [
  { value: 'xxsmall', label: '4px' },
  { value: 'xsmall', label: '8px' },
  { value: 'small', label: '12px' },
  { value: 'medium', label: '16px' },
  { value: 'large', label: '20px' },
  { value: 'xlarge', label: '32px' },
  { value: 'xxlarge', label: '40px' },
  { value: 'xxxlarge', label: '60px' },
]

export const MenuGroupDemo: React.FC = () => {
  const items = spacingSizes.map(({ value, label }) => (
    <MenuItem itemRole="button" key={value} detail={label} children={value} />
  ))

  return (
    <Menu>
      <MenuGroup>
        <MenuItem itemRole="button" icon="LogoRings">
          Looker
        </MenuItem>
        <MenuItem itemRole="button" icon="Validate">
          Validate
        </MenuItem>
        <MenuItem itemRole="button" icon="ChartPie">
          Pizza!
        </MenuItem>
      </MenuGroup>
      <MenuGroup label={<>Spacing</>}>{items}</MenuGroup>
      <MenuGroup>
        <MenuItem itemRole="button" icon="Beaker">
          Scary Stuff
        </MenuItem>
      </MenuGroup>
    </Menu>
  )
}
