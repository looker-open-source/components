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
import styled from 'styled-components'
import React, { FC, ReactNode, useContext, useState, useEffect } from 'react'
import { Icon } from '../Icon'
import { MenuContext, MenuItemContext } from './MenuContext'
import { MenuItemLayout, MenuItemLayoutGrid } from './MenuItemLayout'

export interface MenuItemProps extends CompatibleHTMLProps<HTMLElement> {
  compact?: boolean

  detail?: ReactNode
  icon?: IconNames
  /**
   * Indicates the MenuItem is checked
   */
  current?: boolean
  /**
   * Sets the correct accessible role for the MenuItem:
   * - Use **'link'** for items that navigation to another page
   * - Use **'button'** for items that trigger in page interactions, like displaying a dialog
   * @default 'button'
   *
   */
  itemRole?: 'link' | 'button'
}

const MenuItemInternal: FC<MenuItemProps> = (props) => {
  const {
    children,
    className,
    compact: propCompact,
    current,
    detail,
    disabled,
    href,
    icon,
    itemRole,
    onBlur,
    onClick,
    onKeyUp,
    target,
  } = props

  const [isFocusVisible, setFocusVisible] = useState(false)
  const { compact: contextCompact } = useContext(MenuItemContext)
  const compact = propCompact === undefined ? contextCompact : propCompact

  const handleOnKeyUp = (event: React.KeyboardEvent<HTMLLIElement>) => {
    setFocusVisible(true)
    onKeyUp && onKeyUp(event)
  }

  const handleOnBlur = (event: React.FocusEvent<HTMLLIElement>) => {
    setFocusVisible(false)
    onBlur && onBlur(event)
  }

  const { setOpen } = useContext(MenuContext)
  const handleOnClick = (event: React.MouseEvent<HTMLLIElement>) => {
    setFocusVisible(false)
    onClick && onClick(event)
    // Close the Menu (unless event has preventDefault in onClick)
    if (setOpen && !event.defaultPrevented) {
      setOpen(false)
    }
  }

  const { renderIconPlaceholder, setRenderIconPlaceholder } = useContext(
    MenuItemContext
  )

  useEffect(() => {
    icon && setRenderIconPlaceholder(true)
  }, [icon, setRenderIconPlaceholder])

  const renderedIcon = icon ? (
    <Icon
      name={icon}
      mr="xsmall"
      size={24 / (compact ? 1.25 : 1)}
      color="text6"
    />
  ) : (
    renderIconPlaceholder && <div />
  )

  const Component = itemRole === 'link' ? 'a' : 'button'

  return (
    <MenuItemLayout
      aria-current={current && 'true'}
      compact={compact}
      disabled={disabled}
      focusVisible={isFocusVisible}
      hasIcon={Boolean(renderedIcon)}
      onBlur={handleOnBlur}
      onClick={handleOnClick}
      onKeyUp={handleOnKeyUp}
      className={className}
    >
      <Component href={href} role="menuitem" target={target}>
        <MenuItemLayoutGrid>
          {renderedIcon}
          {children}
        </MenuItemLayoutGrid>
      </Component>
      {detail && <Detail>{detail}</Detail>}
    </MenuItemLayout>
  )
}

export const MenuItem = styled(MenuItemInternal)``

const Detail = styled.div`
  color: ${({ theme: { colors } }) => colors.text6};
  margin-left: auto;
  margin-right: ${({ theme: { space } }) => space.medium};
  padding-left: ${({ theme: { space } }) => space.large};
`
