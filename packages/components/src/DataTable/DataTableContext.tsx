/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { createContext } from 'react'
import type { MixedBoolean } from '../Form'
import type { SelectConfig } from './types'
import type { DataTableColumns } from './Column'

export interface DataTableContextProps {
  allSelected?: MixedBoolean
  columns?: DataTableColumns
  columnsDisplayState?: boolean[]
  onSort?: (id: string, sortDirection: 'asc' | 'desc') => void
  select?: SelectConfig
}

export const DataTableContext = createContext<DataTableContextProps>({})
