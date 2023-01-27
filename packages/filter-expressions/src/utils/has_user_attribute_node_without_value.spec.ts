/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
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
