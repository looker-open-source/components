/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { listItemColorAppliesToLabel } from '../types';
import { isListColor } from './isListColor';

const listItemColor = (
  color?: string,
  disabled?: boolean,
  defaultColor?: string
) => {
  if (disabled) {
    return 'text1';
  } else if (color) {
    if (listItemColorAppliesToLabel.includes(color)) {
      // Theme "slot" & color is applied to label
      return color;
    } else if (!isListColor(color)) {
      // HTML color
      return color;
    }
  }
  return defaultColor;
};

export const listItemIconColor = (color?: string, disabled?: boolean) =>
  listItemColor(color, disabled, 'text2');

export const listItemLabelColor = (color?: string, disabled?: boolean) =>
  listItemColor(color, disabled, 'text5');
