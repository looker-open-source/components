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
