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
import { parseFilterExpression } from './parse_filter_expression'
import { typeToGrammar } from './type_to_grammar'
import { getMatchesAdvancedNode } from './get_matches_advanced_node'
import { hasMatchesAdvancedNode } from './has_matches_advanced_node'

describe('hasMatchesAdvancedNode', () => {
  it('returns true for a matches advanced date item ', () => {
    const testExpression = 'before last week'
    const type = 'date'
    const { subTypes } = typeToGrammar(type)
    const ast = parseFilterExpression(type, testExpression)
    expect(hasMatchesAdvancedNode(subTypes)(ast)).toBe(true)
  })

  it('returns false for a past node item', () => {
    const testExpression = '3 months'
    const type = 'date'
    const { subTypes } = typeToGrammar(type)
    const ast = parseFilterExpression(type, testExpression)
    expect(hasMatchesAdvancedNode(subTypes)(ast)).toBe(false)
  })

  it('returns true for a matches advanced node', () => {
    const testExpression = '3 months'
    const type = 'date'
    const { subTypes } = typeToGrammar(type)
    const newAST = getMatchesAdvancedNode(testExpression)
    expect(hasMatchesAdvancedNode(subTypes)(newAST)).toBe(true)
  })
})
