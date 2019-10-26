import { FontSizes, CompatibleHTMLProps } from 'looker-design-tokens'
import { IconNames } from 'looker-icons'
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
    MenuSharedProps {
  detail?: ReactNode
  icon?: IconNames
  /**
   * Indicates the MenuItem is checked
   */
  current?: boolean
  /**
   * Display a marker next to the MenuItem if it is current
   */
  currentMarker?: boolean
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
    currentMarker,
    children,
    detail,
    icon,
    customizationProps,
    onClick,
    itemRole,
    href,
    target,
    compact,
    ...boxProps
  } = props

  const compactIconModifier = compact ? 1.25 : 1

  const style = assignCustomizations(defaultMenuItemStyle, customizationProps)
  const styleState = current ? style.current : style.initial
  const { iconSize, iconColor, ...listItemProps } = styleState

  return (
    <MenuItemListItem
      current={current}
      currentMarker={currentMarker}
      itemStyle={style}
      aria-current={current && 'page'}
      onClick={onClick}
      {...listItemProps}
      {...boxProps}
    >
      <MenuItemButton
        as={itemRole === 'link' ? 'a' : 'button'}
        role="menuitem"
        href={href}
        target={target}
        px="medium"
        py={compact ? 'xxsmall' : 'small'}
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
