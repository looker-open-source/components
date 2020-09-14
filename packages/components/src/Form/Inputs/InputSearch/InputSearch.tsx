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

import React, { forwardRef, Ref, FormEvent, useState } from 'react'
import styled from 'styled-components'
import { useControlWarn } from '../../../utils'
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
  hideSearchIcon?: boolean
  /**
   * Called when the user selects one of the options
   * onChange will also be called with the option's value unless changeOnSelect is set to false
   */
  onSelectOption?: (option?: SelectOptionObject) => void
  /**
   * Selecting an option updates the input's value
   * @default true
   */
  changeOnSelect?: boolean
  /**
   * Clear the input value when the option list closes
   * Defaults to the inverse of changeOnSelect
   * @default false
   */
  clearOnClose?: boolean
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
      value: controlledValue,
      defaultValue,
      noOptionsLabel,
      indicator,
      listLayout,
      autoResize,
      windowedOptions: windowedOptionsProp,
      isLoading,
      hideSearchIcon,
      summary,
      changeOnSelect = true,
      clearOnClose = !changeOnSelect,
      ...props
    }: InputSearchProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const isControlled = useControlWarn({
      controllingProps: ['value'],
      isControlledCheck: () => controlledValue !== undefined,
      name: 'InputSearch',
    })
    const [value, setValue] = useState(defaultValue || '')
    const valueToUse = isControlled ? controlledValue : value

    const matchingOption = getMatchingOption(valueToUse, options)
    const optionValue = matchingOption || { value: '' }

    function updateValue(newValue: string) {
      if (onChange) {
        onChange(newValue)
      }
      if (!isControlled) {
        setValue(newValue)
      }
    }

    function handleChange(option?: SelectOptionObject) {
      onSelectOption && onSelectOption(option)
      if (changeOnSelect) {
        updateValue(option?.value || '')
      }
    }

    function handleInputChange(e: FormEvent<HTMLInputElement>) {
      updateValue(e.currentTarget.value)
    }

    function handleClose() {
      if (clearOnClose) {
        // when the list closes, the input's value reverts to the current option
        updateValue('')
      }
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
          value={valueToUse}
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
          summary={summary}
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
              isLoading={isLoading}
            />
          </ComboboxList>
        )}
      </Combobox>
    )
  }
)

InputSearchLayout.displayName = 'InputSearch'

export const InputSearch = styled(InputSearchLayout)``
