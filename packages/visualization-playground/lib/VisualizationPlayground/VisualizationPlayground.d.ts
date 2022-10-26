/// <reference types="react" />
import type { QueryProps } from '@looker/visualizations';
import type { Looker40SDK } from '@looker/sdk';
import type { InputTypes } from '../QueryInput';
declare type TabIDs = 'live' | 'mock';
export declare type VisualizationPlaygroundProps = {
    sdk?: Looker40SDK;
};
declare type QueryPropArgs = {
    fetchBy?: InputTypes;
    queryIdentifier?: string | number;
    dashboardId?: number;
    tabId?: TabIDs;
};
export declare const setQueryProps: ({ fetchBy, queryIdentifier, dashboardId, tabId, }: QueryPropArgs) => Partial<QueryProps>;
export declare const VisualizationPlayground: ({ sdk, }: VisualizationPlaygroundProps) => JSX.Element;
export {};
