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

import React, { forwardRef, KeyboardEvent, ReactNode, Ref } from 'react'
import styled from 'styled-components'
import { CustomizableAttributes } from '@looker/design-tokens'
import {
  ComboboxMulti,
  ComboboxMultiInput,
  ComboboxMultiList,
  ComboboxMultiProps,
} from '../Combobox'
import { SelectBaseProps } from './Select'
import { SelectOptionObject, SelectOptions } from './SelectOptions'
import { SelectMultiCreateOption } from './SelectMultiCreateOption'
import { getOptions } from './utils/options'

export const CustomizableSelectMultiAttributes: CustomizableAttributes = {
  borderRadius: 'medium',
  fontSize: 'small',
  height: '28px',
  px: 'xsmall',
  py: 'none',
}

export interface SelectMultiProps
  extends Omit<ComboboxMultiProps, 'values' | 'defaultValues' | 'onChange'>,
    Omit<SelectBaseProps, 'isClearable'> {
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
  /**
   * Add an on-the-fly option mirroring the typed text (use when isFilterable = true)
   * When `true`, missingInOptions is used to show/hide and can be included in a custom function
   */
  showCreate?: boolean
  /**
   * Format the label of the on-the-fly create option (use with canCreate)
   * @default `Create ${inputText}`
   */
  formatCreateLabel?: (inputText: string) => ReactNode
  /**
   * Set to false to disable the removal of the last value on backspace key
   * @default true
   */
  removeOnBackspace?: boolean
}

const SelectMultiComponent = forwardRef(
  (
    {
      options,
      disabled,
      isFilterable,
      placeholder,
      onFilter,
      onChange,
      values,
      defaultValues,
      noOptionsLabel,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby,
      validationType,
      closeOnSelect = false,
      showCreate = false,
      formatCreateLabel,
      removeOnBackspace = true,
      ...props
    }: SelectMultiProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const optionValues = getOptions(values, options)
    const defaultOptionValues = getOptions(defaultValues, options)

    function handleChange(options?: SelectOptionObject[]) {
      const newValues = options && options.map((option) => option.value)
      onChange && onChange(newValues)
      onFilter && onFilter('')
    }

    function handleInputChange(value: string) {
      onFilter && onFilter(value)
    }

    function handleClose() {
      // when the list closes, the input's value reverts to the current option
      onFilter && onFilter('')
    }

    const ariaProps = {
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby,
    }

    const inputProps = {
      disabled,
      placeholder,
      validationType,
      ...(removeOnBackspace
        ? {}
        : {
            onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => {
              if (e.currentTarget.value === '' && e.key === 'Backspace') {
                e.preventDefault()
              }
            },
          }),
    }

    const createOption = isFilterable && showCreate && (
      <SelectMultiCreateOption
        options={options}
        formatLabel={formatCreateLabel}
      />
    )

    return (
      <ComboboxMulti
        {...props}
        values={optionValues}
        defaultValues={defaultOptionValues}
        onChange={handleChange}
        onClose={handleClose}
      >
        <ComboboxMultiInput
          {...inputProps}
          {...ariaProps}
          autoComplete={false}
          readOnly={!isFilterable}
          onInputChange={handleInputChange}
          selectOnClick={isFilterable}
          ref={ref}
        />
        {!disabled && (
          <ComboboxMultiList
            persistSelection
            closeOnSelect={closeOnSelect}
            {...ariaProps}
          >
            <SelectOptions
              options={options}
              isMulti
              noOptionsLabel={noOptionsLabel}
              hideNoOptions={createOption !== null}
            />
            {createOption}
          </ComboboxMultiList>
        )}
      </ComboboxMulti>
    )
  }
)

SelectMultiComponent.displayName = 'SelectMultiComponent'

export const SelectMulti = styled(SelectMultiComponent)``
