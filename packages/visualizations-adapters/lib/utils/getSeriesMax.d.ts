import type { SDKRecord } from '../types';
/**
 * Returns the greatest numeric value from a data array for a specific series
 *
 * Used by Scatter chart to calibrate the size-by functionality
 */
export declare const getSeriesMax: (seriesName: string, data: SDKRecord[]) => number;
