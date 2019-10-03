import { SizeLarge, SizeMedium, SizeNone, SizeSmall, SizeXSmall } from './space'

export type RadiusSizes =
  | SizeNone
  | SizeXSmall
  | SizeSmall
  | SizeMedium
  | SizeLarge

export type Radii = Record<RadiusSizes, string>
