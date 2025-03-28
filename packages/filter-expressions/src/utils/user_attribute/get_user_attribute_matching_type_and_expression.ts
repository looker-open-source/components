/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { UserAttributeWithValue, FilterExpressionType } from '../../types';
import { parseFilterExpression } from '../parse_filter_expression';

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
  const ast = parseFilterExpression(type, expression, userAttributes);
  return userAttributes?.find(ua => ua.name === ast.attributeName) || null;
};
