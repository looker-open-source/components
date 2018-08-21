import * as React from 'react'
import { FormControl } from '../FormGroup/FormGroup'
import { InputText } from '../Inputs/InputText'
import { Label } from '../Label/Label'

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
