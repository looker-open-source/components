/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ReactNode } from 'react'
import React from 'react'
import styled from 'styled-components'
import type { CompatibleHTMLProps } from '@looker/design-tokens'
import type { SpaceHelperProps } from '../../Layout/Space'
import { Space } from '../../Layout/Space'

export interface ModalFooterProps
  extends CompatibleHTMLProps<HTMLDivElement>,
    SpaceHelperProps {
  /**
   *
   */
  children: ReactNode
  /**
   * Secondary content to place in the footer
   */
  secondary?: ReactNode
}

const ModalFooterLayout = ({
  children,
  secondary,
  ...props
}: ModalFooterProps) => (
  <Space as="footer" reverse between {...props}>
    <Space reverse>{children}</Space>
    {secondary && <Space>{secondary}</Space>}
  </Space>
)

export const ModalFooter = styled(ModalFooterLayout)`
  flex-shrink: 0;
`
