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

import React, { forwardRef, Ref, FormEvent } from 'react'
import styled from 'styled-components'
import { SelectProps } from '../Select'

import { Combobox, ComboboxInput, ComboboxList } from '../Combobox'
import { SelectOptionObject, SelectOptions } from '../Select/SelectOptions'
import {
  omitAriaAndValidationProps,
  pickAriaAndValidationProps,
} from '../Select/utils/ariaProps'
import { getMatchingOption } from '../Select/utils/options'
import { useShouldWindowOptions } from '../Select/utils/useWindowedOptions'

export interface InputSearchProps
  extends Omit<
    SelectProps,
    'isFilterable' | 'onFilter' | 'showCreate' | 'formatCreateLabel'
  > {
  summary?: string
  hideSearchIcon?: boolean
  onSelectOption?: (option?: SelectOptionObject) => void
  /**
   * Selecting an option updates the input's value
   * @default true
   */
  changeOnSelect?: boolean
}

const InputSearchLayout = forwardRef(
  (
    {
      options,
      disabled,
      isClearable = true,
      placeholder,
      name,
      onChange,
      onSelectOption,
      value,
      defaultValue,
      noOptionsLabel,
      indicator,
      listLayout,
      autoResize,
      windowedOptions: windowedOptionsProp,
      hideSearchIcon,
      changeOnSelect = true,
      ...props
    }: InputSearchProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const matchingOption = getMatchingOption(value, options)
    const optionValue = matchingOption || { value: '' }

    function handleChange(option?: SelectOptionObject) {
      onSelectOption && onSelectOption(option)
      if (changeOnSelect && onChange) {
        onChange(option?.value || '')
      }
    }

    function handleInputChange(e: FormEvent<HTMLInputElement>) {
      onChange && onChange(e.currentTarget.value)
    }

    function handleClose() {
      // when the list closes, the input's value reverts to the current option
      // onFilter && onFilter('')
    }

    const ariaProps = pickAriaAndValidationProps(props)

    const windowedOptions = useShouldWindowOptions(options, windowedOptionsProp)

    return (
      <Combobox
        value={optionValue}
        onChange={handleChange}
        onClose={handleClose}
        openOnClick={false}
        width={autoResize ? 'auto' : '100%'}
        display={autoResize ? 'inline-flex' : undefined}
        {...omitAriaAndValidationProps(props)}
      >
        <ComboboxInput
          {...ariaProps}
          value={value}
          defaultValue={defaultValue}
          iconBefore={hideSearchIcon ? undefined : 'Search'}
          disabled={disabled}
          placeholder={placeholder}
          name={name}
          validationType={props.validationType}
          isClearable={isClearable}
          autoComplete={false}
          autoResize={autoResize}
          onChange={handleInputChange}
          freeInput
          ref={ref}
        />
        {!disabled && (options?.length || noOptionsLabel) && (
          <ComboboxList
            persistSelection
            windowedOptions={windowedOptions}
            cancelClickOutside={false}
            indicator={indicator}
            width={autoResize ? 'auto' : undefined}
            {...ariaProps}
            {...listLayout}
          >
            <SelectOptions
              options={options}
              windowedOptions={windowedOptions}
              isFilterable
              noOptionsLabel={noOptionsLabel}
            />
          </ComboboxList>
        )}
      </Combobox>
    )
  }
)

InputSearchLayout.displayName = 'InputSearch'

export const InputSearch = styled(InputSearchLayout)``
