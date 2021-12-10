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
import { convertTypeToMatchesAdvancedOption, treeToList } from '..'
import type { GrammarTestItem } from '../../grammars'
import { dateExpressionTestItems } from '../../grammars'
import { parseFilterExpression } from '../parse_filter_expression'
import { dateFilterToString } from './date_filter_to_string'

describe('Date To String', () => {
  dateExpressionTestItems.forEach((testItem: GrammarTestItem) => {
    const { expression, output } = testItem

    it(
      'date filter output matches expected value for expression ' + expression,
      () => {
        const ast = parseFilterExpression('date', expression)
        // test item type
        const list = treeToList(ast)
        const item = list[0]
        // test output
        // some filter types can't be represented by DateFilter,
        // we expect this to be parsed as `type` above,
        // but be converted to `matchesAdvanced`
        const dateComponentType = convertTypeToMatchesAdvancedOption(item)
        const stringOutput =
          dateComponentType === 'matchesAdvanced'
            ? expression
            : dateFilterToString(ast, 'date')
        expect(stringOutput).toBe(output)
      }
    )
  })
})
