/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { SpaceProps } from '@looker/design-tokens'
import { space } from '@looker/design-tokens'
import styled from 'styled-components'
import { inputIconSize } from '../inputIconSize'

export const InputTextContent = styled.div<SpaceProps>`
  ${space}
  align-items: center;
  color: ${({ theme }) => theme.colors.text1};
  display: flex;
  height: 100%;
  pointer-events: none;

  > svg {
    ${inputIconSize}
  }
`
