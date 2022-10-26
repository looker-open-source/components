/// <reference types="react" />
import type { CArea, CBar, CColumn, CLine, CScatter, CSparkline, CSeriesBasic, CSingleValue, CPie } from '@looker/visualizations-adapters';
/**
 * A list of relevant charts that access this configuration
 */
export declare type CColorSupported = CArea | CBar | CColumn | CLine | CPie | CScatter | CSparkline | CSingleValue;
export declare type SeriesColorProps = {
    chartType: CColorSupported['type'];
    series: CSeriesBasic;
    onSeriesChange: (series: CSeriesBasic) => void;
    disabled: boolean;
};
export declare const SeriesColor: (props: SeriesColorProps) => JSX.Element | null;
