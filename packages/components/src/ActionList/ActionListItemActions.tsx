import styled from 'styled-components'
import React, { ReactNode } from 'react'
import { IconButton } from '../Button/IconButton'
import { Menu, MenuDisclosure, MenuList, MenuContext } from '../Menu'

export interface ActionListItemActionsProps {
  children?: ReactNode
  className?: string
}

export const OptionsWrapper = styled.div<{ menuOpen?: boolean }>`
  opacity: ${props => (props.menuOpen ? '100%' : '0')};
  display: flex;
  align-items: center;
`

export const ActionListItemActions = ({
  children,
  className,
}: ActionListItemActionsProps) => {
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
  }

  return (
    <div onClick={handleClick}>
      <Menu>
        <MenuContext.Consumer>
          {({ isOpen }) => (
            <OptionsWrapper menuOpen={isOpen}>
              <MenuDisclosure>
                <IconButton
                  className={className}
                  icon="DotsVert"
                  label="Actions"
                  size="medium"
                />
              </MenuDisclosure>
              <MenuList>{children}</MenuList>
            </OptionsWrapper>
          )}
        </MenuContext.Consumer>
      </Menu>
    </div>
  )
}
