import type { CCartesian, Fields, SDKRecord, CommonCartesianProperties } from '../types';
export declare type GetDataRangeProps = {
    config: CCartesian | CommonCartesianProperties;
    data: SDKRecord[];
    fields: Fields;
};
/**
 * Returns the minimum and maximum numeric value from a data array
 *
 * Used by XYChart types to calculate y-axis range
 */
export declare const getDataRange: ({ config, data, fields, }: GetDataRangeProps) => [number, number];
