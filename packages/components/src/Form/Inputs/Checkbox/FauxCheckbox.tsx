/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import styled from 'styled-components'
import { checkboxRadioHeight } from '../height'

export type FauxCheckboxProps = {
  isSelected?: boolean
}

export const FauxCheckbox = styled.div<FauxCheckboxProps>`
  background: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.key : 'currentColor'};
  border: solid 2px
    ${({ isSelected, theme: { colors } }) =>
      isSelected ? colors.key : colors.ui4};
  border-radius: ${({ theme }) => theme.radii.small};
  color: ${({ theme }) => theme.colors.keyText};
  height: ${checkboxRadioHeight};
  position: relative;
  width: ${checkboxRadioHeight};
  svg {
    position: absolute;
    right: 0;
    top: 0;
  }
`
