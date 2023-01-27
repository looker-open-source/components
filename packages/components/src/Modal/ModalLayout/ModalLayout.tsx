/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ReactNode } from 'react'
import React from 'react'
import { Spinner } from '../../Spinner'

export interface ModalLayoutProps {
  /**
   * Content to be displayed within Modal
   */
  children?: ReactNode

  /**
   * Content to be displayed as footer
   */
  footer?: ReactNode

  /**
   * Content to be displayed as header
   */
  header?: ReactNode

  /**
   * Display loading spinner instead of the ModalContent
   */
  isLoading?: boolean
}

export const ModalLoading = () => <Spinner mx="auto" my="xxlarge" />

export const ModalLayout = ({ children, footer, header }: ModalLayoutProps) => (
  <>
    {header}
    {children}
    {footer}
  </>
)
