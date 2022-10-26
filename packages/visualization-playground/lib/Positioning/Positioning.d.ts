import type { Dispatch, SetStateAction } from 'react';
import type { CAll, CArea, CBar, CColumn, CLine, CScatter } from '@looker/visualizations-adapters';
/**
 * A list of relevant charts that access this configuration
 */
declare type SupportedChartConfig = CBar | CColumn | CArea | CLine | CScatter;
export declare type PositioningProps = {
    config: SupportedChartConfig;
    onConfigChange: Dispatch<SetStateAction<Partial<CAll>>>;
};
export declare const Positioning: (props: PositioningProps) => JSX.Element | null;
export {};
