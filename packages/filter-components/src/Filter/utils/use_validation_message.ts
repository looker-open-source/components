/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ValidationMessageProps } from '@looker/components'
import { useTranslation } from '../../utils'
import { ERROR_TYPE } from '../../constants'

/*
 * gets validation message for filter-components
 * Types of Filter errors are:
 *   Required Filter - requires a filter value if required is on
 */
export const useValidationMessage = (
  filterExpression: string,
  isRequired?: boolean
): ValidationMessageProps => {
  const { t } = useTranslation('use_validation_message')
  // Required Filter
  return isRequired && !filterExpression
    ? { type: ERROR_TYPE, message: t('Value required') }
    : {}
}
