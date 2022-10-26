import type { IDashboardFilter } from '@looker/sdk';
import type { FC } from 'react';
import React from 'react';
declare type FilterWithExpresison = {
    filter: IDashboardFilter;
    expression?: string;
};
export interface FilterCollectionAction {
    type: 'UPDATE_EXPRESSION' | 'REMOVE_FILTER';
    payload: FilterWithExpresison;
}
export declare type FilterMap = {
    [key: string]: FilterWithExpresison;
};
export declare type FilterCollectionState = {
    filterMap: FilterMap;
};
export declare type FilterContextProps = {
    state: FilterCollectionState;
    updateExpression: (filter: IDashboardFilter, expression: string) => void;
    removeFilter: (filter: IDashboardFilter) => void;
};
export declare const FilterContext: React.Context<FilterContextProps>;
/**
 * FilterCollection's primary purpose is to manage a filter map
 * object, with filter metadata objects as keys and current
 * selected expressions as values.
 *
 * This allows filters with `listens_to_filters` to pull the relevant
 * expressions out when performing a linked filter suggestion query.
 */
export declare const FilterCollection: FC;
export {};
