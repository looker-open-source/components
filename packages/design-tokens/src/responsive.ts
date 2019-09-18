import CSS from 'csstype'
import { ResponsiveValue, TLengthStyledSystem } from 'styled-system'

export type ResponsiveAlignItemsValue = ResponsiveValue<CSS.AlignItemsProperty>
export type ResponsiveBorderRadiusValue = ResponsiveValue<
  CSS.BorderRadiusProperty<TLengthStyledSystem>
>
export type ResponsiveFlexDirectionValue = ResponsiveValue<
  CSS.FlexDirectionProperty
>
export type ResponsiveFontSizeValue = ResponsiveValue<
  CSS.FontSizeProperty<TLengthStyledSystem>
>
export type ResponsiveFontWeightValue = ResponsiveValue<CSS.FontWeightProperty>
export type ResponsiveHeightValue = ResponsiveValue<
  CSS.HeightProperty<TLengthStyledSystem>
>
export type ResponsiveJustifyContentValue = ResponsiveValue<
  CSS.JustifyContentProperty
>
export type ResponsiveSpaceValue = ResponsiveValue<TLengthStyledSystem>
