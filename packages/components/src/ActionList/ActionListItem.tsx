import { CompatibleHTMLProps } from '@looker/design-tokens'
import styled from 'styled-components'
import React from 'react'
import { OptionsWrapper } from './ActionListItemActions'

const ActionListItemInternal = (props: CompatibleHTMLProps<HTMLDivElement>) => {
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
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  )
}

export const ActionListItem = styled(ActionListItemInternal)`
  border-bottom: solid 1px ${props => props.theme.colors.palette.charcoal200};
  display: flex;

  &:focus,
  &:hover,
  &:focus-within {
    box-shadow: ${({ theme, onClick }) => onClick && theme.shadows[2]};
    outline: none;

    /* Hovered ActionListItem needs z-index: 1 and non-static position */
    position: relative;
    z-index: 1;

    ${OptionsWrapper} {
      opacity: 100%;
    }
  }
`
