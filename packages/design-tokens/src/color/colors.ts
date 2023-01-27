/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { generateDerivativeColors } from './utils/generateDerivativeColors'
import { fallbackBlends, fallbackStateful } from './fallbacks'
import type { Colors } from './types'
import { defaultSpecifiableColors } from './defaultSpecifiableColors'

const derivedColors = generateDerivativeColors(
  defaultSpecifiableColors,
  fallbackBlends
)

export const colors: Colors = {
  ...defaultSpecifiableColors,
  ...derivedColors,
  ...fallbackBlends,
  ...fallbackStateful,
}
