/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { SpaceVertical, Heading, Paragraph } from '@looker/components'
import React from 'react'
import { useTranslation } from '../utils'

export const NoMatchingFields = ({ px }: { px?: string }) => {
  const { t } = useTranslation('NoMatchingFields')
  return (
    <SpaceVertical px={px} gap="u1">
      <Heading as="h5" color="text1" fontWeight="bold">
        {t('No Matching Fields')}
      </Heading>
      <Paragraph color="text1" fontSize="small">
        {t('Try Something Else')}
      </Paragraph>
    </SpaceVertical>
  )
}
