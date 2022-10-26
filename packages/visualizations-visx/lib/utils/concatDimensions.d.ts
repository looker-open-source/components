import type { SDKRecord, Fields, ChartData } from '@looker/visualizations-adapters';
/**
 * Concatenates dimension values and replaces all existing dimension properties in data with
 * a new formatted data array that has a single `dimension` property
 */
export declare const concatDimensions: (data: SDKRecord[], fields: Fields) => ChartData;
