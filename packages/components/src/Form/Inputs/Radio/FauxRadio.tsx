/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import styled from 'styled-components'
import { reset } from '@looker/design-tokens'
import { checkboxRadioHeight } from '../height'

export const FauxRadio = styled.div`
  ${reset}
  background: ${({ theme }) => theme.colors.field};
  border: solid 2px ${({ theme }) => theme.colors.ui2};
  border-color: currentColor;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.ui4};
  height: ${checkboxRadioHeight};
  padding: ${({ theme }) => theme.space.u05};
  transition: background-color 25ms linear, border-color 25ms linear,
    box-shadow 25ms linear;
  width: ${checkboxRadioHeight};

  &::after {
    background: ${({ theme }) => theme.colors.field};
    border-radius: 50%;
    content: '';
    display: block;
    height: 100%;
    width: 100%;
  }
`
