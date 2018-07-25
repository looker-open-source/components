// Typescript component boilerplate for generating meaningful declaration files.
import * as React from 'react'
import { ThemeInterface } from '../../../themes/index'
import { Label } from '../Label/Label'
import { InputCheckbox } from '../Inputs/InputCheckbox'
import { FormGroup } from '../FormGroup/FormGroup'
export { ThemeInterface }
// End Typescript component boilerplate

export interface FieldCheckboxProps {
  id: string
  label: string
  name: string
  theme: ThemeInterface
}

export const FieldCheckbox: React.SFC<FieldCheckboxProps> = ({
  id,
  label,
  name,
  theme,
  ...props
}) => {
  return (
    <FormGroup>
      <Label htmlFor={id} theme={theme}>
        {label}
      </Label>
      <InputCheckbox id={id} name={name} theme={theme} {...props} />
    </FormGroup>
  )
}
