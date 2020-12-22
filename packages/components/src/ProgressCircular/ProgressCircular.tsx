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
import { IndeterminateProgress } from './IndeterminateProgress'
import { DeterminateProgress } from './DeterminateProgress'
import {
  ProgressCircularSizes,
  lookupSpinnerSize,
  ProgressCircularSizeProps,
} from './size'

export interface ProgressCircularProps {
  /**
   * Size of spinner
   */
  size?: ProgressCircularSizes
  /**
   * If a determaniate progress
   */
  determainate?: boolean
  /**
   * The current progress of the determainte progress between 0 and 1
   */
  progress?: number
  /**
   * Accessible label
   */
  label?: string
}

export const ProgressCircular: FC<ProgressCircularProps> = ({
  size = 'large',
  determainate,
  progress,
  label,
  ...props
}) => {
  const spinnerSize: ProgressCircularSizeProps = lookupSpinnerSize(size)

  return (
    <ProgressContainter
      size={spinnerSize}
      role="progressbar"
      aria-label={label || undefined}
      aria-valuemin={0}
      aria-valuemax={1}
      aria-valuenow={progress || undefined}
      {...props}
    >
      {determainate ? (
        <DeterminateProgress size={spinnerSize} progress={progress} />
      ) : (
        <IndeterminateProgress size={spinnerSize} />
      )}
    </ProgressContainter>
  )
}

const ProgressContainter = styled.div<{ size: ProgressCircularSizeProps }>`
  direction: ltr;
  display: inline-flex;
  height: ${(props) => props.size.dimensions}px;
  position: relative;
  transition: opacity 250ms;
  width: ${(props) => props.size.dimensions}px;
`
