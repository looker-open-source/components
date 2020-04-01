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

import React, { ReactNode, useContext, useMemo } from 'react'
import {
  ComboboxMultiContext,
  ComboboxMultiOption,
  ComboboxOptionObject,
} from '../Combobox'
import { SelectOptionProps } from './SelectOptions'

export type ShowCreateFunction = (
  currentOptions: ComboboxOptionObject[],
  options?: SelectOptionProps[],
  inputValue?: string
) => boolean

export interface CreateOptionProps {
  options?: SelectOptionProps[]
  formatLabel?: (inputText: string) => ReactNode
  show: ShowCreateFunction
}

export function SelectMultiCreateOption({
  options,
  formatLabel,
  show,
}: CreateOptionProps) {
  const {
    data: { inputValue, options: currentOptions },
  } = useContext(ComboboxMultiContext)

  const notInOptions = useMemo(
    () => show(currentOptions, options, inputValue),
    [currentOptions, options, inputValue, show]
  )

  if (!inputValue || !notInOptions) return null

  return (
    <ComboboxMultiOption value={inputValue} highlightText={false} hideCheckMark>
      {formatLabel ? formatLabel(inputValue) : `Create "${inputValue}"`}
    </ComboboxMultiOption>
  )
}
