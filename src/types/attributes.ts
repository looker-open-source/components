import {
  ResponsiveBorderRadiusValue,
  ResponsiveFontSizeValue,
  ResponsiveFontWeightValue,
} from '../style/responsive'

export interface CustomizableAttributes {
  [key: string]: any
  borderRadius?: ResponsiveBorderRadiusValue
  fontSize?: ResponsiveFontSizeValue
  fontWeight?: ResponsiveFontWeightValue
}
