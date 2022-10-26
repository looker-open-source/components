/// <reference types="react" />
import type { DayRange } from '../../types/day_range';
interface DayRangePickerProps {
    value: DayRange;
    onChange: (range: DayRange) => void;
}
export declare const DayRangeInput: ({ value, onChange }: DayRangePickerProps) => JSX.Element;
export {};
