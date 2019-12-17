/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

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

import { Colors } from '../../system'
import { palette } from './palette'

const {
  blue500,
  blue600,
  charcoal000,
  charcoal100,
  charcoal200,
  charcoal300,
  charcoal400,
  charcoal500,
  charcoal600,
  charcoal800,
  green500,
  purple400,
  red500,
  yellow500,
  white,
} = palette

/* eslint-disable sort-keys */

export const colors: Colors = {
  background: white,
  foreground: charcoal800,
  accent: purple400,
  primary: purple400,
  surface: white,
  u1: charcoal100,
  u2: charcoal200,
  u3: charcoal300,
  u4: charcoal400,
  u5: charcoal800,

  text1: charcoal800,
  text2: charcoal600,
  text3: charcoal500,
  text4: charcoal400,

  field1: white,
  field2: charcoal000,

  inverse1: white,
  inverse2: charcoal800,

  link: blue600,
  critical: red500,
  warn: yellow500,
  neutral: charcoal400,
  positive: green500,
  inform: blue500,
}
