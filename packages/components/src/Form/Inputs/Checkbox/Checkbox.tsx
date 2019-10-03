import styled from 'styled-components'
import { space, SpaceProps } from '@looker/design-tokens'
import { InputProps } from '../InputProps'

export interface CheckboxProps extends SpaceProps, Omit<InputProps, 'type'> {}

/** @component */
export const Checkbox = styled.input.attrs({ type: 'checkbox' })<CheckboxProps>`
  ${space}
`
