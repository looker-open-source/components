import styled from 'styled-components'
import { reset, space, SpaceProps } from '@looker/design-tokens'
import { InputProps } from '../InputProps'

export interface CheckboxProps extends SpaceProps, Omit<InputProps, 'type'> {}

export const Checkbox = styled.input.attrs({ type: 'checkbox' })<CheckboxProps>`
  ${reset}
  ${space}
`
