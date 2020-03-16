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

import omit from 'lodash/omit'
import pick from 'lodash/pick'
import React, { forwardRef, Ref } from 'react'
import styled from 'styled-components'
import { reset, space, SpaceProps } from '@looker/design-tokens'
import { InputProps, inputPropKeys } from '../InputProps'

export type MixedBoolean = true | false | 'mixed'

interface CheckboxContainerProps extends SpaceProps {
  checked?: MixedBoolean
}

export interface CheckboxProps
  extends Omit<InputProps, 'type' | 'checked'>,
    CheckboxContainerProps {}

export const CheckMark = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 8L7 11L12 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const CheckMarkMixed = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      >
        <line x1="5" y1="8" x2="11" y2="8"></line>
      </g>
    </svg>
  )
}

export const FauxCheckbox = styled.div`
  ${reset}
  position: relative;
  width: 100%;
  height: 100%;
  border: ${props => `solid 1px ${props.theme.colors.palette.charcoal200}`};
  border-radius: ${props => props.theme.radii.small};
  color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CheckboxContainer = styled.div<CheckboxContainerProps>`
  ${reset}
  position: relative;
  display: inline-block;
  width: 1rem;
  height: 1rem;
  margin: 3px;
  vertical-align: middle;
  input[type='checkbox'] {
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  ${FauxCheckbox} {
    ${({ theme, checked }) => {
      /* NOTE: `checked=true` and `checked='mixed'` are treated the same in this code block */
      const inputColor = theme.colors.palette.purple400
      return `
        background: ${checked ? inputColor : theme.colors.palette.white};
        border-color: ${
          checked ? inputColor : theme.colors.palette.charcoal200
        };
          `
    }}
    color: ${({ theme }) => theme.colors.palette.white};
  }
  input[type='checkbox']:focus {
    & + ${FauxCheckbox} {
      border-color: ${props => props.theme.colors.palette.purple300};
      box-shadow: 0 0 0 2px ${props => props.theme.colors.palette.purple100};
      outline: none;
    }
  }
  input[type='checkbox']:disabled {
    & + ${FauxCheckbox} {
      opacity: 0.5;
    }
  }
  ${space}
`

const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  ${reset}
`

const CheckboxComponent = forwardRef(
  (props: CheckboxProps, ref: Ref<HTMLInputElement>) => {
    const { checked, ...restProps } = props
    return (
      <CheckboxContainer
        {...omit(props, inputPropKeys)}
        checked={checked || restProps.defaultChecked}
      >
        <CheckboxInput
          {...pick(restProps, inputPropKeys)}
          ref={ref}
          checked={checked === undefined ? undefined : checked === true}
          role="checkbox"
          aria-checked={checked}
        />
        <FauxCheckbox>
          {checked === 'mixed' ? <CheckMarkMixed /> : <CheckMark />}
        </FauxCheckbox>
      </CheckboxContainer>
    )
  }
)
CheckboxComponent.displayName = 'CheckboxComponent'

export const Checkbox = styled(CheckboxComponent)``
