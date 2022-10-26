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

import difference from 'lodash/difference'
import type {
  FocusEvent,
  FormEvent,
  KeyboardEvent,
  MouseEvent,
  Ref,
  RefObject,
  SyntheticEvent,
} from 'react'
import React, { forwardRef, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import type { MaxHeightProps } from '@looker/design-tokens'
import { Chip } from '../../../Chip'
import { inputHeight } from '../height'
import type { InputTextBaseProps } from '../InputText'
import { InputTextContent, InputText } from '../InputText'
import { AdvancedInputControls } from '../AdvancedInputControls'
import { useForkedRef, useWrapEvent } from '../../../utils'
import { visuallyHiddenStyle } from '../../../VisuallyHidden'

export interface InputChipsInputControlProps {
  /**
   * for controlling the input text
   */
  inputValue: string
  /**
   * Called when the input text changes (use with inputValue to control the input text).
   * Passes the event if triggered by typing but not when triggered by value tokenization or clearing the field.
   */
  onInputChange: (value: string, event?: FormEvent<HTMLInputElement>) => void
  isVisibleOptions?: boolean
  showCaret?: boolean
}

export const joinValues = (selectedValues: string[]) => selectedValues.join(',')

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
  /**
   * When the user selects and copies chips, what should the text be
   */
  formatTextToCopy?: (values: string[]) => string
  onClear?: () => void
}

export interface InputChipsCommonProps
  extends Omit<InputTextBaseProps, 'defaultValue' | 'onChange'>,
    MaxHeightProps {
  /**
   * Format the value for display in the chip
   */
  formatChip?: (value: string) => string
  /**
   * customize the tooltip on the closing icon
   * @default Delete
   */
  chipIconLabel?: string

  /**
   * customize the tooltip on the closing icon
   */
  clearIconLabel?: string

  isClearable?: boolean
  inputReadOnly?: boolean
  /**
   * Set to false to disable the removal of the last value on backspace key
   * @default true
   */
  removeOnBackspace?: boolean
  summary?: string
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
      chipIconLabel,
      clearIconLabel,
      inputValue,
      inputReadOnly,
      onInputChange,
      formatTextToCopy = joinValues,
      disabled,
      noErrorIcon,
      validationType,
      onClear,
      isVisibleOptions,
      showCaret = false,
      isClearable = true,
      readOnly,
      summary,
      removeOnBackspace = true,
      formatChip,
      height = 'auto',
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
      if (!readOnly) {
        const newValues = difference(values, selectedValues)
        onChange(newValues)
        focusInput(internalRef)
      }
    }

    // If mousedown is on the Chip, prevent moving focus to the input
    // from the mousedown handler in InputChip
    // The user is either trying to select the Chip itself
    // or deleting the chip, which would be interrupted by moving focus
    function stopPropagation(e: SyntheticEvent) {
      e.stopPropagation()
    }

    function handleDeleteChip(value: string, e?: SyntheticEvent) {
      const newValues = values.filter(v => value !== v)
      onChange(newValues)
      focusInput(internalRef)
      // Prevent the focus moving to the hidden input (from handleChipClick)
      e && e.stopPropagation()
    }

    function handleChipClick(value: string) {
      return (e: MouseEvent | KeyboardEvent) => {
        // Focus hidden input for copy/paste & keyboard behaviors
        focusInput(hiddenInputRef)
        // Stop any onClick handlers (e.g. opening a SelectMulti list)
        e.stopPropagation()
        if (selectedValues.length > 0) {
          if (isCtrlCmdPressed(e)) {
            // Toggle the clicked chip, keeping values in order
            const newSelectedValues = values.reduce(
              (acc: string[], currentValue) => {
                const isSelected = selectedValues.includes(currentValue)
                if (
                  (isSelected && currentValue !== value) ||
                  (!isSelected && currentValue === value)
                ) {
                  return [...acc, currentValue]
                }
                return acc
              },
              []
            )
            setSelectedValues(newSelectedValues)
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
      if (inputValue === '') {
        if (e.key === 'Backspace' && removeOnBackspace && !readOnly) {
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

    function copyToClipboard() {
      hiddenInputRef.current && hiddenInputRef.current.select()
      document.execCommand('copy')
    }

    function handleHiddenInputKeyDown(e: KeyboardEvent<HTMLInputElement>) {
      if (isCtrlCmdPressed(e)) {
        // Select all, copy, cut
        switch (e.key) {
          case 'a':
            selectAll()
            break
          case 'x':
            copyToClipboard()
            deleteSelected()
            break
          case 'c':
            copyToClipboard()
            break
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

    function handleHiddenInputBlur(e: FocusEvent<HTMLInputElement>) {
      // Unless blur event is caused by clicking on a chip, deselect all chips
      const nextFocusTarget = e.relatedTarget
      if (
        nextFocusTarget &&
        (nextFocusTarget as HTMLElement).parentNode !==
          e.currentTarget.parentNode
      ) {
        deselectAll()
      }
    }

    function handleClear() {
      onChange([])
      onInputChange('')
      onClear && onClear()
      focusInput(internalRef)
    }

    const chips = values.map(value => {
      function onChipDelete(e?: SyntheticEvent) {
        handleDeleteChip(value, e)
      }
      const isSelected = selectedValues.includes(value)
      const chipLabel = formatChip ? formatChip(value) : value

      return (
        <Chip
          aria-selected={isSelected}
          disabled={disabled}
          iconLabel={chipIconLabel}
          key={value}
          onClick={handleChipClick(value)}
          onDelete={onChipDelete}
          onMouseDown={stopPropagation}
          readOnly={readOnly}
          role="option"
          // Prevent the chip from receiving focus for better keyboard behavior
          tabIndex={disabled ? undefined : -1}
        >
          {chipLabel}
        </Chip>
      )
    })

    function handleInputChange(e: FormEvent<HTMLInputElement>) {
      onInputChange(e.currentTarget.value, e)
    }

    const wrappedOnFocus = useWrapEvent(deselectAll, onFocus)
    const wrappedOnKeyDown = useWrapEvent(handleKeyDown, onKeyDown)

    return (
      <InputText
        disabled={disabled}
        after={
          <AdvancedInputControls
            disabled={disabled}
            clearIconLabel={clearIconLabel}
            isVisibleOptions={isVisibleOptions}
            onClear={handleClear}
            showCaret={showCaret}
            showClear={
              isClearable && values.length > 0 && !disabled && !readOnly
            }
            summary={summary}
            errorIcon={!noErrorIcon && validationType === 'error'}
          />
        }
        height={height}
        onChange={handleInputChange}
        onFocus={wrappedOnFocus}
        onKeyDown={wrappedOnKeyDown}
        readOnly={readOnly || inputReadOnly}
        ref={ref}
        validationType={validationType}
        value={inputValue}
        {...props}
      >
        {chips}
        <HiddenInput
          data-testid="hidden-input"
          aria-hidden="true"
          disabled={disabled}
          onBlur={handleHiddenInputBlur}
          onKeyDown={handleHiddenInputKeyDown}
          readOnly
          ref={hiddenInputRef}
          tabIndex={-1}
          value={formatTextToCopy(selectedValues)}
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
    margin-right: ${({ theme: { space } }) => space.u1};
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
