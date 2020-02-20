import styled from 'styled-components'
import React, { ReactNode, useContext } from 'react'
import { IconButton } from '../Button/IconButton'
import { Menu, MenuDisclosure, MenuList } from '../Menu'
import { ActionListItemContext } from './ActionListItem'

export interface ActionListItemActionsProps {
  children?: ReactNode
  className?: string
}

const ActionListItemActionsInternal = (props: ActionListItemActionsProps) => {
  const context = useContext(ActionListItemContext)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
  }

  return (
    <div onClick={handleClick}>
      <Menu hoverDisclosureRef={context.actionListItemRef}>
        <MenuDisclosure>
          <IconButton
            className={props.className}
            icon="DotsVert"
            label="Actions"
            size="medium"
          />
        </MenuDisclosure>
        <MenuList>{props.children}</MenuList>
      </Menu>
    </div>
  )
}

export const ActionListItemActions = styled(ActionListItemActionsInternal)`
  cursor: pointer;
`
