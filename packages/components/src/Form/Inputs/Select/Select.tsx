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

import type { LayoutProps } from '@looker/design-tokens'
import type { Ref, FormEvent } from 'react'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import {
  omitAriaAndValidationProps,
  pickAriaAndValidationProps,
} from '../ariaProps'
import type {
  ComboboxInputProps,
  ComboboxOptionIndicatorProps,
  ComboboxProps,
} from '../Combobox'
import { Combobox, ComboboxInput, ComboboxList } from '../Combobox'
import type { SelectOptionsBaseProps } from './SelectOptions'
import { SelectOptions } from './SelectOptions'
import { SelectInputIcon } from './SelectInputIcon'
import { getOption, getFirstOption } from './utils/options'
import { useFlatOptions } from './utils/useFlatOptions'
import { useShouldWindowOptions } from './utils/useWindowedOptions'
import type { SelectOptionObject, SelectOptionProps } from './types'

export interface SelectBaseProps
  extends SelectOptionsBaseProps,
    Pick<ComboboxInputProps, 'noErrorIcon' | 'placeholder' | 'validationType'>,
    Pick<ComboboxOptionIndicatorProps, 'indicator'> {
  /**
   * Options may be flat or grouped, label is optional – without it the value is used
   */
  options?: SelectOptionProps[]
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
  /**
   * Render only the options visible in the scroll window
   * defaults to false for <100 options, true for >=100 options
   */
  windowing?: boolean
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
  /**
   * The optional a11y aria label for combobox Wrapper element that has popup
   */
  wrapperAriaLabel?: string
}

const SelectComponent = forwardRef(
  (
    {
      options,
      disabled,
      autoFocus,
      isFilterable,
      isClearable,
      placeholder,
      name,
      onFilter,
      onChange,
      value,
      defaultValue,
      noOptionsLabel,
      indicator,
      listLayout,
      autoResize,
      windowing: windowingProp,
      showCreate = false,
      formatCreateLabel,
      isLoading,
      noErrorIcon,
      ...props
    }: SelectProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const { flatOptions, navigationOptions } = useFlatOptions(options)
    const optionValue = getOption(value, navigationOptions)
    const nullDefault = (isClearable || placeholder) && !defaultValue
    const defaultOptionValue = nullDefault
      ? undefined
      : getOption(defaultValue, navigationOptions) ||
        (options && getFirstOption(options))

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

    const ariaProps = pickAriaAndValidationProps(props)

    const windowing = useShouldWindowOptions(flatOptions, windowingProp)

    return (
      <Combobox
        value={optionValue}
        defaultValue={defaultOptionValue}
        onChange={handleChange}
        onClose={handleClose}
        width={autoResize ? 'auto' : '100%'}
        display={autoResize ? 'inline-flex' : undefined}
        wrapperAriaLabel={props.wrapperAriaLabel}
        {...omitAriaAndValidationProps(props)}
      >
        <ComboboxInput
          {...ariaProps}
          before={<SelectInputIcon options={navigationOptions} />}
          disabled={disabled}
          autoFocus={autoFocus}
          placeholder={placeholder}
          name={name}
          noErrorIcon={noErrorIcon}
          validationType={props.validationType}
          isClearable={isClearable}
          autoComplete={false}
          autoResize={autoResize}
          inputReadOnly={!isFilterable}
          onChange={handleInputChange}
          selectOnClick={isFilterable}
          ref={ref}
        />
        {!disabled && (
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
              isFilterable={isFilterable}
              noOptionsLabel={noOptionsLabel}
              showCreate={showCreate}
              formatCreateLabel={formatCreateLabel}
              isLoading={isLoading}
            />
          </ComboboxList>
        )}
      </Combobox>
    )
  }
)

SelectComponent.displayName = 'SelectComponent'

export const Select = styled(SelectComponent)``
