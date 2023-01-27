import type { FilterASTNode, FilterExpressionType, FilterModel } from '../../types';
export interface DateFilterItemToStringMapType {
    [name: string]: DateFilterItemToStringFunction;
}
export declare type DateFilterItemToStringFunction = (item: FilterModel, showTime: boolean) => string;
/**
 * Converts the AST to an array of FilterItems and then
 * converts each item into its expression representation
 */
export declare const dateFilterToString: (root: FilterASTNode, type: FilterExpressionType) => string;
