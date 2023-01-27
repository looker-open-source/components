/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { FilterModel } from '../../types';
/**
 * Converts a null filter item to a filter expression unit
 */
declare const nullItemToString: ({ is }: FilterModel) => string;
export default nullItemToString;
