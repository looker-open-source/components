/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ValidationMessageProps } from '@looker/components'
import { useTranslation } from '../../utils'

export const usePlaceholder = (
  value?: string | string[],
  validationMessage?: ValidationMessageProps
) => {
  const { t } = useTranslation('use_placeholder')
  const anyValue = t('any value')
  const placeholder =
    !value || value.length === 0 ? validationMessage?.message || anyValue : ''
  return { 'aria-label': anyValue, placeholder }
}
