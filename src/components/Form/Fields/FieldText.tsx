// Typescript component boilerplate for generating meaningful declaration files.
import * as React from 'react'
import styled, { StyledComponentClass } from '../../../styled_components'
export { StyledComponentClass }
import { ThemeInterface } from '../../../themes/index'
import { Label } from '../Label/Label'
import { InputText } from '../Inputs/InputText'
import { FormGroup } from '../FormGroup/FormGroup'
export { ThemeInterface }
// End Typescript component boilerplate

export interface FieldTextProps {
  id: string
  label: string
  name: string
  theme: ThemeInterface
}

export const FieldText: React.SFC<FieldTextProps> = ({
  id,
  label,
  name,
  theme
}) => {
  return (
    <FormGroup>
      <Label htmlFor={id} theme={theme}>
        {label}
      </Label>
      <InputText id={id} name={name} theme={theme} />
    </FormGroup>
  )
}
