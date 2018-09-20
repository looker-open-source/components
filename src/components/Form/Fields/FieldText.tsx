import * as React from 'react'
import { FormControl } from '../FormGroup/FormGroup'
import { InputText, InputTextProps } from '../Inputs/InputText'
import { Label } from '../Label/Label'

export interface FieldTextProps extends InputTextProps {
  label: string
}

export const FieldText: React.SFC<FieldTextProps> = ({
  id,
  label,
  name,
  ...props
}) => {
  return (
    <FormControl>
      <Label htmlFor={id}>{label}</Label>
      <InputText id={id} name={name} {...props} />
    </FormControl>
  )
}
