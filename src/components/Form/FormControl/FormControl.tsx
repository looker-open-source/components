import { css, styled } from '../../../style'

export type FormControlDirections = 'left' | 'right' | 'top' | 'bottom'

export interface FormControlProps {
  alignLabel?: FormControlDirections
  alignCenter?: boolean
}

const alignLabels = (direction: FormControlDirections | undefined) => {
  switch (direction) {
    case 'left':
      return css`
        flex-direction: row;
        align-items: center;
      `
    case 'right':
      return css`
        flex-direction: row-reverse;
        justify-content: flex-end;
        align-items: center;
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

export const FormControl = styled.div<FormControlProps>`
  display: flex;
  margin-bottom: ${props => props.theme.space.small};
  align-items: ${props => (props.alignCenter ? 'center' : 'normal')};
  ${props => alignLabels(props.alignLabel)};
`
