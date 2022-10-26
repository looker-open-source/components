import type { ConfigHelper, CommonCartesianProperties } from '../types';
/**
 * Populate series[name].label from series_labels response.
 * Only works with named series as an ordered array of labels would not
 * render accurately.
 */
export declare const seriesLabels: ConfigHelper<CommonCartesianProperties>;
