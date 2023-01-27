/// <reference types="react" />
import type { AllPresetTimeframes, RelativeTimeframeModel } from '../../../../types/relative_timeframe_types';
interface RelativeTimeframePresetsProps {
    value: RelativeTimeframeModel;
    onPresetChange: (selected: AllPresetTimeframes) => void;
}
export declare const RelativeTimeframePresets: (props: RelativeTimeframePresetsProps) => JSX.Element;
export {};
