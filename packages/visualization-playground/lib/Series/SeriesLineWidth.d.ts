/// <reference types="react" />
import type { CArea, CLine, CScatter, CSparkline, CSeriesLine } from '@looker/visualizations-adapters';
/**
 * A list of relevant charts that access this configuration
 */
export declare type CLineWidthSupported = CArea | CLine | CSparkline | CScatter;
export declare type SeriesLineWidthProps = {
    chartType: CLineWidthSupported['type'];
    series: CSeriesLine;
    onSeriesChange: (series: CSeriesLine) => void;
    disabled: boolean;
};
export declare const SeriesLineWidth: (props: SeriesLineWidthProps) => JSX.Element | null;
