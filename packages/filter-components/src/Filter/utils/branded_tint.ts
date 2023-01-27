/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { parseToHsl } from 'polished'

export const getBrandedTint = (
  type: 'selected' | 'hover' | 'pressed' | 'border',
  color: string
) => {
  const hue = parseToHsl(color).hue
  switch (type) {
    case 'selected':
      return `hsla(${hue}, 100%, 98%, 100%)`
    case 'hover':
      return `hsla(${hue}, 25%, 97%, 70%)`
    case 'pressed':
      return `hsla(${hue}, 50%, 96%, 90%)`
    case 'border':
      return `hsla(${hue}, 25%, 90%, 100%)`
    default:
      return `hsla(${hue}, 100%, 98%, 100%)`
  }
}
