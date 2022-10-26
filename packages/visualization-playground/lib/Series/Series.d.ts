import type { Dispatch, SetStateAction } from 'react';
import type { CAll, SupportedChartTypes, CScatterSeries, CTableSeries, CLineSeries, Fields, ValueOf } from '@looker/visualizations-adapters';
/**
 * A list of relevant charts that access this configuration
 */
declare type SupportedChartConfig = {
    type?: ValueOf<SupportedChartTypes>;
    series?: CScatterSeries | CTableSeries | CLineSeries;
};
export declare type SeriesProps = {
    config: SupportedChartConfig;
    fields: Fields;
    onConfigChange: Dispatch<SetStateAction<Partial<CAll>>>;
};
export declare const Series: (props: SeriesProps) => JSX.Element | null;
export {};
