/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { IError } from '@looker/sdk';
/**
 * This hook fetches data from provided dashboard Id, and returns
 * the first query listed in `dashboard_elements` response.
 *
 * @param dashboardId a dashboard Id
 * @returns the query ID associated with the first dashboard tile, and api state
 */
export declare const useQueryIdFromDashboard: (dashboardId?: string) => {
    error: IError;
    isOK: boolean;
    isPending: boolean;
    queryId: string | undefined;
} | {
    error?: undefined;
    isOK: boolean;
    isPending: boolean;
    queryId: string | undefined;
};
