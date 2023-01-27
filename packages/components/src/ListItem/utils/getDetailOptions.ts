/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ListItemDetailConfig } from '../types'

// Simplifies the type check when dealing with ListItem and related components
export const getDetailOptions = (detail: ListItemDetailConfig) => {
  let accessory, hoverDisclosure, content, width

  if (typeof detail === 'object' && detail && 'options' in detail) {
    accessory = detail.options.accessory
    content = detail.content
    hoverDisclosure = detail.options.hoverDisclosure
    width = detail.options.width
  } else {
    content = detail
  }

  return { accessory, content, hoverDisclosure, width }
}
