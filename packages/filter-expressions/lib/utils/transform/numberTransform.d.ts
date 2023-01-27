import type { FilterASTNode } from '../../types';
/**
 * Applies the following transformations on the number AST:
 *  - combine the value array on nodes of type '='
 */
export declare const numberTransform: (root: FilterASTNode) => FilterASTNode;
