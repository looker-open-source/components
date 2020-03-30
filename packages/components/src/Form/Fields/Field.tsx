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
import styled from 'styled-components'
import { ResponsiveValue, TLengthStyledSystem } from 'styled-system'
import {
  CustomizableAttributes,
  FontSizes,
  FontWeights,
  SpacingSizes,
} from '@looker/design-tokens'
import omit from 'lodash/omit'
import pick from 'lodash/pick'
import { FlexItem } from '../../Layout/FlexItem'
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
<<<<<<< HEAD
  className?: string
=======
  /**
   * Determines where to place the label in relation to the input.
   * @default false
   */
  inline?: boolean
  /**
   * Determines where to place the validation message in relation to the input.
   */
  alignValidationMessage?: FormControlDirections
>>>>>>> update Fields to have inline or default alignemtn only
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
   * Determines where to place the label in relation to the input.
   * @default false
   */
  inline?: boolean
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
<<<<<<< HEAD
=======
  'inline',
  'alignValidationMessage',
>>>>>>> update Fields to have inline or default alignemtn only
  'description',
  'detail',
  'id',
  'inline',
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

<<<<<<< HEAD
=======
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

>>>>>>> update Fields to have inline or default alignemtn only
/**
 * `<Field />` allows the rendering of a label (optionally associated with a child input like `<InputText />`),
 * and can render a validation message. Generally, this component is used with form inputs to give user
 * feedback about the status of the input values.
 */

const FieldLayout: FunctionComponent<FieldProps> = ({
  className,
  children,
  description,
  detail,
  id,
  label,
  labelFontSize,
  labelFontWeight,
  required,
  validationMessage,
}) => {
  return (
    <div className={className}>
      <Label htmlFor={id} fontWeight={labelFontWeight} fontSize={labelFontSize}>
        {label}
        {required && <RequiredStar />}
      </Label>
      {detail && <Text fontSize="xsmall">{detail}</Text>}
      <FlexItem>
        {children}
        {validationMessage ? (
          <ValidationMessage {...validationMessage} />
        ) : null}
        {description && (
          <Paragraph mt="none" fontSize="xsmall">
            {description}
          </Paragraph>
        )}
      </FlexItem>
    </div>
  )
}

export const Field = styled(FieldLayout)`
  width: ${(props) => props.width};
  align-items: left;
  justify-content: space-between;
  display: flex;
  margin-bottom: ${(props) => props.theme.space.xsmall};
  flex-direction: ${(props) => (props.inline ? 'row' : 'column')};

  ${InputText} {
    width: 100%;
  }

  ${Select} {
    width: 100%;
  }

  ${Label} {
<<<<<<< HEAD
    ${(props) =>
      props.inline
        ? `
        align-self: center;
        padding-right: ${props.theme.space.small};
      `
        : `
        padding-bottom: ${props.theme.space.xsmall};

      `}
    width: ${(props) => props.labelWidth};
=======
    text-align: top;
    width: ${(props) =>
      props.labelWidth || CustomizableFieldAttributes.labelWidth};
>>>>>>> update Fields to have inline or default alignemtn only
  }
`
