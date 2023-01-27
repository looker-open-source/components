/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Space, Icon, SpaceVertical } from '@looker/components'
import { ErrorOutline } from '@styled-icons/material/ErrorOutline'
import { useTranslation } from '../utils'

type QueryErrorProps = {
  message?: string | null
}

export const QueryError = ({ message }: QueryErrorProps) => {
  const { t } = useTranslation('QueryError')
  return (
    <SpaceVertical p="medium" gap="xxsmall">
      <Space justify="center">
        <Icon icon={<ErrorOutline />} size="large" color="ui4" />
      </Space>
      <Space justify="center" color="text2" gap="xxsmall">
        <strong>{t('Error')}:</strong>
        <span>{message}</span>
      </Space>
    </SpaceVertical>
  )
}
