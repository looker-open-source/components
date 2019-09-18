import React, { FunctionComponent } from 'react'
import { HotKeys } from 'react-hotkeys'
import styled, { css, StyledComponent } from 'styled-components'
import { palette } from '@looker/design-tokens'
import { Box, BoxProps } from '../Box'
import { MenuContext, MenuContextProps } from './MenuContext'
import { MenuGroup } from './MenuGroup'
import { moveFocus } from './moveFocus'

export interface MenuProps extends BoxProps<HTMLDivElement>, MenuContextProps {
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
  const { groupDividers, ...boxProps } = props
  const ref = React.useRef<null | HTMLElement>(null)

  return (
    <MenuContext.Provider value={{ customizationProps, compact }}>
      <HotKeys
        innerRef={ref}
        keyMap={{ MOVE_DOWN: 'down', MOVE_UP: 'up' }}
        handlers={{
          MOVE_DOWN: () => moveFocus(1, 0, ref),
          MOVE_UP: () => moveFocus(-1, -1, ref),
        }}
      >
        <Box is="ul" tabIndex={-1} role="menu" userSelect="none" {...boxProps}>
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
