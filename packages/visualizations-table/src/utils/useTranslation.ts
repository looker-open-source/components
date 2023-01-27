/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Namespace, UseTranslationOptions } from 'react-i18next'
import { useTranslationBase } from '@looker/i18n'
import { en } from '../locales'

export const useTranslation = (
  ns?: Namespace,
  options?: UseTranslationOptions
) => {
  return useTranslationBase(en, ns, options)
}
