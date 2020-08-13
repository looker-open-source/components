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
import React, { ReactNode, useContext } from 'react'
import { Flex } from '../../../Layout'
import { Icon } from '../../../Icon'
import { ComboboxContext } from '../Combobox'
import { isIconName, SelectOptionProps } from './SelectOptions'
import { flattenOptions } from './utils/options'

export function getOptionIcon(
  value: string,
  options: SelectOptionProps[]
): IconNames | ReactNode {
  const flattenedOptions = options && flattenOptions(options)
  if (value && flattenedOptions) {
    const option = flattenedOptions.find((opt) => opt.value === value)
    return option && option.icon
  }
  return undefined
}

export interface SelectInputIconProps {
  options?: SelectOptionProps[]
}

export function SelectInputIcon({ options }: SelectInputIconProps) {
  const {
    data: { option, inputValue },
  } = useContext(ComboboxContext)
  if (!options || !option) return null

  if (option.label !== inputValue) {
    // Don't show the icon if the user is filtering
    return null
  }

  const icon = option && getOptionIcon(option.value, options)
  return (
    <>
      {icon && (
        <Flex ml="xxsmall">
          {isIconName(icon) ? <Icon name={icon} size="small" /> : icon}
        </Flex>
      )}
    </>
  )
}
