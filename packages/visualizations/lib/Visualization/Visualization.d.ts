import type { FC } from 'react';
import type { ChartLayoutProps, VisWrapperProps, SupportedChartTypes, SDKRecord, Fields, CAll, Pivots } from '@looker/visualizations-adapters';
export interface VisualizationProps extends VisWrapperProps, ChartLayoutProps {
    data?: SDKRecord[];
    fields?: Fields;
    config?: CAll;
    totals?: Record<string, number>;
    pivots?: Pivots;
    chartTypeMap?: Record<string, FC<any>>;
}
export declare const defaultChartTypeMap: Record<keyof SupportedChartTypes | 'default', FC<any>>;
export declare const Visualization: FC<VisualizationProps>;
