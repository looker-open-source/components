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
import { CircleContainer } from './ProgessSvg'
import { calculateProgressSizes, ProgressCircularSizeProps } from './size'

interface DeterminateSpinnerProps {
  size: ProgressCircularSizeProps
  progress?: number
}

export const DeterminateProgress: FC<DeterminateSpinnerProps> = ({
  size,
  progress = 0,
}) => {
  const { half, radius, dashArray } = {
    ...calculateProgressSizes(size, true),
  }
  const stroke = size.stroke

  const progressOffset = (1 - progress) * (2 * Math.PI * radius)

  return (
    <DeterminateContainer>
      <CircleContainer
        viewBox={`0 0 ${size.dimensions} ${size.dimensions}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <DeterminateTrack cx={half} cy={half} r={radius} strokeWidth={stroke} />
        <DeterminateCircle
          cx={half}
          cy={half}
          r={radius}
          strokeDasharray={dashArray}
          strokeDashoffset={progressOffset}
          strokeWidth={stroke}
        />
      </CircleContainer>
    </DeterminateContainer>
  )
}

const DeterminateContainer = styled.div`
  height: 100%;
  position: absolute;
  transform: rotate(-90deg);
  width: 100%;
`

const DeterminateTrack = styled.circle`
  stroke: transparent;
`

const DeterminateCircle = styled.circle`
  stroke: ${(props) => props.theme.colors.key};
  transition: stroke-dashoffset 500ms;
`
