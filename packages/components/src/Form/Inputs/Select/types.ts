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
import { ReactNode } from 'react'
import { ComboboxOptionObject, ComboboxOptionIndicatorProps } from '../Combobox'
import { IconProps } from '../../../Icon'

export type SelectOptionIcon = IconNames | IconProps['artwork']

export interface SelectOptionObject
  extends ComboboxOptionObject,
    Pick<ComboboxOptionIndicatorProps, 'indicator'> {
  description?: ReactNode
  /**
   * Supplementary element that appears right of the option's label
   */
  detail?: ReactNode
  /**
   * Icon shown to the left of the option label in the list and input when selected
   * Use an IconName, or inline svg for a custom icon
   */
  icon?: SelectOptionIcon
  /**
   * Supplementary element that appears above the option's label
   */
  preface?: ReactNode
}

export interface SelectOptionGroupProps {
  options: SelectOptionObject[]
  label?: ReactNode
}

export type SelectOptionProps = SelectOptionObject | SelectOptionGroupProps
