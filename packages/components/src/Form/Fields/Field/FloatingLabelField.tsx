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

import type { StatefulColor } from '@looker/design-tokens'
import { width } from '@looker/design-tokens'
import React, { useContext } from 'react'
import styled, { useTheme } from 'styled-components'
import { Space } from '../../../Layout'
import type { ValidationMessageProps } from '../../ValidationMessage'
import { DISABLED_OPACITY } from '../../constants'
import { FieldsetContext } from '../../../Fieldset'
import { Field } from './Field'
import { FieldDetail } from './FieldDetail'
import { FieldLabel } from './FieldLabel'
import { HelperText } from './HelperText'
import { InputArea } from './InputArea'
import type { FloatingLabelFieldPropsInternal } from './types'
import { useFloatingLabel } from './useFloatingLabel'

const getLabelColor = (
  isFocused: boolean,
  validationMessage?: ValidationMessageProps
): StatefulColor | undefined => {
  if (validationMessage?.type === 'error') return 'critical'
  if (isFocused) return 'key'
  return undefined
}

export const FloatingLabelField = styled(
  ({
    className,
    externalLabel: propsExternalLabel,
    // All other props can be forwarded to Field if that is rendered instead
    ...props
  }: FloatingLabelFieldPropsInternal) => {
    const {
      ariaLabelOnly,
      children,
      detail,
      disabled,
      hideLabel,
      id,
      inline,
      label,
      required,
      labelOffset,
      hasValue,
      checkValueOnBlur,
      ...rest
    } = props
    const {
      className: labelPositionClass,
      isFocused,
      handlers,
      style,
    } = useFloatingLabel({
      checkValueOnBlur,
      hasValue,
      labelOffset,
    })

    const {
      defaults: { externalLabel },
    } = useTheme()

    const { fieldsHideLabel } = useContext(FieldsetContext)

    if (
      externalLabel ||
      propsExternalLabel ||
      !label ||
      hideLabel ||
      fieldsHideLabel ||
      inline
    ) {
      return <Field {...props} className={className} />
    }

    return (
      <div
        className={`${className} ${labelPositionClass} floating`}
        style={style}
        data-disabled={disabled}
      >
        <InputArea {...handlers}>{children}</InputArea>
        <FieldLabel
          ariaLabelOnly={ariaLabelOnly}
          id={id}
          label={label}
          hideLabel={hideLabel}
          required={required}
          fontWeight="normal"
          color={getLabelColor(isFocused, props.validationMessage)}
        />
        <Space width="auto" align="start">
          <HelperText id={id} {...rest} />
          {detail && (
            <FieldDetail pt="u2" color="text2">
              {detail}
            </FieldDetail>
          )}
        </Space>
      </div>
    )
  }
)`
  &.floating {
    display: ${({ autoResize }) => (autoResize ? 'inline-block' : 'block')};
    opacity: ${({ disabled }) => (disabled ? DISABLED_OPACITY : '1')};
    /* Make the top border intersect the the middle of the label */
    padding-top: calc(${({ theme }) => theme.fontSizes.xsmall} / 2);
    position: relative;
    width: ${({ autoResize }) => (autoResize ? 'fit-content' : '100%')};
    ${width}

    label {
      background: ${({ theme }) => theme.colors.field};
      border-radius: ${({ theme }) => theme.radii.small};
      font-size: ${({ theme }) => theme.fontSizes.xsmall};
      /* Align with the input contents, compensate for left border */
      left: calc(${({ theme }) => theme.space.u2} + 1px);
      line-height: initial;
      padding: 0 ${({ theme }) => theme.space.u1};
      position: absolute;
      top: 0;
      transition: ${({ theme }) => theme.transitions.rapid}ms;
    }
    &.label-down {
      label {
        font-size: ${({ theme }) => theme.fontSizes.small};
        pointer-events: none;
        transform: translate(var(--label-translate, 0));
      }
      input::placeholder,
      textarea::placeholder {
        color: ${({ theme }) => theme.colors.field};
      }
    }

    & > ${Space} {
      /* Align with the input contents, compensate for left border */
      margin: 0 calc(${({ theme }) => theme.space.u3} + 1px);
    }
  }
`
