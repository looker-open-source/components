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
import { Combobox, ComboboxInput, ComboboxList } from '../Combobox'
import { SelectProps, SelectOptionObject, SelectOptions } from '../Select'
import {
  omitAriaAndValidationProps,
  pickAriaAndValidationProps,
} from '../Select/utils/ariaProps'
import { getMatchingOption } from '../Select/utils/options'
import { useShouldWindowOptions } from '../Select/utils/useWindowedOptions'

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
   * @default true
   */
  isClearable?: SelectProps['isClearable']
  hideSearchIcon?: boolean
  /**
   * Called when the user selects one of the options
   * onChange will also be called with the option's value unless changeOnSelect is set to false
   * @experimental
   */
  onSelectOption?: (option?: SelectOptionObject) => void
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
   * If defined, the popup will render with this text when there are no options.
   * @experimental
   */
  noOptionsLabel?: string
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
      options,
      disabled,
      autoFocus,
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
      readOnly,
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
          iconBeforeTitle={hideSearchIcon ? undefined : 'Search'}
          disabled={disabled}
          autoFocus={autoFocus}
          placeholder={placeholder}
          name={name}
          validationType={props.validationType}
          isClearable={isClearable}
          autoComplete={false}
          autoResize={autoResize}
          readOnly={readOnly}
          onChange={handleInputChange}
          freeInput
          summary={summary}
          ref={ref}
        />
        {!disabled && (options?.length || noOptionsLabel) && (
          <ComboboxList
            persistSelection
            windowedOptions={windowedOptions}
            indicator={indicator}
            width={autoResize ? 'auto' : undefined}
            aria-busy={isLoading}
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
