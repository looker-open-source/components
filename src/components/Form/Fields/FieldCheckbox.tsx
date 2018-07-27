// Typescript component boilerplate for generating meaningful declaration files.
import * as React from 'react'
import { ThemeInterface } from '../../../themes/index'
import { Label } from '../Label/Label'
import { InputCheckbox } from '../Inputs/InputCheckbox'
import { FormControl, FormControlDirections } from '../FormGroup/FormGroup'
export { ThemeInterface }
// End Typescript component boilerplate

export interface FieldCheckboxProps {
  id: string
  label: string
  name: string
}

export const FieldCheckbox: React.SFC<FieldCheckboxProps> = ({
  id,
  label,
  name,
  ...props
}) => {
  return (
    <FormControl alignLabel={FormControlDirections.Left}>
      <Label htmlFor={id}>{label}</Label>
      <InputCheckbox id={id} name={name} {...props} />
    </FormControl>
  )
}
