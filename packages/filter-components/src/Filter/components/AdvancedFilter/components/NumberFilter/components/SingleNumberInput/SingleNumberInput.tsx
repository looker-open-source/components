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
import type { FilterModel } from '@looker/filter-expressions'
import type { ChangeEvent, FC } from 'react'
import React from 'react'
import type { GroupInputProps } from '../../../GroupInput'
import { GroupInput } from '../../../GroupInput'

interface SingleNumberInputProps extends Omit<GroupInputProps, 'onChange'> {
  item: FilterModel
  onChange?: (id: string, value: any) => void
}

export const SingleNumberInput: FC<SingleNumberInputProps> = ({
  item,
  onChange,
  placement,
}) => {
  const inputChange = ({
    currentTarget: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    const numberValue = Number(value)
    const newValueArr = value === '' ? [] : [numberValue]
    if (!Number.isNaN(numberValue)) {
      onChange?.(item.id, { value: newValueArr })
    }
  }

  const inputValue =
    (Array.isArray(item.value) ? item.value[0] : item.value) ?? ''

  return (
    <GroupInput
      type="number"
      value={inputValue}
      onChange={inputChange}
      placement={placement}
      minWidth="4.5em"
      data-testid="single-number"
    />
  )
}
