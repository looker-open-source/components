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

import { IntentColors } from '../../system/color/specifiable'
import { CoreColors, Colors, SpecifiableColors } from '../../system'
import { generateSurfaceColors } from '../../utils/color/surface'
import { fallbackBlends, fallbackStateful } from './fallbacks'
import {
  blue500,
  blue600,
  blue700,
  charcoal400,
  charcoal800,
  green500,
  purple400,
  red500,
  yellow500,
  white,
} from './palette'

/* eslint-disable sort-keys-fix/sort-keys-fix */

export const defaultCoreColors: CoreColors = {
  background: white,
  text: charcoal800,
  key: purple400,
}

export const defaultIntentColors: IntentColors = {
  link: blue600,
  linkInteractive: blue700,
  critical: red500,
  warn: yellow500,
  neutral: charcoal400,
  positive: green500,
  inform: blue500,
}

const specifiableColors: SpecifiableColors = {
  ...defaultCoreColors,
  ...generateSurfaceColors(defaultCoreColors),
  ...defaultIntentColors,
}

export const colors: Colors = {
  ...specifiableColors,
  ...fallbackBlends,
  ...fallbackStateful,
}
