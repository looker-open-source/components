/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
export declare type TimeFormats = '12h' | '24h';
export declare const formatTimeString: (number: number) => string;
export declare const parseBase10Int: (value: string) => number;
export declare const isValidTime: (value?: string | undefined) => boolean;
