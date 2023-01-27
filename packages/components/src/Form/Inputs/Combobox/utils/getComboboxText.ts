/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ComboboxOptionObject } from '../types'

export function getComboboxText(
  value?: string | ComboboxOptionObject,
  options?: ComboboxOptionObject[]
): string {
  if (value === undefined) return ''
  if (typeof value === 'string') {
    if (options && options.length > 0) {
      const currentOption = options.find(option => option.value === value)
      if (currentOption) {
        return getComboboxText(currentOption)
      }
    }
    return value
  }
  return value.label || value.value
}
