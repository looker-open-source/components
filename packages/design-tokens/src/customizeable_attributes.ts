import * as CSS from 'csstype'
import { ResponsiveValue, TLengthStyledSystem } from 'styled-system'
import { FontSizes, FontWeights, SpacingSizes } from './system'

export type ResponsiveHeightValue = ResponsiveValue<
  CSS.HeightProperty<TLengthStyledSystem>
>
export type ResponsiveBorderRadiusValue = ResponsiveValue<
  CSS.BorderRadiusProperty<TLengthStyledSystem>
>

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
