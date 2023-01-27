/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { useMemo } from 'react'
import { v4 as uuid } from 'uuid'

export function useID(id?: string) {
  return useMemo(() => {
    return id || uuid()
  }, [id])
}
