import { rem } from 'polished'
import { FontSizeProps } from 'styled-system'
import {
  SizeLarge,
  SizeMedium,
  SizeSmall,
  SizeXLarge,
  SizeXSmall,
  SizeXXLarge,
  SizeXXSmall,
  SizeXXXLarge,
  SizeXXXXLarge,
} from '../types'

export type RampSizes =
  | SizeXXSmall
  | SizeXSmall
  | SizeSmall
  | SizeMedium
  | SizeLarge
  | SizeXLarge
  | SizeXXLarge
  | SizeXXXLarge
  | SizeXXXXLarge

export type FontRamp = Record<RampSizes, string>

// tslint:disable:object-literal-sort-keys
export const fontSizes: FontRamp = {
  xxxxlarge: rem(46),
  xxxlarge: rem(36),
  xxlarge: rem(25),
  xlarge: rem(22),
  large: rem(18),
  medium: rem(16),
  small: rem(14),
  xsmall: rem(12),
  xxsmall: rem(11),
}
// tslint:enable:object-literal-sort-keys

export type LensFontSizeProps = { [P in keyof FontSizeProps]: RampSizes }
