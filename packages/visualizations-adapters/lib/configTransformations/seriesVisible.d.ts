import type { ConfigHelper, CommonCartesianProperties } from '../types';
/**
 * Populate series visibility from hidden_series response.
 * Only merges api visibility values for named series.
 * Array series fills default visibility:true when not otherwise set.
 */
export declare const seriesVisible: ConfigHelper<CommonCartesianProperties>;
