/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { useState } from 'react'

export function useScrollState() {
  // track and share dom information in context.
  const [listScrollPosition, setListScrollPosition] = useState(0)
  const [listClientRect, setListClientRect] = useState<DOMRect>()

  return {
    listClientRect,
    listScrollPosition,
    setListClientRect,
    setListScrollPosition,
  }
}
