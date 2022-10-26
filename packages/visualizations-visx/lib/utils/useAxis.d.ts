/// <reference types="react" />
import type { ChartData, Fields, CCartesian } from '@looker/visualizations-adapters';
export declare type UseAxisProps = {
    config: CCartesian;
    data: ChartData;
    fields: Fields;
};
/**
 * useAxis accepts chart information and outputs axes compatible with
 * a visx XYChart. It also outputs the proper margin object for the calling
 * chart component (necessary when x-axis tick labels are angled).
 */
export declare const useAxis: ({ config, data, fields }: UseAxisProps) => {
    XAxis: () => JSX.Element;
    YAxis: () => JSX.Element;
    chartMargin: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
};
