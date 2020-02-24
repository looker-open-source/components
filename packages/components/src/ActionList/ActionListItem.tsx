import {
  border,
  BorderProps,
  color,
  ColorProps,
  space,
  SpaceProps,
  CompatibleHTMLProps,
} from '@looker/design-tokens'
import styled from 'styled-components'
import React, { createContext, ReactNode, RefObject, useRef } from 'react'

export interface ActionListContextProps {
  actionListItemRef: RefObject<HTMLElement> | undefined
}

export const ActionListItemContext = createContext<ActionListContextProps>({
  actionListItemRef: undefined,
})

export interface ActionListItemProps
  extends BorderProps,
    ColorProps,
    CompatibleHTMLProps<HTMLElement>,
    SpaceProps {
  children?: ReactNode
  className?: string
}

const ActionListItemInternal = (props: ActionListItemProps) => {
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
        tabIndex={0}
      >
        {children}
      </div>
    </ActionListItemContext.Provider>
  )
}

export const ActionListItem = styled(ActionListItemInternal)`
  ${border}
  ${space}
  ${color}

  display: flex;

  &:focus,
  &:hover {
    outline: none;
    box-shadow: ${({ theme, onClick }) => {
      if (onClick) {
        return theme.shadows[2]
      }
    }};
  }
`

ActionListItem.defaultProps = {
  backgroundColor: 'palette.transparent',
  borderBottom: 'solid 1px',
  borderColor: 'palette.charcoal200',
}
