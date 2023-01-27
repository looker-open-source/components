import type { FilterExpressionType, FilterModel } from '../../types';
/**
 * Maps a FilterItem to a function for converting it to a filter summary
 */
export declare const describeDate: (item: FilterModel, expressionType?: FilterExpressionType | undefined) => string;
