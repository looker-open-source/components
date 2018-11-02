import { ThemedStyledProps } from './style/styled_components'
import { Theme } from './style/theme'

export type SizeNone = 'none'
export type SizeXSmall = 'xsmall'
export type SizeSmall = 'small'
export type SizeMedium = 'medium'
export type SizeLarge = 'large'
export type SizeXLarge = 'xlarge'
export type SizeXXLarge = 'xxlarge'
export type SizeXXXLarge = 'xxxlarge'
export type SizeXXXXLarge = 'xxxxlarge'

export type ThemedProps<P> = ThemedStyledProps<P, Theme>
export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
