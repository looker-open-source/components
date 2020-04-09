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
import { CustomizableAttributes, SpacingSizes } from '@looker/design-tokens'
import { Label } from '../Label/Label'
import { ValidationMessage } from '../ValidationMessage/ValidationMessage'
import { FieldBaseProps, RequiredStar } from './FieldBase'

export interface CustomizableFieldAttributesInterface
  extends CustomizableAttributes {
  labelMargin: SpacingSizes
}

/**
 * `<FieldInline />` allows the rendering of a label (for FieldCheckbox, FieldRadio and FieldToggleSwitch),
 * and can render a validation message.
 * The label will always be placed on the right side of the input.
 */

const FieldInlineLayout: FunctionComponent<FieldBaseProps> = ({
  className,
  children,
  label,
  labelFontSize,
  labelFontWeight,
  required,
  validationMessage,
}) => {
  return (
    <label className={className}>
      <Label as="span" fontWeight={labelFontWeight} fontSize={labelFontSize}>
        {label}
        {required && <RequiredStar />}
      </Label>
      <InputArea>{children}</InputArea>
      <MessageArea>
        {validationMessage ? (
          <ValidationMessage {...validationMessage} />
        ) : null}
      </MessageArea>
    </label>
  )
}

const InputArea = styled.div``
const MessageArea = styled.div``

export const FieldInline = styled(FieldInlineLayout)`
  align-items: center;
  display: grid;
  grid-template-areas: 'input label' '. messages';
  grid-template-columns: repeat(3, max-content);

  ${InputArea} {
    grid-area: input;
  }

  ${Label} {
    color: ${({ theme, disabled }) =>
      disabled && theme.colors.palette.charcoal500};
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: normal;
    grid-area: label;
    padding-left: ${({ theme }) => theme.space.xsmall};
  }

  ${MessageArea} {
    grid-area: messages;
    padding-left: ${({ theme }) => theme.space.small};
  }
`
