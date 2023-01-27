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
import type { FilterExpressionType, UserAttributeWithValue } from '../../types'
import { TYPE_USER_ATTRIBUTE } from '../../types'
import { i18nInit } from '../i18n'
import { grammarsMap } from '../type_to_grammar'
import { summary } from './summary'

describe('Summary', () => {
  Object.keys(grammarsMap).forEach((type) => {
    const expression = '&,,,$%testContext.#,,,$,testContext.'
    it(`for invalid input ${expression} should return the invalid input`, () => {
      expect(
        summary({ type: type as FilterExpressionType, expression })
      ).toEqual(expression)
    })
  })

  it('for matches advanced is equal to expression', () => {
    const expression = 'before last week'
    expect(summary({ type: 'date', expression })).toEqual(expression)
  })
})

describe('Summary for empty string', () => {
  i18nInit().catch((e) => {
    throw new Error(e)
  })
  it.each(Object.keys(grammarsMap))('%s', (type) => {
    expect(summary({ type: type as FilterExpressionType })).toMatchSnapshot()
  })
})

describe('Summary for user attribute', () => {
  const getUserAttribute = (overrideProps?: Partial<UserAttributeWithValue>) =>
    ({
      label: 'xyz-label',
      name: 'xyz',
      type: TYPE_USER_ATTRIBUTE,
      value: 'some-value',
      ...overrideProps,
    } as any as UserAttributeWithValue) // eslint-disable-line @typescript-eslint/no-explicit-any

  it('with value', () => {
    const userAttributeWithValue = getUserAttribute()
    expect(
      summary({
        type: 'string',
        expression: "{{ _user_attributes['xyz'] }}",
        userAttributes: [userAttributeWithValue],
      })
    ).toMatchSnapshot()
  })

  it('with value and required', () => {
    const userAttributeWithValue = getUserAttribute()
    expect(
      summary({
        type: 'string',
        expression: "{{ _user_attributes['xyz'] }}",
        userAttributes: [userAttributeWithValue],
        required: true,
      })
    ).toMatchSnapshot()
  })

  it('without value', () => {
    const userAttributeWithoutValue = getUserAttribute({ value: null })
    expect(
      summary({
        type: 'string',
        expression: "{{ _user_attributes['xyz'] }}",
        userAttributes: [userAttributeWithoutValue],
      })
    ).toMatchSnapshot()
  })

  it('without value and required', () => {
    const userAttributeWithoutValue = getUserAttribute({ value: null })
    expect(
      summary({
        type: 'string',
        expression: undefined,
        userAttributes: [userAttributeWithoutValue],
        required: true,
      })
    ).toMatchSnapshot()
  })
})
