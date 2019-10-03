import { FontWeights, palette, FontSizes } from '@looker/design-tokens'
import { BoxProps } from '../../Box'
import { MenuItemStateStyle, MenuItemStyle } from './menuItemStyle'

export interface MenuItemStateStyle {
  bg: string
  color: string
  fontWeight: FontWeights
  fontSize: FontSizes
  iconColor: string
  iconSize: number
}

export interface MenuItemStyle
  extends Omit<BoxProps<HTMLDivElement>, 'initial'> {
  current: MenuItemStateStyle
  hover: MenuItemStateStyle
  initial: MenuItemStateStyle
  marker: {
    color: string
    size: number
  }
}

const initial: MenuItemStateStyle = {
  bg: palette.white,
  color: palette.charcoal600,
  fontSize: 'small',
  fontWeight: 'normal',
  iconColor: palette.charcoal300,
  iconSize: 20,
}

const hover: MenuItemStateStyle = {
  ...initial,
  bg: palette.charcoal100,
  color: palette.charcoal900,
}

const current: MenuItemStateStyle = {
  ...hover,
  fontWeight: 'bold',
  iconColor: palette.charcoal900,
}

export const defaultMenuItemStyle: MenuItemStyle = {
  current,
  hover,
  initial,
  marker: {
    color: palette.charcoal900,
    size: 4,
  },
}
