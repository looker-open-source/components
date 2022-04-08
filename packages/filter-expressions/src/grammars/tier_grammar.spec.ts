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
import type { GrammarTestItem } from '.'
import {
  convertTypeToOption,
  parseFilterExpression,
  summary,
  treeToList,
} from '../utils'
import { i18nInit } from '../utils/i18n'
import { tierFilterToString } from '../utils/tier/tier_filter_to_string'
import { tierGrammarTestItems } from './tier_grammar_test_expressions'

const filterType = 'tier'
const testStringItem = (testItem: GrammarTestItem) => {
  test(`${testItem.expression}`, () => {
    const { expression, type, describe, output, field } = testItem
    const ast = parseFilterExpression(filterType, expression)
    const description = summary({ type: filterType, expression, field })
    expect(ast).toMatchSnapshot()
    const list = treeToList(ast)
    const item = list[0]

    const itemType =
      type === 'matchesAdvanced' ? item.type : convertTypeToOption(item)
    expect(itemType).toEqual(type)

    // test descriptions
    expect(description).toBe(describe)

    // test output
    const stringOutput =
      type === 'matchesAdvanced'
        ? expression
        : tierFilterToString(ast, filterType, field)
    expect(stringOutput).toBe(output)
  })
}

describe('Tier grammar can parse', () => {
  beforeEach(() => i18nInit())
  tierGrammarTestItems.forEach(testStringItem)
})
