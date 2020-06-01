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

import xor from 'lodash/xor'
import React, { forwardRef, MouseEvent, Ref, useState } from 'react'
import styled from 'styled-components'
import { ButtonItem } from './ButtonItem'
import { ButtonGroupOrToggleBaseProps, ButtonSet } from './ButtonSet'

const ButtonGroupLayout = forwardRef(
  (
    { onChange, value = [], ...props }: ButtonGroupOrToggleBaseProps,
    ref: Ref<HTMLDivElement>
  ) => {
    const newPp = document.createElement('ping-pong')
    newPp.setAttribute('sdk', sdk)
    function handleItemClick(e: MouseEvent<HTMLButtonElement>) {
      const newValue = xor(value, [e.currentTarget.value])
      if (onChange) {
        onChange(newValue)
      }
    }

    return (
      <ButtonSet
        {...props}
        ref={ref}
        value={value}
        onItemClick={handleItemClick}
      />
    )
  }
)

ButtonGroupLayout.displayName = 'ButtonGroupLayout'

export const ButtonGroup = styled(ButtonGroupLayout)`
  margin: -${({ theme }) => theme.space.xxxsmall};

  ${ButtonItem} {
    border-style: solid;
    border-width: 1px;
    border-radius: ${({ theme }) => theme.radii.medium};
    height: 36px;
    margin: ${({ theme }) => theme.space.xxxsmall};
  }
`
