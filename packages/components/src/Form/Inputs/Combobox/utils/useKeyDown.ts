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
import findIndex from 'lodash/findIndex'
import { KeyboardEvent, useContext } from 'react'
import { ComboboxContext, ComboboxMultiContext } from '../ComboboxContext'
import { ComboboxMultiCallback, ComboboxCallback } from '../types'
import { ComboboxActionType, ComboboxState, ComboboxMultiData } from './state'

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
    persistSelectionRef,
    readOnlyPropRef,
  } = contextToUse
  const { navigationOption } = data

  function checkOnChange() {
    if (onChange) {
      if (context.transition) {
        ;(onChange as ComboboxCallback)(navigationOption)
      } else {
        const newOptions = [
          ...(data as ComboboxMultiData).options,
          ...(navigationOption ? [navigationOption] : []),
        ]
        ;(onChange as ComboboxMultiCallback)(newOptions)
      }
    }
  }

  return function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
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
                persistSelectionRef && persistSelectionRef.current,
            })
        } else {
          const index = navigationOption
            ? findIndex(options, navigationOption)
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

        // If the developer didn't render any options, there's no point in
        // trying to navigate--but seriously what the heck? Give us some
        // options fam.
        if (options.length === 0) {
          return
        }

        if (state === ComboboxState.IDLE) {
          transition && transition(ComboboxActionType.NAVIGATE)
        } else {
          const index = navigationOption
            ? findIndex(options, navigationOption)
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
      case 'Escape': {
        if (state !== ComboboxState.IDLE) {
          transition && transition(ComboboxActionType.ESCAPE)
        }
        break
      }
      case ' ':
      case 'Spacebar': {
        if (
          // readOnly makes this more like a native select, which opens on spacebar
          // (otherwise the user is actually typing a space)
          readOnlyPropRef &&
          readOnlyPropRef.current &&
          state === ComboboxState.NAVIGATING &&
          navigationOption !== undefined
        ) {
          checkOnChange()
          transition && transition(ComboboxActionType.SELECT_WITH_KEYBOARD)
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
          checkOnChange()
          transition && transition(ComboboxActionType.SELECT_WITH_KEYBOARD)
        }
        break
      }
    }
  }
}
