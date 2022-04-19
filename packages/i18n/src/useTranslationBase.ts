/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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

import i18next from 'i18next'
import { useTranslation as useTranslationOrig } from 'react-i18next'
import type { Namespace, UseTranslationOptions } from 'react-i18next'
import { i18nInitComponents } from './i18nInitComponents'
import type { I18nStateWithDates } from './types'

export const useTranslationBase = <N extends Namespace>(
  en: Partial<I18nStateWithDates>,
  ns?: N,
  options?: UseTranslationOptions
) => {
  const firstNameSpace = en.resources && Object.keys(en.resources.en || {})[0]
  const isEn = !i18next.language || i18next.language === 'en'
  const enResourcesLoaded =
    firstNameSpace && i18next.hasResourceBundle('en', firstNameSpace)
  if (isEn && !enResourcesLoaded) {
    i18nInitComponents(en)
  }
  return useTranslationOrig(ns, options)
}
