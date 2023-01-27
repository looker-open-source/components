/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import styled from 'styled-components'
import type { LayoutProps } from '@looker/design-tokens'
import { layout } from '@looker/design-tokens'
import type { ModalContentProps } from '../../../Modal/ModalContent'
import { ModalContent } from '../../../Modal/ModalContent'

export type DialogContentProps = ModalContentProps & LayoutProps

const dialogContentDefaults = {
  px: 'u8',
  py: 'u5',
}

export const DialogContent = styled(ModalContent).attrs(({ p, py, px }) => ({
  px: p || px || dialogContentDefaults.px,
  py: p || py || dialogContentDefaults.py,
}))<DialogContentProps>`
  ${layout}
`
