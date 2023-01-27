/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { CompatibleHTMLProps, FlexboxProps } from '@looker/design-tokens'
import { flexbox, shouldForwardProp } from '@looker/design-tokens'
import styled, { css } from 'styled-components'
import type { CommonLayoutProps } from '../Layout/utils/common'
import { commonLayoutCSS } from '../Layout/utils/common'

export interface CardProps
  extends CompatibleHTMLProps<HTMLElement>,
    FlexboxProps,
    CommonLayoutProps {
  /**
   * Show card with a BoxShadow applied
   * @default false
   */
  raised?: boolean
}

const cardTransition = () => css`
  ${({ theme }) => `${theme.transitions.quick}ms ${theme.easings.ease}`}
`

const raised = (props: CardProps) =>
  props.raised &&
  css`
    box-shadow: ${({ theme }) => theme.elevations.plus1};

    &:hover {
      box-shadow: ${({ theme }) => theme.elevations.plus2};
    }
  `

export const Card = styled.div
  .withConfig({ shouldForwardProp })
  .attrs<CardProps>(
    ({
      bg = 'background',
      border = 'ui3',
      borderRadius = 'medium',
      display = 'flex',
      flexDirection = 'column',
      height = '100%',
      minWidth = '200px',
      overflow = 'hidden',
    }) => ({
      bg,
      border,
      borderRadius,
      display,
      flexDirection,
      height,
      minWidth,
      overflow,
    })
  )<CardProps>`
  ${commonLayoutCSS}
  ${flexbox}

  transition: border ${cardTransition}, box-shadow ${cardTransition};

  &:hover {
    border-color: ${({ theme }) => theme.colors.ui4};
  }

  ${raised}
`
