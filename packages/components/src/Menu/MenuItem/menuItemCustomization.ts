import { FontWeights, FontSizes } from '@looker/design-tokens'

export interface MenuItemCustomization extends MenuItemStateCustomizations {
  fontSize?: FontSizes
  iconSize?: number

  current?: MenuItemStateCustomizations
  hover?: MenuItemStateCustomizations
  marker?: {
    color?: string
    size?: number
  }
}

export interface MenuItemStateCustomizations {
  bg?: string
  color?: string
  fontWeight?: FontWeights
  iconColor?: string
}
