/// <reference types="react" />
import type { YAxisConfig, XAxisConfig } from '@looker/visualizations-adapters';
export declare type CoreProps = {
    axisConfig: YAxisConfig[] | XAxisConfig[];
    onAxisChange: (axisIndex: number, axis: YAxisConfig | XAxisConfig) => void;
};
export declare const Core: ({ onAxisChange, axisConfig }: CoreProps) => JSX.Element;
