import type { FC } from 'react';
import type { CCartesian, Fields } from '@looker/visualizations-adapters';
declare type LegendProps = {
    chartWidth?: number;
    config: CCartesian;
    fields: Fields;
};
export declare const XYLegend: FC<LegendProps>;
export {};
