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

import some from 'lodash/some'
import every from 'lodash/every'
import React, { forwardRef, Ref } from 'react'
import styled from 'styled-components'
import { useID } from '../../../utils'
import { useFocusManagement } from './utils/useFocusManagement'
import { ComboboxMultiCallback, ComboboxOptionObject } from './types'
import {
  useReducerMultiMachine,
  ComboboxActionType,
  ComboboxMultiData,
} from './utils/state'
import { ComboboxMultiContext, defaultMultiData } from './ComboboxContext'
import {
  ComboboxBaseProps,
  ComboboxCommonProps,
  ComboboxWrapper,
} from './Combobox'
import { useComboboxRefs } from './utils/useComboboxRefs'
import { useComboboxToggle } from './utils/useComboboxToggle'

function compareOptions(
  optionsA: ComboboxOptionObject[],
  optionsB: ComboboxOptionObject[],
  compare: typeof some | typeof every
) {
  return compare(optionsA, optionA =>
    optionsB.find(optionB => optionA.value === optionB.value)
  )
}

interface ComboboxMultiProps
  extends ComboboxBaseProps,
    ComboboxCommonProps<ComboboxMultiCallback> {
  /**
   * The current option (controlled)
   */
  values?: ComboboxOptionObject[]
  /**
   * The initial option (uncontrolled)
   */
  defaultValues?: ComboboxOptionObject[]
}

export const ComboboxMultiInternal = forwardRef(
  (
    {
      // opens the list when the input receives focused (but only if there are
      // items in the list)
      openOnFocus = false,

      onChange,
      values,
      defaultValues,
      onClose,
      onOpen,
      id: propsID,

      ...rest
    }: ComboboxMultiProps,
    forwardedRef: Ref<HTMLDivElement>
  ) => {
    const initialValues = values || defaultValues
    const initialData: ComboboxMultiData = {
      options: initialValues || [],
    }

    const [state, data, transition] = useReducerMultiMachine({
      ...defaultMultiData,
      ...initialData,
    })
    const { lastActionType, options } = data

    if (
      values !== undefined &&
      (options.length !== values.length ||
        !compareOptions(options, values, every))
    ) {
      transition &&
        transition(ComboboxActionType.SELECT_SILENT, {
          options: values,
        })
    }

    const focusManagement = useFocusManagement(lastActionType)

    const id = useID(propsID)

    const isVisible = useComboboxToggle(state, onOpen, onClose, options)

    const { ref, ...commonRefs } = useComboboxRefs(forwardedRef)
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
    }

    return (
      <ComboboxMultiContext.Provider value={context}>
        <ComboboxWrapper id={id} {...rest} isVisible={isVisible} ref={ref} />
      </ComboboxMultiContext.Provider>
    )
  }
)

ComboboxMultiInternal.displayName = 'ComboboxMultiInternal'

export const ComboboxMulti = styled(ComboboxMultiInternal)``

ComboboxMulti.defaultProps = {
  display: 'flex',
}
