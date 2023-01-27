/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ILookmlModelExploreField } from '@looker/sdk'

const isFiscalFieldType = (type?: string) =>
  type ? ['date_fiscal_year', 'date_fiscal_quarter'].indexOf(type) > -1 : false

export const showFiscalUnits = (field: ILookmlModelExploreField) =>
  field && (field.fiscal_month_offset !== 0 || isFiscalFieldType(field.type))
