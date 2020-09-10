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
import { InputChipsValidationProps } from '../InputChips'
import { SelectBaseProps } from './Select'
import { SelectOptionObject, SelectOptions } from './SelectOptions'
import { getOptions } from './utils/options'
import { useShouldWindowOptions } from './utils/useWindowedOptions'

export interface SelectMultiProps
  extends Omit<ComboboxMultiProps, 'values' | 'defaultValues' | 'onChange'>,
    Omit<SelectBaseProps, 'isClearable'>,
    Pick<ComboboxMultiInputProps, 'freeInput' | 'removeOnBackspace'>,
    // validation callbacks for use with freeInput
    InputChipsValidationProps {
  /**
   * Values of the current selected option (controlled)
   */
  values?: string[]
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
}

const SelectMultiComponent = forwardRef(
  (
    {
      options,
      disabled,
      isFilterable = false,
      placeholder,
      onFilter,
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
      onValidationFail,
      onDuplicate,

      ...props
    }: SelectMultiProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const optionValues = getOptions(values, options)
    const defaultOptionValues = getOptions(defaultValues, options)

    function handleChange(options: SelectOptionObject[] = []) {
      const newValues = options && options.map((option) => option.value)
      onChange && onChange(newValues)
      onFilter && onFilter('')
    }

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
          onInputChange={handleInputChange}
          selectOnClick={isFilterable}
          freeInput={freeInput}
          validate={validate}
          onValidationFail={onValidationFail}
          onDuplicate={onDuplicate}
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
