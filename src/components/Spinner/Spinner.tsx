import * as React from 'react'
import { keyframes, styled } from '../../style'
import { sizedArray } from '../../utils/array'
import { Box, BoxPropsWithout } from '../Box'
import { SpinnerMarker } from './SpinnerMarker'

export interface SpinnerProps
  extends BoxPropsWithout<HTMLDivElement, 'color' | 'size'> {
  markers?: number
  markerRadius?: number
  speed?: number
  size?: number
  color?: string
}

const InternalSpinner: React.SFC<SpinnerProps> = ({
  color = '#000',
  markers = 13,
  markerRadius = 10,
  size = 40,
  speed = 1000,
  ...props
}) => (
  <Box width={size} height={size} position="relative" {...props}>
    {generateMarkers(color, markers, markerRadius, size, speed)}
  </Box>
)

const generateMarkers = (
  color: string,
  markers: number,
  markerRadius: number,
  size: number,
  speed: number
) => {
  return sizedArray(markers).map((_, i) => (
    <SpinnerMarker
      circleSize={size}
      color={color}
      delay={(i * speed) / markers}
      key={i}
      radius={markerRadius}
      rotateAngle={(360 / markers) * i}
      speed={speed!}
    />
  ))
}

const fade = keyframes`
  from {opacity: 1;}
  to {opacity: 0.25;}
`

export const Spinner = styled<SpinnerProps>(InternalSpinner)`
  ${SpinnerMarker} {
    animation-name: ${fade};
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`
