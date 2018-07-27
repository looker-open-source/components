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
  [RampSizes.One]: rem(28),
  [RampSizes.Two]: rem(22),
  [RampSizes.Three]: rem(19),
  [RampSizes.Four]: rem(16),
  [RampSizes.Five]: rem(14),
  [RampSizes.Six]: rem(12),
  [RampSizes.D1]: rem(62),
  [RampSizes.D2]: rem(52),
  [RampSizes.D3]: rem(38)
}
