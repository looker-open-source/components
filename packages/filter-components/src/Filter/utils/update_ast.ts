/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type {
  UserAttributeWithValue,
  FilterExpressionType,
} from '@looker/filter-expressions'
import {
  typeToGrammar,
  parseFilterExpression,
  getMatchesAdvancedNode,
  hasMatchesAdvancedNode,
} from '@looker/filter-expressions'

/**
 * Creates and returns an AST given the filter's type, expression, and any optional userAttributes.
 */
export const updateASTFromProps = (
  type: FilterExpressionType,
  expression: string,
  userAttributes?: UserAttributeWithValue[]
) => {
  const { subTypes } = typeToGrammar(type)

  let ast
  try {
    ast = parseFilterExpression(type, expression, userAttributes)
    if (hasMatchesAdvancedNode(subTypes)(ast)) {
      ast = getMatchesAdvancedNode(expression, ast)
    }
  } catch ({ message }) {
    ast = undefined
  }
  return ast
}
