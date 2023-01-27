/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import styled from 'styled-components'
import { ButtonBase } from './ButtonBase'

export const Button = styled(ButtonBase).attrs(() => ({
  rippleBackgroundColor: 'background',
}))`
  background: ${({ theme, color = 'key' }) => theme.colors[color]};
  border: 1px solid ${({ theme, color = 'key' }) => theme.colors[color]};
  color: ${({ theme, color = 'key' }) => theme.colors[`${color}Text`]};

  &[aria-expanded='true'] {
    background: ${({ theme, color = 'key' }) =>
      theme.colors[`${color}Pressed`]};
    border-color: ${({ theme, color = 'key' }) =>
      theme.colors[`${color}Pressed`]};
  }
`
