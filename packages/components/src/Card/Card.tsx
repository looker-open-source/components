/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import {
  CompatibleHTMLProps,
  FlexboxProps,
  flexbox,
  shouldForwardProp,
} from '@looker/design-tokens'
import styled, { css } from 'styled-components'
import { ComplexLayoutProps, complexLayoutCSS } from '../Layout/utils/complex'

export interface CardProps
  extends CompatibleHTMLProps<HTMLElement>,
    FlexboxProps,
    ComplexLayoutProps {
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
    box-shadow: ${(props) => props.theme.shadows[1]};

    &:hover {
      box-shadow: ${(props) => props.theme.shadows[2]};
    }
  `

export const Card = styled.div
  .withConfig({ shouldForwardProp })
  .attrs<CardProps>(
    ({
      bg = 'background',
      border = '1px solid',
      borderColor = 'ui3',
      borderRadius = 'medium',
      display = 'flex',
      flexDirection = 'column',
      height = '100%',
      minWidth = '200px',
      overflow = 'hidden',
    }) => ({
      bg,
      border,
      borderColor,
      borderRadius,
      display,
      flexDirection,
      height,
      minWidth,
      overflow,
    })
  )<CardProps>`
  ${complexLayoutCSS}
  ${flexbox}

  transition: border ${cardTransition}, box-shadow ${cardTransition};

  &:hover {
    border-color: ${(props) => props.theme.colors.ui4};
  }

  ${raised}
`
