import type { CSeriesBasic, LegendPositions } from '../types';
export declare type CommonAxisConfig = {
    /**
     * Render grid lines in chart
     */
    gridlines?: boolean;
    /**
     * Axis label content, disabled with `false`
     */
    label?: string | false;
    /**
     * Render axis values
     */
    values?: boolean;
};
export declare type XAxisConfig = CommonAxisConfig & {
    /**
     * Reverse data direction
     */
    reversed?: boolean;
};
export declare type YAxisEndpoint = number | 'auto' | undefined;
export declare type YAxisConfig = CommonAxisConfig & {
    /**
     * Set min and max values for Y-Axis
     */
    range?: [YAxisEndpoint, YAxisEndpoint];
};
export declare type CartesianLegend = {
    /**
     * Determines position of legend items
     */
    position: LegendPositions;
    /**
     * Width in pixels when legend is left or right positioned
     */
    width?: number;
};
export declare type CommonCartesianProperties = {
    /**
     * Toggle tooltips on hover
     */
    tooltips?: boolean;
    /**
     * Configure legend properties, or disable it altogether by setting value to false.
     */
    legend?: false | CartesianLegend;
    /**
     * Customize the series settings either by an ordered array or a named object.
     * Can be used like series: [{color: '#000000'}] or series: { name: { color: '#000000' }}
     */
    series?: CSeriesBasic[] | {
        [key: string]: CSeriesBasic;
    };
    /**
     * Configure an array of x-axis settings. Charts will only render a single x-axis for now.
     */
    x_axis?: XAxisConfig[];
    /**
     * Configure an array of y-axis settings.
     */
    y_axis?: YAxisConfig[];
};
