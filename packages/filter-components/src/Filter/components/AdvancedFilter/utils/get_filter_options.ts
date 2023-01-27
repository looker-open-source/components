/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { useMemo } from 'react'
import { useTranslation } from '../../../../utils'
import type { Option } from '../../../types/option'

export const useFilterOptions = (
  options: Option[],
  showMatchesAdvanced: boolean
) => {
  const { t } = useTranslation('get_filter_options')
  return useMemo(
    () =>
      showMatchesAdvanced
        ? [
            ...options,
            {
              value: 'matchesAdvanced',
              // need ns here for extraction tooling
              label: t('matches advanced', { ns: 'get_filter_options' }),
            },
          ]
        : options,
    [options, showMatchesAdvanced, t]
  )
}
