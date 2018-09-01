import * as React from 'react'
import { withTheme } from '../../../styled_components'
import { Theme } from '../../../themes'
import { FormControl } from '../FormGroup/FormGroup'
import { InputText } from '../Inputs/InputText'
import { Label } from '../Label/Label'

export interface FieldTextProps {
  id: string
  label: string
  name: string
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  readOnly?: boolean
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
