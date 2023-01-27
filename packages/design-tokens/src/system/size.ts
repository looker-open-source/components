/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

export type SizeNone = 'none'
export type SizeXXXSmall = 'xxxsmall'
export type SizeXXSmall = 'xxsmall'
export type SizeXSmall = 'xsmall'
export type SizeSmall = 'small'
export type SizeMedium = 'medium'
export type SizeLarge = 'large'
export type SizeXLarge = 'xlarge'
export type SizeXXLarge = 'xxlarge'
export type SizeXXXLarge = 'xxxlarge'
export type SizeXXXXLarge = 'xxxxlarge'
export type SizeXXXXXLarge = 'xxxxxlarge'

export type Sizes =
  | SizeXXXSmall
  | SizeXXSmall
  | SizeXSmall
  | SizeSmall
  | SizeMedium
  | SizeLarge

export type SizeRamp = Record<Sizes, string>
