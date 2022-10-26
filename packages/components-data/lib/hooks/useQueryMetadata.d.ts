import type { IQuery, IError } from '@looker/sdk';
/**
 * A shared hook for fetching query metadata, including config (untransformed and
 * unmodified from the SDK), model, and view data.
 *
 * Use `useVisConfig` instead if you require normalized and transformed config object.
 *
 * @param id a numeric query id
 * @returns metadata object and api state
 */
export declare const useQueryMetadata: (id: number) => {
    error: IError;
    isOK: boolean;
    isPending: boolean;
    metadata: IQuery;
} | {
    error?: undefined;
    isOK: boolean;
    isPending: boolean;
    metadata: IQuery;
};
