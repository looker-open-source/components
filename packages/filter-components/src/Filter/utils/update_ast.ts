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
import { checkAndLoadUserAttributes } from './check_and_load_user_attributes';
import type { FilterProps } from '../types';

export type UpdateAstProps = Pick<
  FilterProps,
  'expression' | 'userAttributes' | 'loadUserAttributes'
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
  loadUserAttributes,
}: UpdateAstProps) => {
  const { subTypes } = typeToGrammar(expressionType);
  let ast;
  try {
    ast = parseFilterExpression(expressionType, expression, userAttributes);
    if (hasMatchesAdvancedNode(subTypes)(ast)) {
      ast = getMatchesAdvancedNode(expression, ast);
    }
    checkAndLoadUserAttributes(loadUserAttributes, userAttributes, ast);
  } catch (error) {
    ast = undefined;
  }
  return ast;
};
