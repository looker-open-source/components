import * as React from 'react'
import { Label } from '../Label/Label'
import { InputText } from '../Inputs/InputText'
import { FormControl } from '../FormGroup/FormGroup'

export interface FieldTextProps {
  id: string
  label: string
  name: string
}

export const FieldText: React.SFC<FieldTextProps> = ({ id, label, name }) => {
  return (
    <FormControl>
      <Label htmlFor={id}>{label}</Label>
      <InputText id={id} name={name} />
    </FormControl>
  )
}
