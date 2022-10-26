declare type Range = {
    min: number;
    max: number;
};
export interface RangeValue {
    bounds: string;
    high: number;
    low: number;
}
export interface Options {
    max?: number;
    min?: number;
}
export interface SliderProps {
    onChange: (value: number) => void;
    options?: Options;
    value: number;
}
export interface RangeSliderProps {
    onChange: (value: Range) => void;
    options?: Options;
    value: Range;
    name?: string;
}
export {};
