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

import isUndefined from 'lodash/isUndefined'
import noop from 'lodash/noop'
import pick from 'lodash/pick'
import type { Ref, FormEvent } from 'react'
import React, { forwardRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import type { SpaceProps } from '@looker/design-tokens'
import { reset, space } from '@looker/design-tokens'
import {
  inputRippleColor,
  RIPPLE_RATIO,
  rippleHandlerKeys,
  rippleStyle,
  useRipple,
  useRippleHandlers,
} from '../../../Ripple'
import type { InputProps } from '../InputProps'
import { pickInputProps } from '../InputProps'

import { CheckMark } from './CheckMark'
import { CheckMarkMixed } from './CheckMarkMixed'
import { FauxCheckbox } from './FauxCheckbox'

export type MixedBoolean = true | false | 'mixed'

export interface CheckboxProps
  extends SpaceProps,
    Omit<InputProps, 'type' | 'checked' | 'onClick'> {
  checked?: MixedBoolean
}

export const Checkbox = styled(
  forwardRef((props: CheckboxProps, ref: Ref<HTMLInputElement>) => {
    const {
      className,
      checked,
      defaultChecked,
      onChange,
      readOnly,
      style,
      validationType,
      ...restProps
    } = props
    const [isChecked, setIsChecked] = useState<MixedBoolean>(!!defaultChecked)

    const { callbacks, ...rippleProps } = useRipple({
      className,
      color: inputRippleColor(isChecked !== false, validationType === 'error'),
      // Only define size for density -6,
      // to make the halo slightly bigger than the container
      size: RIPPLE_RATIO,
      style,
    })

    const rippleHandlers = useRippleHandlers(
      callbacks,
      pick(restProps, rippleHandlerKeys),
      restProps.disabled
    )

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
      <div {...rippleProps}>
        <input
          type="checkbox"
          {...pickInputProps(restProps)}
          checked={!!isChecked}
          aria-checked={checked}
          aria-invalid={validationType === 'error' ? 'true' : undefined}
          onClick={handleClick}
          onChange={noop} // suppress read-only error as we rely on click rather than change event here
          ref={ref}
          {...rippleHandlers}
        />
        <FauxCheckbox isSelected={!!isChecked}>
          {checked === 'mixed' ? <CheckMarkMixed /> : <CheckMark />}
        </FauxCheckbox>
      </div>
    )
  })
)`
  ${reset}
  ${space}
  ${rippleStyle}

  align-items: center;
  display: flex;
  height: ${({ theme: { space } }) => space.u6};
  justify-content: center;
  position: relative;
  width: ${({ theme: { space } }) => space.u6};

  input {
    cursor: ${({ readOnly, disabled }) =>
      readOnly || disabled ? 'not-allowed' : undefined};
    height: 100%;
    left: 0;
    margin: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;

    &[aria-invalid='true'] {
      + ${FauxCheckbox} {
        border-color: ${({ theme }) => theme.colors.critical};
      }
      &:checked + ${FauxCheckbox} {
        background: ${({ theme }) => theme.colors.critical};
      }
    }
    &:disabled {
      + ${FauxCheckbox}, &:not(:checked):hover + ${FauxCheckbox} {
        border-color: ${({ theme }) => theme.colors.ui2};
      }
      &:checked + ${FauxCheckbox} {
        background: ${({ theme }) => theme.colors.ui2};
      }
    }
    &:not(:checked):not([aria-invalid='true']):not(:disabled) {
      &:hover,
      &:focus {
        + ${FauxCheckbox} {
          border-color: ${({ theme }) => theme.colors.ui5};
        }
      }
    }
  }
`
