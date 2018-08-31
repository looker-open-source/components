import * as React from 'react'
import { FormControl } from '../FormGroup/FormGroup'
import { InputText } from '../Inputs/InputText'
import { Label } from '../Label/Label'

export interface FieldTextProps {
  id: string
  label: string
  name: string
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export const FieldText: React.SFC<FieldTextProps> = ({
  id,
  label,
  name,
  value,
  onChange,
}) => {
  return (
    <FormControl>
      <Label htmlFor={id}>{label}</Label>
      <InputText id={id} name={name} value={value} onChange={onChange} />
    </FormControl>
  )
}
