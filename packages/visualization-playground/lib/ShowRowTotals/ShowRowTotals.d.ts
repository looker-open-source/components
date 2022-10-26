import type { Dispatch, SetStateAction } from 'react';
import type { CAll, CTable } from '@looker/visualizations-adapters';
/**
 * A list of relevant charts that access this configuration
 */
declare type SupportedChartConfig = CTable;
declare type ShowtotalTotalsProps = {
    config: SupportedChartConfig;
    onConfigChange: Dispatch<SetStateAction<Partial<CAll>>>;
};
export declare const ShowRowTotals: (props: ShowtotalTotalsProps) => JSX.Element | null;
export {};
