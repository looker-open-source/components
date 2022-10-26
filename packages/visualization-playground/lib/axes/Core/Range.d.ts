/// <reference types="react" />
import type { YAxisConfig } from '@looker/visualizations-adapters';
export declare type RangeEditorProps = {
    axis: YAxisConfig;
    onAxisChange: (axis: YAxisConfig) => void;
};
export declare const Range: (props: RangeEditorProps) => JSX.Element;
