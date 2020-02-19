import styled from 'styled-components'
import React from 'react'
import { Icon } from '../Icon'
import { Menu, MenuDisclosure, MenuItem, MenuList } from '../Menu'

export interface ActionListItemActionsProps {
  className?: string
}

const ActionListItemActionsInternal = (props: ActionListItemActionsProps) => {
  return (
    <Menu>
      <MenuDisclosure>
        <Icon className={props.className} name="DotsVert" size={36} />
      </MenuDisclosure>
      {/*
        Leaving placeholder MenuItem elements in for now
        Final iteration will instead render props.children
      */}
      <MenuList>
        <MenuItem>Gouda</MenuItem>
        <MenuItem>American</MenuItem>
        <MenuItem>Swiss</MenuItem>
      </MenuList>
    </Menu>
  )
}

export const ActionListItemActions = styled(ActionListItemActionsInternal)`
  cursor: pointer;
`
