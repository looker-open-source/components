import type { FilterASTNode, FilterExpressionType, UserAttributeWithValue } from '../types';
/**
 * Variables used inside grammars
 */
export declare const parserOptions: {
    Object: ObjectConstructor;
    getNumberFromString: (text: string) => number | bigint;
};
/**
 * A functions that uses a grammar of type type to parse an expression and returns an AST
 */
export declare const parseFilterExpression: (type: FilterExpressionType, expression: string, userAttributes?: UserAttributeWithValue[] | undefined) => FilterASTNode;
