import * as React from 'react'
import { HotKeys } from 'react-hotkeys'
import { css, palette, styled } from '../../style'
import { Box, BoxProps } from '../Box'
import { MenuContext, MenuContextProps } from './MenuContext'
import { MenuGroup } from './MenuGroup'
import { moveFocus } from './moveFocus'

export interface MenuProps extends BoxProps<HTMLDivElement>, MenuContextProps {
  groupDividers?: boolean
  groupLabelShadow?: boolean
  compact?: boolean
}

const InternalMenu: React.FC<MenuProps> = ({
  customizationProps,
  groupLabelShadow = true,
  compact,
  children,
  ...props
}) => {
  const { groupDividers, ...boxProps } = props
  const ref = React.useRef<null | HTMLElement>(null)
  const keyMap = { moveDown: 'down', moveUp: 'up' }
  const keyHandlers = {
    moveDown: () => moveFocus(1, 0, ref),
    moveUp: () => moveFocus(-1, -1, ref),
  }

  return (
    <MenuContext.Provider
      value={{ customizationProps, groupLabelShadow, compact }}
    >
      <HotKeys keyMap={keyMap} handlers={keyHandlers}>
        <div ref={ref as React.RefObject<HTMLDivElement>}>
          <Box
            is="ul"
            tabIndex={-1}
            role="menu"
            userSelect="none"
            {...boxProps}
          >
            {children}
          </Box>
        </div>
      </HotKeys>
    </MenuContext.Provider>
  )
}

const MenuFactory = React.forwardRef((props: MenuProps, ref) => (
  <InternalMenu innerRef={ref} {...props} />
))

const dividersStyle = css`
  ${MenuGroup} ~ ${MenuGroup} { /* stylelint-disable-line */
    border-top: 1px solid ${palette.charcoal200};
  }
`

export const Menu = styled<MenuProps>(MenuFactory)`
  list-style: none;
  outline: none;
  ${props => props.groupDividers !== false && dividersStyle};
`
