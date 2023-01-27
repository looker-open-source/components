/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { SyntheticEvent } from 'react'
import { useCallback } from 'react'

export function useWrapEvent<E extends SyntheticEvent>(
  ourHandler: (e: E) => void,
  theirHandler?: (e: E) => void
) {
  return useCallback(
    (event: E) => {
      theirHandler && theirHandler(event)
      if (!event.defaultPrevented) {
        return ourHandler(event)
      }
    },
    [ourHandler, theirHandler]
  )
}
