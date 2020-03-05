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

import { quarterFade } from '@looker/design-tokens'
import styled, { css } from 'styled-components'
import { color, ColorProps } from 'styled-system'

interface SpinnerMarkerProps extends ColorProps {
  markers: number
  markerIndex: number
  markerRadius?: number
  speed: number
}

const markerStyle = (props: SpinnerMarkerProps) => {
  const { markerIndex, markerRadius, markers, speed } = props
  const delay = (markerIndex * speed) / markers
  const rotateAngle = (360 / markers) * markerIndex

  return css`
    animation: ${quarterFade} ${speed}ms linear ${delay}ms infinite;
    border-radius: ${markerRadius && `${markerRadius}px`};
    transform: rotate(${rotateAngle}deg) translate(0, -160%);
  `
}

export const SpinnerMarker = styled.div<SpinnerMarkerProps>`
  ${color}
  ${markerStyle}
  height: 20%;
  left: 48%;
  opacity: 0.25;
  position: absolute;
  top: 40%;
  width: 6%;
`
