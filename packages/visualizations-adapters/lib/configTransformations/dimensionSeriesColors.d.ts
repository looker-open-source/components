import type { ConfigHelper, CommonCartesianProperties } from '../types';
/**
 * An alternative to the seriesColors transformation, designed for Pie charts.
 * This function treats each dimension value as an individual series and assigns
 * a default color value.
 * Can merge default values with either array or named object
 */
export declare const dimensionSeriesColors: ConfigHelper<CommonCartesianProperties>;
