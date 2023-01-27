/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ListItemColor } from '../types'
import { listItemColorAppliesToLabel, listItemColorOptions } from '../types'

const listItemColor = (
  color?: ListItemColor,
  disabled?: boolean,
  defaultColor?: string
) => {
  if (disabled) {
    return 'text1'
  } else if (color) {
    if (listItemColorAppliesToLabel.includes(color)) {
      // Theme "slot" & color is applied to label
      return color
    } else if (!listItemColorOptions.includes(color)) {
      // HTML color
      return color
    }
  }
  return defaultColor
}

export const listItemIconColor = (color?: ListItemColor, disabled?: boolean) =>
  listItemColor(color, disabled, 'text2')

export const listItemLabelColor = (color?: ListItemColor, disabled?: boolean) =>
  listItemColor(color, disabled, 'text5')
