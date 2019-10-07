import { Menu, MenuSearch } from '@looker/components'
import React, { Fragment, useState } from 'react'
import { useMenus } from 'docz'
import { NavLink } from './NavLink'
import { NavGroup } from './NavGroup'

export const Sidebar = () => {
  const [query, setQuery] = useState('')
  const menus = useMenus({ query })

  const handleChange = (ev: any) => {
    setQuery(ev.target.value)
  }

  const menuList =
    menus &&
    menus.map(menu => {
      if (!menu.route) return <NavGroup key={menu.id} item={menu} />
      return (
        <NavLink key={menu.id} item={menu}>
          {menu.name}
        </NavLink>
      )
    })

  return (
    <Fragment>
      <MenuSearch
        placeholder="Filter components"
        value={query}
        onChange={handleChange}
      />
      <Menu>{menuList}</Menu>
    </Fragment>
  )
}
