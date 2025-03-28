/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { FilterExpressionType } from '@looker/filter-expressions';
import {
  typeToGrammar,
  parseFilterExpression,
  getMatchesAdvancedNode,
  hasMatchesAdvancedNode,
} from '@looker/filter-expressions';
import type { FilterProps } from '../types';

export type UpdateAstProps = Pick<
  FilterProps,
  'expression' | 'userAttributes'
> & {
  expressionType: FilterExpressionType;
};

/**
 * Creates and returns an AST given the filter's type, expression, and any optional userAttributes.
 */
export const updateASTFromProps = ({
  expressionType,
  expression,
  userAttributes,
}: UpdateAstProps) => {
  const { subTypes } = typeToGrammar(expressionType);
  let ast;
  try {
    ast = parseFilterExpression(expressionType, expression, userAttributes);
    if (hasMatchesAdvancedNode(subTypes)(ast)) {
      ast = getMatchesAdvancedNode(expression, ast);
    }
  } catch (error) {
    ast = undefined;
  }
  return ast;
};
