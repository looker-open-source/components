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
import isUndefined from 'lodash/isUndefined'
import React, { FormEvent, forwardRef, Ref, useEffect, useState } from 'react'
import styled from 'styled-components'
import { reset, space, SpaceProps } from '@looker/design-tokens'
import { InputProps, inputPropKeys } from '../InputProps'
import { FauxRadio } from './FauxRadio'

export interface RadioProps
  extends SpaceProps,
    Omit<InputProps, 'type' | 'checked' | 'onClick'> {
  checked?: boolean
  className?: string
}

const RadioLayout = forwardRef(
  (props: RadioProps, ref: Ref<HTMLInputElement>) => {
    const {
      className,
      checked,
      defaultChecked,
      onChange,
      readOnly,
      ...restProps
    } = props
    const [isChecked, setIsChecked] = useState(
      defaultChecked || checked || false
    )

    const handleClick = readOnly
      ? undefined
      : (event: FormEvent<HTMLInputElement>) => {
          if (!isChecked) {
            setIsChecked(true)
            onChange && onChange(event)
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
          type="radio"
          {...pick(restProps, inputPropKeys)}
          checked={isChecked}
          onChange={noop}
          // suppress read-only error as we rely on click rather than change event here
          onClick={handleClick}
          ref={ref}
        />
        <FauxRadio checked={isChecked} />
      </div>
    )
  }
)

RadioLayout.displayName = 'RadioLayout'

export const Radio = styled(RadioLayout)`
  ${reset}
  ${space}

  display: inline-block;
  height: 1rem;
  position: relative;
  width: 1rem;
  vertical-align: middle;

  input {
    background: ${(props) => props.theme.colors.palette.white};
    cursor: ${({ readOnly, disabled }) =>
      readOnly || disabled ? 'not-allowed' : undefined};
    height: 100%;
    opacity: 0;
    position: absolute;
    width: 100%;
    z-index: 1;
  }

  input:checked + ${FauxRadio} {
    color: ${({ theme }) => theme.colors.palette.purple400};
  }

  input:not(:checked) + ${FauxRadio} {
    border-color: ${({ theme }) => theme.colors.palette.charcoal200};
    background: ${({ theme }) => theme.colors.palette.white};
  }

  input:focus + ${FauxRadio} {
    border-color: ${(props) => props.theme.colors.palette.purple300};
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.palette.purple100};
    outline: none;
  }

  input:disabled + ${FauxRadio} {
    color: ${({ theme }) => theme.colors.palette.charcoal400};
  }

  input:disabled:not(:checked) + ${FauxRadio} {
    background: transparent;

    &::after {
      background: transparent;
    }
  }
`
