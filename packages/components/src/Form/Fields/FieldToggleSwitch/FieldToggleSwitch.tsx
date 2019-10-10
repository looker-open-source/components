import React, { forwardRef, Ref } from 'react'
import styled from 'styled-components'
import uuid from 'uuid/v4'
import { useFormContext } from '../../Form'
import {
  ToggleSwitch,
  ToggleSwitchProps,
} from '../../Inputs/ToggleSwitch/ToggleSwitch'
import { Field, FieldProps, omitFieldProps, pickFieldProps } from '../Field'

export interface FieldToggleSwitchProps extends FieldProps, ToggleSwitchProps {}

const FieldToggleSwitchComponent = forwardRef(
  (props: FieldToggleSwitchProps, ref: Ref<HTMLInputElement>) => {
    const validationMessage = useFormContext(props)
    const { id = uuid() } = props
    return (
      <Field
        id={id}
        alignLabel="right"
        alignValidationMessage="bottom"
        validationMessage={validationMessage}
        {...pickFieldProps(props)}
      >
        <ToggleSwitch
          {...omitFieldProps(props)}
          id={id}
          validationType={validationMessage && validationMessage.type}
          ref={ref}
        />
      </Field>
    )
  }
)

FieldToggleSwitchComponent.displayName = 'FieldToggleSwitchComponent'

export const FieldToggleSwitch = styled(FieldToggleSwitchComponent)``
