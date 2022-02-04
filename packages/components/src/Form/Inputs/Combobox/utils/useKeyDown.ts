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

// Much of the following is pulled from https://github.com/reach/reach-ui
// because their work is fantastic (but is not in TypeScript)
import findIndex from 'lodash/findIndex'
import throttle from 'lodash/throttle'
import xorWith from 'lodash/xorWith'
import type { KeyboardEvent } from 'react'
import { useContext } from 'react'
import { ComboboxContext, ComboboxMultiContext } from '../ComboboxContext'
import type { ComboboxMultiCallback, ComboboxCallback } from '../types'
import type { ComboboxMultiData } from './state'
import { ComboboxActionType, ComboboxState } from './state'

// We want the same events when the input or the popup have focus (HOW COOL ARE
// HOOKS BTW?) This is probably the hairiest piece but it's not bad.
export function useKeyDown() {
  const context = useContext(ComboboxContext)
  const contextMulti = useContext(ComboboxMultiContext)
  const contextToUse = context.transition ? context : contextMulti
  const {
    data,
    onChange,
    optionsRef,
    state,
    transition,
    autoCompletePropRef,
    persistSelectionPropRef,
    inputReadOnlyPropRef,
    closeOnSelectPropRef,
  } = contextToUse
  const { navigationOption } = data

  function checkOnChange() {
    if (onChange) {
      if (context.transition) {
        // not Multi
        ;(onChange as ComboboxCallback)(navigationOption)
      } else {
        const newOptions = xorWith(
          (data as ComboboxMultiData).options,
          navigationOption ? [navigationOption] : [],
          (o1, o2) => o1.value === o2.value
        )
        ;(onChange as ComboboxMultiCallback)(newOptions)
      }
    }
  }

  function selectOption() {
    checkOnChange()
    transition &&
      transition(ComboboxActionType.SELECT_WITH_KEYBOARD, {
        persistSelection:
          persistSelectionPropRef && persistSelectionPropRef.current,
      })
    if (closeOnSelectPropRef && closeOnSelectPropRef.current) {
      // Closing an opened list
      transition && transition(ComboboxActionType.ESCAPE)
    }
  }

  return throttle(function handleKeyDown(
    event: KeyboardEvent<HTMLUListElement | HTMLInputElement>
  ) {
    // Necessary b/c of throttle, to avoid https://reactjs.org/docs/events.html#event-pooling warning
    event.persist()
    const options = optionsRef ? optionsRef.current : []
    switch (event.key) {
      case 'ArrowDown': {
        // Don't scroll the page
        event.preventDefault()

        if (state === ComboboxState.IDLE) {
          // Opening a closed list
          transition &&
            transition(ComboboxActionType.NAVIGATE, {
              persistSelection:
                persistSelectionPropRef && persistSelectionPropRef.current,
            })
        } else {
          const index = navigationOption
            ? findIndex(options, ['value', navigationOption.value])
            : -1
          const atBottom = index === options.length - 1
          if (atBottom) {
            if (autoCompletePropRef && autoCompletePropRef.current) {
              // Go back to the value the user has typed because we are
              // auto-completing and they need to be able to get back to what
              // they had typed w/o having to backspace out.
              transition &&
                transition(ComboboxActionType.NAVIGATE, { option: undefined })
            } else {
              // cycle through
              const firstOption = options[0]
              transition &&
                transition(ComboboxActionType.NAVIGATE, { option: firstOption })
            }
          } else {
            // Go to the next item in the list
            const nextOption = options[(index + 1) % options.length]
            transition &&
              transition(ComboboxActionType.NAVIGATE, { option: nextOption })
          }
        }
        break
      }
      // A lot of duplicate code with ArrowDown up next, I'm already over it.
      case 'ArrowUp': {
        // Don't scroll the page
        event.preventDefault()

        if (state === ComboboxState.IDLE) {
          // Opening a closed list
          transition &&
            transition(ComboboxActionType.NAVIGATE, {
              persistSelection:
                persistSelectionPropRef && persistSelectionPropRef.current,
            })
        } else {
          const index = navigationOption
            ? findIndex(options, ['value', navigationOption.value])
            : -1
          if (index === 0) {
            if (autoCompletePropRef && autoCompletePropRef.current) {
              // Go back to the value the user has typed because we are
              // auto-completing and they need to be able to get back to what
              // they had typed w/o having to backspace out.
              transition &&
                transition(ComboboxActionType.NAVIGATE, { option: undefined })
            } else {
              // cycle through
              const lastOption = options[options.length - 1]
              transition &&
                transition(ComboboxActionType.NAVIGATE, { option: lastOption })
            }
          } else if (index === -1) {
            // displaying the user's value, so go select the last one
            const option = options[options.length - 1]
            transition && transition(ComboboxActionType.NAVIGATE, { option })
          } else {
            // normal case, select previous
            const nextOption =
              options[(index - 1 + options.length) % options.length]
            transition &&
              transition &&
              transition(ComboboxActionType.NAVIGATE, { option: nextOption })
          }
        }
        break
      }
      case ' ':
      case 'Spacebar': {
        if (
          // inputReadOnly makes this more like a native select, which opens on spacebar
          // (otherwise the user is actually typing a space)
          inputReadOnlyPropRef &&
          inputReadOnlyPropRef.current &&
          state === ComboboxState.NAVIGATING &&
          navigationOption !== undefined
        ) {
          selectOption()
        }
        break
      }
      case 'Enter': {
        if (
          state === ComboboxState.NAVIGATING &&
          navigationOption !== undefined
        ) {
          // don't want to submit forms
          event.preventDefault()
          selectOption()
        }
        break
      }
    }
  },
  50)
}
