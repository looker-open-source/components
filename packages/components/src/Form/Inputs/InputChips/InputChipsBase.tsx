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
import React, { FormEvent, forwardRef, KeyboardEvent, Ref } from 'react'
import styled from 'styled-components'
import { MaxHeightProps } from 'styled-system'
import { Chip } from '../../../Chip'
import { Flex } from '../../../Layout'
import { InputText } from '../InputText'
import { InputSearchBase, InputSearchBaseProps } from '../InputSearch'
import { AdvancedInputControls } from '../AdvancedInputControls'

export interface InputChipsInputControlProps {
  /**
   * for controlling the input text
   */
  inputValue: string
  /**
   * callback when the input text changes (use with inputValue to control the input text)
   */
  onInputChange: (value: string) => void
  isVisibleOptions?: boolean
  hasOptions?: boolean
}

export interface InputChipsControlProps {
  /**
   * InputChips is a controlled component since unlike native inputs,
   * you can't easily access the current value via dom API
   */
  values: string[]
  /**
   * InputChips is a controlled component since unlike native inputs,
   * you can't easily access the current value via dom API
   */
  onChange: (values: string[]) => void
  onClear?: () => void
}

export interface InputChipsCommonProps
  extends Omit<InputSearchBaseProps, 'value' | 'defaultValue' | 'onChange'>,
    MaxHeightProps {}

export interface InputChipsBaseProps
  extends InputChipsCommonProps,
    InputChipsControlProps,
    InputChipsInputControlProps {}

export const InputChipsBaseInternal = forwardRef(
  (
    {
      values,
      onChange,
      onKeyDown,
      inputValue,
      onInputChange,
      disabled,
      validationType,
      onClear,
      isVisibleOptions,
      hasOptions = false,
      summary,
      ...props
    }: InputChipsBaseProps & InputChipsInputControlProps,
    ref: Ref<HTMLInputElement>
  ) => {
    function handleDeleteChip(value: string) {
      const newValues = values.filter((v) => value !== v)
      onChange(newValues)
    }

    function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
      onKeyDown && onKeyDown(e)
      if (e.key === 'Backspace' && !e.defaultPrevented) {
        // If we hit backspace and there is no text left to delete, remove the last entry instead
        inputValue === '' && handleDeleteChip(values[values.length - 1])
      }
    }

    function handleClear() {
      onChange([])
      onInputChange('')
      onClear && onClear()
    }

    const chips = values.map((value) => {
      function onChipDelete() {
        handleDeleteChip(value)
      }
      return (
        <Chip onDelete={onChipDelete} key={value} mb={1} mt={1} ml="xxsmall">
          {value}
        </Chip>
      )
    })

    function handleInputChange(e: FormEvent<HTMLInputElement>) {
      onInputChange(e.currentTarget.value)
    }

    const renderSearchControls = values.length > 0

    return (
      <InputSearchBase
        searchIcon={false}
        searchControls={
          <AdvancedInputControls
            isVisibleOptions={isVisibleOptions}
            onClear={handleClear}
            renderSearchControls={renderSearchControls}
            validationType={validationType}
            disabled={disabled}
            summary={summary}
            hasOptions={hasOptions}
          />
        }
        ref={ref}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        validationType={validationType}
        {...props}
      >
        {chips}
      </InputSearchBase>
    )
  }
)

InputChipsBaseInternal.displayName = 'InputChipsBaseInternal'

export const InputChipsBase = styled(InputChipsBaseInternal)`
  position: relative;
  align-items: stretch;

  ${Flex} {
    width: 100%;
  }

  ${InputText} {
    width: auto;
    min-width: 25%;
    padding-right: 0;
  }
`
