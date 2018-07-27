// Typescript component boilerplate for generating meaningful declaration files.
import * as React from 'react'
import { StyledComponentClass } from '../../../styled_components'
export { StyledComponentClass }
import { ThemeInterface } from '../../../themes'
export { ThemeInterface }
// End Typescript component boilerplate
import { resetComponent as styled } from '../../../reset_component'

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
  padding: 0 ${props => props.theme.spacing.s};
  border-radius: 4px;
  font-size: ${props => props.theme.fontRamp.five};
`
