/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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

import type { Ref, FormEvent } from 'react'
import React, { forwardRef, useState } from 'react'
import styled from 'styled-components'
import { Search } from '@styled-icons/material-outlined/Search'
import { useControlWarn } from '../../../utils'
import { Combobox, ComboboxInput, ComboboxList } from '../Combobox'
import type { SelectProps, SelectOptionObject } from '../Select'
import { SelectOptions } from '../Select'
import {
  omitAriaAndValidationProps,
  pickAriaAndValidationProps,
} from '../ariaProps'
import { getMatchingOption } from '../Select/utils/options'
import { useShouldWindowOptions } from '../Select/utils/useWindowedOptions'
import { useFlatOptions } from '../Select/utils/useFlatOptions'

export interface InputSearchProps
  extends Omit<
    SelectProps,
    | 'isFilterable'
    | 'noOptionsLabel'
    | 'onFilter'
    | 'openOnClick'
    | 'showCreate'
    | 'formatCreateLabel'
  > {
  /**
   * Selecting an option updates the input's value
   * @default true
   * @experimental
   */
  changeOnSelect?: boolean
  /**
   * Clear the input value when the option list closes
   * Defaults to the inverse of changeOnSelect
   * @default false
   * @experimental
   */
  clearOnClose?: boolean

  /**
   * customize the tooltip on the clear icon
   */
  clearIconLabel?: string

  hideSearchIcon?: boolean
  /**
   * @default true
   */
  isClearable?: SelectProps['isClearable']
  /**
   * If defined, the popup will render with this text when there are no options.
   * @experimental
   */
  noOptionsLabel?: string
  /**
   * Called when the user selects one of the options
   * onChange will also be called with the option's value unless changeOnSelect is set to false
   * @experimental
   */
  onSelectOption?: (option?: SelectOptionObject) => void
  /**
   * If true, the popover opens when the text box is clicked.
   * @default false
   * @experimental
   */
  openOnClick?: boolean
  readOnly?: boolean
}

const InputSearchLayout = forwardRef(
  (
    {
      autoResize,
      autoFocus,
      changeOnSelect = true,
      clearOnClose = !changeOnSelect,
      defaultValue,
      disabled,
      hideSearchIcon,
      clearIconLabel,
      indicator,
      isClearable = true,
      isLoading,
      listLayout,
      name,
      noOptionsLabel,
      onChange,
      onSelectOption,
      options,
      placeholder,
      readOnly,
      summary,
      value: controlledValue,
      windowing: windowingProp,
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

    const { flatOptions, navigationOptions } = useFlatOptions(options)
    const matchingOption = getMatchingOption(valueToUse, navigationOptions)
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

    const windowing = useShouldWindowOptions(flatOptions, windowingProp)

    return (
      <Combobox
        value={optionValue}
        onChange={handleChange}
        onClose={handleClose}
        openOnClick={false}
        width={autoResize ? 'auto' : '100%'}
        display={autoResize ? 'inline-flex' : undefined}
        {...omitAriaAndValidationProps(props)}
        role={props.role}
      >
        <ComboboxInput
          {...ariaProps}
          autoComplete={false}
          autoFocus={autoFocus}
          autoResize={autoResize}
          disabled={disabled}
          freeInput
          iconBefore={
            hideSearchIcon ? undefined : <Search data-testid="search-icon" />
          }
          clearIconLabel={clearIconLabel}
          name={name}
          isClearable={isClearable}
          onChange={handleInputChange}
          placeholder={placeholder}
          readOnly={readOnly}
          ref={ref}
          summary={summary}
          validationType={props.validationType}
          value={valueToUse}
        />
        {!disabled && (options?.length || noOptionsLabel) && (
          <ComboboxList
            persistSelection
            windowing={windowing}
            indicator={indicator}
            width={autoResize ? 'auto' : undefined}
            aria-busy={isLoading}
            {...ariaProps}
            {...listLayout}
          >
            <SelectOptions
              flatOptions={flatOptions}
              navigationOptions={navigationOptions}
              windowing={windowing}
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
