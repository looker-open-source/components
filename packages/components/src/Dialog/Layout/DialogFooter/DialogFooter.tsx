/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import styled from 'styled-components'
import type { ModalFooterProps } from '../../../Modal/ModalFooter'
import { ModalFooter } from '../../../Modal/ModalFooter'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DialogFooterProps extends ModalFooterProps {}

export const DialogFooter = styled(ModalFooter).attrs(
  ({ px = 'xlarge', py = 'large' }) => ({
    px,
    py,
  })
)<DialogFooterProps>``
