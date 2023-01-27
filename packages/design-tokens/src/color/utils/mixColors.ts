/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import mix from 'polished/lib/color/mix'

export const mixColors = (
  mixAmount: number,
  foreground: string,
  background: string
) =>
  mixAmount === 100 ? foreground : mix(mixAmount / 100, foreground, background)
