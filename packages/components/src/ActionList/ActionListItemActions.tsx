import styled from 'styled-components'
import React, { ReactNode, useContext } from 'react'
import { Icon } from '../Icon'
import { Menu, MenuDisclosure, MenuList } from '../Menu'
import { ActionListItemContext } from './ActionListItem'

export interface ActionListItemActionsProps {
  children?: ReactNode
  className?: string
}

const ActionListItemActionsInternal = (props: ActionListItemActionsProps) => {
  const context = useContext(ActionListItemContext)

  return (
    <Menu hoverDisclosureRef={context.actionListItemRef}>
      <MenuDisclosure>
        <Icon className={props.className} name="DotsVert" size={36} />
      </MenuDisclosure>
      <MenuList>{props.children}</MenuList>
    </Menu>
  )
}

export const ActionListItemActions = styled(ActionListItemActionsInternal)`
  cursor: pointer;
`
