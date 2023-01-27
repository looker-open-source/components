/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
/**
 * Converts a string to a number, using BigInt for numbers of
 * 16 digits or more to avoid loss of precision if greater than
 * Number.MAX_SAFE_INTEGER (9007199254740991), otherwise Number
 * so result could be used in Math
 */
export declare const getNumberFromString: (text: string) => number | bigint;
