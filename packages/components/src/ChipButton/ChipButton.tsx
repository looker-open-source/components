/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import styled from 'styled-components'
import { inputHeight } from '../Form/Inputs/height'
import type { ChipProps } from '../Chip/Chip'
import { Chip } from '../Chip/Chip'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ChipButtonProps extends Omit<ChipProps, 'role'> {}

/**
   * Activates specialized styling Chip when used as a trigger for a Menu or Overlay

   * NOTE: Please consult with the @looker/components team when using this property
   * as it may be remove or extracted into a unique component in the future.
   *
   */
export const ChipButton = styled(Chip).attrs(() => ({
  role: 'button',
}))<ChipButtonProps>`
  border: 1px solid ${({ theme }) => theme.colors.ui3};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  height: ${inputHeight};
  padding: 0 ${({ theme }) => theme.space.u4};

  &:active,
  &:hover,
  &[aria-pressed='true'] {
    border-color: ${({ theme }) => theme.colors.key};
  }

  &[aria-selected='true'] {
    background: ${({ theme }) => theme.colors.keyAccent};
    color: ${({ theme }) => theme.colors.text5};
  }

  &.focus,
  &:focus {
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.key};
  }

  &[disabled] {
    background: ${({ theme }) => theme.colors.neutralAccent};
    color: ${({ theme }) => theme.colors.neutral};
    cursor: default;

    &:hover {
      background: ${({ theme }) => theme.colors.neutralAccent};
      border-color: ${({ theme }) => theme.colors.keyAccent};
    }
  }

  &[aria-selected='false'] {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text3};

    &:hover {
      background: ${({ theme }) => theme.colors.ui1};
    }

    &:active {
      border-color: ${({ theme }) => theme.colors.ui4};
    }

    &[disabled] {
      opacity: 0.4;
    }
  }
`
