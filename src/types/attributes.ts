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
  fontSize?: ResponsiveFontSizeValue
  fontWeight?: ResponsiveFontWeightValue
  height?: ResponsiveHeightValue
  px?: SpacingSizes
  py?: SpacingSizes
}
