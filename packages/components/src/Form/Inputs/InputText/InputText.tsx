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

import { IconNames } from '@looker/icons'
import React, { forwardRef, Ref } from 'react'
import styled from 'styled-components'
import { Icon } from '../../../Icon'
import { Text } from '../../../Text'
import {
  InputIconStyle,
  InputTextBase,
  InputTextBaseProps,
} from './InputTextBase'

export interface InputTextProps
  extends Omit<InputTextBaseProps, 'after' | 'before'> {
  iconAfter?: IconNames
  iconBefore?: IconNames
  prefix?: string
  suffix?: string
}

const InputTextLayout = forwardRef(
  (
    { iconAfter, iconBefore, prefix, suffix, ...props }: InputTextProps,
    ref: Ref<HTMLInputElement>
  ) => {
    if (iconBefore && prefix) {
      // eslint-disable-next-line no-console
      console.warn(`Only use IconBefore or prefix not both at the same time. `)
      return null
    }

    if (iconAfter && suffix) {
      // eslint-disable-next-line no-console
      console.warn(`Only use IconAfter or suffix not both at the same time. `)
      return null
    }

    const before = iconBefore ? (
      <InputIconStyle paddingRight="xsmall">
        <Icon name={iconBefore} size={20} />
      </InputIconStyle>
    ) : prefix ? (
      <InputIconStyle paddingRight="xsmall">
        <Text fontSize="small">{prefix}</Text>
      </InputIconStyle>
    ) : null

    const after = iconAfter ? (
      <InputIconStyle paddingLeft="xsmall">
        <Icon name={iconAfter} size={20} />
      </InputIconStyle>
    ) : suffix ? (
      <InputIconStyle paddingLeft="xsmall">
        <Text fontSize="small">{suffix}</Text>
      </InputIconStyle>
    ) : null

    return <InputTextBase after={after} before={before} ref={ref} {...props} />
  }
)

InputTextLayout.displayName = 'InputTextLayout'

export const InputText = styled(InputTextLayout)``
