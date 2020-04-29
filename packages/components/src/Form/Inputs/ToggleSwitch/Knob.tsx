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

import { rem, rgba } from 'polished'
import React, { FC } from 'react'
import styled from 'styled-components'
import { reset } from '@looker/design-tokens'

export interface KnobProps {
  size: number
  disabled?: boolean
  on?: boolean
}

const Knob = styled(({ className }) => <div className={className} />)`
  transform: ${({ on, size }) => (on ? `translateX(${rem(size * 0.75)})` : '')};
  transition: ${({ theme }) => theme.transitions.durationModerate};
  position: absolute;
  bottom: ${({ size }) => rem(size * 0.1)};
  left: ${({ size }) => rem(size * 0.1)};
  width: ${({ size }) => rem(size * 0.8)};
  height: ${({ size }) => rem(size * 0.8)};
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.palette.white};
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

export const KnobContainer = styled(KnobContainerLayout)<KnobContainerProps>`
  ${reset}

  transition: ${({ theme }) => theme.transitions.durationModerate};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: ${({ size }) => rem(size)};
  background: ${({ on, theme }) =>
    on ? theme.colors.palette.purple400 : theme.colors.palette.charcoal300};

  &:hover {
    ${({ disabled, theme }) =>
      disabled &&
      `box-shadow: 0 0 0.01rem 0.01rem ${rgba(
        theme.colors.palette.primary500,
        0.5
      )}`};
  }
`
