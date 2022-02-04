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
import { parseToHsl } from 'polished'

export const getBrandedTint = (
  type: 'selected' | 'hover' | 'pressed' | 'border',
  color: string
) => {
  const hue = parseToHsl(color).hue
  switch (type) {
    case 'selected':
      return `hsla(${hue}, 100%, 98%, 100%)`
    case 'hover':
      return `hsla(${hue}, 25%, 97%, 70%)`
    case 'pressed':
      return `hsla(${hue}, 50%, 96%, 90%)`
    case 'border':
      return `hsla(${hue}, 25%, 90%, 100%)`
    default:
      return `hsla(${hue}, 100%, 98%, 100%)`
  }
}
