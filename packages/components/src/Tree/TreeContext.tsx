/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { DensityProp } from '@looker/design-tokens'
import { createContext } from 'react'
import type { ListItemColor } from '../ListItem'

export type TreeContextProps = DensityProp & {
  border?: boolean
  color?: ListItemColor
  depth: number
}

export const TreeContext = createContext<TreeContextProps>({
  density: 0,
  depth: 0,
})
