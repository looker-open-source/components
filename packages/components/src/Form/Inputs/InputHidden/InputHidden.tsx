import styled from 'styled-components'
import { InputProps } from '../InputProps'

export const InputHidden = styled.input.attrs({ type: 'hidden' })<
  Omit<InputProps, 'type'>
>``
