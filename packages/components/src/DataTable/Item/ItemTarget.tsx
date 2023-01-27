/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { densityTarget } from '@looker/design-tokens'
import styled from 'styled-components'

export interface ItemTargetProps {
  disabled?: boolean
  size?: string
}

/**
 * ItemTarget provides an explicitly sized target for click targets.
 */
export const ItemTarget = styled.div<ItemTargetProps>`
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'inherit')};
  display: flex;
  height: 100%;
  justify-content: center;
  min-height: ${({ size }) => size || densityTarget};
  min-width: ${({ size }) => size || densityTarget};
  width: ${({ size }) => size || densityTarget};
`

export const ItemTargetGroup = styled.div`
  display: flex;
  margin-left: auto;
  width: fit-content;
`
