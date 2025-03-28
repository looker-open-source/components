/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ElementType } from 'react';

export type FilterTypeMap<T extends string = string> = {
  [type in T]: ElementType;
};
