/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react';
import type { TrapStackContextProps, TrapStackProviderProps } from '../TrapStack';
export declare const ScrollLockContext: React.Context<TrapStackContextProps<unknown>>;
export declare const ScrollLockProvider: <O = unknown>(props: Omit<TrapStackProviderProps<O>, "activate" | "context">) => JSX.Element;
