import type { FilterASTNode } from '../../types';
/**
 * Remove node from the AST
 */
export declare const removeNode: (root: FilterASTNode, nodeId: string) => FilterASTNode | undefined;
