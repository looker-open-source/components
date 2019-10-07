import { MenuGroup } from '@looker/components'
import React from 'react'
import { MenuItem } from 'docz'
import { NavLink } from './NavLink'

interface NavGroupProps {
  item: MenuItem
}

export const NavGroup: React.FC<NavGroupProps> = ({ item }) => {
  const { menu } = item
  if (!menu) return null

  // const [subheadingsVisible, setShowsubheadings] = React.useState(true)
  // const toggleSubheadings = () => setShowsubheadings(!subheadingsVisible)

  const menuItems = menu.map(menu => (
    <NavLink key={menu.id} item={menu}>
      {menu.name}
    </NavLink>
  ))

  return <MenuGroup label={item.name}>{menuItems}</MenuGroup>
}
