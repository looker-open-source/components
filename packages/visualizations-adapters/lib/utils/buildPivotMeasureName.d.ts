/**
 * Builds a key for a pivot "measure" (i.e. a pivot series). Should be
 * used when transforming pivot data and pivot fields metadata.
 *
 * Note: This currently just concats the pivot value and measure key
 * together, but a more sophisticated approach could be used in the
 * future.
 */
export declare const buildPivotMeasureName: ({ measureName, pivotValue, }: {
    measureName: string;
    pivotValue: string;
}) => string;
