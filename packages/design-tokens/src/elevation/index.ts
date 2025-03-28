/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Elevations } from './types';
export type { Elevations, ElevationRamp } from './types';

const colorBase = '60, 64, 67';
export const baseShadowColor = `rgba(${colorBase}, .30)`;
export const ambientShadowColor = `rgba(${colorBase}, .15)`;

export const elevations: Elevations = {
  plus0: `0 0 0 1px rgba(${colorBase}, .2)`,
  plus1: `0px 1px 2px 0px ${baseShadowColor},0px 1px 3px 1px ${ambientShadowColor}`,
  plus2: `0px 1px 2px 0px ${baseShadowColor},0px 2px 6px 2px ${ambientShadowColor}`,
  plus3: `0px 1px 3px 0px  ${baseShadowColor},0px 4px 8px 3px ${ambientShadowColor}`,
  plus4: `0px 2px 3px 0px  ${baseShadowColor},0px 6px 10px 4px ${ambientShadowColor}`,
  plus5: `0px 4px 4px 0px  ${baseShadowColor},0px 8px 12px 6px ${ambientShadowColor}`,
};
