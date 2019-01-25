import { rem } from 'polished'
import { LineHeightProps } from 'styled-system'
import { FontRamp, RampSizes } from './font_sizes'

// tslint:disable:object-literal-sort-keys
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
// tslint:enable:object-literal-sort-keys

export type LensLineHeightProps = { [P in keyof LineHeightProps]: RampSizes }
