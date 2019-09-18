import { FontWeights, RampSizes } from '@looker/design-tokens'

export interface MenuItemCustomization extends MenuItemStateCustomizations {
  fontSize?: RampSizes
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
