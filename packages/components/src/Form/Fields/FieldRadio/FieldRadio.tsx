import React, { forwardRef, Ref } from 'react'
import styled from 'styled-components'
import uuid from 'uuid/v4'
import { useFormContext } from '../../Form'
import { Radio, RadioProps } from '../../Inputs/Radio/Radio'
import { Field, FieldProps, omitFieldProps, pickFieldProps } from '../Field'

export interface FieldRadioProps extends FieldProps, RadioProps {}

const FieldRadioComponent = forwardRef(
  (props: FieldRadioProps, ref: Ref<HTMLInputElement>) => {
    const validationMessage = useFormContext(props)
    const { id = uuid() } = props
    return (
      <Field
        id={id}
        alignLabel="right"
        alignValidationMessage="right"
        validationMessage={validationMessage}
        {...pickFieldProps(props)}
      >
        <Radio
          {...omitFieldProps(props)}
          id={id}
          validationType={validationMessage && validationMessage.type}
          ref={ref}
        />
      </Field>
    )
  }
)

FieldRadioComponent.displayName = 'FieldRadioComponent'

export const FieldRadio = styled(FieldRadioComponent)``
