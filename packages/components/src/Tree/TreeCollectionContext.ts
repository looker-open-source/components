/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { createContext } from 'react'
import type { DensityProp } from '@looker/design-tokens'
import type { ToggleStateMap } from './types'

export type TreeCollectionContextProps = DensityProp & {
  /** @private */
  toggleNode?: (id: number, isOpen: boolean) => void
  /** @private */
  toggleStateMap?: ToggleStateMap
}

/**
 * Manage the opened / closed state of sub-trees for windowing purposes
 */
export const TreeCollectionContext = createContext<TreeCollectionContextProps>(
  {}
)
