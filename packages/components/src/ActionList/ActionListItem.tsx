import { CompatibleHTMLProps } from '@looker/design-tokens'
import styled from 'styled-components'
import React, { createContext, RefObject, useRef } from 'react'

export interface ActionListContextProps {
  actionListItemRef: RefObject<HTMLElement> | undefined
}

export const ActionListItemContext = createContext<ActionListContextProps>({
  actionListItemRef: undefined,
})

const ActionListItemInternal = (props: CompatibleHTMLProps<HTMLDivElement>) => {
  const { children, className, onClick } = props

  const actionListItemRef = useRef<HTMLDivElement>(null)
  const context = {
    actionListItemRef,
  }

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!event.defaultPrevented) {
      onClick && onClick(event)
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const isEventFromChild = event.currentTarget !== event.target
    if (event.keyCode === 13 && !isEventFromChild) {
      event.currentTarget.click()
    }
  }

  return (
    <ActionListItemContext.Provider value={context}>
      <div
        className={className}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        ref={actionListItemRef}
        tabIndex={onClick ? 0 : undefined}
      >
        {children}
      </div>
    </ActionListItemContext.Provider>
  )
}

export const ActionListItem = styled(ActionListItemInternal)`
  border-bottom: solid 1px ${props => props.theme.colors.palette.charcoal200};
  display: flex;

  &:focus,
  &:hover {
    box-shadow: ${({ theme, onClick }) => onClick && theme.shadows[2]};
    outline: none;

    /* Hovered ActionListItem needs z-index: 1 and non-static position */
    position: relative;
    z-index: 1;
  }
`
