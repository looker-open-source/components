/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type {
  CompatibleHTMLProps,
  PositionProps,
  SpaceProps,
} from '@looker/design-tokens'
import {
  position,
  space,
  reset,
  shouldForwardProp,
} from '@looker/design-tokens'
import range from 'lodash/range'
import React from 'react'
import styled from 'styled-components'
import { SpinnerMarker } from './SpinnerMarker'

export interface SpinnerProps
  extends SpaceProps,
    PositionProps,
    CompatibleHTMLProps<HTMLElement> {
  markers?: number
  markerRadius?: number
  speed?: number
  size?: number
  color?: string
}

const SpinnerFactory = (props: SpinnerProps) => {
  const {
    color = 'text5',
    markers = 13,
    markerRadius,
    speed = 1000,
    ...rest
  } = props
  return (
    <Style data-testid="loading-spinner" {...rest}>
      {range(markers).map(i => (
        <SpinnerMarker
          backgroundColor={color}
          key={i}
          speed={speed}
          markers={markers}
          markerIndex={i}
          markerRadius={markerRadius}
        />
      ))}
    </Style>
  )
}

const Style = styled.div
  .withConfig({ shouldForwardProp })
  .attrs<SpinnerProps>(({ size = '30' }) => ({
    size,
  }))<SpinnerProps>`
  ${reset}
  ${space}
  ${position}

  height: ${({ size }) => size}px;
  position: relative;
  width: ${({ size }) => size}px;
`

export const Spinner = styled(SpinnerFactory)``
