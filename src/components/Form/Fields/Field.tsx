import * as React from 'react'
import { ResponsiveSpaceValue, TextAlignValue } from 'styled-system'
import { SpacingSizes, styled, theme } from '../../../style'
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
   * Specifies for horizontally aligned labels how much space to take up.
   */
  labelWidth?: ResponsiveSpaceValue
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

interface LabelContainerAlignment {
  textAlign?: TextAlignValue
  width?: ResponsiveSpaceValue
  ml?: SpacingSizes
  mr?: SpacingSizes
}

const RequiredStar = styled(props => <span {...props}> *</span>)`
  color: ${props => props.theme.colors.semanticColors.danger.darker};
`
const handleHorizontalAlignment = (
  alignLabel?: FormControlDirections,
  labelWidth?: ResponsiveSpaceValue
): LabelContainerAlignment => {
  const labelContainerAlignment: LabelContainerAlignment = {}
  switch (alignLabel) {
    case 'left':
      labelContainerAlignment.textAlign = 'right'
      labelWidth
        ? (labelContainerAlignment.width = labelWidth)
        : (labelContainerAlignment.width = theme.components.Field.labelWidth)
      labelContainerAlignment.mr = theme.components.Field.labelMargin
      break
    case 'right':
      labelContainerAlignment.textAlign = 'left'
      labelWidth
        ? (labelContainerAlignment.width = labelWidth)
        : (labelContainerAlignment.width = theme.components.Field.labelWidth)
      labelContainerAlignment.mr = theme.components.Field.labelMargin
      break
    case 'bottom':
    case 'top':
    default:
      break
  }
  return labelContainerAlignment
}

const getValidationMessageAlignment = (
  alignValidationMessage?: FormControlDirections
): FormControlDirections | undefined => {
  switch (alignValidationMessage) {
    case 'left':
      return 'right'
    case 'right':
      return 'left'
    case 'bottom':
      return 'top'
    case 'top':
      return 'bottom'
    default:
      return undefined
  }
}

/**
 * `<Field />` allows the rendering of a label (optionally associated with a child input like `<InputText />`),
 * and can render a validation message. Generally, this component is used with form inputs to give user
 * feedback about the status of the input values.
 */
export const Field = (props: FieldProps & { children?: React.ReactNode }) => {
  return (
    <FormControl alignLabel={props.alignLabel}>
      <Label
        htmlFor={props.id}
        {...handleHorizontalAlignment(props.alignLabel, props.labelWidth)}
        ml={props.alignLabel === 'right' ? 'small' : undefined}
      >
        {props.label}
        {props.required && <RequiredStar />}
      </Label>
      <FormControl
        alignLabel={getValidationMessageAlignment(props.alignValidationMessage)}
      >
        <FlexItem>{props.children}</FlexItem>
        {props.validationMessage ? (
          <ValidationMessage
            ml={props.alignValidationMessage === 'right' ? 'small' : undefined}
            {...props.validationMessage}
          />
        ) : null}
      </FormControl>
    </FormControl>
  )
}
