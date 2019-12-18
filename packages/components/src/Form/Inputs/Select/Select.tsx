/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

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

import React, { forwardRef, Ref, FormEvent, useMemo } from 'react'
import styled from 'styled-components'
import { CaretDown } from '@looker/icons'
import {
  BorderProps,
  CompatibleHTMLProps,
  CustomizableAttributes,
  LayoutProps,
  SpaceProps,
  TypographyProps,
} from '@looker/design-tokens'
import { ValidationType } from '../../ValidationMessage'
import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionObject,
} from '../Combobox'

export const CustomizableSelectAttributes: CustomizableAttributes = {
  borderRadius: 'medium',
  fontSize: 'small',
  height: '28px',
  px: 'xsmall',
  py: 'none',
}

export type OptionsType<OptionType> = OptionType[]

export interface GroupType<OptionType> {
  options: OptionsType<OptionType>
  [key: string]: any
}

export type GroupedOptionsType<UnionOptionType> = Array<
  GroupType<UnionOptionType>
>

export type SelectOptionProps = ComboboxOptionObject

export interface SelectProps
  extends BorderProps,
    Omit<LayoutProps, 'size'>,
    SpaceProps,
    TypographyProps,
    Omit<CompatibleHTMLProps<HTMLDivElement>, 'onChange'> {
  options?: SelectOptionProps[]
  /**
   * Displays an example value or short hint to the user. Should not replace a label.
   */
  placeholder?: string
  /**
   * The user can type in the input (default false to mimic traditional select tag)
   */
  isSearchable?: boolean
  /**
   * The user can clear the current value by clicking an x icon button
   */
  isClearable?: boolean
  /**
   * The current value of the input
   */
  inputValue?: string
  /**
   * Handle the change event of the text input
   */
  onInputChange?: (e: FormEvent<HTMLInputElement>) => void

  validationType?: ValidationType
  /**
   * Value of the current selected option
   */
  value?: string
  /**
   * Handle an option being selected
   */
  onChange?: (value: string) => void
}

const SelectComponent = forwardRef(
  (
    {
      options,
      isSearchable,
      isClearable,
      placeholder,
      inputValue,
      onInputChange,
      onChange,
      value,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby,
      ...props
    }: SelectProps,
    ref: Ref<HTMLInputElement>
  ) => {
    function handleChange(option?: ComboboxOptionObject) {
      const newValue = option ? option.value : ''
      onChange && onChange(newValue)
    }

    const val = useMemo(() => {
      return options?.find(option => option.value === value)
    }, [value, options])

    const ariaProps = {
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby,
    }

    return (
      <Combobox {...props} value={val} onChange={handleChange}>
        <ComboboxInput
          autocomplete={false}
          placeholder={placeholder}
          readOnly={!isSearchable}
          value={inputValue}
          onChange={onInputChange}
          hideControls={!isClearable}
          {...ariaProps}
          ref={ref}
        />
        <ComboboxList persistSelection {...ariaProps}>
          {options &&
            options.map(option => (
              <ComboboxOption {...option} key={option.value} />
            ))}
        </ComboboxList>
      </Combobox>
    )
  }
)

SelectComponent.displayName = 'SelectComponent'

export const Select = styled(SelectComponent)``
