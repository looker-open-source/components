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
import { parseFilterExpression } from '../utils'
import type { GrammarTestItem } from './grammar_test_utils'
import { stringGrammarTestItems } from './string_grammar_test_expressions'

import { convertTypeToOption } from '../utils/option/convert_type_to_option'
import { stringFilterToString } from '../utils/string/string_filter_to_string'
import { summary } from '../utils/summary/summary'
import { treeToList } from '../utils/tree/tree_to_list'

const filterType = 'string'
const testStringItem = (testItem: GrammarTestItem) => {
  test(`${testItem.expression}`, () => {
    const { expression, type, describe, output } = testItem
    const ast = parseFilterExpression(filterType, expression)
    const description = summary({ type: filterType, expression })
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
      type === 'matchesAdvanced' ? expression : stringFilterToString(ast)
    expect(stringOutput).toBe(output)
  })
}

describe('String grammar can parse', () => {
  stringGrammarTestItems.forEach(testStringItem)
})

describe('String grammar can parse expanded character sets', () => {
  it('can parse japanese characters', () => {
    const expression = 'りんご,グレープ'
    const ast = parseFilterExpression('string', expression)
    const { type, value } = ast
    expect(type).toBe('match')
    expect(value).toHaveLength(2)
    expect(value[0]).toBe('りんご')
    expect(value[1]).toBe('グレープ')
    expect(ast).toMatchInlineSnapshot(`
      Object {
        "id": 1,
        "is": true,
        "left": undefined,
        "right": undefined,
        "type": "match",
        "value": Array [
          "りんご",
          "グレープ",
        ],
      }
    `)
  })
})
