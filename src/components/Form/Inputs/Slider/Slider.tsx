import tag from 'clean-tag'
import * as React from 'react'
import { InputProps } from '../InputProps'

export interface SliderProps extends InputProps {
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
  return <tag.input type="range" {...props} />
}
