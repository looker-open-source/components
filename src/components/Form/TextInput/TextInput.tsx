// Typescript component boilerplate for generating meaningful declaration files.
import * as React from 'react'
import styled, { StyledComponentClass } from '../../../styled_components'
export { StyledComponentClass }
import { ThemeInterface } from '../../../themes'
export { ThemeInterface }
// End Typescript component boilerplate

import { FormGroup } from '../FormGroup/FormGroup'
import { Label } from '../Label/Label'

export interface TextInputProps {
  id: string
  label: string
  name: string
  placeholder?: string
  required?: boolean
}

/**
 * Headings are used to help users understand  what a major section of an interface is about, for example the labeling
 * of a page or a title of a card component.
 */
const TextInputGenerator: React.SFC<TextInputProps> = ({
  id,
  label,
  name,
  placeholder,
  required,
  ...args
}) => {
  // // This prevents our props from being passed directly to the underlying h* tags, which ultimately
  // // would cause some warnings. Ideally we would define the return type for this function, and
  // // Typescript would warn us when passing props that are invalid.
  // //
  // // See https://reactjs.org/warnings/unknown-prop.html
  // const props = Object.assign({}, args)
  // delete props.align
  // delete props.size
  // delete props.transform
  // delete props.truncate
  // delete props.weight

  return (
    <FormGroup>
      <Label for={id}>{label}</Label>
      <input
        id={id}
        type="text"
        name={name}
        placeholder={placeholder}
        required={required}
        {...args}
      />
    </FormGroup>
  )
}

export const TextInput = styled<TextInputProps>(TextInputGenerator)`
  border: solid 1px ${props => props.theme.colors.borderColor};
  height: 28px;
  padding: 0 8px;
  border-radius: 4px;
  font-size: 14px;
`
