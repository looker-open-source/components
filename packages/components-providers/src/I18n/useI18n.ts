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

import { i18nInitOptionsComponents, i18nInitComponents } from '@looker/i18n'
import type { I18nStateWithDates } from '@looker/i18n'
import i18next from 'i18next'
import merge from 'lodash/merge'
import { useEffect } from 'react'
import { i18nResources } from './resources'

export const i18nInitOptions = i18nInitOptionsComponents

export const i18nInit = async (options?: Partial<I18nStateWithDates>) => {
  // Merge with English translations in case there are translations missing
  // from the resources passed in
  const mergedResources = merge({}, options?.resources, i18nResources)
  return i18nInitComponents({ ...options, resources: mergedResources })
}

export type UseI18nProps = Partial<I18nStateWithDates>

export const useI18n = ({
  dateLocale,
  locale,
  resources = i18nResources,
}: UseI18nProps) => {
  if (!i18next.isInitialized) {
    i18nInitComponents({ dateLocale, locale, resources })
  }

  useEffect(() => {
    const update = () => i18nInitComponents({ dateLocale, locale, resources })
    if (i18next.isInitialized) {
      update()
    } else {
      i18next.on('initialized', update)
    }
    return () => {
      i18next.off('initialized', update)
    }
  }, [dateLocale, locale, resources])
}
