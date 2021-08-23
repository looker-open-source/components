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
import type { FilterExpressionType } from '@looker/filter-expressions'
import { canRenderFilter } from './can_render_filter'

const renderFilterTests: TestItem[] = [
  {
    // slider can render a number
    expression: '25',
    expressionType: 'number',
    config: { type: 'slider', display: 'inline' },
    result: true,
  },
  {
    // slider can't render multiple numbers
    expression: '20,30,40',
    expressionType: 'number',
    config: { type: 'slider', display: 'inline' },
    result: false,
  },
  {
    // range slider can render a range
    expression: '[25,75]',
    expressionType: 'number',
    config: { type: 'range_slider', display: 'inline' },
    result: true,
  },
  {
    // range slider can't render a non-range
    expression: '25',
    expressionType: 'number',
    config: { type: 'range_slider', display: 'inline' },
    result: false,
  },
]

interface TestItem {
  expression: string
  expressionType: FilterExpressionType
  config: { type: string; display: string }
  result: boolean
}

const testFilterConfig = (testItem: TestItem) => {
  test(`${testItem.expression} ${testItem.config.type} ${testItem.result}`, () => {
    const { result, expression, expressionType, config } = testItem
    expect(canRenderFilter({ expression, expressionType, config })).toBe(result)
  })
}

describe('Test that filter can be rendered', () => {
  renderFilterTests.forEach(testFilterConfig)
})
