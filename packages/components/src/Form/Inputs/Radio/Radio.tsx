import styled from 'styled-components'
import { space, SpaceProps } from '@looker/design-tokens'
import { InputProps } from '../InputProps'

export interface RadioProps extends SpaceProps, Omit<InputProps, 'type'> {}

export const Checkbox = styled.input.attrs({ type: 'radio' })<RadioProps>`
  ${space}
`
