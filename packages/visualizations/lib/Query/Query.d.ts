import type { FC, ComponentType } from 'react';
import type { CAll } from '@looker/visualizations-adapters';
export declare type QueryProps = {
    config?: Partial<CAll>;
    LoadingIndicator?: ComponentType;
} & (/* Restricted prop combo: use EITHER a dashboard or query, but not both */ {
    dashboard?: never;
    query?: string | number;
} | {
    dashboard?: number;
    query?: never;
});
export declare const Query: FC<QueryProps>;
