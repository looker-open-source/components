/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import {
  blue500,
  blue600,
  charcoal500,
  charcoal800,
  green500,
  purple400,
  red500,
  yellow500,
  white,
} from '../../legacy/palette'
import { IntentColors } from '../../system/color/specifiable'
import { CoreColors, SpecifiableColors, Colors } from '../../system'
import { generateSurfaceColors } from '../../utils/color/surface'
import { generateIntentDerivatives } from '../../utils/color/intent'
import { fallbackBlends, fallbackStateful } from './fallbacks'

/* eslint-disable sort-keys-fix/sort-keys-fix */

export const defaultCoreColors: CoreColors = {
  background: white,
  text: charcoal800,
  key: purple400,
}

export const defaultIntentColors: IntentColors = {
  link: blue600,
  critical: red500,
  warn: yellow500,
  neutral: charcoal500,
  positive: green500,
  inform: blue500,
}

/**
 * @TODO - Deprecate code below and replace with `generatorColors` function
 * to create a single source-of-truth.
 *
 * export const colors = generateColors({
 *   ...defaultCoreColors,
 *   ...defaultIntentColors,
 * })
 *
 */

const specifiableColors: SpecifiableColors = {
  ...defaultCoreColors,
  ...generateSurfaceColors(defaultCoreColors),
  ...defaultIntentColors,
  ...generateIntentDerivatives(defaultIntentColors),
}

export const colors: Colors = {
  ...specifiableColors,
  ...fallbackBlends,
  ...fallbackStateful,
}
