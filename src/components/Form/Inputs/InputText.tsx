// Typescript component boilerplate for generating meaningful declaration files.
import * as React from 'react'
import styled, { StyledComponentClass } from '../../../styled_components'
export { StyledComponentClass }
import { ThemeInterface } from '../../../themes'
export { ThemeInterface }
import { themeSpacing } from '../../../themes/theme_spacing'
import { FontRamp, fontSizes } from '../../../styles/font_sizes'
// End Typescript component boilerplate

export enum InputTextTypes {
  Email = 'email',
  Number = 'number',
  Password = 'password',
  Text = 'text'
}

export interface InputTextProps extends React.HTMLProps<HTMLInputElement> {
  type?: InputTextTypes
}

export const InputText = styled<InputTextProps, 'input'>('input')`
  border: solid 1px ${props => props.theme.colors.borderColor};
  height: 28px;
  padding: 0 ${themeSpacing.s};
  border-radius: 4px;
  font-size: ${fontSizes[FontRamp.Five]};
`
