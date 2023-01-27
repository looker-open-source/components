import type { FilterModel } from '../../types';
/**
 * Maps a FilterItem to a function for converting it to an expression
 */
export declare const serializeNumberNode: (item: FilterModel) => string;
/**
 * Converts the AST to an array of FilterItems and then
 * converts each item into its expression representation
 */
export declare const numberToString: (root: import("../../types").FilterASTNode) => string;
