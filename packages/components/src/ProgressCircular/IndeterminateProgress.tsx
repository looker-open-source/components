/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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

import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import type { ProgressCircularSizes } from './size'
import { progressCircularSVG } from './size'
import { progressCircularConstants } from './constants'
import { CircleContainer } from './ProgressSvg'

interface IndeterminateSpinnerProps {
  size: ProgressCircularSizes
}

export const IndeterminateProgress = ({ size }: IndeterminateSpinnerProps) => {
  const { stroke, half, radius, dashArray, dashOffset } = progressCircularSVG({
    size,
  })

  return (
    <IndeterminateContainer>
      <IndeterminateSpinner>
        <CircleClipper>
          <LeftCircleContainer
            viewBox={`0 0 ${half * 2} ${half * 2}`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx={half}
              cy={half}
              r={radius}
              strokeDasharray={dashArray}
              strokeDashoffset={dashOffset}
              strokeWidth={stroke}
            />
          </LeftCircleContainer>
        </CircleClipper>
        <GapPatch>
          <CircleContainer
            viewBox={`0 0 ${half * 2} ${half * 2}`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx={half}
              cy={half}
              r={radius}
              strokeDasharray={dashArray}
              strokeDashoffset={dashOffset}
              strokeWidth={stroke - 0.6}
            />
          </CircleContainer>
        </GapPatch>
        <CircleClipper>
          <RightCircleContainer
            viewBox={`0 0 ${half * 2} ${half * 2}`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx={half}
              cy={half}
              r={radius}
              strokeDasharray={dashArray}
              strokeDashoffset={dashOffset}
              strokeWidth={stroke}
            />
          </RightCircleContainer>
        </CircleClipper>
      </IndeterminateSpinner>
    </IndeterminateContainer>
  )
}

const containerRotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`

const spinnerRotateAnimations = () =>
  [...Array(9)].map(
    (_, i) =>
      `${i * 12.5}% {transform: rotate(${
        i * 0.5 * progressCircularConstants.arcSize
      }deg)}`
  )

const spinnerKeyFrames = keyframes`
  ${spinnerRotateAnimations().join('\n')}
`

const containerAnimation = () => {
  const duration =
    (360 * progressCircularConstants.arcTime) /
    (progressCircularConstants.arcStartRotationInterval +
      (360 - progressCircularConstants.arcSize))
  return css`
    animation: ${containerRotate} ${duration}ms linear infinite;
  `
}

const leftSpin = keyframes`
  from {
      transform: rotate(265deg);
    }
    50% {
      transform: rotate(130deg);
    }
    to {
      transform: rotate(265deg);
    }
`

const rightSpin = keyframes`
from {
      transform: rotate(-265deg);
    }
    50% {
      transform: rotate(-130deg);
    }
    to {
      transform: rotate(-265deg);
    }
`

const IndeterminateSpinner = styled.div`
  height: 100%;
  position: absolute;
  width: 100%;
`

const IndeterminateContainer = styled.div`
  font-size: 0;
  height: 100%;
  letter-spacing: 0;
  position: absolute;
  white-space: nowrap;
  width: 100%;

  ${containerAnimation}

  ${IndeterminateSpinner} {
    /* stylelint-disable */
    animation: ${spinnerKeyFrames} ${progressCircularConstants.arcTime * 4}ms
      ${progressCircularConstants.timingFunction} infinite both;
    /* stylelint-enable */
  }
`

const LeftCircleContainer = styled(CircleContainer)`
  animation-name: ${leftSpin};
`

const RightCircleContainer = styled(CircleContainer)`
  animation-name: ${rightSpin};
  left: -100%;
`

const CircleClipper = styled.div`
  display: inline-flex;
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 50%;

  ${CircleContainer} {
    animation-duration: ${progressCircularConstants.arcTime}ms;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
    animation-timing-function: ${progressCircularConstants.timingFunction};
    width: 200%;
  }
`

const GapPatch = styled.div`
  box-sizing: border-box;
  height: 100%;
  left: 47.5%;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 5%;

  ${CircleContainer} {
    left: -900%;
    transform: rotate(180deg);
    width: 2000%;
  }
`
