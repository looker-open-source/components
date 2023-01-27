/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { i18nInitComponents } from '@looker/i18n'
import type { I18nStateWithDates as _I18nStateWithDates } from '@looker/i18n'
import merge from 'lodash/merge'
import { en } from '../locales'

export type I18nStateWithDates = _I18nStateWithDates
/**
 * Directly initialize the localization instance
 * (not needed if using ComponentsProvider)
 */
export async function i18nInit({
  locale = 'en',
  resources,
  dateLocale,
}: I18nStateWithDates = en) {
  // Merge with English in case there are translations missing
  // from the resources passed in
  const mergedResources = merge({}, resources, en.resources)

  return i18nInitComponents({ dateLocale, locale, resources: mergedResources })
}
