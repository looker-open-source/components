/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
/**
 * Escapes a tier filter expression using ^ used for parameter fields
 * Only escape the string if it does not represent a finite number
 */
export declare const escapeParameterValue: (value: string) => string;
