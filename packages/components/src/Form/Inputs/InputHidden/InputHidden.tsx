import React, { FunctionComponent } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { Box, BoxProps } from '../../../Layout/Box'
import { InputProps } from '../InputProps'

export interface InputHiddenProps
  extends Omit<BoxProps<HTMLInputElement>, 'as'>,
    InputProps {
  /**
   * Specifies value of the input field.
   */
  value?: string
  name?: string
}

export type InputHiddenComponentType = FunctionComponent<InputHiddenProps>
export type StyledInputHiddenComponentType = StyledComponent<
  InputHiddenComponentType,
  InputHiddenProps
>

const InternalInputHidden: InputHiddenComponentType = ({
  name,
  value,
  ...props
}) => {
  return <Box as="input" type="hidden" name={name} value={value} {...props} />
}

/** @component */
export const InputHidden: StyledInputHiddenComponentType = styled<
  InputHiddenComponentType
>(InternalInputHidden)``
