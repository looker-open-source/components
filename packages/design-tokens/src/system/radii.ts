/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type {
  SizeLarge,
  SizeMedium,
  SizeNone,
  SizeSmall,
  SizeXSmall,
} from './size'

export type RadiusSizes =
  | SizeNone
  | SizeXSmall
  | SizeSmall
  | SizeMedium
  | SizeLarge

export type Radii = Record<RadiusSizes, string>
