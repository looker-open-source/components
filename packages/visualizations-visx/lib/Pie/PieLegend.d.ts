/// <reference types="react" />
import type { ScaleOrdinal } from 'd3-scale';
import type { CPie } from '@looker/visualizations-adapters';
declare type PieLegendProps = {
    legendConfig: CPie['legend'];
    scale: ScaleOrdinal<string, string>;
    data: Record<string, number>;
    measureTotal: number;
    height: number;
    width: number;
};
export declare const PieLegend: ({ legendConfig, scale, data, measureTotal, height, width, }: PieLegendProps) => JSX.Element;
export {};
