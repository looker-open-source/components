import type { CAll, RawApiConfigResponse, Fields, SDKRecord } from '../types';
declare type ChartConfigArgs = {
    config: Partial<CAll> | Partial<RawApiConfigResponse>;
    data?: SDKRecord[];
    fields?: Fields;
};
/**
 * Utility function builds and sanitizes the public config object from
 * the provided raw sdk response and selected transformations.
 * @param config vis config as it comes unsanitized from sdk
 * @param data query response
 * @param fields metadata describing fields and dimensions from query
 * @returns
 */
export declare const buildChartConfig: (args: ChartConfigArgs) => any;
export {};
