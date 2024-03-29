/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

export type DensityRamp = -3 | -2 | -1 | 0 | 1;

export type DensityProp = {
  /**
   * Determines how dense a list should be by affecting child item size and spacing.
   * @default 0
   */
  density?: DensityRamp;
};
