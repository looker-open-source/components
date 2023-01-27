/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Namespace, UseTranslationOptions } from 'react-i18next'
import { useTranslationBase } from '@looker/i18n'

export const useTranslation = (
  ns?: Namespace,
  options?: UseTranslationOptions
) => {
  return useTranslationBase({}, ns, options)
}
