import { CompatibleHTMLProps, palette } from '@looker/design-tokens'
import React, { FC } from 'react'
import { HotKeys } from 'react-hotkeys'
import styled, { css } from 'styled-components'
import { MenuContext, MenuContextProps } from './MenuContext'
import { moveFocus } from './moveFocus'
import { MenuGroup } from './MenuGroup'

export interface MenuProps
  extends CompatibleHTMLProps<HTMLUListElement>,
    MenuContextProps {
  groupDividers?: boolean
  compact?: boolean
}

export const Menu: FC<MenuProps> = props => {
  const { customizationProps, compact, children, ...styleProps } = props

  const ref = React.useRef<null | HTMLElement>(null)

  return (
    <MenuContext.Provider value={{ compact, customizationProps }}>
      <HotKeys
        innerRef={ref}
        keyMap={{ MOVE_DOWN: 'down', MOVE_UP: 'up' }}
        handlers={{
          MOVE_DOWN: () => moveFocus(1, 0, ref),
          MOVE_UP: () => moveFocus(-1, -1, ref),
        }}
      >
        <Style tabIndex={-1} role="menu" {...styleProps}>
          {children}
        </Style>
      </HotKeys>
    </MenuContext.Provider>
  )
}

const dividersStyle = css`
  ${MenuGroup} ~ ${MenuGroup} { /* stylelint-disable-line */
    border-top: 1px solid ${palette.charcoal200};
  }
`

const Style = styled.ul<MenuProps>`
  list-style: none;
  outline: none;
  user-select: none;
  ${props => props.groupDividers !== false && dividersStyle};
`
