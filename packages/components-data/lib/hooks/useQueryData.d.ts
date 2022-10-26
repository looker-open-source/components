import type { IError } from '@looker/sdk';
import type { Fields, SDKRecord, Pivots } from '@looker/visualizations-adapters';
/**
 * useQueryData fetches the query response (data, fields, etc) from a numeric query id
 * @param id numeric query id
 * @param agentTag used for internal telemetry
 * @returns normalized data, fields, totals, and async request state
 */
export declare const useQueryData: (id: number, agentTag?: string | undefined) => {
    error: IError;
    data: SDKRecord[];
    fields: Fields | undefined;
    isOK: boolean;
    isPending: boolean;
    pivots: Pivots | undefined;
    totals: Record<string, number | null> | undefined;
} | {
    error?: undefined;
    data: SDKRecord[];
    fields: Fields | undefined;
    isOK: boolean;
    isPending: boolean;
    pivots: Pivots | undefined;
    totals: Record<string, number | null> | undefined;
};
