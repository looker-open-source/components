/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import styled from 'styled-components'
import { useTranslation } from '../../../utils'
import { VisuallyHidden } from '../../../VisuallyHidden'

type RequiredStarLayoutProps = {
  className?: string
}

const RequiredStarLayout = ({ className }: RequiredStarLayoutProps) => {
  const { t } = useTranslation('RequiredStar')
  return (
    <span aria-hidden="true" className={className} data-testid="requiredStar">
      <VisuallyHidden>{` ${t('required')}`}</VisuallyHidden>
    </span>
  )
}

export const RequiredStar = styled(RequiredStarLayout)`
  &::before {
    color: ${({ theme }) => theme.colors.critical};
    content: ' *';
  }
`
