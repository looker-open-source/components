/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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

import { width } from '@looker/design-tokens'
import React from 'react'
import styled, { css } from 'styled-components'
import pick from 'lodash/pick'
import { inputHeight } from '../../Inputs/height'
import { HelperText } from './HelperText'
import { FieldDetail } from './FieldDetail'
import { FieldLabel } from './FieldLabel'
import { InputArea } from './InputArea'
import type { FieldProps, FloatingLabelFieldProps } from './types'

export const fieldPropKeys = [
  'className',
  'description',
  'detail',
  'externalLabel',
  'id',
  'inline',
  'label',
  'hideLabel',
  'validationMessage',
  'width',
] as const

export const pickFieldProps = (props: FieldProps) =>
  pick(props, [...fieldPropKeys, 'disabled', 'required', 'autoResize'])

type ExcludedProps = typeof fieldPropKeys[number]
type OmitFieldPropsResult<FieldPropsType extends FloatingLabelFieldProps> =
  Omit<FieldPropsType, ExcludedProps>

export function omitFieldProps<FieldPropsType extends FloatingLabelFieldProps>(
  props: FieldPropsType
): OmitFieldPropsResult<FieldPropsType> {
  const {
    className: _className,
    description: _description,
    detail: _detail,
    externalLabel: _externalLabel,
    id: _id,
    inline: _inline,
    label: _label,
    hideLabel: _hideLabel,
    validationMessage: _validationMessage,
    width: _width,
    ...rest
  } = props
  return rest
}

/**
 * `<Field />` allows the rendering of a label (optionally associated with a child input like `<InputText />`),
 * and can render a validation message. Generally, this component is used with form inputs to give user
 * feedback about the status of the input values.
 */

export const Field = styled(
  ({
    autoResize,
    className,
    children,
    description,
    detail,
    id,
    ariaLabelOnly,
    label,
    hideLabel,
    required,
    validationMessage,
  }: FieldProps) => (
    <div className={className}>
      <FieldLabel
        ariaLabelOnly={ariaLabelOnly}
        id={id}
        label={label}
        hideLabel={hideLabel}
        required={required}
      />
      <InputArea autoResize={autoResize}>{children}</InputArea>
      {detail && <FieldDetail>{detail}</FieldDetail>}
      <HelperText
        description={description}
        id={id}
        validationMessage={validationMessage}
      />
    </div>
  )
)`
  align-items: left;

  display: ${({ autoResize }) => (autoResize ? 'inline-grid' : 'grid')};
  ${({ inline }) => (inline ? inlineTemplateAreas : templateAreas)}
  grid-template-columns: ${({ inline }) => (inline ? '150px 1fr' : undefined)};
  height: fit-content;
  justify-content: space-between;
  width: ${({ autoResize }) => (autoResize ? 'fit-content' : '100%')};
  ${width}

  ${InputArea} {
    grid-area: input;
  }

  ${HelperText} {
    grid-area: messages;
  }

  & > ${FieldLabel} {
    grid-area: label;
    ${({ inline }) => fieldLabelCSS(inline)}
  }

  ${FieldDetail} {
    grid-area: detail;
    justify-self: end;
    padding-left: ${({ theme: { space } }) => space.u3};

    ${({ inline }) =>
      inline &&
      css`
        align-self: center;
      `}
  }
`

const fieldLabelCSS = (inline?: boolean) =>
  inline
    ? css`
        height: ${inputHeight};
        justify-self: end;
        line-height: ${inputHeight};
        padding-right: ${({ theme }) => theme.space.u3};
        text-align: right;
      `
    : css`
        line-height: ${({ theme }) => theme.lineHeights.xsmall};
        padding-bottom: ${({ theme }) => theme.space.u1};
      `

const inlineTemplateAreas = css`
  grid-template-areas: 'label input detail' '. messages messages';
`

const templateAreas = css`
  grid-template-areas: 'label detail' 'input input' 'messages messages';
`
