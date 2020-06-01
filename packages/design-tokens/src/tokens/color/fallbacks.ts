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

import { BlendColors } from '../../system/color/blends'
import { StatefulColors } from '../../system/color/stateful'
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
  charcoal900,
  purple000,
  purple100,
  purple300,
  purple400,
  purple500,
  purple600,
  red000,
  red100,
  red400,
  red700,
  red600,
  white,
} from './palette'

/* eslint-disable sort-keys-fix/sort-keys-fix */

export const fallbackBlends: BlendColors = {
  ui1: charcoal100,
  ui2: charcoal200,
  ui3: charcoal300,
  ui4: charcoal400,
  ui5: charcoal800,
  text0: charcoal900,
  text1: charcoal800,
  text2: charcoal700,
  text3: charcoal600,
  text4: charcoal500,
  text5: charcoal400,
  text6: charcoal300,
}

export const fallbackStateful: StatefulColors = {
  keySubtle: purple000,
  keyAccent: purple100,
  keyFocus: purple300,
  keyInteractive: purple500,
  keyPressed: purple600,
  keyText: white,
  keyTextAlt: purple400,

  criticalSubtle: red000,
  criticalAccent: red100,
  criticalInteractive: red600,
  criticalPressed: red700,
  criticalText: white,
  criticalTextAlt: red400,

  neutralSubtle: charcoal000,
  neutralAccent: charcoal100,
  neutralInteractive: charcoal500,
  neutralPressed: charcoal600,
  neutralText: white,
  neutralTextAlt: charcoal600,
}
