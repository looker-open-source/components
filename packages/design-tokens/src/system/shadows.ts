/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

export type ElevationLayers = '1' | '2' | '3' | '4' | '5' | '6'

/**
 * @deprecated - Use `Elevations` instead
 */
export type Shadows = { [K in ElevationLayers]: string }
