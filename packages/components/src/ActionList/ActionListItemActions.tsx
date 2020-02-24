import styled from 'styled-components'
import React, { ReactNode } from 'react'
import { IconButton } from '../Button/IconButton'
import { Menu, MenuDisclosure, MenuList } from '../Menu'

export interface ActionListItemActionsProps {
  children?: ReactNode
  className?: string
}

const ActionListItemActionsInternal = (props: ActionListItemActionsProps) => {
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
  }

  return (
    <div onClick={handleClick}>
      <Menu>
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
