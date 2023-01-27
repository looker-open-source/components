/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { SyntheticEvent } from 'react'

/**
 * Merges 2 optional event handlers
 * @param newHandler called 2nd, if the 1st does not call preventDefault()
 * @param existingHandler called 1st, use preventDefault() to avoid calling the 2nd
 */
export const mergeHandlers =
  <E extends SyntheticEvent>(
    newHandler?: (e: E) => void,
    existingHandler?: (e: E) => void
  ) =>
  (event: E) => {
    existingHandler?.(event)
    if (!event.defaultPrevented) {
      newHandler?.(event)
    }
  }
