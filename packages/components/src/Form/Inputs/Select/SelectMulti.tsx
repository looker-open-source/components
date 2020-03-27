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
import { CustomizableAttributes } from '@looker/design-tokens'
import {
  ComboboxMulti,
  ComboboxMultiInput,
  ComboboxMultiList,
  ComboboxMultiProps,
  getComboboxText,
} from '../Combobox'
import { flattenOptions, SelectBaseProps } from './Select'
import {
  SelectOptionObject,
  SelectOptionProps,
  SelectOptions,
} from './SelectOptions'

export const CustomizableSelectMultiAttributes: CustomizableAttributes = {
  borderRadius: 'medium',
  fontSize: 'small',
  height: '28px',
  px: 'xsmall',
  py: 'none',
}

export interface SelectMultiProps
  extends Omit<ComboboxMultiProps, 'values' | 'defaultValues' | 'onChange'>,
    SelectBaseProps {
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
}

function getOptions(
  values?: string[],
  options?: SelectOptionProps[]
): SelectOptionObject[] | undefined {
  if (!values) return undefined
  const flattenedOptions = options && flattenOptions(options)
  return values.map(value => ({
    label: getComboboxText(value, flattenedOptions),
    value,
  }))
}

const SelectMultiComponent = forwardRef(
  (
    {
      options,
      disabled,
      isFilterable,
      isClearable,
      placeholder,
      onFilter,
      onChange,
      values,
      defaultValues,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby,
      validationType,
      ...props
    }: SelectMultiProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const optionValues = getOptions(values, options)
    const nullDefault = (isClearable || placeholder) && !defaultValues
    const defaultOptionValues = nullDefault
      ? undefined
      : getOptions(defaultValues, options)

    function handleChange(options?: SelectOptionObject[]) {
      const newValues = options && options.map(option => option.value)
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
    }

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
          hideControls={!isClearable}
          selectOnClick={isFilterable}
          ref={ref}
        />
        {!disabled && (
          <ComboboxMultiList
            persistSelection
            closeOnSelect={false}
            {...ariaProps}
          >
            <SelectOptions options={options} isMulti />
          </ComboboxMultiList>
        )}
      </ComboboxMulti>
    )
  }
)

SelectMultiComponent.displayName = 'SelectMultiComponent'

export const SelectMulti = styled(SelectMultiComponent)``
