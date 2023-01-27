/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { IWriteQuery } from '@looker/sdk';
/**
 * useCreateQuery creates a new query derived from the `newQuery` configuration.
 * This inserts a new query into the database and returns the ID
 *
 * @param newQuery Query configuration (including any additional filters or parameters)
 * @returns Query ID and async request state
 */
export declare const useCreateQuery: (newQuery?: Partial<IWriteQuery> | undefined) => {
    error: import("@looker/sdk").IError;
    isOK: boolean;
    isPending: boolean;
    queryId: number | undefined;
} | {
    error?: undefined;
    isOK: boolean;
    isPending: boolean;
    queryId: number | undefined;
};
