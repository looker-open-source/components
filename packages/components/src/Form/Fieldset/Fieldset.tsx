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

import React, { FC } from 'react'
import styled from 'styled-components'
import {
  border,
  BorderProps,
  color,
  CompatibleHTMLProps,
  layout,
  LayoutProps,
  reset,
  space,
  SpaceProps,
} from '@looker/design-tokens'
import { BackgroundColorProps } from 'styled-system'
import { Grid } from '../../Layout/Grid'
import { Legend } from './Legend'

interface FieldsetBaseProps
  extends BackgroundColorProps,
    BorderProps,
    LayoutProps,
    SpaceProps,
    CompatibleHTMLProps<HTMLFieldSetElement> {}

export interface FieldsetProps extends FieldsetBaseProps {
  /** Determines where to place the label in relation to the input.
   * @default false
   */
  inline?: boolean
  /**
   * The legend, or heading, of this fieldset.
   */
  legend?: string
}

const FieldsetLayout: FC<FieldsetProps> = ({
  className,
  inline,
  legend,
  ...props
}) => {
  const columnValue = inline ? props.children.length : 1
  return (
    <div className={className}>
      {legend && <Legend>{legend}</Legend>}
      <Grid columns={columnValue} gap="xsmall">
        {props.children}
      </Grid>
    </div>
  )
}

export const Fieldset = styled(FieldsetLayout)`
  ${reset}

  ${border}
  ${color}
  ${layout}
  ${space}
  align-items: left;
  border: none;
  display: grid;
  grid-template-areas: ${({ inline }) =>
    inline ? '"legend input"' : '"legend" "input"'};
  margin-bottom: ${({ theme }) => theme.space.xsmall};
  width: ${({ width }) => width || 'fit-content'};

  ${Grid} {
    grid-area: input;
  }

  ${Legend} {
    color: ${({ theme }) => theme.colors.palette.charcoal700};
    display: grid;
    font-size: ${({ theme }) => theme.fontSizes.xsmall};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    grid-area: legend;

    ${({ inline, theme }) =>
      inline
        ? `
      text-align: right;
      justify-self: end;
      height: 36px;
      padding: ${theme.space.small};
      width: 100%;
      `
        : `
      padding: ${theme.space.small};
      `}
  }
`
