import type { ILookmlModelExploreFieldset, IQuery } from '@looker/sdk';
import type { SDKRecord, Fields, Totals, Pivots } from '@looker/visualizations-adapters';
declare type QueryAttributes = {
    data: SDKRecord[];
    metadata: IQuery;
    fields: Fields;
    totals: Totals;
    pivots: Pivots;
};
export declare type DataStore = {
    dashboardIdMap: Record<number, number>;
    slugIdMap: Record<string, number>;
    byId: Record<number, Partial<QueryAttributes>>;
    modelExplore: Record<string, Record<string, ILookmlModelExploreFieldset>>;
};
export declare const DataState: import("unstated-next").Container<{
    getById: <K extends keyof QueryAttributes>(id: number, key: K) => Partial<QueryAttributes>[K];
    getIdFromDashboard: (dashboardId?: number | undefined) => number | undefined;
    getIdFromSlug: (slug: string) => number;
    getModelExplore: (model?: string | undefined, view?: string | undefined) => ILookmlModelExploreFieldset | undefined;
    setByDashboardId: (dashboardId: number, queryId: number, queryInfo: Partial<QueryAttributes>) => void;
    setById: (id: number, queryInfo: Partial<QueryAttributes>) => void;
    setBySlug: (slug: string, id: number, queryInfo: Partial<QueryAttributes>) => void;
    setModelExplore: (model: string, view: string, fieldset: ILookmlModelExploreFieldset) => void;
}, DataStore>;
export {};
