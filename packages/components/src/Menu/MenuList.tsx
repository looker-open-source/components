import merge from 'lodash/merge'
import { Placement } from 'popper.js'
import React, {
  Children,
  cloneElement,
  ReactNode,
  RefObject,
  useRef,
} from 'react'
import { HotKeys } from 'react-hotkeys'
import styled, { css } from 'styled-components'
import { CompatibleHTMLProps } from 'looker-design-tokens'
import { usePopover } from '../Popover'
import { MenuCloneProps } from './Menu'
import { MenuGroup } from './MenuGroup'
import { MenuSharedProps } from './MenuItem'
import { moveFocus } from './moveFocus'

export interface MenuListProps
  extends CompatibleHTMLProps<HTMLUListElement>,
    MenuSharedProps,
    MenuCloneProps {
  children: ReactNode
  compact?: boolean
  groupDividers?: boolean

  ref?: RefObject<HTMLUListElement>

  /**
   * Can be one of: top, bottom, left, right, auto, with the modifiers: start,
   * end. This value comes directly from popperjs. See
   * https://popper.js.org/popper-documentation.html#Popper.placements for more
   * info.
   * @default bottom
   */
  placement?: Placement
}

export function cloneMenuListChildren(
  children: JSX.Element | JSX.Element[],
  { customizationProps: parentCustomizations, compact }: MenuSharedProps
) {
  return Children.map(children, (child: JSX.Element) => {
    const childCustomizations = child.props.customizationProps
    let customizationProps = parentCustomizations || childCustomizations
    if (childCustomizations && parentCustomizations) {
      customizationProps = merge({}, parentCustomizations, childCustomizations)
    }

    return cloneElement(child, { compact, customizationProps })
  })
}

export function MenuList({
  children,
  compact,
  customizationProps,
  disabled,
  isOpen,
  placement,
  setOpen,
  triggerRef,
  ref,
  ...styleProps
}: MenuListProps) {
  const innerRef = useRef<null | HTMLElement>(null)

  const clonedChildren = cloneMenuListChildren(children as JSX.Element[], {
    compact,
    customizationProps,
  })

  const menuList = (
    <HotKeys
      innerRef={innerRef}
      keyMap={{ MOVE_DOWN: 'down', MOVE_UP: 'up' }}
      handlers={{
        MOVE_DOWN: () => moveFocus(1, 0, innerRef),
        MOVE_UP: () => moveFocus(-1, -1, innerRef),
      }}
    >
      <Style ref={ref} tabIndex={-1} role="menu" {...styleProps}>
        {clonedChildren}
      </Style>
    </HotKeys>
  )

  const isMenu = isOpen !== undefined
  const { popover } = usePopover({
    content: menuList,
    isOpen,
    placement,
    setOpen,
    triggerRef,
  })

  if (disabled) return null

  if (isMenu) return popover || null

  return menuList
}

const dividersStyle = css`
  ${MenuGroup} ~ ${MenuGroup} { /* stylelint-disable-line */
    border-top: 1px solid ${props => props.theme.colors.palette.charcoal200};
  }
`

const Style = styled.ul<MenuListProps>`
  list-style: none;
  outline: none;
  user-select: none;
  ${props => props.groupDividers !== false && dividersStyle};
`
