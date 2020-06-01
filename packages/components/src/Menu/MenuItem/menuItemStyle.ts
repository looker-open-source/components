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

import { FontWeights, FontSizes, theme } from '@looker/design-tokens'

const { colors } = theme

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
  bg: colors.background,
  color: colors.text3,
  fontSize: 'small',
  fontWeight: 'normal',
  iconColor: colors.text6,
  iconSize: 20,
}

const hover: MenuItemStateStyle = {
  ...initial,
  bg: colors.ui1,
  color: colors.text0,
}

const current: MenuItemStateStyle = {
  ...hover,
  fontWeight: 'bold',
  iconColor: colors.text0,
}

export const defaultMenuItemStyle: MenuItemStyle = {
  current,
  hover,
  initial,
  marker: {
    color: colors.text0,
    size: 4,
  },
}
