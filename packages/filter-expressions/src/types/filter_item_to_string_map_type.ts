/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { FilterItemToStringFunction } from './filter_item_to_string_function';

export interface FilterItemToStringMapType<T extends string = string> {
  [name: string]: FilterItemToStringFunction | FilterItemToStringFunction<T>;
}
