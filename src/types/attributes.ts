import { SpacingSizes } from '../style'
import {
  ResponsiveBorderRadiusValue,
  ResponsiveFontSizeValue,
  ResponsiveFontWeightValue,
  ResponsiveHeightValue,
} from '../style/responsive'

export interface CustomizableAttributes {
  [key: string]: any
  borderRadius?: ResponsiveBorderRadiusValue
  color?: string
  fontSize?: ResponsiveFontSizeValue
  fontWeight?: ResponsiveFontWeightValue
  height?: ResponsiveHeightValue
  px?: SpacingSizes
  py?: SpacingSizes
}
