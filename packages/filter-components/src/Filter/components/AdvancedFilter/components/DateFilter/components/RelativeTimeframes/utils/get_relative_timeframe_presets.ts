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
import type { AllPresetTimeframes } from '../../../types/relative_timeframe_types'

export const useRelativeTimeframePresets = (): {
  [key in AllPresetTimeframes]: string
} => {
  const { t } = useTranslation('get_relative_timeframe_presets')
  return {
    Today: t('Today'),
    Yesterday: t('Yesterday'),

    'Last 7 Days': t('Last 7 Days'),
    'Last 14 Days': t('Last 14 Days'),
    'Last 28 Days': t('Last 28 Days'),
    'Last 30 Days': t('Last 30 Days'),
    'Last 90 Days': t('Last 90 Days'),
    'Last 180 Days': t('Last 180 Days'),
    'Last 365 Days': t('Last 365 Days'),
    'Year To Date': t('Year To Date'),

    'This Week': t('This Week'),
    'This Month': t('This Month'),
    'This Quarter': t('This Quarter'),
    'This Year': t('This Year'),

    'Previous Week': t('Previous Week'),
    'Previous Month': t('Previous Month'),
    'Previous Quarter': t('Previous Quarter'),
    'Previous Year': t('Previous Year'),
  }
}
