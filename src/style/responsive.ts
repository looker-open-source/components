import * as CSS from 'csstype'
import { ResponsiveValue, TLengthStyledSystem } from 'styled-system'

export type ResponsiveBorderRadiusValue = ResponsiveValue<
  CSS.BorderRadiusProperty<TLengthStyledSystem>
>
export type ResponsiveFontWeightValue = ResponsiveValue<CSS.FontWeightProperty>
export type ResponsiveSpaceValue = ResponsiveValue<TLengthStyledSystem>
export type ResponsiveFontSizeValue = ResponsiveValue<
  CSS.FontSizeProperty<TLengthStyledSystem>
>
export type ResponsiveAlignItemsValue = ResponsiveValue<CSS.AlignItemsProperty>
export type ResponsiveFlexDirectionValue = ResponsiveValue<
  CSS.FlexDirectionProperty
>
export type ResponsiveJustifyContentValue = ResponsiveValue<
  CSS.JustifyContentProperty
>
