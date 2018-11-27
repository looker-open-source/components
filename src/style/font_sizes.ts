import { rem } from 'polished'

export type RampSizes =
  | '2xsmall'
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | '2xlarge'
  | '3xlarge'
  | '4xlarge'
export type FontRamp = Record<RampSizes, string>

// tslint:disable:object-literal-sort-keys
export const fontSizes: FontRamp = {
  '4xlarge': rem(46),
  '3xlarge': rem(36),
  '2xlarge': rem(25),
  xlarge: rem(22),
  large: rem(18),
  medium: rem(16),
  small: rem(14),
  xsmall: rem(12),
  '2xsmall': rem(11),
}

export const lineHeights: FontRamp = {
  '4xlarge': rem(64),
  '3xlarge': rem(52),
  '2xlarge': rem(40),
  xlarge: rem(32),
  large: rem(28),
  medium: rem(24),
  small: rem(20),
  xsmall: rem(16),
  '2xsmall': rem(16),
}
