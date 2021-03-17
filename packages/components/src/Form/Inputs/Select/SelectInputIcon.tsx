/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

import React, { useContext } from 'react'
import { Icon } from '../../../Icon'
import { ComboboxContext } from '../Combobox'
import { FlatOption } from './types'

export function getOptionIcon(value: string, flatOptions: FlatOption[]) {
  if (value && flatOptions) {
    const option = flatOptions.find((opt) => opt.value === value)
    return option?.icon ? <Icon color="text1" icon={option.icon} /> : null
  }
  return null
}

export interface SelectInputIconProps {
  flatOptions?: FlatOption[]
}

export const SelectInputIcon = ({ flatOptions }: SelectInputIconProps) => {
  const {
    data: { option, inputValue },
  } = useContext(ComboboxContext)
  if (!flatOptions || !option) return null
  // Don't show the icon if the user is filtering
  if (option.label !== inputValue) return null

  return getOptionIcon(option.value, flatOptions)
}
