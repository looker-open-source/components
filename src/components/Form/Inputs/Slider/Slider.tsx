import * as React from 'react'
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

export const Slider: React.SFC<SliderProps> = ({
  validationType,
  ...props
}) => {
  return <Box is="input" type="range" {...props} />
}
