import type { ILookmlModelExplore, IQuery } from '@looker/sdk';
import type { SDKRecord, Fields, Totals, Pivots } from '@looker/visualizations-adapters';
type QueryAttributes = {
    data: SDKRecord[];
    metadata: IQuery;
    fields: Fields;
    totals: Totals;
    pivots: Pivots;
};
export type DataStore = {
    dashboardIdMap: Record<string, string>;
    slugIdMap: Record<string, string>;
    byId: Record<string, Partial<QueryAttributes>>;
    modelExplore: Record<string, Record<string, ILookmlModelExplore>>;
};
export declare const DataState: import("unstated-next").Container<{
    getById: <K extends keyof QueryAttributes>(id: string, key: K) => Partial<QueryAttributes>[K];
    getIdFromDashboard: (dashboardId?: string) => string | undefined;
    getIdFromSlug: (slug: string) => string;
    getModelExplore: (model?: string, view?: string) => ILookmlModelExplore | undefined;
    setByDashboardId: (dashboardId: string, queryId: string, queryInfo: Partial<QueryAttributes>) => void;
    setById: (id: string, queryInfo: Partial<QueryAttributes>) => void;
    setBySlug: (slug: string, id: string, queryInfo: Partial<QueryAttributes>) => void;
    setModelExplore: (model: string, view: string, explore: ILookmlModelExplore) => void;
}, DataStore>;
export {};
