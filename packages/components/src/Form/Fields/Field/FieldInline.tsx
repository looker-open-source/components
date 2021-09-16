/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

import type { FC } from 'react'
import React from 'react'
import styled from 'styled-components'
import { Label } from '../../Label/Label'
import { Paragraph } from '../../../Text'
import { ValidationMessage } from '../../ValidationMessage/ValidationMessage'
import { Truncate } from '../../../Truncate'
import { RequiredStar } from './RequiredStar'
import type { FieldBaseProps } from './types'
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
      <InputArea>{children}</InputArea>
      <Label as="span">
        <Truncate>{label}</Truncate>
        {required && <RequiredStar />}
      </Label>
      {detail && <FieldDetail>{detail}</FieldDetail>}
      <MessageArea id={`${id}-describedby`}>
        {description && <FieldDescription>{description}</FieldDescription>}
        {validationMessage ? (
          <ValidationMessage {...validationMessage} />
        ) : null}
      </MessageArea>
    </label>
  )
}

const FieldDetail = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.text2};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  grid-column: 3;
  grid-row: 1;
  /* stylelint-disable */
  -ms-grid-column: 3;
  -ms-grid-column-span: 2;
  -ms-grid-row: 1;
  /* stylelint-enable */
  padding-left: ${({ theme }) => theme.space.u2};
`

const FieldDescription = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.text2};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  line-height: ${({ theme }) => theme.lineHeights.xsmall};
  padding-bottom: ${({ theme }) => theme.space.u05};
  padding-top: ${({ theme }) => theme.space.u05};
`

const InputArea = styled.div`
  grid-column: 1;
  grid-row: 1;
  padding-right: ${({ theme }) => theme.space.u1};
  /* stylelint-disable */
  -ms-grid-column: 1;
  -ms-grid-column-span: 1;
  -ms-grid-row: 1;
  /* stylelint-enable */
`

const MessageArea = styled.div`
  grid-column: 2;
  grid-column-end: span 2;
  grid-row: 2;
  /* stylelint-disable */
  -ms-grid-column: 2;
  -ms-grid-column-end: span 2;
  -ms-grid-column-span: 2;
  -ms-grid-row: 2;
  /* stylelint-enable */
`

export const FieldInline = styled(FieldInlineLayout)`
  align-items: center;
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: start;
  line-height: ${({ theme }) => theme.lineHeights.small};
  /* stylelint-disable */
  display: -ms-grid;
  -ms-grid-columns: auto auto auto auto;
  /* stylelint-enable */

  ${Label} {
    align-items: center;
    color: ${({ theme, disabled }) => disabled && theme.colors.text1};
    display: flex;
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: normal;
    grid-column: 2;
    grid-row: 1;
    overflow: hidden;
    width: 100%;
    /* stylelint-disable */
    -ms-grid-column: 2;
    -ms-grid-column-span: 1;
    -ms-grid-row: 1;
    /* stylelint-enable */
  }
`
