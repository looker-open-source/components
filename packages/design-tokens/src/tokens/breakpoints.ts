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

/**
 * 320px — 480px: Mobile devices. (20rem - 30rem)
 * 481px — 768px: iPads, Tablets. (30rem - 48rem)
 * 769px — 1024px: Small screens, laptops. (48rem - 64rem)
 * 1025px — 1200px: Desktops, large screens. (64rem - 75rem)
 * 1201px and more — Extra large screens, TV. (90rem +)
 **/

type MOBILE = 'mobile'
type TABLET = 'tablet'
type LAPTOP = 'laptop'
type DESKTOP = 'desktop'
type XL = 'xl'

export type NamedBreakpoints = MOBILE | TABLET | LAPTOP | DESKTOP | XL

export const breakpoints = ['30rem', '48rem', '64rem', '75rem', '90rem']

/* eslint-disable sort-keys-fix/sort-keys-fix */
export const BreakpointRamp: Record<NamedBreakpoints, string> = {
  mobile: breakpoints[0],
  tablet: breakpoints[1],
  laptop: breakpoints[2],
  desktop: breakpoints[3],
  xl: breakpoints[4],
}
/* eslint-enable sort-keys-fix/sort-keys-fix */
