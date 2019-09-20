import { SizeLarge, SizeMedium, SizeNone, SizeSmall, SizeXSmall } from './types'

export type RadiusSizes =
  | SizeNone
  | SizeXSmall
  | SizeSmall
  | SizeMedium
  | SizeLarge

export type Radii = Record<RadiusSizes, string>

interface Radiii extends Radii {
  [key: string]: string
}

/* eslint-disable sort-keys */
export const radii: Radiii = {
  none: '0rem',
  xsmall: '0.0625rem',
  small: '0.125rem',
  medium: '0.25rem',
  large: '0.5rem',
}
