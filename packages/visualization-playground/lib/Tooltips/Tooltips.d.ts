import type { Dispatch, SetStateAction } from 'react';
import type { CAll, CPie, CLine, CArea, CBar, CColumn, CScatter } from '@looker/visualizations-adapters';
/**
 * A list of relevant charts that access this configuration
 */
declare type SupportedChartConfig = CPie | CLine | CArea | CBar | CColumn | CScatter;
declare type TooltipsProps = {
    config: SupportedChartConfig;
    onConfigChange: Dispatch<SetStateAction<Partial<CAll>>>;
};
export declare const Tooltips: (props: TooltipsProps) => JSX.Element | null;
export {};
