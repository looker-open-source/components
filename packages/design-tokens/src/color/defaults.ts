/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import {
  blue500,
  blue600,
  charcoal800,
  green500,
  purple400,
  red500,
  yellow500,
  white,
} from '../legacy/palette'
import type { CoreColors, IntentColors } from './types'

const calculation = '#319220'
const dimension = '#31689E'
const measure = '#C2772E'

export const defaultCoreColors: CoreColors = {
  background: white,
  key: purple400,
  pageBackground: white,
  text: charcoal800,
}

export const defaultIntentColors: IntentColors = {
  calculation,
  critical: red500,
  dimension,
  inform: blue500,
  link: blue600,
  measure,
  positive: green500,
  warn: yellow500,
}
