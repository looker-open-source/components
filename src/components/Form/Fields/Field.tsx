import * as React from 'react'
import { styled } from '../../../style'
import { Flex } from '../../Flex'
import { FlexItem } from '../../FlexItem'
import { FormControl, FormControlDirections } from '../FormControl/FormControl'
import { Label } from '../Label/Label'
import {
  ValidationMessage,
  ValidationMessageProps,
} from '../ValidationMessage/ValidationMessage'

export interface FieldProps {
  /**
   * Determines where to place the label in relation to the input.
   */
  alignLabel?: FormControlDirections
  /**
   * Determines where to place the validation message in relation to the input.
   */
  alignValidationMessage?: FormControlDirections
  /**
   * Id of the input element to match a label to.
   */
  id?: string
  /**
   * Defines the label for the field.
   */
  label?: string
  /**
   * Whether or not the field should display a `*` denoting it is required.
   */
  required?: boolean
  /**
   *
   * Holds the type of validation (error, warning, etc.) and corresponding message.
   */
  validationMessage?: ValidationMessageProps
}

const RequiredStar = styled(props => <span {...props}> *</span>)`
  color: ${props => props.theme.colors.semanticColors.danger.darker};
`

/**
 * `<Field />` allows the rendering of a label (optionally associated with a child input like `<InputText />`),
 * and can render a validation message. Generally, this component is used with form inputs to give user
 * feedback about the status of the input values.
 */
export const Field = (props: FieldProps & { children?: React.ReactNode }) => {
  const getFlexDirection = () => {
    switch (props.alignValidationMessage) {
      case 'bottom':
        return 'column'
      case 'left':
        return 'row-reverse'
      case 'top':
        return 'column-reverse'
      case 'right':
      default:
        return undefined
    }
  }

  return (
    <FormControl alignLabel={props.alignLabel}>
      <Label htmlFor={props.id}>
        {props.label}
        {props.required && <RequiredStar />}
      </Label>
      <Flex
        flexDirection={getFlexDirection()}
        justifyContent={
          props.alignValidationMessage === 'left' ? 'flex-end' : undefined
        }
      >
        <FlexItem>{props.children}</FlexItem>
        {props.validationMessage ? (
          <FlexItem
            ml={props.alignValidationMessage === 'right' ? 'small' : undefined}
          >
            <ValidationMessage {...props.validationMessage} />
          </FlexItem>
        ) : null}
      </Flex>
    </FormControl>
  )
}
