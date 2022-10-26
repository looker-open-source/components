import type { Dispatch, SetStateAction } from 'react';
import type { CAll, CTable } from '@looker/visualizations-adapters';
/**
 * A list of relevant charts that access this configuration
 */
declare type SupportedChartConfig = CTable;
declare type TruncateTextProps = {
    config: SupportedChartConfig;
    onConfigChange: Dispatch<SetStateAction<Partial<CAll>>>;
};
export declare const TruncateHeader: (props: TruncateTextProps) => JSX.Element | null;
export {};
