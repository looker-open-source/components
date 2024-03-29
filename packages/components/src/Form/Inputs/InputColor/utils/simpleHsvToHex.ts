/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { hsv } from 'd3-hsv';
import type { SimpleHSV } from '../types';

export const simpleHsvToHex = (color: SimpleHSV) =>
  hsv(color.h, color.s, color.v).rgb().hex();
