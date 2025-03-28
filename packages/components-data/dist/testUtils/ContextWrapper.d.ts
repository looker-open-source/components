/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react';
import type { ReactNode } from 'react';
import type { DataStore } from '../hooks';
type ContextWrapperProps = {
    initialState?: DataStore;
    children?: ReactNode;
};
export declare const ContextWrapper: ({ children, initialState, }: ContextWrapperProps) => React.JSX.Element;
export {};
