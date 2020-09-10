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

import {
  CompatibleHTMLProps,
  size,
  space,
  SizeProps,
  SpaceProps,
} from '@looker/design-tokens'
import { IconNames } from '@looker/icons'
import styled from 'styled-components'
import React, { FC, ReactNode, useContext, useState, useEffect } from 'react'
import { Placement } from '@popperjs/core'
import { Paragraph } from '../Text'
import { useID } from '../utils/useID'
import { Icon } from '../Icon'
import { Tooltip } from '../Tooltip'
import { MenuContext, MenuItemContext } from './MenuContext'
import { MenuItemLayout } from './MenuItemLayout'

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
  tooltip?: string
  tooltipPlacement?: Placement
}

const MenuItemInternal: FC<MenuItemProps> = (props) => {
  const {
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
    onKeyUp,
    target,
    tooltip,
    tooltipPlacement,
  } = props

  const [isFocusVisible, setFocusVisible] = useState(false)
  const { compact: contextCompact } = useContext(MenuItemContext)
  const compact = propCompact === undefined ? contextCompact : propCompact

  const handleOnBlur = (event: React.FocusEvent<HTMLLIElement>) => {
    setFocusVisible(false)
    onBlur && onBlur(event)
  }

  const { setOpen } = useContext(MenuContext)
  const {
    renderIconPlaceholder,
    setRenderIconPlaceholder,
    handleArrowDown,
    handleArrowUp,
  } = useContext(MenuItemContext)

  const handleOnClick = (event: React.MouseEvent<HTMLLIElement>) => {
    setFocusVisible(false)
    onClick && onClick(event)
    // Close the Menu (unless event has preventDefault in onClick)
    if (setOpen && !event.defaultPrevented) {
      setOpen(false)
    }
  }

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLLIElement>) => {
    switch (event.key) {
      case 'ArrowUp':
        handleArrowUp && handleArrowUp(event)
        break
      case 'ArrowDown':
        handleArrowDown && handleArrowDown(event)
        break
    }
  }

  const handleOnKeyUp = (event: React.KeyboardEvent<HTMLLIElement>) => {
    onKeyUp && onKeyUp(event)
    setFocusVisible(true)
  }

  useEffect(() => {
    icon && setRenderIconPlaceholder(true)
  }, [icon, setRenderIconPlaceholder])

  const renderedIconID = useID(props.id)

  const renderedIcon =
    icon || iconArtwork ? (
      <Icon
        artwork={iconArtwork}
        color="text1"
        name={icon}
        size={24 / (compact ? 1.25 : 1)}
        mr="xsmall"
      />
    ) : (
      renderIconPlaceholder && (
        <IconPlaceholder
          aria-hidden
          data-testid={`menu-item-${renderedIconID}-icon-placeholder`}
          mr="xsmall"
          size={24 / (compact ? 1.25 : 1)}
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
    <Component href={href} role="menuitem" target={target}>
      {renderedIcon}
      <span>
        {children}
        {description && (
          <Paragraph color="text2" fontSize="xsmall" mt="xxsmall">
            {description}
          </Paragraph>
        )}
      </span>
      {detail && <Detail>{detail}</Detail>}
    </Component>
  )

  return (
    <MenuItemLayout
      aria-current={current && 'true'}
      compact={compact}
      disabled={disabled}
      focusVisible={isFocusVisible}
      onBlur={handleOnBlur}
      onClick={disabled ? undefined : handleOnClick}
      onKeyUp={handleOnKeyUp}
      onKeyDown={handleOnKeyDown}
      className={className}
    >
      {tooltip ? (
        <Tooltip placement={tooltipPlacement || 'left'} content={tooltip}>
          {menuItemContent}
        </Tooltip>
      ) : (
        menuItemContent
      )}
    </MenuItemLayout>
  )
}

const Detail = styled.div`
  color: ${({ theme: { colors } }) => colors.text1};
  margin-left: auto;
  margin-right: ${({ theme: { space } }) => space.medium};
  padding-left: ${({ theme: { space } }) => space.large};
`

export const MenuItem = styled(MenuItemInternal)`
  ${Icon} {
    align-self: ${({ description }) => (description ? 'flex-start' : 'center')};
  }
`

interface IconPlaceholderProps extends SizeProps, SpaceProps {}

const IconPlaceholder = styled.div<IconPlaceholderProps>`
  ${size}
  ${space}
`
