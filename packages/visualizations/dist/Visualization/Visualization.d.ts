import React from 'react';
import type { ReactElement } from 'react';
import type { ChartLayoutProps, VisWrapperProps, SupportedChartTypes, SDKRecord, Fields, CAll, Pivots } from '@looker/visualizations-adapters';
type FunctionComponentType = (props: any) => ReactElement<any, any> | null;
export interface VisualizationProps extends VisWrapperProps, ChartLayoutProps {
    data?: SDKRecord[];
    fields?: Fields;
    config?: CAll;
    totals?: Record<string, number | null>;
    pivots?: Pivots;
    chartTypeMap?: Record<string, FunctionComponentType>;
}
export declare const defaultChartTypeMap: Record<keyof SupportedChartTypes | 'default', FunctionComponentType>;
export declare const Visualization: (props: VisualizationProps) => React.JSX.Element;
export {};
