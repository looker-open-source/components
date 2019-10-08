import React, { forwardRef, Ref } from 'react'
import styled from 'styled-components'
import uuid from 'uuid/v4'
import { useFormContext } from '../../Form'
import { Select, SelectProps } from '../../Inputs/Select/Select'
import { Field, FieldProps, omitFieldProps, pickFieldProps } from '../Field'

export interface FieldSelectProps extends FieldProps, SelectProps {}

const FieldSelectComponent = forwardRef(
  (props: FieldSelectProps, ref: Ref<HTMLSelectElement>) => {
    const validationMessage = useFormContext(props)
    const { id = uuid() } = props
    return (
      <Field
        id={id}
        alignValidationMessage={'bottom'}
        validationMessage={validationMessage}
        {...pickFieldProps(props)}
      >
        <Select
          {...omitFieldProps(props)}
          id={id}
          validationType={validationMessage && validationMessage.type}
          ref={ref}
        />
      </Field>
    )
  }
)

export const FieldSelect = styled(FieldSelectComponent)``
