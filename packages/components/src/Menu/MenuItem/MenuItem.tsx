/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

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
  ColorProps,
  FontSizes,
  SpaceProps,
  TypographyProps,
} from '@looker/design-tokens'
import { IconNames } from '@looker/icons'
import React, { FC, ReactNode } from 'react'
import { Icon } from '../../Icon'
import { MenuItemButton } from './MenuItemButton'
import {
  MenuItemCustomization,
  MenuItemStateCustomizations,
} from './menuItemCustomization'
import { MenuItemDetail } from './MenuItemDetail'
import { MenuItemListItem } from './MenuItemListItem'
import {
  defaultMenuItemStyle,
  MenuItemStateStyle,
  MenuItemStyle,
} from './menuItemStyle'

export interface MenuSharedProps {
  customizationProps?: MenuItemCustomization
  compact?: boolean
}

const assignCustomizations = (
  defaultStyle: MenuItemStyle,
  changes?: MenuItemCustomization
): MenuItemStyle => {
  const { bg, color, iconColor, fontWeight, fontSize, iconSize } =
    changes || ({} as MenuItemCustomization)

  const customMarker = changes ? changes.marker : {}

  // Need to spread fontSize & iconSize across all states
  const defaults = {
    fontSize: fontSize || ('small' as FontSizes),
    iconSize: iconSize || 20,
  }

  const base: MenuItemStateCustomizations = {}

  bg && (base.bg = bg)
  color && (base.color = color)
  fontWeight && (base.fontWeight = fontWeight)
  iconColor && (base.iconColor = iconColor)

  const initial: MenuItemStateStyle = {
    ...defaultStyle.initial,
    ...defaults,
    ...base,
  }

  const current: MenuItemStateStyle = {
    ...defaultStyle.current,
    ...defaults,
    ...base,
    ...(changes ? changes.current : {}),
  }

  const hover: MenuItemStateStyle = {
    ...defaultStyle.hover,
    ...defaults,
    ...base,
    ...(changes ? changes.hover : {}),
  }

  const marker = { ...defaultStyle.marker, ...customMarker }

  return {
    current,
    hover,
    initial,
    marker,
  }
}

export interface MenuItemProps
  extends CompatibleHTMLProps<HTMLElement>,
    ColorProps,
    SpaceProps,
    TypographyProps,
    MenuSharedProps {
  detail?: ReactNode
  icon?: IconNames
  /**
   * Indicates the MenuItem is checked
   */
  current?: boolean
  /**
   * Sets the correct accessible role for the MenuItem:
   * - Use **'link'** for items that navigation to another page
   * - Use **'button'** for items that trigger in page interactions, like displaying a modal
   * @default 'button'
   *
   */
  itemRole?: 'link' | 'button'
}

export const MenuItem: FC<MenuItemProps> = props => {
  const {
    current,
    children,
    detail,
    icon,
    customizationProps,
    onClick,
    itemRole,
    href,
    target,
    compact,
    ...remainingProps
  } = props

  const compactIconModifier = compact ? 1.25 : 1

  const style = assignCustomizations(defaultMenuItemStyle, customizationProps)
  const styleState = current ? style.current : style.initial
  const { iconSize, iconColor, ...listItemProps } = styleState

  const { p, py, px, pr, pl, pt, pb, ...outerProps } = remainingProps

  const clickTargetProps = {
    p,
    pb: pb || py || p || compact ? 'xxsmall' : 'small',
    pl: pl || px || p || 'medium',
    pr: pr || px || p || 'medium',
    pt: pt || py || p || compact ? 'xxsmall' : 'small',
  }

  return (
    <MenuItemListItem
      current={current}
      itemStyle={style}
      aria-current={current && 'page'}
      onClick={onClick}
      {...listItemProps}
      {...outerProps}
    >
      <MenuItemButton
        as={itemRole === 'link' ? 'a' : 'button'}
        role="menuitem"
        href={href}
        target={target}
        {...clickTargetProps}
      >
        {icon && (
          <Icon
            name={icon}
            mr="xsmall"
            size={iconSize / compactIconModifier}
            color={iconColor}
          />
        )}
        {children}
      </MenuItemButton>
      {detail && <MenuItemDetail>{detail}</MenuItemDetail>}
    </MenuItemListItem>
  )
}
