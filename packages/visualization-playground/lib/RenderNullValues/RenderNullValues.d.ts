import type { Dispatch, SetStateAction } from 'react';
import type { CAll, CLine, CArea, CScatter, CSparkline } from '@looker/visualizations-adapters';
/**
 * A list of relevant charts that access this configuration
 */
declare type SupportedChartConfig = CLine | CArea | CScatter | CSparkline;
declare type RenderNullValuesProps = {
    config: SupportedChartConfig;
    onConfigChange: Dispatch<SetStateAction<Partial<CAll>>>;
};
export declare const RenderNullValues: (props: RenderNullValuesProps) => JSX.Element | null;
export {};
