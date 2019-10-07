import styled, { css } from 'styled-components'
import { Flex, FlexProps } from '../../Layout/Flex'

export type FormControlDirections = 'left' | 'right' | 'top' | 'bottom'

export interface FormControlProps extends FlexProps {
  alignLabel?: FormControlDirections
}

const setFlexAlignment = ({ alignLabel }: FormControlProps) => {
  switch (alignLabel) {
    case 'left':
      return css`
        flex-direction: row;
        align-items: baseline;
      `
    case 'right':
      return css`
        flex-direction: row-reverse;
        justify-content: flex-end;
        align-items: baseline;
      `
    case 'bottom':
      return css`
        flex-direction: column-reverse;
        justify-content: flex-end;
      `
    case 'top':
    default:
      return css`
        flex-direction: column;
      `
  }
}

export const FormControl = styled(Flex)<FormControlProps>`
  ${setFlexAlignment}
`
