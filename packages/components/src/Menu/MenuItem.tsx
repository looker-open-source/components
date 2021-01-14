/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import { CompatibleHTMLProps, transitions } from '@looker/design-tokens'
import { IconNames } from '@looker/icons'
import isFunction from 'lodash/isFunction'
import omit from 'lodash/omit'
import styled from 'styled-components'
import React, {
  FC,
  KeyboardEvent,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from 'react'
import { Placement } from '@popperjs/core'
import { DialogContext } from '../Dialog'
import { ListItemDetail } from '../List/ListItemDetail'
import { Paragraph } from '../Text'
import { Icon, IconPlaceholder } from '../Icon'
import { NestedSurface } from '../Overlay/OverlaySurface'
import { usePopover } from '../Popover'
import { Tooltip } from '../Tooltip'
import { createSafeRel } from '../List/utils'
import { useID, useWrapEvent } from '../utils'
import { MenuItemContext } from './MenuItemContext'
import { MenuItemLayout } from './MenuItemLayout'
import { MenuList } from './MenuList'
import { SubmenuContext } from './SubmenuProvider'

export interface MenuItemProps extends CompatibleHTMLProps<HTMLElement> {
  iconArtwork?: ReactNode
  compact?: boolean
  /**
   * Indicates the MenuItem is checked
   */
  current?: boolean
  /*
   * optional extra description
   */
  description?: ReactNode
  detail?: ReactNode
  icon?: IconNames
  /**
   * Sets the correct accessible role for the MenuItem:
   * - Use **'link'** for items that navigation to another page
   * - Use **'button'** for items that trigger in page interactions, like displaying a dialog
   * @default 'button'
   *
   */
  itemRole?: 'link' | 'button'
  /**
   * A list of menu items that will open to the right when the user hovers
   * or hits the right arrow key
   */
  submenu?: ReactNode
  tooltip?: string
  tooltipPlacement?: Placement
}

const noop = () => undefined

const MenuItemInternal: FC<MenuItemProps> = ({
  children,
  className,
  compact: propCompact,
  current,
  description,
  detail,
  disabled,
  href,
  icon,
  iconArtwork,
  itemRole,
  onBlur,
  onClick,
  onKeyDown,
  onKeyUp,
  onMouseEnter,
  onMouseLeave,
  submenu,
  target,
  tooltip,
  tooltipPlacement = 'left',
  ...props
}) => {
  const {
    compact: contextCompact,
    renderIconPlaceholder,
    setRenderIconPlaceholder,
  } = useContext(MenuItemContext)
  const compact = propCompact === undefined ? contextCompact : propCompact

  const id = useID(props.id)
  const { value, change, delayChange } = useContext(SubmenuContext)
  const openSubmenu = () => change(id)
  const closeSubmenu = () => change('')

  const itemHandlers = {
    onKeyDown: useWrapEvent(
      submenu
        ? (e: KeyboardEvent<HTMLLIElement>) => {
            if (e.key === 'ArrowRight') {
              openSubmenu()
            }
          }
        : noop,
      onKeyDown
    ),
    onMouseEnter: useWrapEvent(
      submenu
        ? (e) => {
            delayChange(id, transitions.simple)
            // Focus the button so that when the submenu closes, focus trap will
            // return focus here instead of the first item in the list
            const button = e.currentTarget.querySelector('button')
            button?.focus()
          }
        : noop,
      onMouseEnter
    ),
    onMouseLeave: useWrapEvent(
      submenu
        ? () => {
            delayChange('', transitions.simple)
          }
        : noop,
      onMouseLeave
    ),
  }
  const listHandlers = submenu
    ? {
        onKeyDown: (e: KeyboardEvent<HTMLUListElement>) => {
          if (e.key === 'ArrowLeft') {
            closeSubmenu()
          }
        },
        onMouseEnter: openSubmenu,
        onMouseLeave: closeSubmenu,
      }
    : {}

  const { popover, domProps } = usePopover({
    content: (
      <MenuList data-autofocus="true" {...listHandlers} compact={compact}>
        {submenu}
      </MenuList>
    ),
    disabled: submenu === undefined,
    isOpen: value === id,
    placement: 'right-start',
    scrollLock: false,
    setOpen: closeSubmenu,
    surface: NestedSurface,
    triggerToggle: false,
  })

  detail = submenu ? (
    <Icon color="text1" name="ArrowRight" size={compact ? 'small' : 'medium'} />
  ) : (
    detail
  )

  const [isFocusVisible, setFocusVisible] = useState(false)

  const handleOnBlur = (event: React.FocusEvent<HTMLLIElement>) => {
    setFocusVisible(false)
    onBlur && onBlur(event)
  }

  const { closeModal } = useContext(DialogContext)

  const handleOnClick = (event: React.MouseEvent<HTMLLIElement>) => {
    setFocusVisible(false)
    onClick && onClick(event)
    // Close the Menu
    // unless event has preventDefault in onClick
    // or unless it has a submenu and no onClick
    if (closeModal && !event.defaultPrevented && (!submenu || onClick)) {
      closeModal()
    }
  }

  const handleOnKeyUp = (event: React.KeyboardEvent<HTMLLIElement>) => {
    onKeyUp && onKeyUp(event)
    setFocusVisible(true)
  }

  useEffect(() => {
    if (isFunction(setRenderIconPlaceholder)) {
      icon && setRenderIconPlaceholder(true)
    }
  }, [icon, setRenderIconPlaceholder])

  const renderedIcon =
    icon || iconArtwork ? (
      <Icon
        artwork={iconArtwork}
        color="text1"
        name={icon}
        size={compact ? 'small' : 'medium'}
        mr="xsmall"
      />
    ) : (
      renderIconPlaceholder && (
        <IconPlaceholder
          data-testid={`menu-item-${id}-icon-placeholder`}
          size={compact ? 'small' : 'medium'}
        />
      )
    )

  if (disabled && itemRole === 'link') {
    // eslint-disable-next-line no-console
    console.warn(
      'itemRole="link" and disabled cannot be combined - use itemRole="button" if you need to offer a disabled MenuItem'
    )
  }
  const Component = !disabled && itemRole === 'link' ? 'a' : 'button'

  const menuItemContent = (
    <Component
      href={href}
      rel={createSafeRel(props.rel, props.target)}
      role="menuitem"
      target={target}
      tabIndex={-1}
    >
      {renderedIcon}
      <span>
        {children}
        {description && (
          <Paragraph color="text2" fontSize="xsmall" mt="xxsmall">
            {description}
          </Paragraph>
        )}
      </span>
      {detail && <ListItemDetail>{detail}</ListItemDetail>}
    </Component>
  )

  return (
    <>
      <MenuItemLayout
        aria-current={current && 'true'}
        compact={compact}
        disabled={disabled}
        focusVisible={isFocusVisible}
        onBlur={handleOnBlur}
        onClick={disabled ? undefined : handleOnClick}
        onKeyUp={handleOnKeyUp}
        className={className}
        {...props}
        {...itemHandlers}
        {...omit(domProps, 'onClick')}
      >
        {tooltip ? (
          <Tooltip placement={tooltipPlacement} content={tooltip}>
            {menuItemContent}
          </Tooltip>
        ) : (
          menuItemContent
        )}
      </MenuItemLayout>
      {popover}
    </>
  )
}

export const MenuItem = styled(MenuItemInternal)`
  ${Icon} {
    align-self: ${({ description }) => (description ? 'flex-start' : 'center')};
  }
`
