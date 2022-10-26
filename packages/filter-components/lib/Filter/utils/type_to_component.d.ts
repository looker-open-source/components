import type { FilterExpressionType } from '@looker/filter-expressions';
import type { FC } from 'react';
import type { FilterParamProps } from '../types/filter_param_props';
declare type ComponentMapType = {
    [type in FilterExpressionType]: FC<FilterParamProps<any>>;
};
/**
 * A map of available filter types and the grammar properties needed to parse and display
 */
export declare const componentsMap: ComponentMapType;
export declare const typeToComponent: (type: FilterExpressionType) => FC<FilterParamProps<any>>;
export {};
