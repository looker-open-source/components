/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { useTranslation } from '../../../utils'
import type { Option } from '../../types/option'
import { useDateUnits, useFiscalDateUnits } from './date_units'

const useCompleteDateUnits = (): Option[] => {
  const { t } = useTranslation('past_units')
  // prettier-ignore
  return [
    { value: 'c_second' , unit: 'second' , label: t('complete seconds' ), complete: true },
    { value: 'c_minute' , unit: 'minute' , label: t('complete minutes' ), complete: true },
    { value: 'c_hour'   , unit: 'hour'   , label: t('complete hours'   ), complete: true },
    { value: 'c_day'    , unit: 'day'    , label: t('complete days'    ), complete: true },
    { value: 'c_week'   , unit: 'week'   , label: t('complete weeks'   ), complete: true },
    { value: 'c_month'  , unit: 'month'  , label: t('complete months'  ), complete: true },
    { value: 'c_quarter', unit: 'quarter', label: t('complete quarters'), complete: true },
    { value: 'c_year'   , unit: 'year'   , label: t('complete years'   ), complete: true },
  ]
}

export const usePastUnits = (): Option[] => {
  const dateUnits = useDateUnits()
  const completeDateUnits = useCompleteDateUnits()
  return [...dateUnits, ...completeDateUnits]
}

export const useFiscalPastUnits = (): Option[] => {
  const { t } = useTranslation('past_units')
  const dateUnits = useDateUnits()
  const fiscalDateUnits = useFiscalDateUnits()
  const completeDateUnits = useCompleteDateUnits()
  // prettier-ignore
  return [
  ...dateUnits,
  ...fiscalDateUnits,
  ...completeDateUnits,
  { value: 'c_fiscal quarter', unit: 'fiscal quarter', label: t('complete fiscal quarters'), complete: true },
  { value: 'c_fiscal year'   , unit: 'fiscal year'   , label: t('complete fiscal years'   ), complete: true },
]
}
