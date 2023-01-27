/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { Span } from '@looker/components'
import React from 'react'
import { useTranslation } from '../../../../../utils'

interface OperatorLabelProps {
  value: boolean
}

export const OperatorLabel = ({ value }: OperatorLabelProps) => {
  const { t } = useTranslation('OperatorLabel')
  return (
    <Span color="text1" fontSize="small">
      {value ? t('OR') : t('AND')}
    </Span>
  )
}
