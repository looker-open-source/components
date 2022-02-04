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
import { parseFilterExpression } from '../parse_filter_expression'
import type { FilterModel } from '../../types'
import { sanitizeNumber } from './sanitize_number'

describe('Number To String', () => {
  const expression = '1,2,3'

  it('works when switching to > ' + expression, () => {
    const ast = parseFilterExpression('number', expression)
    const item = sanitizeNumber({ ...ast, type: '>' } as FilterModel)
    expect(item.value).toMatchObject([1])
  })

  it('works when switching to null ' + expression, () => {
    const ast = parseFilterExpression('number', expression)
    const { id, is } = ast
    const expected = { id, type: 'null', is }
    const item = sanitizeNumber({ ...ast, type: 'null' } as FilterModel)
    expect(item).toMatchObject(expected)
  })

  it('works when switching to between ' + expression, () => {
    const ast = parseFilterExpression('number', expression)
    const { id, is } = ast
    const expected = { id, type: 'between', is, bounds: '[]', low: 1, high: 1 }
    const item = sanitizeNumber({ ...ast, type: 'between' } as FilterModel)
    expect(item).toMatchObject(expected)
  })

  it('works when switching to matchesAdvanced ' + expression, () => {
    const ast = parseFilterExpression('number', expression)
    const { id, is } = ast
    const expected = { id, type: 'matchesAdvanced', is, value: [1, 2, 3] }
    const item = sanitizeNumber({
      ...ast,
      type: 'matchesAdvanced',
    } as FilterModel)
    expect(item).toMatchObject(expected)
  })

  it('works when switching from between to = ' + expression, () => {
    const ast = parseFilterExpression('number', '(1,100)')
    const { id, is } = ast
    const expected = { id, type: '=', is, value: [] }
    const item = sanitizeNumber({ ...ast, type: '=' } as FilterModel)
    expect(item).toMatchObject(expected)
  })

  it('works when switching from between types with value 0', () => {
    const ast = parseFilterExpression('number', '>0')
    const { id, is } = ast
    const expected = { id, type: '<', is, value: [0] }
    const item = sanitizeNumber({ ...ast, type: '<' } as FilterModel)
    expect(item).toMatchObject(expected)
  })
})
