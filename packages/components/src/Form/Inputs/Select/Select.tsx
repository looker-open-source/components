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
import { CustomizableAttributes } from '@looker/design-tokens'
import { ValidationType } from '../../ValidationMessage'
import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxProps,
} from '../Combobox'
import {
  SelectOptionObject,
  SelectOptions,
  SelectOptionsBaseProps,
} from './SelectOptions'
import { getOption, getFirstOption } from './utils/options'

export const CustomizableSelectAttributes: CustomizableAttributes = {
  borderRadius: 'medium',
  fontSize: 'small',
  height: '28px',
  px: 'xsmall',
  py: 'none',
}

export interface SelectBaseProps extends SelectOptionsBaseProps {
  placeholder?: string
  /**
   * The user can clear the current value by clicking an x icon button
   */
  isClearable?: boolean
  /**
   * Handle when the user types in the field,
   * or the menu opens with a pre-populated value
   */
  onFilter?: (term: string) => void

  validationType?: ValidationType
}

export interface SelectProps
  extends Omit<ComboboxProps, 'value' | 'defaultValue' | 'onChange'>,
    SelectBaseProps {
  /**
   * Value of the current selected option (controlled)
   */
  value?: string
  /**
   * Value of the initial option
   */
  defaultValue?: string
  /**
   * Handle an option being selected
   */
  onChange?: (value: string) => void
}

const SelectComponent = forwardRef(
  (
    {
      options,
      disabled,
      isFilterable,
      isClearable,
      placeholder,
      onFilter,
      onChange,
      value,
      defaultValue,
      noOptionsLabel,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby,
      validationType,
      ...props
    }: SelectProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const optionValue = getOption(value, options)
    const nullDefault = (isClearable || placeholder) && !defaultValue
    const defaultOptionValue = nullDefault
      ? undefined
      : getOption(defaultValue, options) || (options && getFirstOption(options))

    function handleChange(option?: SelectOptionObject) {
      const newValue = option ? option.value : ''
      onChange && onChange(newValue)
      onFilter && onFilter('')
    }

    function handleInputChange(e: FormEvent<HTMLInputElement>) {
      onFilter && onFilter(e.currentTarget.value)
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
      <Combobox
        {...props}
        value={optionValue}
        defaultValue={defaultOptionValue}
        onChange={handleChange}
        onClose={handleClose}
      >
        <ComboboxInput
          {...inputProps}
          {...ariaProps}
          autoComplete={false}
          readOnly={!isFilterable}
          onChange={handleInputChange}
          hideControls={!isClearable}
          selectOnClick={isFilterable}
          ref={ref}
        />
        {!disabled && (
          <ComboboxList persistSelection {...ariaProps}>
            <SelectOptions options={options} noOptionsLabel={noOptionsLabel} />
          </ComboboxList>
        )}
      </Combobox>
    )
  }
)

SelectComponent.displayName = 'SelectComponent'

export const Select = styled(SelectComponent)``
