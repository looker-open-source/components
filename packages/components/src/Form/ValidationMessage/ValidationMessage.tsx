/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { reset } from '@looker/design-tokens'
import styled from 'styled-components'

export type ValidationType = 'error'

export interface ValidationMessageProps {
  className?: string
  /**
   * The type of validation, therefore changing the message's text color. Accepts: error.
   */
  type?: ValidationType
  /**
   * The validation message to render.
   * I18n recommended: content that is user visible should be treated for i18n
   */
  message?: string
}

const ValidationMessageLayout = ({
  className,
  message,
}: ValidationMessageProps) => <div className={className}>{message}</div>

export const ValidationMessage = styled(ValidationMessageLayout)`
  ${reset}

  font-size: ${({ theme }) => theme.fontSizes.xsmall};

  ${({ theme, type }) => type === 'error' && `color: ${theme.colors.critical};`}
`

ValidationMessage.displayName = 'ValidationMessage'
