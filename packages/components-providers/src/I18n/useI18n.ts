/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { i18nInitComponents } from '@looker/i18n'
import type { I18nStateWithDates } from '@looker/i18n'
import i18next from 'i18next'
import { useEffect } from 'react'

export type UseI18nProps = Partial<I18nStateWithDates>

export const useI18n = ({ dateLocale, locale, resources }: UseI18nProps) => {
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
