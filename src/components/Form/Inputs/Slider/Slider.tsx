import * as React from 'react'
import { styled } from '../../../../style'
import { Box, BoxProps } from '../../../Box'
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

const InternalSlider: React.FC<SliderProps> = ({
  validationType,
  ...props
}) => {
  return <Box is="input" type="range" {...props} />
}

const SliderFactory = React.forwardRef((props: SliderProps, ref) => (
  <InternalSlider innerRef={ref} {...props} />
))

export const Slider = styled<SliderProps>(SliderFactory)``
