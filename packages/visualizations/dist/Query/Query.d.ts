import type { ComponentType, ReactElement } from 'react';
import React from 'react';
import type { CAll } from '@looker/visualizations-adapters';
import type { VisualizationProps } from '../Visualization/Visualization';
export type QueryProps = {
    config?: Partial<CAll>;
    LoadingIndicator?: ComponentType;
    children?: ReactElement<VisualizationProps & {
        loading?: boolean;
        ok?: boolean;
    }>;
} & (/* Restricted prop combo: use EITHER a dashboard or query, but not both */ {
    dashboard?: never;
    query?: string;
} | {
    dashboard?: string;
    query?: never;
});
export declare const Query: (props: QueryProps) => React.JSX.Element;
