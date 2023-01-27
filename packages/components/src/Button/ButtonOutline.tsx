/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import styled from 'styled-components'
import { ButtonBase } from './ButtonBase'

export const ButtonOutline = styled(ButtonBase)`
  background: ${({ theme, color = 'key' }) => theme.colors[`${color}Text`]};
  border: 1px solid ${({ theme }) => theme.colors.ui3};
  color: ${({ theme, color = 'key' }) => theme.colors[color]};

  &[aria-expanded='true'] {
    background: ${({ theme, color = 'key' }) => theme.colors[`${color}Accent`]};
    border-color: ${({ theme, color = 'key' }) =>
      theme.colors[`${color}Focus`]};
    color: ${({ theme, color = 'key' }) => theme.colors[color]};
  }
`
