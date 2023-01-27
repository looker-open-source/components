/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { SpecifiableColors } from './types'
import { defaultCoreColors, defaultIntentColors } from './defaults'

export const defaultSpecifiableColors: SpecifiableColors = {
  ...defaultCoreColors,
  ...defaultIntentColors,
}
