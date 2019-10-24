import {
  CompatibleHTMLProps,
  PositionProps,
  position,
  SpaceProps,
  space,
  reset,
} from 'looker-design-tokens'
import { omit, range } from 'lodash'
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
