import styled from 'styled-components'
import { reset, space, SpaceProps } from '@looker/design-tokens'
import { InputProps } from '../InputProps'

export interface SliderProps extends SpaceProps, Omit<InputProps, 'type'> {}

export const Slider = styled.input.attrs({ type: 'range' })<SliderProps>`
  ${reset}
  ${space}
`
