import type { IError, ILookmlModelExploreField } from '@looker/sdk';
declare type FieldGroups = {
    [group: string]: ILookmlModelExploreField[];
};
/**
 * A shared hook for fetching the Field Groups associated with query ID.
 * Used for rendering filter options.
 *
 * @param id a numeric query id
 * @returns field groups and api state
 */
export declare const useFieldGroups: (id: number) => {
    error: IError;
    fieldGroups: FieldGroups;
    isOK: boolean;
    isPending: boolean;
} | {
    error?: undefined;
    fieldGroups: FieldGroups;
    isOK: boolean;
    isPending: boolean;
};
export {};
