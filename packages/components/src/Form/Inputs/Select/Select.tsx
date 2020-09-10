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

import { LayoutProps } from '@looker/design-tokens'
import React, { forwardRef, Ref, FormEvent } from 'react'
import styled from 'styled-components'
import { ValidationType } from '../../ValidationMessage'
import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOptionIndicatorProps,
  ComboboxProps,
} from '../Combobox'
import {
  SelectOptionObject,
  SelectOptions,
  SelectOptionsBaseProps,
} from './SelectOptions'
import { SelectInputIcon } from './SelectInputIcon'
import { getOption, getFirstOption } from './utils/options'
import { useShouldWindowOptions } from './utils/useWindowedOptions'

export interface SelectBaseProps
  extends SelectOptionsBaseProps,
    Pick<ComboboxOptionIndicatorProps, 'indicator'> {
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

  /**
   * Control the dimensions of the list
   * (use this to untether the list width from the input width)
   */
  listLayout?: LayoutProps

  validationType?: ValidationType
  /**
   * Render only the options visible in the scroll window
   * defaults to false for <100 options, true for >=100 options
   */
  windowedOptions?: boolean
}

export interface SelectProps
  extends Omit<ComboboxProps, 'value' | 'defaultValue' | 'onChange'>,
    SelectBaseProps {
  /**
   * Allows the select width to resize with the current value or placeholder
   * Container will default to `display: inline-flex` and container & list will default to `width: auto`
   */
  autoResize?: boolean
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
      name,
      onFilter,
      onChange,
      value,
      defaultValue,
      noOptionsLabel,
      'aria-describedby': ariaDescribedby,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby,
      indicator,
      listLayout,
      autoResize,
      validationType,
      windowedOptions: windowedOptionsProp,
      showCreate = false,
      formatCreateLabel,
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
      'aria-describedby': ariaDescribedby,
      'aria-invalid': validationType === 'error',
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby,
    }

    const windowedOptions = useShouldWindowOptions(options, windowedOptionsProp)

    return (
      <Combobox
        value={optionValue}
        defaultValue={defaultOptionValue}
        onChange={handleChange}
        onClose={handleClose}
        width={autoResize ? 'auto' : '100%'}
        display={autoResize ? 'inline-flex' : undefined}
        {...props}
      >
        <ComboboxInput
          {...ariaProps}
          before={<SelectInputIcon options={options} />}
          disabled={disabled}
          placeholder={placeholder}
          name={name}
          validationType={validationType}
          isClearable={isClearable}
          autoComplete={false}
          autoResize={autoResize}
          readOnly={!isFilterable}
          onChange={handleInputChange}
          selectOnClick={isFilterable}
          ref={ref}
        />
        {!disabled && (
          <ComboboxList
            persistSelection
            windowedOptions={windowedOptions}
            cancelClickOutside={!isFilterable}
            indicator={indicator}
            width={autoResize ? 'auto' : undefined}
            {...ariaProps}
            {...listLayout}
          >
            <SelectOptions
              options={options}
              windowedOptions={windowedOptions}
              isFilterable={isFilterable}
              noOptionsLabel={noOptionsLabel}
              showCreate={showCreate}
              formatCreateLabel={formatCreateLabel}
            />
          </ComboboxList>
        )}
      </Combobox>
    )
  }
)

SelectComponent.displayName = 'SelectComponent'

export const Select = styled(SelectComponent)``
