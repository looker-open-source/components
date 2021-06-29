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
import type { UserAttributeWithValue } from '../types'
import { TYPE_USER_ATTRIBUTE } from '../types'
import { hasUserAttributeNodeWithoutValue } from './has_user_attribute_node_without_value'
import { parseFilterExpression } from './parse_filter_expression'

describe('hasUserAttributeNodeWithoutValue', () => {
  const getUserAttribute = (
    overrideProps?: Partial<UserAttributeWithValue>
  ) => ({
    name: 'xyz',
    value: 'some-value',
    type: TYPE_USER_ATTRIBUTE,
    ...overrideProps,
  })

  describe('when there are no user attributes', () => {
    it('should return false', () => {
      const testExpression = '1'
      const ast = parseFilterExpression('string', testExpression)

      expect(hasUserAttributeNodeWithoutValue(ast)).toBe(false)
    })
  })

  describe('when another user attribute exists with a value', () => {
    it('should return true', () => {
      const testExpression = "{{ _user_attributes['abc'] }}"
      const userAttribute = getUserAttribute()

      const ast = parseFilterExpression('string', testExpression, [
        userAttribute,
      ])
      expect(hasUserAttributeNodeWithoutValue(ast)).toBe(true)
    })
  })

  describe('when the user attribute exists but has an empty string value', () => {
    it('should return true', () => {
      const testExpression = "{{ _user_attributes['xyz'] }}"
      const userAttribute = getUserAttribute({ value: '' })

      const ast = parseFilterExpression('string', testExpression, [
        userAttribute,
      ])
      expect(hasUserAttributeNodeWithoutValue(ast)).toBe(true)
    })
  })

  describe('when the user attribute exists but has no value', () => {
    it('should return true', () => {
      const testExpression = "{{ _user_attributes['xyz'] }}"
      const userAttribute = getUserAttribute({ value: null })

      const ast = parseFilterExpression('string', testExpression, [
        userAttribute,
      ])
      expect(hasUserAttributeNodeWithoutValue(ast)).toBe(true)
    })
  })

  describe('when the user attribute exists and has a value', () => {
    it('should return false', () => {
      const testExpression = "{{ _user_attributes['xyz'] }}"
      const userAttribute = getUserAttribute()

      const ast = parseFilterExpression('string', testExpression, [
        userAttribute,
      ])
      expect(hasUserAttributeNodeWithoutValue(ast)).toBe(false)
    })
  })
})
