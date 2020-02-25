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
import React, { createContext, ReactNode, RefObject } from 'react'
import { OptionsWrapper } from './ActionListItemActions'

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
  options?: ReactNode
  className?: string
}

const ActionListItemInternal = (props: ActionListItemProps) => {
  const { children, className, onClick } = props

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
    <div
      className={className}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {children}
    </div>
  )
}

export const ActionListItem = styled(ActionListItemInternal)`
  ${border}
  ${space}
  ${color}

  display: flex;

  &:focus,
  &:hover,
  &:focus-within {
    outline: none;
    box-shadow: ${({ theme, onClick }) => {
      if (onClick) {
        return theme.shadows[2]
      }
    }};
    ${OptionsWrapper} {
      visibility: visible;
    }
  }
`

ActionListItem.defaultProps = {
  backgroundColor: 'palette.transparent',
  borderBottom: 'solid 1px',
  borderColor: 'palette.charcoal200',
}
