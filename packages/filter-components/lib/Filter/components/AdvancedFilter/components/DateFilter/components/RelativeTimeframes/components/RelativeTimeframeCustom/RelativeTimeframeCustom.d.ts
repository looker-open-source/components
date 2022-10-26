/// <reference types="react" />
import type { DayRange } from '../../../../types/day_range';
import type { RelativeTimeframeModel } from '../../../../types/relative_timeframe_types';
interface RelativeTimeframeCustomProps {
    value: RelativeTimeframeModel;
    onCustomChange: (range: DayRange) => void;
}
export declare const RelativeTimeframeCustom: ({ value, onCustomChange, }: RelativeTimeframeCustomProps) => JSX.Element;
export {};
