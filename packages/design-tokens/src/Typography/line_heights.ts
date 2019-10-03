import { rem } from 'polished'
import { ResponsiveValue } from 'styled-system'
import { FontSizes } from './font_sizes'

export type LineHeights = FontSizes

export type LineHeightRamp = Record<LineHeights, string>

/* eslint-disable sort-keys */
export const lineHeights: LineHeightRamp = {
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

export interface LineHeightProps {
  /**
   * Use a @looker/components LineHeights (xxsmall - xxxxlarge) to set line height
   */
  lineHeight?: ResponsiveValue<LineHeights>
}
