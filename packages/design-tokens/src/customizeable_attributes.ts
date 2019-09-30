import {
  ResponsiveBorderRadiusValue,
  ResponsiveHeightValue,
} from './responsive'
import { FontWeights } from './font_weights'
import { RampSizes } from './font_sizes'
import { SpacingSizes } from './types'

export interface CustomizableAttributes {
  [key: string]: any
  borderRadius?: ResponsiveBorderRadiusValue
  color?: string
  fontSize?: RampSizes
  fontWeight?: FontWeights
  height?: ResponsiveHeightValue
  px?: SpacingSizes
  py?: SpacingSizes
}
