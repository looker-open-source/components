import type { PointShapes, PointStyles } from './';
export declare type CSeriesBasic = {
    /**
     * Hex Code
     */
    color?: string;
    /**
     * String label to render
     */
    label?: string;
    /**
     * Hide this series from the chart
     */
    visible?: boolean;
    /**
     * Default value format
     */
    value_format?: string;
};
export declare type CSeriesPoints = {
    /**
     * Point shapes
     */
    shape?: PointShapes;
    /**
     * Point styles
     */
    style?: PointStyles;
};
export declare type CSeriesLine = {
    /**
     * Thickness of line(s) in pixels:
     */
    line_width?: number;
};
export declare type CSeriesSize = {
    /**
     * Adjust datapoint appearance relative to the value of provided series name.
     * size_by accepts a string representing the series name.
     */
    size_by?: string | false;
};
