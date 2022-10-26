/// <reference types="react" />
import type { CArea, CBar, CColumn, CLine, CScatter, CTable, CSeriesBasic, CSingleValue } from '@looker/visualizations-adapters';
/**
 * A list of relevant charts that access this configuration
 */
export declare type CLabelSupported = CArea | CBar | CColumn | CLine | CScatter | CTable | CSingleValue;
export declare type SeriesLabelProps = {
    chartType: CLabelSupported['type'];
    series: CSeriesBasic;
    onSeriesChange: (series: CSeriesBasic) => void;
};
export declare const SeriesLabel: (props: SeriesLabelProps) => JSX.Element | null;
