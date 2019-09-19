import { ThemedStyledProps } from 'styled-components'
import { Theme } from './theme'

export type SizeNone = 'none'
export type SizeXXSmall = 'xxsmall'
export type SizeXSmall = 'xsmall'
export type SizeSmall = 'small'
export type SizeMedium = 'medium'
export type SizeLarge = 'large'
export type SizeXLarge = 'xlarge'
export type SizeXXLarge = 'xxlarge'
export type SizeXXXLarge = 'xxxlarge'
export type SizeXXXXLarge = 'xxxxlarge'

export type ThemedProps<P> = ThemedStyledProps<P, Theme>
