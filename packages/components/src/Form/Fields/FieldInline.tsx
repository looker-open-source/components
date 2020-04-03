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

import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import {
  CustomizableAttributes,
  FontSizes,
  FontWeights,
  SpacingSizes,
} from '@looker/design-tokens'
import omit from 'lodash/omit'
import pick from 'lodash/pick'
import { Label } from '../Label/Label'
import {
  ValidationMessage,
  ValidationMessageProps,
} from '../ValidationMessage/ValidationMessage'

export interface CustomizableFieldAttributesInterface
  extends CustomizableAttributes {
  labelMargin: SpacingSizes
}

export interface FieldInlineProps {
  className?: string
  disabled?: boolean
  /**
   * Defines the label for the field.
   */
  label?: string
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
}

export const fieldPropKeys = [
  'label',
  'labelFontSize',
  'labelFontWeight',
  'labelWidth',
  'validationMessage',
  'width',
]

export const pickFieldProps = (props: FieldInlineProps) =>
  pick(props, [...fieldPropKeys, 'required', 'className'])
export const omitFieldProps = (props: FieldInlineProps) =>
  omit(props, fieldPropKeys)

const RequiredStar = styled((props) => (
  <span {...props} aria-hidden="true">
    {' '}
    *
  </span>
))`
  color: ${(props) => props.theme.colors.palette.red500};
`

/**
 * `<Field />` allows the rendering of a label (optionally associated with a child input like `<InputText />`),
 * and can render a validation message. Generally, this component is used with form inputs to give user
 * feedback about the status of the input values.
 */

const FieldInlineLayout: FunctionComponent<FieldInlineProps> = ({
  className,
  children,
  label,
  labelFontSize,
  labelFontWeight,
  required,
  validationMessage,
}) => {
  return (
    <div className={className}>
      <Label fontWeight={labelFontWeight} fontSize={labelFontSize}>
        {label}
        {required && <RequiredStar />}
      </Label>
      <InputArea>{children}</InputArea>
      <MessageArea>
        {validationMessage ? (
          <ValidationMessage {...validationMessage} />
        ) : null}
      </MessageArea>
    </div>
  )
}

/**
 * TODO:
 *
 * FieldInline grid layout  - ? why there is extra space on grid around "icon"
 * Disable validation on FieldRadio (that's silly) -done
 * Radio, ToggleSwitch & Checkbox disabled style - Label isn't respond to style when disabled
 * All Input should have red border on error
 * FieldTextArea label position
 *
 */

const InputArea = styled.div``
const MessageArea = styled.div``

export const FieldInline = styled(FieldInlineLayout)`
  align-items: center;
  display: grid;
  grid-template-areas: 'input label' '. messages';

  ${InputArea} {
    grid-area: input;
  }

  ${Label} {
    grid-area: label;
    padding-left: ${(props) => props.theme.space.small};
    ${(props) =>
      props.disabled && `color: ${props.theme.colors.palette.charcoal500};`}
  }

  ${MessageArea} {
    grid-area: messages;
    padding-left: ${(props) => props.theme.space.small};

    border-color: ${(props) => props.theme.colors.palette.red400};
    &:hover {
      border-color: ${(props) => props.theme.colors.palette.red500};
    }
    &:focus,
    :focus-within {
      border-color: ${(props) => props.theme.colors.palette.red500};
      box-shadow: 0 0 0 2px ${(props) => props.theme.colors.palette.red100};
    }
  }

  ${ValidationMessage}
`
