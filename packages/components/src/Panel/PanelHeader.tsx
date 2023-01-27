/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { useTheme } from 'styled-components'
import { ArrowBack } from '@styled-icons/material-rounded/ArrowBack'
import { Heading } from '../Text'
import { useTranslation } from '../utils'
import { Space } from '../Layout'
import { IconButton } from '../Button'
import type { PanelBaseProps } from './types'

export const PanelHeader = ({
  closeLabel,
  onClose,
  iconToggle = false,
  title,
}: PanelBaseProps) => {
  const { t } = useTranslation('PanelHeader')
  const defaultLabel = t('CloseTitle', { title })

  const { space } = useTheme()

  return (
    <Space
      as="header"
      height={space.u10}
      px="large"
      gap="u3"
      mt="small"
      mb="1.5rem"
      flexShrink={0}
    >
      <IconButton
        icon={<ArrowBack />}
        label={closeLabel || defaultLabel}
        onClick={onClose}
        toggle={iconToggle}
        toggleBackground={iconToggle}
        shape="round"
        size="small"
      />
      <Heading fontSize="xlarge">{title}</Heading>
    </Space>
  )
}
