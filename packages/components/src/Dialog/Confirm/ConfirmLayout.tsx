/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ReactElement } from 'react'
import React from 'react'
import type { ButtonProps } from '../../Button'
import { Paragraph } from '../../Text'
import { DialogLayout } from '../Layout'

interface ConfirmLayoutProps {
  /**
   * Header content
   * I18n recommended: content that is user visible should be treated for i18n
   */
  title: string

  /**
   * Primary dialog content
   * I18n recommended: content that is user visible should be treated for i18n
   */
  message: ReactElement | string
  /**
   * Click to confirm
   */
  primaryButton: ReactElement<ButtonProps>
  /**
   * Click to cancel
   */
  secondaryButton: ReactElement<ButtonProps>
}

export const ConfirmLayout = ({
  secondaryButton,
  primaryButton,
  message,
  title,
}: ConfirmLayoutProps) => {
  return (
    <DialogLayout
      header={title}
      footer={
        <>
          {primaryButton}
          {secondaryButton}
        </>
      }
    >
      {typeof message === 'string' ? (
        <Paragraph breakword>{message}</Paragraph>
      ) : (
        message
      )}
    </DialogLayout>
  )
}
