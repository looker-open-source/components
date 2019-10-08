import styled from 'styled-components'
import { reset, space, SpaceProps } from '@looker/design-tokens'
import { InputProps } from '../InputProps'

export interface RadioProps extends SpaceProps, Omit<InputProps, 'type'> {}

export const Radio = styled.input.attrs({ type: 'radio' })<RadioProps>`
  ${reset}
  ${space}
`
