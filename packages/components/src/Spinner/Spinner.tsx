/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

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

import {
  CompatibleHTMLProps,
  PositionProps,
  position,
  SpaceProps,
  space,
  reset,
} from '@looker/design-tokens'
import omit from 'lodash/omit'
import range from 'lodash/range'
import React, { FC } from 'react'
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

const SpinnerFactory: FC<SpinnerProps> = props => {
  const {
    color = 'palette.charcoal900',
    markers = 13,
    markerRadius,
    speed = 1000,
  } = props
  return (
    <Style {...omit(props, 'color', 'markers', 'markersRadius', 'speed')}>
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

const Style = styled.div<SpinnerProps>`
  ${reset}
  ${space}
  ${position}

  height: ${props => props.size}px;
  position: relative;
  width: ${props => props.size}px;
`

Style.defaultProps = {
  size: 30,
}

export const Spinner = styled(SpinnerFactory)``
