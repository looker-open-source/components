import styled, { css } from '../../../styled_components'
import { spacing } from '../../../themes/theme_spacing'

export enum FormControlDirections {
  Left = 'left',
  Right = 'right',
  Top = 'top',
  Bottom = 'bottom',
}

export interface FormControlProps {
  alignLabel?: FormControlDirections
  alignCenter?: boolean
}

const alignLabels = (direction: FormControlDirections | undefined) => {
  switch (direction) {
    case FormControlDirections.Left:
      return css`
        flex-direction: row;
      `
    case FormControlDirections.Right:
      return css`
        flex-direction: row-reverse;
        justify-content: flex-end;
      `
    case FormControlDirections.Bottom:
      return css`
        flex-direction: column-reverse;
        justify-content: flex-end;
      `
    case FormControlDirections.Top:
    default:
      return css`
        flex-direction: column;
      `
  }
}

export const FormControl = styled<FormControlProps, 'div'>('div')`
  display: flex;
  margin-bottom: ${spacing.s};
  ${props => alignLabels(props.alignLabel)};
  align-items: ${props => (props.alignCenter ? 'center' : 'normal')};
`
