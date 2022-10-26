import type { Dispatch, SetStateAction } from 'react';
import type { CPie, CAll } from '@looker/visualizations-adapters';
export declare type LegendProps = {
    config: CPie;
    onConfigChange: Dispatch<SetStateAction<Partial<CAll>>>;
};
export declare const LegendPie: ({ onConfigChange, config }: LegendProps) => JSX.Element | null;
