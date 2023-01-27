/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import styled from 'styled-components'
import { ButtonBase } from './ButtonBase'

export const ButtonTransparent = styled(ButtonBase)`
  background: transparent;
  border: 1px solid transparent;
  color: ${({ theme, color = 'key' }) => theme.colors[color]};
  padding: 0 ${({ theme }) => theme.space.u2};

  &[aria-expanded='true'] {
    background: ${({ theme, color = 'key' }) => theme.colors[`${color}Accent`]};
    border-color: ${({ theme, color = 'key' }) =>
      theme.colors[`${color}Accent`]};
  }
`
