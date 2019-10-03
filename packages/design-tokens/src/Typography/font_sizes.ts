import { rem } from 'polished'
import { ResponsiveValue } from 'styled-system'
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

export type FontSizes =
  | SizeXXSmall
  | SizeXSmall
  | SizeSmall
  | SizeMedium
  | SizeLarge
  | SizeXLarge
  | SizeXXLarge
  | SizeXXXLarge
  | SizeXXXXLarge

export type FontSizeRamp = Record<FontSizes, string>

/* eslint-disable sort-keys */
export const fontSizes: FontSizeRamp = {
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
/* eslint-enable sort-keys */

export interface FontSizeProps {
  /**
   * Use a @looker/components FontSizes to set font size
   */
  fontSize?: ResponsiveValue<FontSizes>
}
