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

import type { Elevations } from './types'
export { Elevations, ElevationRamp } from './types'

const colorBase = '60, 64, 67'
const baseShadowColor = `rgba(${colorBase}, .30)`
const ambientShadowColor = `rgba(${colorBase}, .15)`

export const elevations: Elevations = {
  plus0: `0 0 0 1px rgba(${colorBase}, .2)`,
  plus1: `0px 1px 2px 0px ${baseShadowColor},0px 1px 3px 1px ${ambientShadowColor}`,
  plus2: `0px 1px 2px 0px ${baseShadowColor},0px 2px 6px 2px ${ambientShadowColor}`,
  plus3: `0px 1px 3px 0px  ${baseShadowColor},0px 4px 8px 3px ${ambientShadowColor}`,
  plus4: `0px 2px 3px 0px  ${baseShadowColor},0px 6px 10px 4px ${ambientShadowColor}`,
  plus5: `0px 4px 4px 0px  ${baseShadowColor},0px 8px 12px 6px ${ambientShadowColor}`,
}
