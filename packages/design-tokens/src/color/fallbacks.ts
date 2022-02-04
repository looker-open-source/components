/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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
  charcoal000,
  charcoal100,
  charcoal200,
  charcoal300,
  charcoal400,
  charcoal500,
  charcoal600,
  charcoal700,
  charcoal800,
  purple000,
  purple100,
  purple300,
  purple400,
  red000,
  red100,
  red300,
  red400,
  red500,
  white,
} from '../legacy/palette'
import { defaultSpecifiableColors } from './defaultSpecifiableColors'
import type { BlendColors, StatefulColors } from './types'
import { generateInteractive, generatePressed } from './utils'
import { generateExtendedStatefulColors } from './utils/generateStatefulColors'

/* eslint-disable sort-keys-fix/sort-keys-fix */

export const fallbackBlends: BlendColors = {
  ui1: charcoal100,
  ui2: charcoal200,
  ui3: charcoal300,
  ui4: charcoal400,
  ui5: charcoal800,
  text1: charcoal400,
  text2: charcoal500,
  text3: charcoal600,
  text4: charcoal700,
  text5: charcoal800,
}

export const fallbackStateful: StatefulColors = {
  keySubtle: purple000,
  keyAccent: purple100,
  keyFocus: purple300,
  keyInteractive: generateInteractive(purple400),
  keyPressed: generatePressed(purple400),
  keyText: white,
  keyBorder: purple400,

  criticalSubtle: red000,
  criticalAccent: red100,
  criticalFocus: red300,
  criticalInteractive: generateInteractive(red500),
  criticalPressed: generatePressed(red500),
  criticalText: white,
  criticalBorder: red400,

  neutralSubtle: charcoal000,
  neutralAccent: charcoal100,
  neutralFocus: charcoal300,
  neutralInteractive: generateInteractive(charcoal500),
  neutralPressed: generatePressed(charcoal500),
  neutralText: white,
  neutralBorder: charcoal400,

  ...generateExtendedStatefulColors(defaultSpecifiableColors),
}
