// Typescript component boilerplate for generating meaningful declaration files.
import * as React from 'react'
import styled, { StyledComponentClass } from '../../../styled_components'
export { StyledComponentClass }
import { ThemeInterface } from '../../../themes'
export { ThemeInterface }
// End Typescript component boilerplate

import { FormGroup } from '../FormGroup/FormGroup'
import { Input, InputTypes } from '../Input/Input'
import { Label } from '../Label/Label'

export interface CheckboxProps {
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
const CheckboxGenerator: React.SFC<CheckboxProps> = ({
  id,
  label,
  name,
  required,
  ...args
}) => {
  // // This prevents our props from being passed directly to the underlying tags, which ultimately
  // // would cause some warnings. Ideally we would define the return type for this function, and
  // // Typescript would warn us when passing props that are invalid.
  // //
  // // See https://reactjs.org/warnings/unknown-prop.html
  // const props = Object.assign({}, args)
  // delete props.id
  // delete props.label
  // delete props.name
  // delete props.placeholder
  // delete props.required

  return (
    <FormGroup>
      <Label htmlFor={id}>{label}</Label>
      <input
        id={id}
        type="checkbox"
        name={name}
        required={required}
        {...args}
      />
    </FormGroup>
  )
}

export const Checkbox = styled<CheckboxProps>(CheckboxGenerator)`
  border: solid 1px ${props => props.theme.colors.borderColor};
  padding: 0 8px;
  border-radius: 4px;
  font-size: 14px;
`
