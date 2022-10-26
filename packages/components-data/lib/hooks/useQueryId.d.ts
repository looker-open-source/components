import type { IError } from '@looker/sdk';
/**
 * useQueryId is a hook for getting the numeric query id from a string slug
 * @param slugOrId can be either a string slug or numeric id
 * @returns the numeric id associated with the query and async request state
 */
export declare const useQueryId: (slugOrId?: string | number) => {
    error: IError;
    isOK: boolean;
    isPending: boolean;
    queryId: number;
} | {
    error?: undefined;
    isOK: boolean;
    isPending: boolean;
    queryId: number;
};
