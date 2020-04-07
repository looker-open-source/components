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

import merge from 'lodash/merge'
import {
  CompatibleHTMLProps,
  ColorProps,
  FontSizes,
  SpaceProps,
  TypographyProps,
} from '@looker/design-tokens'
import { IconNames } from '@looker/icons'
import React, { FC, ReactNode, useContext, useState } from 'react'
import { Icon } from '../../Icon'
import { MenuItemStyleContext } from '../MenuContext'
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

// For merging compact and customizationProps from props with those from context
export function useMenuItemStyleContext(props: MenuSharedProps) {
  const { customizationProps: propCustomizations, compact: compactProp } = props
  const {
    customizationProps: contextCustomizations,
    compact: contextCompact,
  } = useContext(MenuItemStyleContext)
  const parentCustomizations = contextCustomizations || {}

  let customizationProps = parentCustomizations || propCustomizations
  if (customizationProps && parentCustomizations) {
    customizationProps = merge({}, parentCustomizations, propCustomizations)
  }

  const compact = compactProp === undefined ? contextCompact : compactProp

  return { compact, customizationProps }
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

export const MenuItem: FC<MenuItemProps> = (props) => {
  const {
    children,
    compact: propCompact,
    customizationProps: propCustomizations,
    current,
    detail,
    href,
    icon,
    itemRole,
    onBlur,
    onClick,
    onKeyUp,
    target,
    ...remainingProps
  } = props

  const [isFocusVisible, setFocusVisible] = useState(false)

  const handleOnKeyUp = (event: React.KeyboardEvent<HTMLLIElement>) => {
    setFocusVisible(true)
    onKeyUp && onKeyUp(event)
  }

  const handleOnBlur = (event: React.FocusEvent<HTMLLIElement>) => {
    setFocusVisible(false)
    onBlur && onBlur(event)
  }

  const handleOnClick = (event: React.MouseEvent<HTMLLIElement>) => {
    setFocusVisible(false)
    onClick && onClick(event)
  }

  const { customizationProps, compact } = useMenuItemStyleContext({
    compact: propCompact,
    customizationProps: propCustomizations,
  })
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

  if (props.color === 'danger') {
    const dangerColor = '#cc1f36'
    outerProps.color = dangerColor
    style.hover.color = dangerColor
  }

  return (
    <MenuItemListItem
      aria-current={current && 'page'}
      onClick={handleOnClick}
      current={current}
      focusVisible={isFocusVisible}
      itemStyle={style}
      onKeyUp={handleOnKeyUp}
      onBlur={handleOnBlur}
      {...listItemProps}
      {...outerProps}
    >
      <MenuItemButton
        as={itemRole === 'link' ? 'a' : 'button'}
        href={href}
        role="menuitem"
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
