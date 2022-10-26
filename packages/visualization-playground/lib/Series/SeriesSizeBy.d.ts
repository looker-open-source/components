/// <reference types="react" />
import type { CScatter, CScatterSeries, Fields } from '@looker/visualizations-adapters';
/**
 * A list of relevant charts that access this configuration
 */
export declare type CSeriesSizeBySupported = CScatter;
export declare type SeriesSizeByProps = {
    chartType: CSeriesSizeBySupported['type'];
    fields: Fields;
    series: CScatterSeries;
    onSeriesChange: (series: CScatterSeries) => void;
};
export declare const SeriesSizeBy: (props: SeriesSizeByProps) => JSX.Element | null;
