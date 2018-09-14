import * as React from 'react'
import styled from '../../../styled_components'
import { red600 } from '../../../styles/colors'
import { reset } from '../../../styles/reset'
import { Theme } from '../../../themes'
// import { ValidationError } from '../Form'
import { FormControl } from '../FormGroup/FormGroup'
import { InputText, InputTextProps } from '../Inputs/InputText'
import { Label } from '../Label/Label'

export interface FieldTextProps extends InputTextProps {
  label: string
  validationError?: string
}

const ErrorMessage = styled<{}, 'div'>('div')`
  ${reset}
  color: ${red600};
  margin-right: ${props => props.theme.spacing.s};
  margin-top: ${props => props.theme.spacing.s};
  font-size: ${props => props.theme.fontRamp[6]};
`

export const FieldText: React.SFC<FieldTextProps> = ({
  id,
  label,
  name,
  validationError,
  ...props
}) => {
  let errorMessage
  let invalid = false
  if (
    validationError !== undefined &&
    validationError !== null &&
    validationError !== ''
  ) {
    invalid = true
    errorMessage = <ErrorMessage>{validationError}</ErrorMessage>
  }
  return (
    <FormControl>
      <Label htmlFor={id}>{label}</Label>
      <InputText invalid={invalid} id={id} name={name} {...props} />
      {errorMessage}
    </FormControl>
  )
}
