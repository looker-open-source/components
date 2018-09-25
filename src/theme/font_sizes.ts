import { rem } from 'polished'

export type RampSizes = '1' | '2' | '3' | '4' | '5' | '6' | 'd1' | 'd2' | 'd3'
export type FontRamp = Record<RampSizes, string>

// tslint:disable:object-literal-sort-keys
export const fontRamp: FontRamp = {
  d1: rem(58),
  d2: rem(46),
  d3: rem(36),
  1: rem(25),
  2: rem(22),
  3: rem(18),
  4: rem(16),
  5: rem(14),
  6: rem(12),
}

export const lineHeightRamp: FontRamp = {
  d1: rem(84),
  d2: rem(64),
  d3: rem(52),
  1: rem(40),
  2: rem(32),
  3: rem(28),
  4: rem(24),
  5: rem(20),
  6: rem(16),
}
