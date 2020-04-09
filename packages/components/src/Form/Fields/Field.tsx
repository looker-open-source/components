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
import { CustomizableAttributes, SpacingSizes } from '@looker/design-tokens'
import omit from 'lodash/omit'
import pick from 'lodash/pick'
import { InputText, inputHeight, Select } from '../Inputs'
import { Label } from '../Label/Label'
import { Paragraph } from '../../Text/Paragraph'
import { Text } from '../../Text/Text'
import { ValidationMessage } from '../ValidationMessage/ValidationMessage'
import { FieldBaseProps, RequiredStar } from './FieldBase'

type ResponsiveSpaceValue = ResponsiveValue<TLengthStyledSystem>

export interface CustomizableFieldAttributesInterface
  extends CustomizableAttributes {
  labelMargin: SpacingSizes
}

export const CustomizableFieldAttributes: CustomizableFieldAttributesInterface = {
  labelMargin: 'xsmall',
}

export interface FieldProps extends FieldBaseProps {
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
   * Specifies for horizontally aligned labels how much space to take up.
   */
  labelWidth?: ResponsiveSpaceValue
  /**
   *
   * Specify the width of the FieldText if different then 13rem
   */
  width?: ResponsiveSpaceValue
}

export const fieldPropKeys = [
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
  pick(props, [...fieldPropKeys, 'disabled', 'required', 'className'])
export const omitFieldProps = (props: FieldProps) => omit(props, fieldPropKeys)

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
  const fieldDescription = description && (
    <Paragraph mt="xsmall" fontSize="xsmall" color="palette.charcoal500">
      {description}
    </Paragraph>
  )

  return (
    <div className={className}>
      <Label htmlFor={id} fontWeight={labelFontWeight} fontSize={labelFontSize}>
        {label}
        {required && <RequiredStar />}
      </Label>
      {detail && <FieldDetail>{detail}</FieldDetail>}
      <InputArea>{children}</InputArea>
      <MessageArea>
        {validationMessage && <ValidationMessage {...validationMessage} />}
        {fieldDescription}
      </MessageArea>
    </div>
  )
}

const FieldDetail = styled(Text)``

FieldDetail.defaultProps = {
  fontSize: 'xsmall',
}

const InputArea = styled.div``
const MessageArea = styled.div``

export const Field = styled(FieldLayout)`
  width: ${(props) => props.width};
  align-items: left;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.space.xsmall};

  display: grid;
  grid-template-areas: ${(props) =>
    props.inline
      ? '"label input detail" ". messages messages"'
      : '"label detail" "input input" "messages messages"'};

  ${InputArea} {
    display: flex;
    grid-area: input;
  }

  ${MessageArea} {
    grid-area: messages;
  }

  ${InputText} {
    width: ${(props) => props.width};
  }

  ${Select} {
    width: 100%;
  }

  ${Label} {
    grid-area: label;

    ${(props) =>
      props.inline
        ? `
      text-align: right;
      line-height: ${inputHeight};
      justify-self: end;
      height: ${inputHeight};
      padding-right: ${props.theme.space.small};
        width: 150px;
      `
        : `
        padding-bottom: ${props.theme.space.xsmall};

      `}
  }
  ${FieldDetail} {
    grid-area: detail;
    justify-self: end;

    ${(props) =>
      props.inline &&
      `
        align-self: center;
        padding-left: ${props.theme.space.small};
      `}
  }

  ${ValidationMessage} {
    margin-right: ${(props) => props.theme.space.xsmall};
    margin-top: ${(props) => props.theme.space.xsmall};
  }
`
