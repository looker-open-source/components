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

import React, { FC } from 'react'
import styled from 'styled-components'
import { Label } from '../Label/Label'
import { Paragraph } from '../../Text'
import { ValidationMessage } from '../ValidationMessage/ValidationMessage'
import { FieldBaseProps } from './FieldBase'
import { RequiredStar } from './RequiredStar'

/**
 * `<FieldInline />` allows the rendering of a label (for FieldCheckbox, FieldRadio and FieldToggleSwitch),
 * and can render a validation message.
 * The label will always be placed on the right side of the input.
 */

interface FieldInlinePropsInternal extends FieldBaseProps {
  id: string
}

const FieldInlineLayout: FC<FieldInlinePropsInternal> = ({
  className,
  children,
  detail,
  label,
  id,
  required,
  validationMessage,
}) => (
  <label className={className} htmlFor={id}>
    <InputArea>{children}</InputArea>
    <Label as="span">
      {label}
      {required && <RequiredStar />}
    </Label>
    <div />
    <MessageArea id={`${id}-describedby`}>
      {detail && (
        <Paragraph fontSize="xsmall" variant="secondary">
          {detail}
        </Paragraph>
      )}
      {validationMessage ? <ValidationMessage {...validationMessage} /> : null}
    </MessageArea>
  </label>
)

const InputArea = styled.div``
const MessageArea = styled.div``

export const FieldInline = styled(FieldInlineLayout)`
  align-items: center;
  /* stylelint-disable-next-line value-no-vendor-prefix */
  display: -ms-grid;
  /* stylelint-disable-next-line declaration-block-no-duplicate-properties */
  display: grid;
  /* stylelint-disable-next-line property-no-vendor-prefix*/
  -ms-grid-columns: auto 1fr;
  grid-template-columns: auto 1fr;
  line-height: ${({ theme }) => theme.lineHeights.small};

  ${InputArea} {
    padding-right: ${({ theme }) => theme.space.xsmall};
  }

  ${Label} {
    align-items: center;
    color: ${({ theme, disabled }) => disabled && theme.colors.text1};
    display: flex;
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: normal;
  }
`
