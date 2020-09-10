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

import React, {
  forwardRef,
  Ref,
  useEffect,
  useState,
  FormEvent,
  MouseEvent,
} from 'react'
import { InputText, InputTextBaseProps } from '../InputText'
import { AdvancedInputControls } from '../AdvancedInputControls'

export interface InputSearchProps
  extends Omit<InputTextBaseProps, 'children' | 'value' | 'defaultValue'> {
  summary?: string
  hideControls?: boolean
  hideSearchIcon?: boolean
  onClear?: (e: MouseEvent<HTMLButtonElement>) => void

  defaultValue?: string
  value?: string
}

export const InputSearch = forwardRef(
  (
    {
      summary,
      value: valueProp,
      disabled,
      hideControls = false,
      hideSearchIcon = false,
      onChange,
      onClear,
      defaultValue,
      ...props
    }: InputSearchProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const [value, setValue] = useState('')

    const handleClear = (e: MouseEvent<HTMLButtonElement>) => {
      setValue('')
      onClear && onClear(e)
      onChange &&
        onChange({
          currentTarget: { value: '' },
        } as FormEvent<HTMLInputElement>)
    }

    const handleChange = (e: FormEvent<HTMLInputElement>) => {
      const newValue = (e.target as HTMLInputElement).value
      setValue(newValue)
      onChange && onChange(e)
    }

    // only update when valueProp changes, but not defaultValue
    useEffect(() => {
      setValue(valueProp || defaultValue || '')
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [valueProp])

    return (
      <InputText
        {...props}
        value={value}
        ref={ref}
        onChange={handleChange}
        iconBefore={hideSearchIcon ? undefined : 'Search'}
        after={
          !hideControls ? (
            <AdvancedInputControls
              onClear={handleClear}
              disabled={disabled}
              summary={summary}
              showClear={!!(value && value.length >= 0)}
            />
          ) : undefined
        }
      />
    )
  }
)

InputSearch.displayName = 'InputSearch'
