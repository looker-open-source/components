/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ComboboxOptionObject } from '../types'

export function formatOptionAsString(option: ComboboxOptionObject) {
  if (option.label && option.label !== option.value) {
    return JSON.stringify(option)
  }
  return option.value
}
