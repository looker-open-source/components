import deepmerge from 'deepmerge'
import * as React from 'react'
import { IconNames } from '../../../icons/build/IconNames'
import { RampSizes, styled } from '../../../style'
import { BoxProps } from '../../Box'
import { Icon } from '../../Icon'
import { MenuContext, MenuContextProps } from '../MenuContext'
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

export interface MenuItemProps
  extends BoxProps<HTMLAnchorElement>,
    MenuContextProps {
  detail?: React.ReactNode
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
  onClick?: () => void
  href?: string
  target?: string
}

const InternalMenuItem: React.FC<MenuItemProps> = props => {
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

  const menu = React.useContext(MenuContext)

  let customizations = customizationProps
    ? customizationProps
    : menu.customizationProps

  if (customizationProps && menu.customizationProps) {
    customizations = deepmerge(customizationProps, menu.customizationProps)
  }

  const isCompact = compact !== undefined ? compact : menu.compact
  const compactIconModifier = isCompact ? 1.25 : 1

  const style = assignCustomizations(defaultMenuItemStyle, customizations)
  const state = current ? style.current : style.initial

  const { iconSize, iconColor, ...listItemProps } = state

  return (
    <MenuItemListItem
      current={current}
      currentMarker={currentMarker}
      itemStyle={style}
      alignItems="center"
      aria-current={current && 'page'}
      display="flex"
      flexWrap="wrap"
      is="li"
      onClick={onClick}
      {...listItemProps}
      {...boxProps}
    >
      <MenuItemButton
        is={itemRole === 'link' ? 'a' : 'button'}
        role="menuitem"
        href={href}
        target={target}
        px="medium"
        py={isCompact ? 'xxsmall' : 'small'}
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

const MenuItemFactory = React.forwardRef((props: MenuItemProps, ref) => (
  <InternalMenuItem innerRef={ref as React.RefObject<HTMLElement>} {...props} />
))

export const MenuItem = styled<MenuItemProps>(MenuItemFactory)``

const assignCustomizations = (
  defaultStyle: MenuItemStyle,
  changes?: MenuItemCustomization
): MenuItemStyle => {
  const { bg, color, iconColor, fontWeight, fontSize, iconSize } =
    changes || ({} as MenuItemCustomization)

  const customMarker = changes ? changes.marker : {}

  // Need to spread fontSize & iconSize across all states
  const defaults = {
    fontSize: fontSize || ('small' as RampSizes),
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
