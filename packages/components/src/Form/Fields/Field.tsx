/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import React, { FunctionComponent, ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { ResponsiveValue, TLengthStyledSystem } from 'styled-system'
import {
  CustomizableAttributes,
  FontSizes,
  FontWeights,
  SpacingSizes,
} from '@looker/design-tokens'
import omit from 'lodash/omit'
import pick from 'lodash/pick'
import { Flex, FlexItem } from '../../Layout'
import { FormControl, FormControlDirections } from '../FormControl/FormControl'
import { Label } from '../Label/Label'
import { Text } from '../../Text/Text'
import { Paragraph } from '../../Text/Paragraph'
import {
  ValidationMessage,
  ValidationMessageProps,
} from '../ValidationMessage/ValidationMessage'
import { InputText, Select } from '../Inputs'

type ResponsiveSpaceValue = ResponsiveValue<TLengthStyledSystem>

export interface CustomizableFieldAttributesInterface
  extends CustomizableAttributes {
  labelMargin: SpacingSizes
}

export const CustomizableFieldAttributes: CustomizableFieldAttributesInterface = {
  labelMargin: 'xsmall',
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
  /*
   * optional extra description
   */
  description?: ReactNode
  /**
   * notes and details added to the top right corner of the field
   */
  detail?: ReactNode
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
   * TODO - Deprecate usage in HT, then here.
   */
  labelFontSize?: FontSizes
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
  /**
   *
   * Specify the width of the FieldText if different then 13rem
   */
  width?: ResponsiveSpaceValue
}

export const fieldPropKeys = [
  'alignLabel',
  'alignValidationMessage',
  'description',
  'detail',
  'id',
  'label',
  'labelFontSize',
  'labelFontWeight',
  'labelWidth',
  'validationMessage',
  'width',
]

export const pickFieldProps = (props: FieldProps) =>
  pick(props, [...fieldPropKeys, 'required', 'className'])
export const omitFieldProps = (props: FieldProps) => omit(props, fieldPropKeys)

const RequiredStar = styled((props) => (
  <span {...props} aria-hidden="true">
    {' '}
    *
  </span>
))`
  color: ${(props) => props.theme.colors.palette.red500};
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
        margin-left: ${(props) =>
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
  description,
  detail,
  id,
  label,
  labelFontSize,
  labelFontWeight,
  required,
  validationMessage,
  width,
  ...props
}) => {
  return (
    <FormControl mb="xsmall" {...props}>
      <Flex alignItems="left" justifyContent="space-between" width={width}>
        <Label
          htmlFor={id}
          fontWeight={labelFontWeight}
          fontSize={labelFontSize}
        >
          {label}
          {required && <RequiredStar />}
        </Label>
        {detail && <Text fontSize="xsmall">{detail}</Text>}
      </Flex>
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
      {description && (
        <Paragraph mt="none" fontSize="xsmall">
          {description}
        </Paragraph>
      )}
    </FormControl>
  )
}

export const Field = styled(FieldComponent)`
  width: ${(props) => props.width};

  ${InputText} {
    width: 100%;
  }

  ${Select} {
    width: 100%;
  }

  ${Label} {
    ${handleHorizontalAlignment}
  }
`
