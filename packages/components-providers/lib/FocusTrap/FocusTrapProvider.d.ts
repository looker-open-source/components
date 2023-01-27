/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react';
import type { TrapStackContextProps, TrapStackProviderProps } from '../TrapStack';
import type { FocusTrapOptions } from './types';
export declare const FocusTrapContext: React.Context<TrapStackContextProps<FocusTrapOptions>>;
export declare const FocusTrapProvider: <O = unknown>(props: Omit<TrapStackProviderProps<O>, "activate" | "context">) => JSX.Element;
