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
import isMatch from 'lodash/isMatch'
import React, { forwardRef, Ref } from 'react'
import styled from 'styled-components'
import { useID } from '../../../utils'
import { Box } from '../../../Layout'
import { useFocusManagement } from './utils/useFocusManagement'
import {
  ComboboxCallback,
  ComboboxMultiCallback,
  ComboboxOptionObject,
} from './types'
import { reducer, useReducerMachine, ComboboxActionType } from './utils/state'
import { ComboboxContext, defaultData } from './ComboboxContext'
import { getComboboxText } from './utils/getComboboxText'
import { useComboboxRefs } from './utils/useComboboxRefs'
import { useComboboxToggle } from './utils/useComboboxToggle'
import { useScrollState } from './utils/useScrollState'

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
   * If true, the popover opens when the text box is clicked.
   * @default true
   */
  openOnClick?: boolean
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

export const ComboboxInternal = forwardRef(
  (
    {
      // opens the list when the input receives focused (but only if there are
      // items in the list)
      openOnFocus = false,
      // opens the list on mousedown/click
      openOnClick = true,

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
    const initialValue = value || defaultValue
    const initialData = initialValue
      ? { inputValue: getComboboxText(initialValue), option: initialValue }
      : {}

    const [state, data, transition] = useReducerMachine(
      reducer,
      {
        ...defaultData,
        ...initialData,
      },
      {}
    )
    const { lastActionType, option } = data

    if (value !== undefined && (!option || !isMatch(option, value))) {
      transition &&
        transition(ComboboxActionType.SELECT_SILENT, {
          option: value,
        })
    }

    const focusManagement = useFocusManagement(lastActionType)

    const id = useID(propsID)

    const isVisible = useComboboxToggle(state, option, onOpen, onClose)

    const { ref, ...commonRefs } = useComboboxRefs(forwardedRef)

    const scrollState = useScrollState()

    const context = {
      ...commonRefs,
      ...focusManagement,
      ...scrollState,
      data,
      id,
      isVisible,
      onChange,
      openOnClick,
      openOnFocus,
      state,
      transition,
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
