import type { ComponentType, ReactNode } from 'react';
import type { CAll } from '@looker/visualizations-adapters';
export declare type QueryProps = {
    config?: Partial<CAll>;
    LoadingIndicator?: ComponentType;
    children?: ReactNode;
} & (/* Restricted prop combo: use EITHER a dashboard or query, but not both */ {
    dashboard?: never;
    query?: string | number;
} | {
    dashboard?: number;
    query?: never;
});
export declare const Query: (props: QueryProps) => JSX.Element;
