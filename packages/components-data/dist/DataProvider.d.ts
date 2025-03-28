/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react';
import type { ReactNode } from 'react';
import type { Looker40SDK } from '@looker/sdk';
type DataProviderProps = {
    sdk: Looker40SDK;
    children?: ReactNode;
};
export declare const DataProvider: ({ children, sdk }: DataProviderProps) => React.JSX.Element;
export {};
