import styled from 'styled-components'
import { space, SpaceProps } from '@looker/design-tokens'
import { InputProps } from '../InputProps'

export interface SliderProps extends SpaceProps, Omit<InputProps, 'type'> {
  // /**
  //  * Minimum value for Slider.
  //  */
  // min?: number
  // /**
  //  * Maximum value for Slider.
  //  */
  // max?: number
  // /**
  //  * Granularity between values.
  //  */
  // step?: number
  // /**
  //  * Initial value.
  //  */
  // value?: number
}

export const Slider = styled.input.attrs({ type: 'range' })<SliderProps>`
  ${space}
`
