// Typescript component boilerplate for generating meaningful declaration files.
import * as React from 'react'
import styled, { StyledComponentClass } from '../../../styled_components'
export { StyledComponentClass }
import { ThemeInterface } from '../../../themes'
export { ThemeInterface }
// End Typescript component boilerplate

import { FormGroup } from '../FormGroup/FormGroup'
import { Label } from '../Label/Label'

export enum InputTypes {
  Email = 'email',
  Number = 'number',
  Password = 'password',
  Text = 'text'
}

export interface TextInputProps {
  id: string
  name: string
  placeholder?: string
  type: InputTypes
  required?: boolean
}

/**
 * Input fields accept data from user inpit
 */
const TextInputGenerator: React.SFC<TextInputProps> = ({
  id,
  name,
  placeholder,
  required,
  type,
  ...args
}) => {
  // // This prevents our props from being passed directly to the underlying tags, which ultimately
  // // would cause some warnings. Ideally we would define the return type for this function, and
  // // Typescript would warn us when passing props that are invalid.
  // //
  // // See https://reactjs.org/warnings/unknown-prop.html
  // const props = Object.assign({}, args)
  // delete props.id
  // delete props.name
  // delete props.placehoder
  // delete props.type
  // delete props.required

  return (
    <input
      id={id}
      name={name}
      placeholder={placeholder}
      required={required}
      type={type}
      {...args}
    />
  )
}

export const Input = styled<TextInputProps>(TextInputGenerator)`
  border: solid 1px ${props => props.theme.colors.borderColor};
  height: 28px;
  padding: 0 8px;
  border-radius: 4px;
  font-size: 14px;
`
