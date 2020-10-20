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
import { reset, knobShadowColor } from '@looker/design-tokens'

export interface KnobProps {
  disabled?: boolean
  on?: boolean
}

const Knob = styled(({ className }) => <div className={className} />)`
  background: ${({ theme }) => theme.colors.field};
  border-radius: 50%;
  bottom: 0.125rem;
  height: 1rem;
  left: 0.125rem;
  position: absolute;
  transform: ${({ on }) => (on ? `translateX(0.9375rem)` : undefined)};
  transition: ${({ theme }) => theme.transitions.moderate}ms;
  width: 1rem;
`

interface KnobContainerProps extends KnobProps {
  className?: string
}

const KnobContainerLayout: FC<KnobContainerProps> = ({
  className,
  ...props
}) => (
  <div className={className}>
    <Knob {...props} />
  </div>
)

export const KnobContainer = styled(KnobContainerLayout)`
  ${reset}

  background: ${({ on, theme }) => (on ? theme.colors.key : theme.colors.ui3)};
  border-radius: 1.25rem;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: ${({ theme }) => theme.transitions.moderate}ms;

  &:hover {
    ${({ disabled }) =>
      disabled && `box-shadow: 0 0 0.01rem 0.01rem ${knobShadowColor};`}
  }
`
