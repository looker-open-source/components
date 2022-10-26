import type { Dispatch, SetStateAction } from 'react';
import type { CArea, CBar, CColumn, CScatter, CLine, CPie, CAll } from '@looker/visualizations-adapters';
/**
 * A list of relevant charts that access the legend configuration
 */
declare type SupportedChartConfig = CPie | CLine | CArea | CBar | CColumn | CScatter;
export declare type LegendProps = {
    config: SupportedChartConfig;
    onConfigChange: Dispatch<SetStateAction<Partial<CAll>>>;
};
export declare const Legend: (props: LegendProps) => JSX.Element | null;
export {};
