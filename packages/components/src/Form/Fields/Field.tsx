import { TextAlignProperty } from 'csstype'
import React, { FunctionComponent } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { ResponsiveValue, TLengthStyledSystem } from 'styled-system'
import {
  FontWeights,
  SpacingSizes,
  ResponsiveSpaceValue,
  ThemedProps,
  CustomizableAttributes,
} from '@looker/design-tokens'
import omit from 'lodash/omit'
import { FlexItem } from '../../Layout/FlexItem'
import { FormControl, FormControlDirections } from '../FormControl/FormControl'
import { Label } from '../Label/Label'
import {
  ValidationMessage,
  ValidationMessageProps,
} from '../ValidationMessage/ValidationMessage'

type ResponsiveSpaceValue = ResponsiveValue<TLengthStyledSystem>

export interface CustomizableFieldAttributesInterface
  extends CustomizableAttributes {
  labelMargin: SpacingSizes
  labelWidth: ResponsiveSpaceValue
}

export const CustomizableFieldAttributes: CustomizableFieldAttributesInterface = {
  labelMargin: 'xsmall',
  labelWidth: '20%',
}

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
   * Specifies the fontWeight of the internal Label.
   */
  labelFontWeight?: FontWeights
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

export const omitFieldProps = (props: FieldProps) =>
  omit(props, [
    'alignLabel',
    'alignValidationMessage',
    'id',
    'label',
    'labelWidth',
    'labelFontWeight',
    'validationMessage',
  ])

interface LabelContainerAlignment {
  textAlign?: TextAlignProperty
  width?: ResponsiveSpaceValue
  ml?: SpacingSizes
  mr?: SpacingSizes
}

export type ThemedStarProps = ThemedProps<{}>
export type StarComponentType = FunctionComponent<ThemedStarProps>
export type StyledStarComponentType = StyledComponent<
  StarComponentType,
  ThemedStarProps
>

const RequiredStar: StyledStarComponentType = styled<StarComponentType>(
  (props: ThemedStarProps) => (
    <span {...props} aria-hidden="true">
      {' '}
      *
    </span>
  )
)`
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
        : (labelContainerAlignment.width =
            CustomizableFieldAttributes.labelWidth)
      labelContainerAlignment.mr = CustomizableFieldAttributes.labelMargin
      break
    case 'right':
      labelContainerAlignment.textAlign = 'left'
      labelWidth
        ? (labelContainerAlignment.width = labelWidth)
        : (labelContainerAlignment.width =
            CustomizableFieldAttributes.labelWidth)
      labelContainerAlignment.mr = CustomizableFieldAttributes.labelMargin
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

export type FieldComponentType = FunctionComponent<FieldProps>
export type StyledFieldComponentType = StyledComponent<
  FieldComponentType,
  FieldProps
>
/**
 * `<Field />` allows the rendering of a label (optionally associated with a child input like `<InputText />`),
 * and can render a validation message. Generally, this component is used with form inputs to give user
 * feedback about the status of the input values.
 */
const InternalField: FieldComponentType = props => {
  const labelFontWeight = props.labelFontWeight
    ? { fontWeight: props.labelFontWeight }
    : {}
  return (
    <FormControl alignLabel={props.alignLabel} mb="xsmall">
      <Label
        htmlFor={props.id}
        {...handleHorizontalAlignment(props.alignLabel, props.labelWidth)}
        ml={props.alignLabel === 'right' ? 'xsmall' : undefined}
        {...labelFontWeight}
      >
        {props.label}
        {props.required && <RequiredStar />}
      </Label>
      <FormControl
        alignLabel={getValidationMessageAlignment(props.alignValidationMessage)}
        mb="xsmall"
      >
        <FlexItem>{props.children}</FlexItem>
        {props.validationMessage ? (
          <ValidationMessage
            ml={props.alignValidationMessage === 'right' ? 'xsmall' : undefined}
            {...props.validationMessage}
          />
        ) : null}
      </FormControl>
    </FormControl>
  )
}

/** @component */
export const Field: StyledFieldComponentType = styled<FieldComponentType>(
  InternalField
)``
