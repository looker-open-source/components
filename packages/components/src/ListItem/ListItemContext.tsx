/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { createContext } from 'react'
import type { DensityProp } from '@looker/design-tokens'
import type { ListColor } from '../List'

export type ListItemContextProps = DensityProp & {
  iconGutter: boolean
  color?: ListColor
}

const listItemContext: ListItemContextProps = {
  density: 0,
  iconGutter: false,
}

export const ListItemContext = createContext(listItemContext)
