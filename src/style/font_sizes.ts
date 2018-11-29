import { rem } from 'polished'
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

export const lineHeights: FontRamp = {
  xxxxlarge: rem(64),
  xxxlarge: rem(52),
  xxlarge: rem(40),
  xlarge: rem(32),
  large: rem(28),
  medium: rem(24),
  small: rem(20),
  xsmall: rem(16),
  xxsmall: rem(16),
}
