import * as React from 'react'
import { css, styled } from '../../style'
import { Box, BoxPropsWithout } from '../Box'

export interface SpinnerMarkerProps
  extends BoxPropsWithout<HTMLDivElement, 'color'> {
  color?: string
  radius?: number
  rotateAngle: number
  circleSize: number
  delay: number
  speed: number
}

const InternalMarker: React.SFC<SpinnerMarkerProps> = ({
  color,
  radius,
  rotateAngle,
  circleSize,
  delay,
  speed,
  ...props
}) => {
  return <Box bg={color} borderRadius={radius} {...props} />
}

function markerTransform(props: SpinnerMarkerProps) {
  return css`
    transform: rotate(${props.rotateAngle}deg) translate(0, -160%);
    animation-delay: ${props.delay}s;
  `
}

export const SpinnerMarker = styled<SpinnerMarkerProps>(InternalMarker)`
  animation-duration: ${props => props.speed + 'ms'};
  width: 6%;
  height: 20%;
  position: absolute;
  left: 48%;
  top: 40%;
  opacity: 0.25;
  ${markerTransform};
`
