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

import { SemanticColors } from '../../system'
import { palette } from './palette'

const {
  blue500,
  charcoal000,
  charcoal100,
  charcoal300,
  charcoal400,
  charcoal500,
  charcoal600,
  primary500,
  primary600,
  primary700,
  purple000,
  purple100,
  purple400,
  red000,
  red100,
  red400,
  red500,
  red600,
  red700,
  white,
} = palette

export const semanticColors: SemanticColors = {
  danger: {
    altText: red400,
    borderColor: charcoal300,
    dark: red600,
    darker: red700,
    light: red100,
    lighter: red000,
    linkColor: blue500,
    main: red500,
    text: white,
  },
  neutral: {
    altText: charcoal600,
    borderColor: charcoal300,
    dark: charcoal500,
    darker: charcoal600,
    light: charcoal100,
    lighter: charcoal000,
    linkColor: blue500,
    main: charcoal400,
    text: white,
  },
  primary: {
    altText: purple400,
    borderColor: charcoal300,
    dark: primary600,
    darker: primary700,
    light: purple100,
    lighter: purple000,
    linkColor: blue500,
    main: primary500,
    text: white,
  },
  secondary: {
    altText: purple400,
    borderColor: charcoal300,
    dark: primary600,
    darker: primary700,
    light: purple100,
    lighter: purple000,
    linkColor: blue500,
    main: primary500,
    text: white,
  },
}
