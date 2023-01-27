/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ReactNode } from 'react';
import type { Looker40SDK } from '@looker/sdk';
declare type DataProviderProps = {
    sdk: Looker40SDK;
    children?: ReactNode;
};
export declare const DataProvider: ({ children, sdk }: DataProviderProps) => JSX.Element;
export {};
