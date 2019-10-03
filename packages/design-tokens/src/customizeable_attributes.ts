import {
  ResponsiveBorderRadiusValue,
  ResponsiveHeightValue,
} from './responsive'
import { FontWeights } from './Typography/font_weights'
import { FontSizes } from './Typography/font_sizes'
import { SpacingSizes } from './types'

export interface CustomizableAttributes {
  [key: string]: any
  borderRadius?: ResponsiveBorderRadiusValue
  color?: string
  fontSize?: FontSizes
  fontWeight?: FontWeights
  height?: ResponsiveHeightValue
  px?: SpacingSizes
  py?: SpacingSizes
}
