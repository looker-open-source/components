import React, { forwardRef, Ref } from 'react'
import styled from 'styled-components'
import uuid from 'uuid/v4'
import { useFormContext } from '../../Form'
import { Checkbox, CheckboxProps } from '../../Inputs/Checkbox/Checkbox'
import { Field, FieldProps, omitFieldProps, pickFieldProps } from '../Field'

export interface FieldCheckboxProps extends FieldProps, CheckboxProps {}

const FieldCheckboxComponent = forwardRef(
  (props: FieldCheckboxProps, ref: Ref<HTMLInputElement>) => {
    const validationMessage = useFormContext(props)
    const { id = uuid() } = props
    return (
      <Field
        id={id}
        alignLabel="left"
        alignValidationMessage="right"
        validationMessage={validationMessage}
        {...pickFieldProps(props)}
      >
        <Checkbox
          {...omitFieldProps(props)}
          id={id}
          validationType={validationMessage && validationMessage.type}
          ref={ref}
        />
      </Field>
    )
  }
)

export const FieldCheckbox = styled(FieldCheckboxComponent)``
