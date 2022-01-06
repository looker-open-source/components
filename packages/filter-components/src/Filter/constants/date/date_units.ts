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

export const useDateUnits = (): Option[] => {
  const { t } = useTranslation('date_units')
  // prettier-ignore
  return [
    { value: 'second' , unit: 'second' , label: t('seconds' ), singular: t('second' ) },
    { value: 'minute' , unit: 'minute' , label: t('minutes' ), singular: t('minute' ) },
    { value: 'hour'   , unit: 'hour'   , label: t('hours'   ), singular: t('hour'   ) },
    { value: 'day'    , unit: 'day'    , label: t('days'    ), singular: t('day'    ) },
    { value: 'week'   , unit: 'week'   , label: t('weeks'   ), singular: t('week'   ) },
    { value: 'month'  , unit: 'month'  , label: t('months'  ), singular: t('month'  ) },
    { value: 'quarter', unit: 'quarter', label: t('quarters'), singular: t('quarter') },
    { value: 'year'   , unit: 'year'   , label: t('years'   ), singular: t('year'   ) },
  ]
}

export const useFiscalDateUnits = (): Option[] => {
  const { t } = useTranslation('date_units')
  // prettier-ignore
  return [
    { value: 'fiscal quarter', unit: 'fiscal quarter', label: t('fiscal quarters'), singular: t('fiscal quarter') },
    { value: 'fiscal year'   , unit: 'fiscal year'   , label: t('fiscal years'   ), singular: t('fiscal year'   ) },
  ]
}
