/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { TreeModel } from '../types'
import { createExploresTree } from './create_explores_tree'
import type { ILookmlModelExplore } from '@looker/sdk/src/4.0u/models'

export const createExploreViewsTree = (
  explore?: ILookmlModelExplore
): TreeModel[] => {
  if (!explore) return []
  const exploresTree = createExploresTree([explore])
  if (exploresTree.length === 1) {
    return exploresTree[0].children || []
  }
  return []
}
