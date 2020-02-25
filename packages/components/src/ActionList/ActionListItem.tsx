import {
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  CompatibleHTMLProps,
} from '@looker/design-tokens'
import styled from 'styled-components'
import { grid, GridProps } from 'styled-system'
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
    FlexboxProps,
    GridProps,
    LayoutProps,
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
  ${flexbox}
  ${grid}
  ${layout}

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
      opacity: 100%;
    }
  }
`

ActionListItem.defaultProps = {
  backgroundColor: 'palette.transparent',
  borderBottom: 'solid 1px',
  borderColor: 'palette.charcoal200',
  display: 'flex',
}
