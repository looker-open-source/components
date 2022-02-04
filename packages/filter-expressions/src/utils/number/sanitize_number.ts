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
import type { FilterModel } from '../../types'

export const sanitizeNumber = (item: FilterModel) => {
  const {
    id = '0',
    is = true,
    type,
    value = [],
    bounds = '[]',
    high,
    low,
  } = item
  const [firstValue] = value
  switch (type) {
    case '=':
      return { id, is, type, value }
    case '>':
    case '<':
    case '>=':
    case '<=':
      return {
        id,
        is,
        type,
        value: firstValue !== undefined ? [firstValue] : [],
      }
    case 'between':
      return {
        id,
        is,
        type,
        bounds,
        low: low ?? firstValue,
        high: high ?? firstValue,
      }
    case 'null':
      return { id, is, type }
    default:
      return { ...item, type }
  }
}
