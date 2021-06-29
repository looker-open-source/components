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
import type { UserAttributeWithValue, FilterExpressionType } from '../../types'
import { parseFilterExpression } from '../parse_filter_expression'

/**
 * Returns the user attribute matching the filter "type" and "expression".
 * If no matching user attribute is found, we return `null`.
 *
 * For example, if we have those parameters:
 * - type: 'string'
 * - expression: `{{ _user_attributes['xyz'] }}`
 * - userAttributes: [{ name: 'xyz', otherUserAttributeData... }]
 *
 * ... the expression will be parsed and we'll be able to successfully
 * match the AST with the "xyz" user attribute, which we will return.
 *
 * @param type the filter type
 * @param expression the value of the filter (which should contain the name of the user attribute)
 * @param userAttributes the list of user attributes where we should look
 */
export const getUserAttributeMatchingTypeAndExpression = (
  type: FilterExpressionType,
  expression = '',
  userAttributes?: UserAttributeWithValue[]
): UserAttributeWithValue | null => {
  const ast = parseFilterExpression(type, expression, userAttributes)
  return userAttributes?.find((ua) => ua.name === ast.attributeName) || null
}
