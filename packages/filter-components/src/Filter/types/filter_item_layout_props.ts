/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { FilterModel } from '@looker/filter-expressions'

export type FilterItemLayoutProps<T extends string = string> = {
  item: FilterModel<T>
  showAdd: boolean
  showName: boolean
  showRemove: boolean
  /**
   * true = render with text
   * false = don't render
   * 'spacer' = render as empty space
   */
  showOperator: boolean | 'spacer'
  onAdd: (item: FilterModel, keepValue?: boolean) => void
  onRemove: (id: string) => void
}
