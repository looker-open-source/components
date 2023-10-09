/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
declare type UsePreviousValue = boolean | number[] | string | number | string[] | undefined;
export declare const usePreviousValue: <T extends UsePreviousValue>(value: T) => T | undefined;
export {};
