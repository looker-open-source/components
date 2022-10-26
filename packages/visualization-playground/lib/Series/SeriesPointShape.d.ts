/// <reference types="react" />
import type { CArea, CLine, CScatter, CLineSeries } from '@looker/visualizations-adapters';
/**
 * A list of relevant charts that access this configuration
 */
export declare type CPointShapeSupported = CArea | CLine | CScatter;
export declare type SeriesPointShapeProps = {
    chartType: CPointShapeSupported['type'];
    series: CLineSeries;
    onSeriesChange: (series: CLineSeries) => void;
};
export declare const SeriesPointShape: (props: SeriesPointShapeProps) => JSX.Element | null;
