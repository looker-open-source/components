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

export interface BlendColors extends TextColors, UIColors {}

export interface UIColors {
  /**
   * Secondary background / contrast
   * Used for: sidebar background, current menu item background
   * @default charcoal100
   */
  ui1: string
  /**
   * Tertiary background / contrast
   * Used for: filter chip background, subtle borders
   * @default charcoal200
   */
  ui2: string
  /**
   * Lower contrast / subtle elements
   * Used for: dividers, input border, subtle icons
   * @default charcoal300
   */
  ui3: string
  /**
   * Medium Contrast element
   * Used for: high contrast border, icons
   * @default charcoal400
   */
  ui4: string
  /**
   * High contrast element
   * Used for: Main navigation background, Sidebar navigation current marker
   * @default charcoal800
   */
  ui5: string
}

export interface TextColors {
  /**
   * Primary Text
   * Used for: Headers, Labels, Dashboard tile titles
   * @default charcoal800
   */
  text1: string
  /**
   * Secondary Text
   * Used for: Headers, Labels, Dashboard tile titles
   * @default charcoal700
   */
  text2: string
  /**
   * Tertiary Text
   * Used for: Sub headers,  Tile text, placeholder text
   * @default charcoal600
   */
  text3: string
  /**
   * Reduced emphasis text
   * Used for: Help text, meta information
   * @default charcoal500
   */
  text4: string
  /**
   * TODO - Should be defined
   * Used for: TBD
   * @default charcoal400
   */
  text5: string
}
