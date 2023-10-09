/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type {
  SizeLarge,
  SizeMedium,
  SizeSmall,
  SizeXSmall,
  SizeXXSmall,
} from '@looker/design-tokens';
import { variant } from '@looker/design-tokens';

export type ProgressCircularSizes =
  | SizeXXSmall
  | SizeXSmall
  | SizeSmall
  | SizeMedium
  | SizeLarge;

const calculateValues = (half: number) => {
  return {
    dashArray: half * 4.7,
    dashOffset: half * 2.3,
    half,
    radius: half / 1.34,
  };
};

/* eslint-disable sort-keys-fix/sort-keys-fix */
export const progressCircularSVG = variant({
  prop: 'size',
  variants: {
    xxsmall: {
      stroke: 3,
      ...calculateValues(8),
    },
    xsmall: {
      stroke: 2,
      ...calculateValues(10),
    },
    small: {
      stroke: 2.5,
      ...calculateValues(12),
    },
    medium: {
      stroke: 3,
      ...calculateValues(18),
    },
    large: {
      stroke: 4,
      ...calculateValues(24),
    },
  },
});

export const progressCircularSize = variant({
  prop: 'size',
  variants: {
    xxsmall: {
      height: '16px',
      width: '16px',
    },
    xsmall: {
      height: '20px',
      width: '20px',
    },
    small: {
      height: '24px',
      width: '24px',
    },
    medium: {
      height: '36px',
      width: '36px',
    },
    large: {
      height: '48px',
      width: '48px',
    },
  },
});
