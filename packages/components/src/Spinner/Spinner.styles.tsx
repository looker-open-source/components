import React, { FunctionComponent } from 'react'
import styled, { css, StyledComponent } from 'styled-components'
import { palette, quarterFade } from '@looker/design-tokens'
import { Box } from '../Box'
import { SpinnerProps, StyledMarkerProps } from './Spinner'

export type MarkerComponentType = FunctionComponent<StyledMarkerProps>
const MarkerElement: MarkerComponentType = ({ className }) => (
  <Box className={className} />
)

export const StyledMarker: StyledComponent<
  MarkerComponentType,
  StyledMarkerProps
> = styled(MarkerElement)`
  width: 6%;
  height: 20%;
  position: absolute;
  left: 48%;
  top: 40%;
  opacity: 0.25;
  background: ${props => props.color};
  animation: ${props => props.fadeRule};
  border-radius: ${props => props.markerRadius}px;
  transform: rotate(${(props: StyledMarkerProps) => props.rotateAngle}deg)
    translate(0, -160%);
`

export const generateStyleProps = (
  key: number,
  props: SpinnerProps
): StyledMarkerProps => {
  const {
    speed = 1000,
    color = palette.charcoal900,
    markerRadius,
    markers = 13,
  } = props
  const delay = (key * speed) / markers

  /*
   * NOTE: Use longform version of tagged function to prevent stylelint
   * from parsing and complaining about css`` keyframe interpolation.
   *
   * EQUIVALENT: css`${quarterFade} ${speed}ms linear ${delay}ms infinite;`
   */
  const fadeRule = css(
    (['', ' ', 'ms linear ', 'ms infinite;'] as any) as TemplateStringsArray,
    quarterFade,
    speed,
    delay
  )

  return {
    color,
    fadeRule,
    markerRadius,
    rotateAngle: (360 / markers) * key,
  }
}
