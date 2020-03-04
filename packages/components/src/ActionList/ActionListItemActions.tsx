import React, { ReactNode, useContext } from 'react'
import { IconButton } from '../Button/IconButton'
import { Menu, MenuDisclosure, MenuList } from '../Menu'
import { ActionListItemContext } from './ActionListItem'

export interface ActionListItemActionsProps {
  children?: ReactNode
  className?: string
}

export const ActionListItemActions = ({
  children,
  className,
}: ActionListItemActionsProps) => {
  const context = useContext(ActionListItemContext)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
  }

  return (
    <div onClick={handleClick}>
      <Menu hoverDisclosureRef={context.actionListItemRef}>
        <MenuDisclosure>
          <IconButton
            className={className}
            icon="DotsVert"
            label="Actions"
            size="medium"
          />
        </MenuDisclosure>
        <MenuList>{children}</MenuList>
      </Menu>
    </div>
  )
}
