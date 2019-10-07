import * as CSS from 'csstype'
import { ResponsiveValue, TLengthStyledSystem } from 'styled-system'
import { FontSizes, FontWeights, RadiusSizes, SpacingSizes } from './system'

export type ResponsiveHeightValue = ResponsiveValue<
  CSS.HeightProperty<TLengthStyledSystem>
>

export interface CustomizableAttributes {
  [key: string]: any
  borderRadius?: RadiusSizes
  color?: string
  fontSize?: FontSizes
  fontWeight?: FontWeights
  height?: ResponsiveHeightValue
  px?: SpacingSizes
  py?: SpacingSizes
}
