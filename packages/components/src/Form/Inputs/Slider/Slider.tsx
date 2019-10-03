import omit from 'lodash/omit'
import React, { FunctionComponent, Ref } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { Box, BoxProps } from '../../../Layout/Box'
import { InputProps } from '../InputProps'

export interface SliderProps extends InputProps, BoxProps<HTMLInputElement> {
  /**
   * Minimum value for Slider.
   */
  min?: number
  /**
   * Maximum value for Slider.
   */
  max?: number
  /**
   * Granularity between values.
   */
  step?: number
  /**
   * Initial value.
   */
  value?: number
}

type ComponentType = FunctionComponent<SliderProps>
type StyledComponentType = StyledComponent<ComponentType, SliderProps>

const InternalSlider: React.FC<SliderProps> = props => {
  return (
    <Box
      // @ts-ignore
      as="input"
      type="range"
      {...omit(props, ['validationType'])}
    />
  )
}

const SliderFactory = React.forwardRef<StyledComponentType, SliderProps>(
  (props: SliderProps, ref: Ref<StyledComponentType>) => (
    <InternalSlider ref={ref} {...props} />
  )
)

/** @component */
export const Slider = styled<ComponentType>(SliderFactory)``
