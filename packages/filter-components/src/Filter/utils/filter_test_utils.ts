/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ILookmlModelExploreField } from '@looker/sdk'
import type { FilterUIConfig } from '../types/filter_ui_config'

export const testFilterUIConfig: FilterUIConfig = {
  display: 'inline',
  options: '',
  type: 'advanced',
}

export const testField: ILookmlModelExploreField = {
  can_time_filter: false,
  fiscal_month_offset: 0,
}
