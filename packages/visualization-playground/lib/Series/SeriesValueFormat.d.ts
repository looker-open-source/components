/// <reference types="react" />
import type { CArea, CBar, CColumn, CLine, CScatter, CTable, CSeriesBasic, CSingleValue } from '@looker/visualizations-adapters';
/**
 * A list of relevant charts that access this configuration
 */
export declare type CValueFormatSupported = CArea | CBar | CColumn | CLine | CScatter | CTable | CSingleValue;
export declare type SeriesValueFormatProps = {
    chartType: CValueFormatSupported['type'];
    series: CSeriesBasic;
    onSeriesChange: (series: CSeriesBasic) => void;
};
export declare const SeriesValueFormat: (props: SeriesValueFormatProps) => JSX.Element | null;
