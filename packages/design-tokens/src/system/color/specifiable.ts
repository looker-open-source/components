/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

export const coreColors: Array<keyof CoreColors> = ['key', 'background', 'text']

export interface TextColor {
  /**
   * TODO
   * Used for: Text
   * @default charcoal800
   */
  text: string
}

export interface CoreColors extends TextColor {
  /**
   * Default page background
   * Used for: application background
   * @default white
   */
  background: string

  /**
   * Key color is applied strategically across the UI
   * Used for: default action buttons, toggle switches, interactive component accents
   * @default purple400
   */
  key: string
}

export const intentColors: Array<keyof IntentColors> = [
  'link',
  'critical',
  'warn',
  'positive',
  'inform',
]

export interface IntentColors {
  /**
   * Link text color
   * Used for: Breadcrumb, external link
   * @default blue600
   */
  link: string
  /**
   * Critical intent color
   * Used for: Delete button, error and validation messages
   * @default red500
   */
  critical: string
  /**
   * Warn intent color
   * Used for: Warning banner
   * @default yellow500
   */
  warn: string
  /**
   * Positive intent color
   * Used for: Positive banner
   * @default green500
   */
  positive: string
  /**
   * Inform intent color
   * Used for: Info banner
   * @default blue500
   */
  inform: string
}

export type SpecifiableColors = CoreColors & IntentColors
export const specifiableColors: Array<keyof SpecifiableColors> = [
  ...coreColors,
  ...intentColors,
]
