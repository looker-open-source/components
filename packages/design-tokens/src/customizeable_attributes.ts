import { HeightProperty } from 'csstype'
import { ResponsiveValue } from 'styled-system'
import { FontSizes, FontWeights, RadiusSizes, SpacingSizes } from './system'

export interface CustomizableAttributes {
  [key: string]: any
  borderRadius?: RadiusSizes
  color?: string
  fontSize?: ResponsiveValue<FontSizes>
  fontWeight?: FontWeights
  height?: ResponsiveValue<HeightProperty<any>>
  px?: SpacingSizes
  py?: SpacingSizes
}
