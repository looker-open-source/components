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

// Much of the following is pulled from https://github.com/reach/reach-ui
// because their work is fantastic (but is not in TypeScript)

import {
  CompatibleHTMLProps,
  FlexboxProps,
  LayoutProps,
  TypographyProps,
  SpaceProps,
} from '@looker/design-tokens'
import React, { forwardRef, useRef, Ref, useEffect } from 'react'
import styled from 'styled-components'
import { useID, useCallbackRef } from '../../../utils'
import { Box } from '../../../Layout/Box'
import { useFocusManagement } from './utils/useFocusManagement'
import {
  ComboboxCallback,
  ComboboxMultiCallback,
  ComboboxOptionObject,
  MaybeComboboxOptionObject,
  ComboboxOptionType,
} from './types'
import {
  useReducerMachine,
  ComboboxActionType,
  ComboboxState,
} from './utils/state'
import { ComboboxContext, defaultData } from './ComboboxContext'
import { getComboboxText } from './utils/getComboboxText'

const visibleStates = [
  ComboboxState.SUGGESTING,
  ComboboxState.NAVIGATING,
  ComboboxState.INTERACTING,
]

export const getIsVisible = (state: ComboboxState) =>
  visibleStates.includes(state)

export interface ComboboxBaseProps
  extends FlexboxProps,
    Omit<LayoutProps, 'size'>,
    SpaceProps,
    TypographyProps,
    Omit<
      CompatibleHTMLProps<HTMLDivElement>,
      'readOnly' | 'onChange' | 'value' | 'defaultValue'
    > {}

export interface ComboboxCommonProps<
  TCallback extends ComboboxCallback | ComboboxMultiCallback = ComboboxCallback
> {
  /**
   * If true, the popover opens when focus is on the text box.
   */
  openOnFocus?: boolean
  /**
   * Called when an option is selected (not when user types – use ComboboxInput.onChange for that)
   */
  onChange?: TCallback
  /**
   * Called when the suggestion list closes, whether via blur, escape or selection
   */
  onClose?: TCallback
  /**
   * Called when the suggestion list opens, whether via typing, click, or focus
   */
  onOpen?: TCallback
}

export interface ComboboxProps extends ComboboxBaseProps, ComboboxCommonProps {
  /**
   * The current option (controlled)
   */
  value?: ComboboxOptionObject
  /**
   * The initial option (uncontrolled)
   */
  defaultValue?: ComboboxOptionObject
}

export function useComboboxRefs() {
  // We store the values of all the ComboboxOptions on this ref. This makes it
  // possible to perform the keyboard navigation from the input on the list. We
  // manipulate this array through context so that we don't have to enforce a
  // parent/child relationship between ComboboxList and ComboboxOption with
  // cloneElement or fall back to DOM traversal. It's a new trick for me and
  // I'm pretty excited about it.
  const optionsRef = useRef<ComboboxOptionObject[]>([])

  const popoverRef = useRef<HTMLDivElement>(null)

  // When <ComboboxInput autoComplete={false} /> we don't want cycle back to
  // the user's value while navigating (because it's always the user's value),
  // but we need to know this in useKeyDown which is far away from the prop
  // here, so we do something sneaky and write it to this ref on context so we
  // can use it anywhere else 😛. Another new trick for me and I'm excited
  // about this one too!
  const autoCompletePropRef = useRef(true)
  const readOnlyPropRef = useRef(false)

  const persistSelectionRef = useRef(false)
  return {
    autoCompletePropRef,
    optionsRef,
    persistSelectionRef,
    popoverRef,
    readOnlyPropRef,
  }
}

// Detect when to call onOpen and onClose
export function useOpenCloseCallbacks<
  TOption extends ComboboxOptionType = MaybeComboboxOptionObject
>(
  isVisible: boolean,
  onOpen?: ComboboxCallback<TOption>,
  onClose?: ComboboxCallback<TOption>,
  option?: TOption
) {
  const isVisibleRef = useRef(isVisible)

  useEffect(() => {
    if (isVisible && !isVisibleRef.current) {
      onOpen && onOpen(option)
      isVisibleRef.current = true
    } else if (!isVisible && isVisibleRef.current) {
      onClose && onClose(option)
      isVisibleRef.current = false
    }
  }, [isVisible, isVisibleRef, onOpen, onClose, option])
}

export const ComboboxInternal = forwardRef(
  (
    {
      // opens the list when the input receives focused (but only if there are
      // items in the list)
      openOnFocus = false,

      onChange,
      value,
      defaultValue,
      onClose,
      onOpen,
      id: propsID,

      ...rest
    }: ComboboxProps,
    forwardedRef: Ref<HTMLDivElement>
  ) => {
    // Need this to get the menu width
    const [wrapperElement, ref] = useCallbackRef<HTMLDivElement>(forwardedRef)

    const initialValue = value || defaultValue
    const initialData = initialValue
      ? { inputValue: getComboboxText(initialValue), option: initialValue }
      : {}

    const [state, data, transition] = useReducerMachine({
      ...defaultData,
      ...initialData,
    })
    const { lastActionType, option } = data

    if (value !== undefined && (!option || option.value !== value.value)) {
      transition &&
        transition(ComboboxActionType.SELECT_SILENT, {
          option: value,
        })
    }

    const focusManagement = useFocusManagement(lastActionType)

    const id = useID(propsID)

    const isVisible = getIsVisible(state)
    useOpenCloseCallbacks(isVisible, onOpen, onClose, option)

    const commonRefs = useComboboxRefs()
    const context = {
      ...commonRefs,
      ...focusManagement,
      data,
      id,
      isVisible,
      onChange,
      openOnFocus,
      state,
      transition,
      wrapperElement,
    }

    return (
      <ComboboxContext.Provider value={context}>
        <ComboboxWrapper id={id} {...rest} isVisible={isVisible} ref={ref} />
      </ComboboxContext.Provider>
    )
  }
)

ComboboxInternal.displayName = 'ComboboxInternal'

export const ComboboxWrapper = forwardRef(
  (
    { isVisible, ...rest }: ComboboxBaseProps & { isVisible: boolean },
    ref: Ref<HTMLDivElement>
  ) => {
    return (
      <Box
        {...rest}
        ref={ref}
        role="combobox"
        aria-haspopup="listbox"
        aria-owns={`listbox-${rest.id}`}
        aria-expanded={isVisible}
      />
    )
  }
)

ComboboxWrapper.displayName = 'ComboboxWrapper'

export const Combobox = styled(ComboboxInternal)``

Combobox.defaultProps = {
  display: 'flex',
}
