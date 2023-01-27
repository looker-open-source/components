/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { parseFilterExpression } from '../parse_filter_expression'
import type { FilterASTNode, UserAttributeWithValue } from '../../types'
import { getUserAttributeMatchingTypeAndExpression } from './get_user_attribute_matching_type_and_expression'

jest.mock('../parse_filter_expression')

describe('getUserAttributeMatchingTypeAndExpression', () => {
  const userAttributeName = 'ua-name'
  const ast = {
    attributeName: userAttributeName,
  } as FilterASTNode

  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(parseFilterExpression as jest.Mock<any>).mockReturnValue(ast)
  })

  describe('when there are no user attributes', () => {
    it('should return null', () => {
      expect(
        getUserAttributeMatchingTypeAndExpression('string', 'expr')
      ).toBeNull()
      expect(
        getUserAttributeMatchingTypeAndExpression('string', 'expr', [])
      ).toBeNull()
    })
  })

  describe('when the user attribute is not found', () => {
    const anotherUserAttribute = {
      name: 'ua-name-2',
    } as UserAttributeWithValue

    it('should return null', () => {
      expect(
        getUserAttributeMatchingTypeAndExpression('string', 'expr', [
          anotherUserAttribute,
        ])
      ).toBeNull()
    })
  })

  describe('when the user attribute is found', () => {
    const userAttribute = {
      name: userAttributeName,
    } as UserAttributeWithValue

    it('should return it', () => {
      expect(
        getUserAttributeMatchingTypeAndExpression('string', 'expr', [
          userAttribute,
        ])
      ).toBe(userAttribute)
    })
  })
})
