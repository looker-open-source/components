/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

import type { Colors } from '@looker/design-tokens'
import React from 'react'
import styled from 'styled-components'
import { rippleStyle } from '../../../Ripple'
import type { SwitchElementProps } from './types'

const getColor = ({ on, validationType }: SwitchElementProps): keyof Colors => {
  if (on) {
    if (validationType === 'error') return 'critical'
    return 'key'
  }
  return 'field'
}

export const Handle = styled(({ className, style }: SwitchElementProps) => (
  <div className={className} style={style}>
    <div />
  </div>
))`
  ${rippleStyle}
  height: ${({ theme }) => theme.space.u6};
  left: 0;
  padding: ${({ theme }) => theme.space.u05};
  position: absolute;
  top: 0;
  transform: ${({ on, theme }) =>
    on ? `translateX(${theme.space.u4})` : undefined};
  transition: ${({ theme }) => theme.transitions.moderate}ms;
  width: ${({ theme }) => theme.space.u6};
  div {
    background: ${({ theme, ...props }) => theme.colors[getColor(props)]};
    border-radius: 50%;
    box-shadow: ${({ theme }) => theme.elevations.plus1};
    height: 100%;
    /* This nested relative position div allows the handle
    to appear on top of the ripple bg */
    position: relative;
    width: 100%;
  }
`
