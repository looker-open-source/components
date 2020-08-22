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

import difference from 'lodash/difference'
import xor from 'lodash/xor'
import React, {
  FormEvent,
  forwardRef,
  KeyboardEvent,
  MouseEvent,
  Ref,
  RefObject,
  useRef,
  useState,
} from 'react'
import styled, { css } from 'styled-components'
import { MaxHeightProps } from 'styled-system'
import { Chip } from '../../../Chip'
import { inputHeight } from '../height'
import { InputTextContent, InputText, InputTextBaseProps } from '../InputText'
import { AdvancedInputControls } from '../AdvancedInputControls'
import { useForkedRef, useWrapEvent } from '../../../utils'
import { visuallyHiddenStyle } from '../../../VisuallyHidden'

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
  extends Omit<InputTextBaseProps, 'defaultValue' | 'onChange'>,
    MaxHeightProps {
  summary?: string
  hideControls?: boolean
  /**
   * Set to false to disable the removal of the last value on backspace key
   * @default true
   */
  removeOnBackspace?: boolean
}

export interface InputChipsBaseProps
  extends InputChipsCommonProps,
    InputChipsControlProps,
    InputChipsInputControlProps {}

function isCtrlCmdPressed(event: KeyboardEvent | MouseEvent) {
  return event.ctrlKey || event.metaKey
}

function focusInput(inputRef: RefObject<HTMLInputElement>) {
  inputRef.current && inputRef.current.focus()
}

