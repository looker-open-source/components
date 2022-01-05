/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */
import { useTranslation } from 'react-i18next'
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
