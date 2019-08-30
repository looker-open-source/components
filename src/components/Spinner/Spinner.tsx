import omit from 'lodash/omit'
import React, { FunctionComponent, Ref } from 'react'
import styled, {
  FlattenSimpleInterpolation,
  StyledComponent,
} from 'styled-components'
import { sizedArray } from '../../utils/array'
import { Box, BoxPropsWithout } from '../Box'
import { generateStyleProps, StyledMarker } from './Spinner.styles'

export interface SpinnerProps
  extends BoxPropsWithout<HTMLDivElement, 'color' | 'size'> {
  markers?: number
  markerRadius?: number
  speed?: number
  size?: number
  color?: string
}

export interface StyledMarkerProps extends SpinnerProps {
  fadeRule: FlattenSimpleInterpolation
  rotateAngle: number
}

type ComponentType = FunctionComponent<SpinnerProps>
type StyledComponentType = StyledComponent<ComponentType, SpinnerProps>

const InternalSpinner: ComponentType = (props: SpinnerProps) => {
  const { size = 30, markers = 13 } = props
  const boxProps = omit(props, ['markerRadius'])

  return (
    <Box width={size} height={size} position="relative" {...boxProps}>
      {sizedArray(markers).map((_, i) => (
        <StyledMarker key={i} {...generateStyleProps(i, props)} />
      ))}
    </Box>
  )
}

const SpinnerFactory = React.forwardRef<StyledComponentType, SpinnerProps>(
  (props: SpinnerProps, ref: Ref<StyledComponentType>) => (
    <InternalSpinner ref={ref} {...props} />
  )
)

/** @component */
export const Spinner = styled<ComponentType>(SpinnerFactory)``
