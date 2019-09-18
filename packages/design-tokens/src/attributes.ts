import { FontWeights, RampSizes, SpacingSizes } from './'
import {
  ResponsiveBorderRadiusValue,
  ResponsiveHeightValue,
} from './responsive'

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
