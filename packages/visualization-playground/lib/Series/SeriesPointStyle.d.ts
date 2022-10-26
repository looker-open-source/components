/// <reference types="react" />
import type { CArea, CLine, CScatter, CLineSeries } from '@looker/visualizations-adapters';
/**
 * A list of relevant charts that access this configuration
 */
export declare type CPointStyleSupported = CArea | CLine | CScatter;
export declare type SeriesPointStyleProps = {
    chartType: CPointStyleSupported['type'];
    series: CLineSeries;
    onSeriesChange: (series: CLineSeries) => void;
};
export declare const SeriesPointStyle: (props: SeriesPointStyleProps) => JSX.Element | null;
