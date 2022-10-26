import type { UserAttributeWithValue, FilterExpressionType } from '@looker/filter-expressions';
/**
 * Creates and returns an AST given the filter's type, expression, and any optional userAttributes.
 */
export declare const updateASTFromProps: (type: FilterExpressionType, expression: string, userAttributes?: UserAttributeWithValue[] | undefined) => import("@looker/filter-expressions").FilterASTNode | undefined;
