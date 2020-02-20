/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

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

// Much of the following is pulled from https://github.com/reach/reach-ui
// because their work is fantastic (but is not in TypeScript)

import isEqual from 'lodash/isEqual'
import React, {
  FocusEvent,
  forwardRef,
  MouseEvent as ReactMouseEvent,
  useLayoutEffect,
  useRef,
  useContext,
  Ref,
  useCallback,
} from 'react'
import styled from 'styled-components'
import { useMouseDownClick, useForkedRef, useWrapEvent } from '../../../utils'
import { InputChips, InputChipsProps } from '../InputChips'
import { InputText } from '../InputText'
import { makeHash } from './utils/makeHash'
import { useBlur } from './utils/useBlur'
import { useKeyDown } from './utils/useKeyDown'
import { ComboboxMultiContext } from './ComboboxContext'
import {
  indicatorPadding,
  indicatorSize,
  selectIndicatorBG,
} from './ComboboxInput'
import { getComboboxText } from './utils/getComboboxText'
import { ComboboxActionType, ComboboxState } from './utils/state'

export interface ComboboxMultiInputProps
  extends Omit<InputChipsProps, 'autoComplete' | 'values' | 'onChange'> {
  /**
   * If true, when the user clicks inside the text box the current value will
   * be selected. Use this if the user is likely to delete all the text anyway
   * (like the URL bar in browsers).
   *
   * However, if the user is likely to want to tweak the value, leave this
   * false, like a google search--the user is likely wanting to edit their
   * search, not replace it completely.
   */
  selectOnClick?: boolean
  /**
   * Determines if the value in the input changes or not as the user navigates
   * with the keyboard. If true, the value changes, if false the value doesn't
   * change.
   *
   * Set this to false when you don't really need the value from the input but
   * want to populate some other state (like the recipient selector in an email client).
   * But if your input is more like a normal `<input type="text"/>`, then leave
   * the `true` default.
   */
  autoComplete?: boolean
  values?: string[]
  onChange?: (values: string[]) => void
}

