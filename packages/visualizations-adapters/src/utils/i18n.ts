/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { i18nInitComponents } from '@looker/i18n'
import type { I18nState as _I18nState } from '@looker/i18n'
import merge from 'lodash/merge'
import { en } from '../locales'

export type I18nState = _I18nState
/**
 * Directly initialize the localization instance
 */
export async function i18nInit(options: I18nState = en) {
  const resources = merge({}, options.resources, en.resources)
  return i18nInitComponents({ ...options, resources })
}
