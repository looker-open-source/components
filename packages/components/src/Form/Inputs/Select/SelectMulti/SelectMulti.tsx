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

import type { Ref } from 'react'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import {
  omitAriaAndValidationProps,
  pickAriaAndValidationProps,
} from '../../ariaProps'
import type {
  ComboboxMultiInputProps,
  ComboboxMultiProps,
} from '../../Combobox'
import {
  ComboboxMulti,
  ComboboxMultiInput,
  ComboboxMultiList,
} from '../../Combobox'
import type { InputChipsValidationProps } from '../../InputChips'
import type { SelectBaseProps } from '../Select'
import { SelectOptions } from '../SelectOptions'
import type { SelectOptionObject } from '../types'
import { getOptions } from '../utils/options'
import { useFlatOptions } from '../utils/useFlatOptions'
import { useShouldWindowOptions } from '../utils/useWindowedOptions'

export interface SelectMultiProps
  extends Omit<ComboboxMultiProps, 'values' | 'defaultValues' | 'onChange'>,
    Omit<SelectBaseProps, 'isClearable'>,
    Pick<
      ComboboxMultiInputProps,
      'chipIconLabel' | 'clearIconLabel' | 'freeInput' | 'removeOnBackspace'
    >,
    // validation callbacks for use with freeInput
    InputChipsValidationProps {
  /**
   * Should the list close after an option is selected
   * @default false
   */
  closeOnSelect?: boolean

  /**
   * Value of the initial option
   */
  defaultValues?: string[]

  /**
   * Handle an option being selected
   */
  onChange?: (values?: string[]) => void

  /**
   * Values of the current selected option (controlled)
   */
  values?: string[]
}

const SelectMultiComponent = forwardRef(
  (
    {
      autoFocus,
      closeOnSelect = false,
      defaultValues,
      disabled,
      formatCreateLabel,
      freeInput = false,
      chipIconLabel,
      clearIconLabel,
      indicator,
      isFilterable = false,
      isLoading,
      listLayout,
      noOptionsLabel,
      onChange,
      onDuplicate,
      onFilter,
      onValidationFail,
      noErrorIcon,
      options,
      placeholder,
      removeOnBackspace = true,
      showCreate = false,
      formatInputValue,
      validate,
      values,
      windowing: windowingProp,
      ...props
    }: SelectMultiProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const { flatOptions, navigationOptions } = useFlatOptions(options)
    const optionValues = getOptions(values, navigationOptions)
    const defaultOptionValues = getOptions(defaultValues, navigationOptions)

    function handleChange(options: SelectOptionObject[] = []) {
      const newValues = options && options.map(option => option.value)
      onChange && onChange(newValues)
    }

    function handleInputChange(value: string) {
      onFilter?.(value)
    }

    const ariaProps = pickAriaAndValidationProps(props)

    const windowing = useShouldWindowOptions(flatOptions, windowingProp)

    return (
      <ComboboxMulti
        {...omitAriaAndValidationProps(props)}
        values={optionValues}
        defaultValues={defaultOptionValues}
        onChange={handleChange}
      >
        <ComboboxMultiInput
          {...ariaProps}
          disabled={disabled}
          autoFocus={autoFocus}
          placeholder={placeholder}
          chipIconLabel={chipIconLabel}
          clearIconLabel={clearIconLabel}
          removeOnBackspace={removeOnBackspace}
          validationType={props.validationType}
          autoComplete={false}
          inputReadOnly={!isFilterable && !freeInput}
          onInputChange={handleInputChange}
          selectOnClick={isFilterable}
          freeInput={freeInput}
          validate={validate}
          formatInputValue={formatInputValue}
          noErrorIcon={noErrorIcon}
          onValidationFail={onValidationFail}
          onDuplicate={onDuplicate}
          ref={ref}
        />
        {!disabled && (
          <ComboboxMultiList
            persistSelection
            closeOnSelect={closeOnSelect}
            windowing={windowing}
            indicator={indicator}
            aria-busy={isLoading}
            {...ariaProps}
            {...listLayout}
          >
            <SelectOptions
              isMulti
              flatOptions={flatOptions}
              navigationOptions={navigationOptions}
              windowing={windowing}
              isFilterable={isFilterable}
              noOptionsLabel={noOptionsLabel}
              showCreate={showCreate}
              formatCreateLabel={formatCreateLabel}
              isLoading={isLoading}
            />
          </ComboboxMultiList>
        )}
      </ComboboxMulti>
    )
  }
)

SelectMultiComponent.displayName = 'SelectMultiComponent'

export const SelectMulti = styled(SelectMultiComponent)``
