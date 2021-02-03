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

import React, { forwardRef, Ref } from 'react'
import styled from 'styled-components'
import { reset, space, SpaceProps } from '@looker/design-tokens'
import { InputProps, pickInputProps } from '../InputProps'
import { ValidationType } from '../../ValidationMessage'
import { inputTextValidation } from '../InputText'
import { FauxRadio } from './FauxRadio'

export interface RadioProps
  extends SpaceProps,
    Omit<InputProps, 'readOnly' | 'type' | 'checked' | 'onClick'> {
  checked?: boolean
  validationType?: ValidationType
}

const RadioLayout = forwardRef(
  (props: RadioProps, ref: Ref<HTMLInputElement>) => {
    const { className, validationType, ...restProps } = props

    return (
      <div className={className}>
        <input
          {...pickInputProps(restProps)}
          aria-invalid={validationType === 'error' ? 'true' : undefined}
          ref={ref}
          type="radio"
        />
        <FauxRadio />
      </div>
    )
  }
)

RadioLayout.displayName = 'RadioLayout'

export const Radio = styled(RadioLayout)`
  ${reset}
  ${space}

  height: 1rem;
  position: relative;
  width: 1rem;
  input {
    background: ${(props) => props.theme.colors.field};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : undefined)};
    height: 100%;
    opacity: 0;
    position: absolute;
    width: 100%;
    z-index: 1;
  }

  input + ${FauxRadio} {
    ${inputTextValidation}
  }

  input:checked + ${FauxRadio} {
    border-color: ${({ theme, validationType }) =>
      validationType === 'error'
        ? theme.colors.criticalBorder
        : theme.colors.ui2};
    color: ${({ theme }) => theme.colors.key};
  }

  input:not(:checked) + ${FauxRadio} {
    background: ${({ theme }) => theme.colors.field};
    border-color: ${({ theme, validationType }) =>
      validationType === 'error'
        ? theme.colors.criticalBorder
        : theme.colors.ui2};
  }

  input:focus + ${FauxRadio} {
    border-color: ${({ theme }) => theme.colors.keyFocus};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.keyAccent};
    outline: none;
  }

  input:disabled + ${FauxRadio} {
    border-color: ${({ theme }) => theme.colors.ui2};
    color: ${({ theme }) => theme.colors.text1};
  }

  input:disabled:not(:checked) + ${FauxRadio} {
    background: ${({ theme }) => theme.colors.ui1};
    border-color: ${({ theme }) => theme.colors.ui2};
    color: transparent;

    &::after {
      background: ${({ theme }) => theme.colors.ui1};
    }
  }
`
