/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
/**
 * A simple utility type to extract the values from a key/value type.
 * Mimics the behavior of `KeyOf`, but for values.
 */
export declare type ValueOf<T> = T[keyof T];
