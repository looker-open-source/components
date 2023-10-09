/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { listItemColorOptions } from '../types';
import type { ListColor } from '../types';

/**
 * Type guard for ListColor
 */
export const isListColor = (color?: string): color is ListColor =>
  color ? listItemColorOptions.includes(color as ListColor) : false;
