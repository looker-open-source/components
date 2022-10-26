/// <reference types="react" />
import type { DayRange } from '../../../../types/day_range';
import type { AllPresetTimeframes, RelativeTimeframeModel } from '../../../../types/relative_timeframe_types';
interface RelativeTimeframePopoverContentProps {
    value: RelativeTimeframeModel;
    onCustomChange: (range: DayRange) => void;
    onPresetChange: (selected: AllPresetTimeframes) => void;
    onNav: () => void;
}
export declare const RelativeTimeframePopoverContent: ({ value, onCustomChange, onPresetChange, onNav, }: RelativeTimeframePopoverContentProps) => JSX.Element;
export {};
