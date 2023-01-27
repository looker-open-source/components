/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

export type ElevationRamp =
  | 'plus0'
  | 'plus1'
  | 'plus2'
  | 'plus3'
  | 'plus4'
  | 'plus5'

export type Elevations = { [K in ElevationRamp]: string }
