/// <reference types="react" />
import type { YAxisConfig } from '@looker/visualizations-adapters';
export declare type TickDensityProps = {
    axis: YAxisConfig;
    onAxisChange: (axis: YAxisConfig) => void;
};
export declare const TickDensity: (props: TickDensityProps) => JSX.Element;
