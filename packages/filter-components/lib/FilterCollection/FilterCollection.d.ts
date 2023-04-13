import type { IDashboardFilter } from '@looker/sdk';
import type { IAPIMethods } from '@looker/sdk-rtl';
import type { ReactNode } from 'react';
import React from 'react';
declare type FilterWithExpression = {
    filter: IDashboardFilter;
    expression?: string;
};
export interface FilterCollectionAction {
    type: 'UPDATE_EXPRESSION' | 'REMOVE_FILTER';
    payload: FilterWithExpression;
}
export declare type FilterMap = {
    [key: string]: FilterWithExpression;
};
export declare type FilterCollectionState = {
    filterMap: FilterMap;
};
export declare type FilterContextProps = {
    state: FilterCollectionState;
    updateExpression: (filter: IDashboardFilter, expression: string) => void;
    removeFilter: (filter: IDashboardFilter) => void;
    sdk?: IAPIMethods;
};
export declare const FilterContext: React.Context<FilterContextProps>;
export declare type FilterCollectionProps = {
    children: ReactNode | ReactNode[];
    /**
     * An initialized Looker SDK instance
     */
    sdk?: IAPIMethods;
};
/**
 * FilterCollection's primary purpose is to manage a filter map
 * object, with filter metadata objects as keys and current
 * selected expressions as values.
 *
 * This allows filters with `listens_to_filters` to pull the relevant
 * expressions out when performing a linked filter suggestion query.
 *
 * The initialized Looker SDK instance can also be stored here
 * to be used for fetching suggestions.
 */
export declare const FilterCollection: ({ children, sdk }: FilterCollectionProps) => JSX.Element;
export {};
