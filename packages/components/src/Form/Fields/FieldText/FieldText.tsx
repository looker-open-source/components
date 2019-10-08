import React, { forwardRef, Ref } from 'react'
import styled from 'styled-components'
import uuid from 'uuid/v4'
import { useFormContext } from '../../Form'
import { InputText, InputTextProps } from '../../Inputs/InputText/InputText'
import { Field, FieldProps, omitFieldProps, pickFieldProps } from '../Field'

export interface FieldTextProps extends FieldProps, InputTextProps {}

const FieldTextComponent = forwardRef(
  (props: FieldTextProps, ref: Ref<HTMLInputElement>) => {
    const { id = uuid() } = props
    const validationMessage = useFormContext(props)
    return (
      <Field id={id} alignValidationMessage="bottom" {...pickFieldProps(props)}>
        <InputText
          {...omitFieldProps(props)}
          id={id}
          validationType={validationMessage && validationMessage.type}
          ref={ref}
        />
      </Field>
    )
  }
)

export const FieldText = styled(FieldTextComponent)``
