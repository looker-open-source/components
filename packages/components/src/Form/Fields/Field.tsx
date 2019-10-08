import { WidthProperty } from 'csstype'
import React, { FunctionComponent } from 'react'
import styled, { css } from 'styled-components'
import { ResponsiveValue, TLengthStyledSystem } from 'styled-system'
import {
  FontWeights,
  SpacingSizes,
  CustomizableAttributes,
} from '@looker/design-tokens'
import omit from 'lodash/omit'
import pick from 'lodash/pick'
import { FlexItem } from '../../Layout/FlexItem'
import { FormControl, FormControlDirections } from '../FormControl/FormControl'
import { Label } from '../Label/Label'
import {
  ValidationMessage,
  ValidationMessageProps,
} from '../ValidationMessage/ValidationMessage'

type ResponsiveSpaceValue = ResponsiveValue<SpacingSizes>

export interface CustomizableFieldAttributesInterface
  extends CustomizableAttributes {
  labelMargin: SpacingSizes
  labelWidth: ResponsiveValue<WidthProperty<TLengthStyledSystem>>
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

export const fieldPropKeys = [
  'alignLabel',
  'alignValidationMessage',
  'id',
  'label',
  'labelWidth',
  'labelFontWeight',
  'validationMessage',
]

export const pickFieldProps = (props: FieldProps) =>
  pick(props, [...fieldPropKeys, 'required'])
export const omitFieldProps = (props: FieldProps) => omit(props, fieldPropKeys)

const RequiredStar = styled(props => (
  <span {...props} aria-hidden="true">
    {' '}
    *
  </span>
))`
  color: ${props => props.theme.colors.semanticColors.danger.darker};
`
const handleHorizontalAlignment = (props: FieldProps) => {
  const { alignLabel, labelWidth } = props
  const width = labelWidth || CustomizableFieldAttributes.labelWidth
  switch (alignLabel) {
    case 'left':
      return css`
        text-align: right;
        width: ${width};
      `
    case 'right':
      return css`
        text-align: left;
        width: ${width};
        margin-right: 0;
        margin-left: ${props =>
          props.theme.space[CustomizableFieldAttributes.labelMargin]};
      `
    case 'bottom':
    case 'top':
    default:
      return ''
  }
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
const FieldComponent: FunctionComponent<FieldProps> = ({
  alignValidationMessage,
  children,
  id,
  label,
  labelFontWeight,
  required,
  validationMessage,
  ...props
}) => {
  return (
    <FormControl mb="xsmall" {...props}>
      <Label htmlFor={id} fontWeight={labelFontWeight}>
        {label}
        {required && <RequiredStar />}
      </Label>
      <FormControl
        alignLabel={getValidationMessageAlignment(alignValidationMessage)}
        mb="xsmall"
      >
        <FlexItem>{children}</FlexItem>
        {validationMessage ? (
          <ValidationMessage
            ml={alignValidationMessage === 'right' ? 'xsmall' : undefined}
            {...validationMessage}
          />
        ) : null}
      </FormControl>
    </FormControl>
  )
}

export const Field = styled(FieldComponent)`
  ${Label} {
    ${handleHorizontalAlignment}
  }
`
