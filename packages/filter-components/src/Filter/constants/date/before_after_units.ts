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

const useAgoDateUnits = (): Option[] => {
  const { t } = useTranslation('before_after_units')
  // prettier-ignore
  return [
    { value: 'year'    , unit: 'years'    , label: t('years ago'    ) },
    { value: 'quarter' , unit: 'quarters' , label: t('quarters ago' ) },
    { value: 'month'   , unit: 'months'   , label: t('months ago'   ) },
    { value: 'week'    , unit: 'weeks'    , label: t('weeks ago'    ) },
    { value: 'day'     , unit: 'days'     , label: t('days ago'     ) },
    { value: 'hour'    , unit: 'hours'    , label: t('hours ago'    ) },
    { value: 'minute'  , unit: 'minutes'  , label: t('minutes ago'  ) },
    { value: 'second'  , unit: 'seconds'  , label: t('seconds ago'  ) },
    { value: 'now'     , unit: 'now'      , label: t('now'          ) },
  ]
}

const useFromNowDateUnits = (): Option[] => {
  const { t } = useTranslation('before_after_units')
  // prettier-ignore
  return [
    { value: 'f_second' , unit: 'second' , label: t('seconds from now' ), fromnow: true },
    { value: 'f_minute' , unit: 'minute' , label: t('minutes from now' ), fromnow: true },
    { value: 'f_hour'   , unit: 'hour'   , label: t('hours from now'   ), fromnow: true },
    { value: 'f_day'    , unit: 'day'    , label: t('days from now'    ), fromnow: true },
    { value: 'f_week'   , unit: 'week'   , label: t('weeks from now'   ), fromnow: true },
    { value: 'f_month'  , unit: 'month'  , label: t('months from now'  ), fromnow: true },
    { value: 'f_quarter', unit: 'quarter', label: t('quarters from now'), fromnow: true },
    { value: 'f_year'   , unit: 'year'   , label: t('years from now'   ), fromnow: true },
  ]
}

export const useBeforeOrAfterUnits = (): Option[] => {
  const agoDateUnits = useAgoDateUnits()
  const fromNowDateUnits = useFromNowDateUnits()
  return [...agoDateUnits, ...fromNowDateUnits]
}
export const useFiscalBeforeOrAfterUnits = (): Option[] => {
  const { t } = useTranslation('before_after_units')
  const agoDateUnits = useAgoDateUnits()
  const fromNowDateUnits = useFromNowDateUnits()
  // prettier-ignore
  return [
      { value: 'fiscal year'   , unit: 'fiscal year'   , label: t('fiscal years ago'   ) },
      { value: 'fiscal quarter', unit: 'fiscal quarter', label: t('fiscal quarters ago') },
      ...agoDateUnits,
      ...fromNowDateUnits,
      { value: 'f_fiscal quarter', unit: 'fiscal quarter', label: t('fiscal quarter from now') },
      { value: 'f_fiscal year'   , unit: 'fiscal year'   , label: t('fiscal years from now'  ) },
    ]
}
