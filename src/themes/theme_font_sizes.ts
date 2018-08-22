import { rem } from 'polished'
import { RampSizes } from '../styles/ramp_sizes'

export interface ThemeFontRamp {
  [RampSizes.One]: string
  [RampSizes.Two]: string
  [RampSizes.Three]: string
  [RampSizes.Four]: string
  [RampSizes.Five]: string
  [RampSizes.Six]: string
  [RampSizes.D1]: string
  [RampSizes.D2]: string
  [RampSizes.D3]: string
}

// tslint:disable:object-literal-sort-keys
export const themeFontRamp: ThemeFontRamp = {
  [RampSizes.D1]: rem(58),
  [RampSizes.D2]: rem(46),
  [RampSizes.D3]: rem(36),
  [RampSizes.One]: rem(25),
  [RampSizes.Two]: rem(22),
  [RampSizes.Three]: rem(18),
  [RampSizes.Four]: rem(16),
  [RampSizes.Five]: rem(14),
  [RampSizes.Six]: rem(12)
}

// tslint:disable:object-literal-sort-keys
export const themeLineHeightRamp: ThemeFontRamp = {
  [RampSizes.D1]: rem(84),
  [RampSizes.D2]: rem(64),
  [RampSizes.D3]: rem(52),
  [RampSizes.One]: rem(40),
  [RampSizes.Two]: rem(32),
  [RampSizes.Three]: rem(28),
  [RampSizes.Four]: rem(24),
  [RampSizes.Five]: rem(20),
  [RampSizes.Six]: rem(16)
}
