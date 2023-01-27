/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { MixedBoolean } from '../../Form/Inputs/Checkbox'
import type { SelectConfig } from '../types'

type HelperArgs = Pick<SelectConfig, 'selectedItems' | 'pageItems'>

export const allItemsSelected = (
  select: HelperArgs = { pageItems: [], selectedItems: [] }
): MixedBoolean => {
  const { selectedItems, pageItems } = select

  if (selectedItems.length > 0) {
    if (pageItems.every(id => selectedItems.includes(id))) return true
    else if (pageItems.some(id => selectedItems.includes(id))) return 'mixed'
  }

  return false
}
