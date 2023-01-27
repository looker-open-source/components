/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ColorProps } from '@looker/design-tokens'
import { color, quarterFade, shouldForwardProp } from '@looker/design-tokens'
import styled, { css } from 'styled-components'

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

export const SpinnerMarker = styled.div.withConfig({
  shouldForwardProp,
})<SpinnerMarkerProps>`
  ${color}
  ${markerStyle}
  height: 20%;
  left: 48%;
  opacity: 0.25;
  position: absolute;
  top: 40%;
  width: 6%;
`
