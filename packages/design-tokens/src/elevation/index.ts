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

import { Elevations } from './types'
export { Elevations } from './types'

const colorBase = '60, 64, 67'
const color1 = `rgba(${colorBase}, .30)`
const color2 = `rgba(${colorBase}, .15)`

export const elevations: Elevations = {
  plus1: `0px 1px 2px 0px ${color1},0px 1px 3px 1px ${color2}`,
  plus2: `0px 1px 2px 0px ${color1},0px 2px 6px 2px ${color2}`,
  plus3: `0px 1px 3px 0px  ${color1},0px 4px 8px 3px ${color2}`,
  plus4: `0px 2px 3px 0px  ${color1},0px 6px 10px 4px ${color2}`,
  plus5: `0px 4px 4px 0px  ${color1},0px 8px 12px 6px ${color2}`,
}
