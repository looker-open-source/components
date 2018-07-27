// Typescript component boilerplate for generating meaningful declaration files.
import * as React from 'react'
import styled, { css, StyledComponentClass } from '../../../styled_components'
import { ThemeInterface } from '../../../themes'
export { React, StyledComponentClass, ThemeInterface }
import { themeSpacing } from '../../../themes/theme_spacing'
// End Typescript component boilerplate

export enum FormControlDirections {
  Left = 'left',
  Right = 'right',
  Top = 'top',
  Bottom = 'bottom'
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
  margin-bottom: ${themeSpacing.s};
  ${props => alignLabels(props.alignLabel)};
  align-items: ${props => (props.alignCenter ? 'center' : 'normal')};
`