export const ComboboxMultiInputInternal = forwardRef(
  function ComboboxMultiInput(
    {
      // highlights all the text in the box on click when true
      selectOnClick = false,

      // updates the value in the input when navigating w/ the keyboard
      autoComplete = true,
      readOnly = false,

      // wrapped events
      onClick,
      onMouseDown,
      onClear,
      onChange,
      onInputChange,
      onKeyDown,
      onBlur,
      onFocus,

      // might be controlled
      values: controlledValues,
      inputValue: controlledInputValue,
      ...props
    }: ComboboxMultiInputProps,
    forwardedRef: Ref<HTMLInputElement>
  ) {
    const {
      data: {
        navigationOption,
        options,
        lastActionType,
        inputValue: contextInputValue,
        inputValues: contextInputValues,
      },
      onChange: contextOnChange,
      inputCallbackRef,
      inputElement,
      state,
      transition,
      listboxId,
      autoCompletePropRef,
      persistSelectionRef,
      readOnlyPropRef,
      openOnFocus,
    } = useContext(ComboboxMultiContext)

    const ref = useForkedRef<HTMLInputElement>(inputCallbackRef, forwardedRef)

    // Because we close the List on blur, we need to track if the blur is
    // caused by clicking inside the list, and if so, don't close the List.
    const selectOnClickRef = useRef(false)

    const handleKeyDown = useKeyDown()

    const handleBlur = useBlur()

    const isControlled = controlledValues !== undefined

    // Need to determine whether the updated value come from change event on the input
    // or from a new value prop (controlled)
    const isInputting = useRef(false)

    useLayoutEffect(() => {
      if (autoCompletePropRef) autoCompletePropRef.current = autoComplete
      if (readOnlyPropRef) readOnlyPropRef.current = readOnly
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [autoComplete, readOnly])

    function handleClear() {
      contextOnChange && contextOnChange([])
      transition && transition(ComboboxActionType.CLEAR)
    }

    const handleInputValueChange = useCallback(
      (value: string) => {
        transition &&
          transition(ComboboxActionType.CHANGE, { inputValue: value })
      },
      [transition]
    )

    const handleValuesChange = useCallback(
      (values: string[]) => {
        transition &&
          transition(ComboboxActionType.ENTER_VALUES, { inputValues: values })
      },
      [transition]
    )

    // If they are controlling the value we still need to do our transitions, so
    // we have this derived state to emulate onChange of the input as we receive
    // new `value`s ...[*]
    if (
      controlledValues !== undefined &&
      contextInputValues &&
      !isEqual(controlledValues, contextInputValues)
    ) {
      if (isInputting.current) {
        handleValuesChange(controlledValues)
      } else {
        // this is most likely the initial value so we want to
        // update the value without transitioning to suggesting
        transition &&
          transition(ComboboxActionType.CHANGE_SILENT, {
            inputValues: controlledValues,
          })
      }
    }
    if (
      controlledInputValue !== undefined &&
      contextInputValue &&
      controlledInputValue !== contextInputValue
    ) {
      if (isInputting.current) {
        handleInputValueChange(controlledInputValue)
      } else {
        // this is most likely the initial value so we want to
        // update the value without transitioning to suggesting
        transition &&
          transition(ComboboxActionType.CHANGE_SILENT, {
            inputValue: controlledInputValue,
          })
      }
    }

    // [*]... and when controlled, we don't trigger handleValueChange as the user
    // types, instead the developer controls it with the normal input onChange
    // prop
    const handleInputChange = useCallback(
      (value: string) => {
        isInputting.current = true
        if (!isControlled) {
          handleInputValueChange(value)
        }
        requestAnimationFrame(() => {
          isInputting.current = false
        })
      },
      [handleInputValueChange, isControlled]
    )

    const handleChange = useCallback(
      (values: string[]) => {
        isInputting.current = true
        if (!isControlled) {
          handleValuesChange(values)
        }
        requestAnimationFrame(() => {
          isInputting.current = false
        })
      },
      [handleValuesChange, isControlled]
    )

    function handleFocus(e: FocusEvent<HTMLInputElement>) {
      if (readOnly) {
        e.currentTarget.selectionEnd = e.currentTarget.selectionStart
      } else if (selectOnClick) {
        selectOnClickRef.current = true
      }

      // If we select an option with click, useFocusManagement will focus the
      // input, in those cases we don't want to cause the menu to open back up,
      // so we guard behind these states
      if (
        openOnFocus &&
        lastActionType !== ComboboxActionType.SELECT_WITH_CLICK &&
        lastActionType !== ComboboxActionType.NAVIGATE
      ) {
        transition &&
          transition(ComboboxActionType.FOCUS, {
            persistSelection:
              persistSelectionRef && persistSelectionRef.current,
          })
      }
    }

    const selectText = useCallback(() => {
      if (selectOnClickRef.current) {
        selectOnClickRef.current = false
        inputElement && inputElement.select()
      }
    }, [inputElement])

    const handleMouseDownClick = useCallback(
      (e: ReactMouseEvent<HTMLElement>) => {
        if (state === ComboboxState.IDLE) {
          // Opening a closed list
          transition &&
            transition(ComboboxActionType.FOCUS, {
              persistSelection:
                persistSelectionRef && persistSelectionRef.current,
            })
        } else {
          // Closing an opened list
          transition && transition(ComboboxActionType.ESCAPE)
        }
        if (e.type === 'click') {
          selectText()
        }
      },
      [persistSelectionRef, state, selectText, transition]
    )

    const handleMouseUp = useCallback(
      (e: MouseEvent) => {
        if (e.target === inputElement) {
          selectText()
        }
      },
      [inputElement, selectText]
    )

    const {
      onMouseDown: handleMouseDown,
      onClick: handleClick,
    } = useMouseDownClick(handleMouseDownClick, handleMouseUp)

    const inputValues =
      contextInputValues !== undefined
        ? contextInputValues
        : options.map(option => getComboboxText(option))

    let inputValue = contextInputValue

    if (
      autoComplete &&
      (state === ComboboxState.NAVIGATING ||
        state === ComboboxState.INTERACTING) &&
      navigationOption
    ) {
      // When idle, we don't have a navigationOption on ArrowUp/Down
      inputValue = getComboboxText(navigationOption)
    }

    const wrappedOnClear = useWrapEvent(handleClear, onClear)
    const wrappedOnClick = useWrapEvent(handleClick, onClick)
    const wrappedOnMouseDown = useWrapEvent(handleMouseDown, onMouseDown)
    const wrappedOnBlur = useWrapEvent(handleBlur, onBlur)
    const wrappedOnFocus = useWrapEvent(handleFocus, onFocus)
    const wrappedOnChange = useCallback(
      (values: string[]) => {
        handleChange(values)
        onChange && onChange(values)
      },
      [handleChange, onChange]
    )
    const wrappedOnInputChange = useCallback(
      (value: string) => {
        handleInputChange(value)
        onInputChange && onInputChange(value)
      },
      [handleInputChange, onInputChange]
    )
    const wrappedOnKeyDown = useWrapEvent(handleKeyDown, onKeyDown)

    return (
      <InputChips
        {...props}
        ref={ref}
        values={inputValues}
        inputValue={inputValue}
        readOnly={readOnly}
        onClick={wrappedOnClick}
        onMouseDown={wrappedOnMouseDown}
        onClear={wrappedOnClear}
        onBlur={wrappedOnBlur}
        onFocus={wrappedOnFocus}
        onChange={wrappedOnChange}
        onInputChange={wrappedOnInputChange}
        onKeyDown={wrappedOnKeyDown}
        id={listboxId}
        autoComplete="off"
        aria-autocomplete="both"
        aria-activedescendant={
          navigationOption
            ? String(makeHash(navigationOption ? navigationOption.value : ''))
            : undefined
        }
      />
    )
  }
)

ComboboxMultiInputInternal.displayName = 'ComboboxMultiInputInternal'

export const ComboboxMultiInput = styled(ComboboxMultiInputInternal)`
  background-image: ${props => {
    const color = props.disabled
      ? props.theme.colors.palette.charcoal300
      : props.theme.colors.palette.charcoal500
    return selectIndicatorBG(color)
  }};
  background-repeat: no-repeat, repeat;
  background-position: right ${indicatorPadding} center, 0 0;
  background-size: ${indicatorSize}, 100%;
  padding-right: calc(2 * ${indicatorPadding} + ${indicatorSize});

  ${InputText} {
    cursor: ${props => (props.readOnly ? 'default' : 'text')};
  }
`

ComboboxMultiInput.defaultProps = {
  width: '100%',
}
