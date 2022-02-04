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
