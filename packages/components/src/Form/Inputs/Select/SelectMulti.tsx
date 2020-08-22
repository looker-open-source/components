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

import React, { forwardRef, Ref } from 'react'
import styled from 'styled-components'
import {
  ComboboxMulti,
  ComboboxMultiInput,
  ComboboxMultiInputProps,
  ComboboxMultiList,
  ComboboxMultiProps,
} from '../Combobox'
import { InputChipsCommonProps } from '../InputChips'
import { SelectBaseProps } from './Select'
import { SelectOptionObject, SelectOptions } from './SelectOptions'
import { getOptions, flattenOptions } from './utils/options'
import { useShouldWindowOptions } from './utils/useWindowedOptions'

export interface SelectMultiProps
  extends Omit<ComboboxMultiProps, 'values' | 'defaultValues' | 'onChange'>,
    Omit<SelectBaseProps, 'isClearable'>,
    Pick<InputChipsCommonProps, 'removeOnBackspace'>,
    Pick<ComboboxMultiInputProps, 'validate'> {
  /**
   * Values of the current selected option (controlled)
   */
  values?: string[]
  /**
   * Optionally control the input value (use with onFilter)
   */
  filterTerm?: string
  /**
   * Value of the initial option
   */
  defaultValues?: string[]
  /**
   * Handle an option being selected
   */
  onChange?: (values?: string[]) => void
  /**
   * Should the list close after an option is selected
   * @default false
   */
  closeOnSelect?: boolean
  /**
   * Allows inputting of values outside of options via typing or pasting
   * Not recommended for use when options have labels that are different from their values
   * @default false
   */
  freeInput?: boolean
}

const SelectMultiComponent = forwardRef(
  (
    {
      options,
      disabled,
      isFilterable = false,
      placeholder,
      onFilter,
      filterTerm,
      onChange,
      values,
      defaultValues,
      noOptionsLabel,
      'aria-describedby': ariaDescribedby,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby,
      indicator,
      listLayout,
      validationType,
      windowedOptions: windowedOptionsProp,
      closeOnSelect = false,
      showCreate = false,
      formatCreateLabel,
      removeOnBackspace = true,
      freeInput = false,
      validate,
      ...props
    }: SelectMultiProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const optionValues = getOptions(values, options)
    const defaultOptionValues = getOptions(defaultValues, options)

    function handleChange(newOptions: SelectOptionObject[] = []) {
      const newValues = newOptions && newOptions.map((option) => option.value)
      onChange && onChange(newValues)
      onFilter && onFilter('')
    }

    function validateOptions(value: string) {
      if (freeInput) {
        return validate ? validate(value) : true
      } else if (options) {
        const matchingOption = flattenOptions(options).find(
          (option) => option.value === value
        )
        return matchingOption !== undefined
      }
      return false
    }

    // function handleChange(newOptions: SelectOptionObject[] = []) {
    //   // Validate new values against options (may be from copy/paste)
    //   // or allow all if freeInput is true
    //   const validOptions: SelectOptionObject[] = freeInput
    //     ? newOptions
    //     : newOptions.filter(
    //         ({ value }) =>
    //           options &&
    //           flattenOptions(options).find((option) => value === option.value)
    //       )
    //   console.log(validOptions)
    //   const newValues = validOptions.map((option) => option.value)
    //   onChange && onChange(newValues)
    //   onFilter && onFilter('')
    // }

    function handleInputChange(value: string) {
      onFilter && onFilter(value)
    }

    function handleClose() {
      onFilter && onFilter('')
    }

    const ariaProps = {
      'aria-describedby': ariaDescribedby,
      'aria-invalid': validationType === 'error',
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby,
    }

    const windowedOptions = useShouldWindowOptions(options, windowedOptionsProp)

    return (
      <ComboboxMulti
        {...props}
        values={optionValues}
        defaultValues={defaultOptionValues}
        onChange={handleChange}
        onClose={handleClose}
      >
        <ComboboxMultiInput
          {...ariaProps}
          disabled={disabled}
          placeholder={placeholder}
          removeOnBackspace={removeOnBackspace}
          validationType={validationType}
          autoComplete={false}
          readOnly={!isFilterable && !freeInput}
          inputValue={filterTerm}
          onInputChange={handleInputChange}
          selectOnClick={isFilterable}
          validate={validateOptions}
          ref={ref}
        />
        {!disabled && (
          <ComboboxMultiList
            persistSelection
            closeOnSelect={closeOnSelect}
            windowedOptions={windowedOptions}
            cancelClickOutside={!isFilterable && !freeInput}
            indicator={indicator}
            {...ariaProps}
            {...listLayout}
          >
            <SelectOptions
              isMulti
              options={options}
              windowedOptions={windowedOptions}
              isFilterable={isFilterable}
              noOptionsLabel={noOptionsLabel}
              showCreate={showCreate}
              formatCreateLabel={formatCreateLabel}
            />
          </ComboboxMultiList>
        )}
      </ComboboxMulti>
    )
  }
)

SelectMultiComponent.displayName = 'SelectMultiComponent'

export const SelectMulti = styled(SelectMultiComponent)``
