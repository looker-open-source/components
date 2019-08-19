import * as React from 'react'
import { styled } from '../../../../style'
import { Box, BoxProps } from '../../../Box'
import { InputProps } from '../InputProps'

export interface InputHiddenProps
  extends BoxProps<HTMLInputElement>,
    InputProps {
  /**
   * Specifies value of the input field.
   */
  value?: string
  name?: string
}

const InternalInputHidden: React.FC<InputHiddenProps> = ({
  name,
  value,
  ...props
}) => {
  return <Box is="input" type="hidden" name={name} value={value} {...props} />
}

const InputHiddenFactory = React.forwardRef((props: InputHiddenProps, ref) => (
  <InternalInputHidden innerRef={ref} {...props} />
))

export const InputHidden = styled<InputHiddenProps>(InputHiddenFactory)``
