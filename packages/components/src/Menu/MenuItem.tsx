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

import { CompatibleHTMLProps } from '@looker/design-tokens'
import { IconNames } from '@looker/icons'
import isFunction from 'lodash/isFunction'
import styled from 'styled-components'
import React, { FC, ReactNode, useContext, useState, useEffect } from 'react'
import { Placement } from '@popperjs/core'
import { DialogContext } from '../Dialog'
import { ListItemDetail } from '../List/ListItemDetail'
import { Paragraph } from '../Text'
import { Icon, IconPlaceholder } from '../Icon'
import { Tooltip } from '../Tooltip'
import { createSafeRel } from '../List/utils'
import { useID } from '../utils'
import { MenuItemContext } from './MenuItemContext'
import { MenuItemLayout } from './MenuItemLayout'
import { useNestedMenu, UseNestedMenuProps } from './useNestedMenu'

export interface MenuItemProps
  extends CompatibleHTMLProps<HTMLLIElement>,
    Pick<UseNestedMenuProps, 'nestedMenu'> {
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
  tooltip?: string
  tooltipPlacement?: Placement
}

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
  nestedMenu,
  target,
  tooltip,
  tooltipPlacement = 'left',
  ...props
}) => {
  const [isFocusVisible, setFocusVisible] = useState(false)

  const {
    compact: contextCompact,
    renderIconPlaceholder,
    setRenderIconPlaceholder,
  } = useContext(MenuItemContext)
  const compact = propCompact === undefined ? contextCompact : propCompact

  const id = useID(props.id)

  const {
    popover,
    domProps: { onClick: nestedMenuOnClick, ...nestedMenuProps },
  } = useNestedMenu({
    compact,
    id,
    nestedMenu,
    onClick,
    onKeyDown,
    onMouseEnter,
    onMouseLeave,
  })

  if (detail && nestedMenu) {
    // eslint-disable-next-line no-console
    console.warn('The detail prop is not supported when nestedMenu is used.')
  }
  detail = nestedMenu ? (
    <Icon color="text1" name="ArrowRight" size={compact ? 'small' : 'medium'} />
  ) : (
    detail
  )

  const handleOnBlur = (event: React.FocusEvent<HTMLLIElement>) => {
    setFocusVisible(false)
    onBlur && onBlur(event)
  }

  const { closeModal } = useContext(DialogContext)

  const handleOnClick = (event: React.MouseEvent<HTMLLIElement>) => {
    setFocusVisible(false)
    // nestedMenuOnClick wraps onClick from props
    nestedMenuOnClick(event)
    // Close the Menu unless event has preventDefault
    if (closeModal && !event.defaultPrevented) {
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
      rel={createSafeRel(props.rel, target)}
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
        {...nestedMenuProps}
      >
        {tooltip ? (
          <Tooltip placement={tooltipPlacement} content={tooltip}>
            {menuItemContent}
          </Tooltip>
        ) : (
          menuItemContent
        )}
      </MenuItemLayout>
      {/* Keep nestedMenu popover outside of MenuItemLayout to prevent its events
       from bubbling up to the MenuItem (especially onClick)
       due to React Portal event bubbling */}
      {popover}
    </>
  )
}

export const MenuItem = styled(MenuItemInternal)`
  ${Icon} {
    align-self: ${({ description }) => (description ? 'flex-start' : 'center')};
  }
`
