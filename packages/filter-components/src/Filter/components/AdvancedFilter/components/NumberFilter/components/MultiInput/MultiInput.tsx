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

import type { ValidationMessageProps } from '@looker/components'
import { InputChips } from '@looker/components'
import { getNumberFromString } from '@looker/filter-expressions'
import type { ValueProps } from '@looker/filter-expressions'
import React, { useRef, useEffect, useState } from 'react'
import {
  inputPlacementStyle,
  multiInputWidth,
} from '../../../../../../utils/filter_styles'
import styled from 'styled-components'

interface MultiInputProps {
  onChange?: (...args: any) => void
  inputValue?: string
  item: ValueProps

  className?: string
  width?: string | number
  placement?: 'right'
  /** Text to be shown inside the input when there is no value entered  */
  placeholder?: string
  validationMessage?: ValidationMessageProps
}

const validate = (value: string) => {
  return value !== '' && !isNaN(Number(value))
}

export const MultiInputInternal = ({
  className,
  item,
  onChange,
  width,
  placeholder,
  validationMessage,
}: MultiInputProps) => {
  const ref = useRef<HTMLInputElement>(null)
  const values = item.value.map(String)
  const [inputValue, setInputValue] = useState('')

  const handleChange = (newValues: string[]) => {
    onChange?.(item.id, { value: newValues.map(getNumberFromString) })
  }

  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (validate(inputValue) && !document.body.contains(ref.current)) {
        handleChange([...values, inputValue])
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue, values])

  return (
    <InputChips
      ref={ref}
      width={width || multiInputWidth}
      className={className}
      placeholder={placeholder}
      values={values}
      onChange={handleChange}
      inputValue={inputValue}
      onInputChange={setInputValue}
      validate={validate}
      validationType={validationMessage?.type}
      noErrorIcon
    />
  )
}

export const MultiInput = styled(MultiInputInternal)`
  ${inputPlacementStyle}
`