export const InputChipsBaseInternal = forwardRef(
  (
    {
      values,
      onChange,
      onKeyDown,
      onFocus,
      inputValue,
      onInputChange,
      disabled,
      validationType,
      onClear,
      isVisibleOptions,
      hasOptions = false,
      hideControls = false,
      summary,
      removeOnBackspace = true,
      ...props
    }: InputChipsBaseProps & InputChipsInputControlProps,
    forwardedRef: Ref<HTMLInputElement>
  ) => {
    const internalRef = useRef<HTMLInputElement>(null)
    const hiddenInputRef = useRef<HTMLInputElement>(null)
    const ref = useForkedRef(forwardedRef, internalRef)

    const [selectedValues, setSelectedValues] = useState<string[]>([])
    function selectAll() {
      setSelectedValues([...values])
    }
    function deselectAll() {
      setSelectedValues([])
    }

    function selectPrevious(e: KeyboardEvent<HTMLInputElement>) {
      if (selectedValues.length === 0) {
        setSelectedValues([values[values.length - 1]])
      } else {
        const curIndex = values.indexOf(selectedValues[0])
        if (curIndex > 0) {
          const newSelectedValue = values[curIndex - 1]
          if (e.shiftKey) {
            setSelectedValues([newSelectedValue, ...selectedValues])
          } else {
            setSelectedValues([newSelectedValue])
          }
        }
      }
    }

    function selectNext(e: KeyboardEvent<HTMLInputElement>) {
      if (selectedValues.length > 0) {
        const curIndex = values.indexOf(
          selectedValues[selectedValues.length - 1]
        )
        if (curIndex === values.length - 1) {
          focusInput(internalRef)
        } else {
          const newSelectedValue = values[curIndex + 1]
          if (e.shiftKey) {
            setSelectedValues([...selectedValues, newSelectedValue])
          } else {
            setSelectedValues([newSelectedValue])
          }
        }
      }
    }
    function deleteSelected() {
      const newValues = difference(values, selectedValues)
      onChange(newValues)
      focusInput(internalRef)
    }

    // Prevent the default InputText behavior of moving focus to the internal input just after mousedown
    // on Chip and clear button and instead focus after onChipDelete / onClear
    // If mousedown/click is elsewhere on Chip, don't move focus b/c user is trying to select the Chip itself
    function stopPropagation(e: MouseEvent) {
      e.stopPropagation()
    }

    function handleDeleteChip(value: string) {
      const newValues = values.filter((v) => value !== v)
      onChange(newValues)
      focusInput(internalRef)
    }

    function handleChipClick(value: string) {
      return (e: MouseEvent) => {
        // Focus hidden input for copy/paste & keyboard behaviors
        focusInput(hiddenInputRef)
        // Stop any onClick handlers (e.g. opening a SelectMulti list)
        e.stopPropagation()
        if (selectedValues.length > 0) {
          if (isCtrlCmdPressed(e)) {
            // Toggle the clicked chip
            setSelectedValues(xor(selectedValues, [value]))
            return
          } else if (e.shiftKey) {
            // Select the values between the clicked chip and selected ones, inclusive
            const newIndex = values.indexOf(value)
            const previousLow = values.indexOf(selectedValues[0])
            const previousHigh = values.indexOf(
              selectedValues[selectedValues.length - 1]
            )
            if (newIndex > previousHigh) {
              setSelectedValues(values.slice(previousLow, newIndex + 1))
            } else if (newIndex < previousLow) {
              setSelectedValues(values.slice(newIndex, previousHigh + 1))
            }
            return
          }
        }
        // A simple click, select only this chip
        setSelectedValues([value])
      }
    }

    function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
      onKeyDown && onKeyDown(e)
      if (inputValue === '') {
        if (e.key === 'Backspace' && removeOnBackspace && !e.defaultPrevented) {
          // If we hit backspace and there is no text left to delete, remove the last entry instead
          inputValue === '' && handleDeleteChip(values[values.length - 1])
        } else if (isCtrlCmdPressed(e) && e.key === 'a') {
          focusInput(hiddenInputRef)
          selectAll()
        } else if (e.key === 'ArrowLeft') {
          focusInput(hiddenInputRef)
          selectPrevious(e)
        }
      }
    }

    function handleHiddenInputKeyDown(e: KeyboardEvent<HTMLInputElement>) {
      if (isCtrlCmdPressed(e)) {
        // Select all, copy, cut
        switch (e.key) {
          case 'a':
            selectAll()
            break
          case 'x':
          case 'c':
            hiddenInputRef.current && hiddenInputRef.current.select()
            document.execCommand('copy')
            break
        }
        if (e.key === 'x') {
          deleteSelected()
        }
      } else {
        switch (e.key) {
          case 'Delete':
          case 'Backspace':
            deleteSelected()
            break
          case 'ArrowLeft':
            selectPrevious(e)
            break
          case 'ArrowRight':
            selectNext(e)
            break
        }
      }
    }

    function handleClear() {
      onChange([])
      onInputChange('')
      onClear && onClear()
      focusInput(internalRef)
    }

    const chips = values.map((value) => {
      function onChipDelete() {
        handleDeleteChip(value)
      }
      const isSelected = selectedValues.includes(value)
      return (
        <Chip
          disabled={disabled}
          onDelete={onChipDelete}
          onMouseDown={stopPropagation}
          onClick={handleChipClick(value)}
          key={value}
          className={isSelected ? 'focus' : ''}
          // Prevent the chip from receiving focus for better keyboard behavior
          tabIndex={disabled ? undefined : -1}
        >
          {value}
        </Chip>
      )
    })

    function handleInputChange(e: FormEvent<HTMLInputElement>) {
      onInputChange(e.currentTarget.value)
    }

    const wrappedOnFocus = useWrapEvent(deselectAll, onFocus)

    const renderSearchControls = values.length > 0

    return (
      <InputText
        disabled={disabled}
        after={
          !hideControls && (
            <AdvancedInputControls
              isVisibleOptions={isVisibleOptions}
              onClear={handleClear}
              renderSearchControls={renderSearchControls}
              validationType={validationType}
              disabled={disabled}
              summary={summary}
              hasOptions={hasOptions}
              onMouseDown={stopPropagation}
            />
          )
        }
        ref={ref}
        value={inputValue}
        onChange={handleInputChange}
        onFocus={wrappedOnFocus}
        onKeyDown={handleKeyDown}
        validationType={validationType}
        height="auto"
        {...props}
      >
        {chips}
        <HiddenInput
          ref={hiddenInputRef}
          onKeyDown={handleHiddenInputKeyDown}
          value={selectedValues.join(', ')}
          readOnly
          disabled={disabled}
        />
      </InputText>
    )
  }
)

const HiddenInput = styled.input`
  ${visuallyHiddenStyle}
`

InputChipsBaseInternal.displayName = 'InputChipsBaseInternal'

const inputHeightStyle = css`
  height: calc(${inputHeight} - 6px);
`

export const InputChipsBase = styled(InputChipsBaseInternal)`
  align-items: stretch;
  position: relative;

  ${Chip} {
    margin: 1px 0;
    margin-right: ${({ theme: { space } }) => space.xxsmall};
  }

  .inner {
    align-content: flex-start;
    display: flex;
    flex-wrap: wrap;
    /* Workaround for Chip's truncate styling breaking flexbox layout */
    min-width: 0;
    overflow-y: auto;
    width: 100%;
  }

  input {
    min-width: 25%;
    width: auto;
    ${inputHeightStyle}
  }

  ${InputTextContent} {
    ${inputHeightStyle}
  }
`
