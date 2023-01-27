/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { Fields } from '../types';
/**
 * This function extracts measure names from the fields object.
 *
 * @param fields is the Fields response as returned by the SDK
 * @returns an array of strings names
 */
export declare const getMeasureNames: (fields?: Fields) => string[];
