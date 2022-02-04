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
import type { UserAttributeWithValue, FilterModel } from '../../types'
import { parseFilterExpression } from '../parse_filter_expression'
import { sanitizeString } from './sanitize_string'

describe('Sanitize String tests', () => {
  it('works when switching to startsWith', () => {
    const expression = 'foo'
    const ast = parseFilterExpression('string', expression)
    const item = sanitizeString({ ...ast, type: 'startsWith' } as FilterModel)
    expect(item.value).toMatchObject(['foo'])
    expect(item.type).toBe('startsWith')
  })

  it('works when switching to match', () => {
    const expression = 'foo'
    const ast = parseFilterExpression('string', expression)
    const item = sanitizeString({ ...ast, type: 'match' } as FilterModel)
    expect(item.value).toMatchObject(['foo'])
    expect(item.type).toBe('match')
  })

  it('replaces the userAttribute value when switching to match', () => {
    const userAttributeWithValue: UserAttributeWithValue = {
      name: 'id',
      label: 'id',
      value: 'ua',
      rank: 0,
      value_is_hidden: false,
      source: '',
      hidden_value_domain_whitelist: '',
      user_attribute_id: 1,
      user_can_edit: false,
      user_id: 1,
      can: {},
    }
    const expression = `{{ _user_attributes['id'] }}`
    const ast = parseFilterExpression('string', expression, [
      userAttributeWithValue,
    ])
    expect(ast).toMatchSnapshot()
    const item = sanitizeString({ ...ast, type: 'match' } as FilterModel, [
      userAttributeWithValue,
    ])
    expect(item.value).toMatchObject(['ua'])
    expect(item.type).toBe('match')
  })
})
