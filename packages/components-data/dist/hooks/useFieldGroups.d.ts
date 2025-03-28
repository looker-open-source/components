/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ILookmlModelExploreField } from '@looker/sdk';
type FieldGroups = {
    [group: string]: ILookmlModelExploreField[];
};
/**
 * A shared hook for fetching the Field Groups associated with query ID.
 * Used for rendering filter options.
 *
 * @param id query id
 * @returns field groups and api state
 */
export declare const useFieldGroups: (id: string) => {
    error: import("@looker/sdk").IError;
    isOK: boolean;
    isPending: boolean;
    fieldGroups: FieldGroups;
} | {
    error?: undefined;
    isOK: boolean;
    isPending: boolean;
    fieldGroups: FieldGroups;
};
export {};
