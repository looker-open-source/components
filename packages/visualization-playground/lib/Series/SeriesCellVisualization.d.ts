/// <reference types="react" />
import type { CTable, CTableSeries } from '@looker/visualizations-adapters';
/**
 * A list of relevant charts that access this configuration
 */
export declare type CCellVisualizationSupported = CTable;
export declare type SeriesCellVisualizationProps = {
    chartType: CCellVisualizationSupported['type'];
    series: CTableSeries;
    onSeriesChange: (series: CTableSeries) => void;
};
export declare const SeriesCellVisualization: (props: SeriesCellVisualizationProps) => JSX.Element | null;
