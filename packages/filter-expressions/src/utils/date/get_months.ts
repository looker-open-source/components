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
import type { TFunction } from 'i18next'
import i18next from 'i18next'

// a function instead of an array b/c we need to wait for i18next to be initialized
export const getMonths = (translate?: TFunction): string[] => {
  const t = translate || i18next.t.bind(i18next)
  return [
    t('January', { ns: 'get_months' }),
    t('February', { ns: 'get_months' }),
    t('March', { ns: 'get_months' }),
    t('April', { ns: 'get_months' }),
    t('May', { ns: 'get_months' }),
    t('June', { ns: 'get_months' }),
    t('July', { ns: 'get_months' }),
    t('August', { ns: 'get_months' }),
    t('September', { ns: 'get_months' }),
    t('October', { ns: 'get_months' }),
    t('November', { ns: 'get_months' }),
    t('December', { ns: 'get_months' }),
  ]
}
