/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import styled from 'styled-components'
import type { LayoutProps } from '@looker/design-tokens'
import { layout } from '@looker/design-tokens'
import type { ModalContentProps } from '../../../Modal/ModalContent'
import { ModalContent } from '../../../Modal/ModalContent'

export type PopoverContentProps = ModalContentProps & LayoutProps

const popoverContentDefaults = {
  px: 'u5',
  py: 'u4',
}

export const PopoverContent = styled(
  ({ children, p, py, px, ...props }: PopoverContentProps) => {
    py = py || p || popoverContentDefaults.py
    px = px || p || popoverContentDefaults.px

    return (
      <ModalContent overflowVerticalPadding="u1" py={py} px={px} {...props}>
        {children}
      </ModalContent>
    )
  }
)<PopoverContentProps>`
  ${layout}
`
