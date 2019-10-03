import React, { FunctionComponent } from 'react'
import { HotKeys } from 'react-hotkeys'
import styled, { css, StyledComponent } from 'styled-components'
import omit from 'lodash/omit'
import { palette } from '@looker/design-tokens'
import { Box, BoxProps } from '../Layout/Box'
import { MenuContext, MenuContextProps } from './MenuContext'
import { MenuGroup } from './MenuGroup'
import { moveFocus } from './moveFocus'

export interface MenuProps
  extends Omit<BoxProps<HTMLDivElement>, 'as'>,
    MenuContextProps {
  groupDividers?: boolean
  compact?: boolean
}

export type MenuComponentType = FunctionComponent<MenuProps>
export type StyledMenuComponentType = StyledComponent<
  MenuComponentType,
  MenuProps
>

const InternalMenu: MenuComponentType = ({
  customizationProps,
  compact,
  children,
  ...props
}) => {
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
        <Box
          as="ul"
          tabIndex={-1}
          role="menu"
          userSelect="none"
          {...omit(props, 'groupDividers')}
        >
          {children}
        </Box>
      </HotKeys>
    </MenuContext.Provider>
  )
}

const dividersStyle = css`
  ${MenuGroup} ~ ${MenuGroup} { /* stylelint-disable-line */
    border-top: 1px solid ${palette.charcoal200};
  }
`

/** @component */
export const Menu: StyledMenuComponentType = styled<MenuComponentType>(
  InternalMenu
)`
  list-style: none;
  outline: none;
  ${props => props.groupDividers !== false && dividersStyle};
`
