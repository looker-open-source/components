import * as React from 'react'
import { FormControl, FormControlDirections } from '../FormGroup/FormGroup'
import { Checkbox, CheckboxProps } from '../Inputs/Checkbox'
import { Label } from '../Label/Label'

export interface FieldCheckboxProps extends CheckboxProps {
  label: string
}

export const FieldCheckbox: React.SFC<FieldCheckboxProps> = ({
  id,
  label,
  name,
  ...props
}) => {
  return (
    <FormControl alignLabel={FormControlDirections.Left} alignCenter>
      <Label htmlFor={id}>{label}</Label>
      <Checkbox id={id} name={name} {...props} />
    </FormControl>
  )
}
