import * as React from 'react'
import { styled } from '../../../../style'
import { Box, BoxProps } from '../../../Box'
import { InputProps } from '../InputProps'

export interface RadioProps extends BoxProps<HTMLInputElement>, InputProps {
  /**
   * Determines if the radio button is selected or not.
   */
  checked?: boolean
}

const InternalRadio: React.FC<RadioProps> = ({ validationType, ...props }) => {
  const type = { type: 'radio' }
  return <Box is="input" {...props} {...type} />
}

const RadioFactory = React.forwardRef((props: RadioProps, ref) => (
  <InternalRadio innerRef={ref as React.RefObject<HTMLElement>} {...props} />
))

export const Radio = styled<RadioProps>(RadioFactory)``
