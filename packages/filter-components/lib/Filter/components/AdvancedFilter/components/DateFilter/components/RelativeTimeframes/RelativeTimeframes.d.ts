/// <reference types="react" />
import type { RelativeTimeframeModel } from '../../types/relative_timeframe_types';
interface RelativeTimeframesProps {
    value: RelativeTimeframeModel;
    onChange: (value: RelativeTimeframeModel) => void;
}
export declare const RelativeTimeframes: ({ value, onChange, }: RelativeTimeframesProps) => JSX.Element;
export {};
