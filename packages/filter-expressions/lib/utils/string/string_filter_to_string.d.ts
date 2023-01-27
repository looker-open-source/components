import type { FilterASTNode } from '../../types';
/**
 * Converts the AST to an array of FilterItems and then
 * converts each item into its expression representation
 */
export declare const stringFilterToString: (root: FilterASTNode) => string;
