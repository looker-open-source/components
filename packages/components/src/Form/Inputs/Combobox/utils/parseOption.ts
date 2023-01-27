/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ComboboxOptionObject } from '../types'

export function parseOption(text: string) {
  try {
    const parsed = JSON.parse(text)
    if (parsed.value) {
      return parsed as ComboboxOptionObject
    } else {
      return { value: text }
    }
  } catch (e) {
    return { value: text }
  }
}
