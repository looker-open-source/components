import * as React from 'react'
import { FormControl, FormControlDirections } from '../FormGroup/FormGroup'
import { Checkbox } from '../Inputs/Checkbox'
import { Label } from '../Label/Label'

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
    <FormControl alignLabel={FormControlDirections.Left} alignCenter>
      <Label htmlFor={id}>{label}</Label>
      <Checkbox id={id} name={name} {...props} />
    </FormControl>
  )
}
