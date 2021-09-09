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
import type { SwitchElementProps } from './types'

const getColor = ({ on, validationType }: SwitchElementProps): keyof Colors => {
  if (validationType === 'error') return 'criticalAccent'
  if (on) return 'keyAccent'
  return 'ui3'
}

export const Track = styled(({ className }: SwitchElementProps) => (
  <div className={className} />
))`
  background: ${({ theme, ...props }) => theme.colors[getColor(props)]};
  border-radius: ${({ theme }) => theme.radii.large};
  height: 14px;
  transition: ${({ theme }) => theme.transitions.moderate}ms;
  width: ${({ theme }) => theme.space.u9};
`
