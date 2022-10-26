/// <reference types="react" />
import type { CArea, CBar, CColumn, CLine, CScatter, CTable, CSeriesBasic } from '@looker/visualizations-adapters';
/**
 * A list of relevant charts that access this configuration
 */
export declare type CVisibleSupported = CArea | CBar | CColumn | CLine | CScatter | CTable;
export declare type SeriesVisibleProps = {
    chartType: CVisibleSupported['type'];
    series: CSeriesBasic;
    onSeriesChange: (series: CSeriesBasic) => void;
};
export declare const SeriesVisible: (props: SeriesVisibleProps) => JSX.Element | null;
