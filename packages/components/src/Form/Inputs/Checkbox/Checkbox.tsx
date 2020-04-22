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

import noop from 'lodash/noop'
import pick from 'lodash/pick'
import React, { forwardRef, Ref, useState, FormEvent, useEffect } from 'react'
import styled from 'styled-components'
import { reset, space, SpaceProps } from '@looker/design-tokens'
import isUndefined from 'lodash/isUndefined'
import { InputProps, inputPropKeys } from '../InputProps'
import { ValidationType } from '../../ValidationMessage'
import { inputTextValidation } from '../InputText'

import { CheckMark } from './CheckMark'
import { CheckMarkMixed } from './CheckMarkMixed'
import { FauxCheckbox } from './FauxCheckbox'

export type MixedBoolean = true | false | 'mixed'

export interface CheckboxProps
  extends SpaceProps,
    Omit<InputProps, 'type' | 'checked' | 'onClick'> {
  checked?: MixedBoolean
  validationType?: ValidationType
}

const CheckboxLayout = forwardRef(
  (props: CheckboxProps, ref: Ref<HTMLInputElement>) => {
    const {
      className,
      checked,
      defaultChecked,
      onChange,
      readOnly,
      validationType,
      ...restProps
    } = props
    const [isChecked, setIsChecked] = useState<MixedBoolean>(!!defaultChecked)

    const handleClick = readOnly
      ? undefined
      : (e: FormEvent<HTMLInputElement>) => {
          if (isUndefined(checked)) {
            setIsChecked(!isChecked)
          }
          if (onChange) {
            onChange(e)
          }
        }

    // controlled component: update internal state when props.checked changes
    useEffect(() => {
      if (!isUndefined(checked)) {
        setIsChecked(checked)
      }
    }, [checked])

    return (
      <div className={className}>
        <input
          type="checkbox"
          {...pick(restProps, inputPropKeys)}
          checked={!!isChecked}
          aria-checked={checked}
          aria-invalid={validationType === 'error' ? 'true' : undefined}
          onClick={handleClick}
          onChange={noop} // suppress read-only error as we rely on click rather than change event here
          ref={ref}
        />
        <FauxCheckbox>
          {checked === 'mixed' ? <CheckMarkMixed /> : <CheckMark />}
        </FauxCheckbox>
      </div>
    )
  }
)

CheckboxLayout.displayName = 'CheckboxLayout'

export const Checkbox = styled(CheckboxLayout)`
  ${reset}
  ${space}

  display: inline-block;
  height: 1rem;
  position: relative;
  width: 1rem;
  vertical-align: middle;

  input {
    cursor: ${({ readOnly, disabled }) =>
      readOnly || disabled ? 'not-allowed' : undefined};
    height: 100%;
    opacity: 0;
    position: absolute;
    width: 100%;
    z-index: 1;
  }

  input + ${FauxCheckbox} {
    ${inputTextValidation};
  }

  input:checked + ${FauxCheckbox} {
    background-color: ${({ theme }) => theme.colors.palette.purple400};
    border-color: ${({ theme }) => theme.colors.palette.purple400};
  }

  input:not(:checked) + ${FauxCheckbox} {
    color: ${({ theme }) => theme.colors.palette.white};
  }

  input:focus + ${FauxCheckbox} {
    border-color: ${({ theme }) => theme.colors.palette.purple300};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.palette.purple100};
    outline: none;
  }

  input:disabled + ${FauxCheckbox} {
    background: transparent;
    border-color: ${({ theme }) => theme.colors.palette.charcoal200};
    color: ${({ theme }) => theme.colors.palette.charcoal400};
  }

  input:disabled:not(:checked) + ${FauxCheckbox} {
    color: transparent;
  }
`
