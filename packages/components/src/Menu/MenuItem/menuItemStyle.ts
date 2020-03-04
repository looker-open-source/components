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

import { FontWeights, palette, FontSizes } from '@looker/design-tokens'

export interface MenuItemStateStyle {
  bg: string
  color: string
  fontWeight: FontWeights
  fontSize: FontSizes
  iconColor: string
  iconSize: number
}

export interface MenuItemStyle {
  current: MenuItemStateStyle
  hover: MenuItemStateStyle
  initial: MenuItemStateStyle
  marker: {
    color: string
    size: number
  }
}

const initial: MenuItemStateStyle = {
  bg: palette.white,
  color: palette.charcoal600,
  fontSize: 'small',
  fontWeight: 'normal',
  iconColor: palette.charcoal300,
  iconSize: 20,
}

const hover: MenuItemStateStyle = {
  ...initial,
  bg: palette.charcoal100,
  color: palette.charcoal900,
}

const current: MenuItemStateStyle = {
  ...hover,
  fontWeight: 'bold',
  iconColor: palette.charcoal900,
}

export const defaultMenuItemStyle: MenuItemStyle = {
  current,
  hover,
  initial,
  marker: {
    color: palette.charcoal900,
    size: 4,
  },
}
