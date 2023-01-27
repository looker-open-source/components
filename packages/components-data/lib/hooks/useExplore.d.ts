import type { IError, ILookmlModelExplore } from '@looker/sdk';
/**
 * A shared hook for fetching the Field Groups associated with query ID.
 * Used for rendering filter options.
 *
 * @param id a numeric query id
 * @returns field groups and api state
 */
export declare const useExplore: (id: number) => {
    error: IError;
    explore: ILookmlModelExplore | undefined;
    isOK: boolean;
    isPending: boolean;
} | {
    error?: undefined;
    explore: ILookmlModelExplore | undefined;
    isOK: boolean;
    isPending: boolean;
};
