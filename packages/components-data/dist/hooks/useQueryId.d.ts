import type { IError } from '@looker/sdk';
/**
 * useQueryId is a hook for getting the query id from a string slug
 * @param slugOrId can be either a string slug or id
 * @returns the id associated with the query and async request state
 */
export declare const useQueryId: (slugOrId?: string) => {
    error: IError;
    isOK: boolean;
    isPending: boolean;
    queryId: string;
} | {
    error?: undefined;
    isOK: boolean;
    isPending: boolean;
    queryId: string;
};
