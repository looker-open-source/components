import type { FilterASTNode, TransformFunction } from '../../types';
/**
 * Basic AST transform clones and adds an ID to each node
 */
export declare const transformAST: (root: FilterASTNode, transforms: TransformFunction[]) => FilterASTNode;
