import type { FilterASTNode } from '../../types';
/**
 * Transforms the AST by
 * - combining sequential nodes of the same type into a single node
 * Used for merging number('=') and string('match') nodes of same type
 */
export declare const mergeMultiValueNodes: (root: FilterASTNode, type: string, mergeDifferentIsValue?: boolean) => FilterASTNode;
