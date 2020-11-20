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
import { Paragraph, Span } from '../../Text'
import { ValidationMessage } from '../ValidationMessage/ValidationMessage'
import { Truncate } from '../../Truncate'
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
  description,
  detail,
  label,
  id,
  required,
  validationMessage,
}) => {
  return (
    <label className={className} htmlFor={id}>
      {detail && <FieldDetail>{detail}</FieldDetail>}
      <InputArea>{children}</InputArea>
      <Label as="span">
        <Truncate>{label}</Truncate>
        {required && <RequiredStar />}
      </Label>
      <MessageArea id={`${id}-describedby`}>
        {description && <FieldDescription>{description}</FieldDescription>}
        {validationMessage ? (
          <ValidationMessage {...validationMessage} />
        ) : null}
      </MessageArea>
    </label>
  )
}

const FieldDetail = styled(Span)`
  color: ${({ theme }) => theme.colors.text2};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  padding-left: ${({ theme }) => theme.space.xsmall};
  padding-top: ${({ theme: { space } }) => space.xxxsmall};
`

const FieldDescription = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.text2};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
`

const InputArea = styled.div``

const MessageArea = styled.div``

export const FieldInline = styled(FieldInlineLayout)`
  display: grid;
  grid-template-areas: 'input label detail .' '. messages messages messages';
  grid-template-columns: auto auto auto auto;
  justify-content: start;
  line-height: ${({ theme }) => theme.lineHeights.small};

  ${FieldDetail} {
    grid-area: detail;
  }

  ${InputArea} {
    grid-area: input;
    padding-left: ${({ theme: { space } }) => space.xsmall};
    padding-right: ${({ theme: { space } }) => space.xsmall};
    padding-top: ${({ theme: { space } }) => space.xxxsmall};
  }

  ${Label} {
    align-items: center;
    color: ${({ theme, disabled }) => disabled && theme.colors.text1};
    display: flex;
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: normal;
    grid-area: label;
    width: fit-content;
  }

  ${MessageArea} {
    grid-area: messages;
  }
`
