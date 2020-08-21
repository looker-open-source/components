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

import styled from 'styled-components'
import { DividerBase, DividerProps } from './Divider'

export interface DividerVerticalProps extends DividerProps {
  height?: number | string
  stretch?: boolean
}

export const DividerVertical = styled(DividerBase).attrs(
  (props: DividerVerticalProps) => {
    if (props.height && props.stretch) {
      // eslint-disable-next-line no-console
      console.warn(
        'DividerVertical will not be displayed if both height and stretch props are passed'
      )
    }
    return { 'data-testid': 'DividerVertical', height: props.height || '1rem' }
  }
)<DividerVerticalProps>`
  display: inline-block;
  margin-left: ${({ theme }) => theme.space.xsmall};
  margin-right: ${({ theme }) => theme.space.xsmall};
  width: ${({ size }) => size};
  ${({ height, stretch }) =>
    stretch ? `height: ${height}` : `align-self: stretch`}
`
