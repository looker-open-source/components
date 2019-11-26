import { RefObject, SyntheticEvent, useContext, useLayoutEffect } from 'react'
import { SelectActionType, SelectState } from './state'
import { SelectContext } from './SelectContext'

const visibleStates = [
  SelectState.SUGGESTING,
  SelectState.NAVIGATING,
  SelectState.INTERACTING,
]

export const isVisible = (state: SelectState) => visibleStates.includes(state)

export function useFocusManagement(
  lastActionType?: SelectActionType,
  inputRef?: RefObject<HTMLInputElement>
) {
  // useLayoutEffect so that the cursor goes to the end of the input instead
  // of awkwardly at the beginning, unclear to my why ...
  useLayoutEffect(() => {
    if (
      lastActionType === SelectActionType.NAVIGATE ||
      lastActionType === SelectActionType.ESCAPE ||
      lastActionType === SelectActionType.SELECT_WITH_CLICK ||
      lastActionType === SelectActionType.OPEN_WITH_BUTTON
    ) {
      inputRef && inputRef.current && inputRef.current.focus()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastActionType])
}

// We want the same events when the input or the popup have focus (HOW COOL ARE
// HOOKS BTW?) This is probably the hairiest piece but it's not bad.
export function useKeyDown() {
  const {
    data: { navigationValue },
    onSelect,
    optionsRef,
    state,
    transition,
    autocompletePropRef,
    persistSelectionRef,
  } = useContext(SelectContext)

  return function handleKeyDown(event) {
    const { current: options } = optionsRef
    switch (event.key) {
      case 'ArrowDown': {
        // Don't scroll the page
        event.preventDefault()

        // If the developer didn't render any options, there's no point in
        // trying to navigate--but seriously what the heck? Give us some
        // options fam.
        if (!options || options.length === 0) {
          return
        }

        if (state === SelectState.IDLE) {
          // Opening a closed list
          transition &&
            transition(SelectActionType.NAVIGATE, {
              persistSelection:
                persistSelectionRef && persistSelectionRef.current,
            })
        } else {
          const index = options.indexOf(navigationValue)
          const atBottom = index === options.length - 1
          if (atBottom) {
            if (autocompletePropRef && autocompletePropRef.current) {
              // Go back to the value the user has typed because we are
              // autocompleting and they need to be able to get back to what
              // they had typed w/o having to backspace out.
              transition &&
                transition(SelectActionType.NAVIGATE, { value: undefined })
            } else {
              // cycle through
              const firstOption = options[0]
              transition &&
                transition(SelectActionType.NAVIGATE, { value: firstOption })
            }
          } else {
            // Go to the next item in the list
            const nextValue = options[(index + 1) % options.length]
            transition &&
              transition(SelectActionType.NAVIGATE, { value: nextValue })
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
        if (!options || options.length === 0) {
          return
        }

        if (state === SelectState.IDLE) {
          transition && transition(SelectActionType.NAVIGATE)
        } else {
          const index = options.indexOf(navigationValue)
          if (index === 0) {
            if (autocompletePropRef && autocompletePropRef.current) {
              // Go back to the value the user has typed because we are
              // autocompleting and they need to be able to get back to what
              // they had typed w/o having to backspace out.
              transition &&
                transition(SelectActionType.NAVIGATE, { value: undefined })
            } else {
              // cycle through
              const lastOption = options[options.length - 1]
              transition &&
                transition(SelectActionType.NAVIGATE, { value: lastOption })
            }
          } else if (index === -1) {
            // displaying the user's value, so go select the last one
            const value = options.length ? options[options.length - 1] : null
            transition && transition(SelectActionType.NAVIGATE, { value })
          } else {
            // normal case, select previous
            const nextValue =
              options[(index - 1 + options.length) % options.length]
            transition &&
              transition &&
              transition(SelectActionType.NAVIGATE, { value: nextValue })
          }
        }
        break
      }
      case 'Escape': {
        if (state !== SelectState.IDLE) {
          transition && transition(SelectActionType.ESCAPE)
        }
        break
      }
      case 'Enter': {
        if (state === SelectState.NAVIGATING && navigationValue !== null) {
          // don't want to submit forms
          event.preventDefault()
          onSelect && onSelect(navigationValue)
          transition && transition(SelectActionType.SELECT_WITH_KEYBOARD)
        }
        break
      }
    }
  }
}

export function useBlur() {
  const { state, transition, popoverRef, inputRef, buttonRef } = useContext(
    SelectContext
  )

  return function handleBlur(event) {
    requestAnimationFrame(() => {
      // we on want to close only if focus rests outside the combobox
      if (
        document.activeElement !== inputRef.current &&
        document.activeElement !== buttonRef.current &&
        popoverRef.current
      ) {
        if (
          popoverRef &&
          popoverRef.current &&
          popoverRef.current.contains(document.activeElement)
        ) {
          // focus landed inside the combobox, keep it open
          if (state !== SelectState.INTERACTING) {
            transition && transition(SelectActionType.INTERACT)
          }
        } else {
          // focus landed outside the combobox, close it.
          transition && transition(SelectActionType.BLUR)
        }
      }
    })
  }
}

// We don't want to track the active descendant with indexes because nothing is
// more annoying in a combobox than having it change values RIGHT AS YOU HIT
// ENTER. That only happens if you use the index as your data, rather than
// *your data as your data*. We use this to generate a unique ID based on the
// value of each item.  This function is short, sweet, and good enough™ (I also
// don't know how it works, tbqh)
// https://stackoverflow.com/questions/6122571/simple-non-secure-hash-function-for-javascript
export function makeHash(str: string) {
  let hash = 0
  if (str.length === 0) {
    return hash
  }
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash
  }
  return hash
}

export function wrapEvent<E extends SyntheticEvent>(
  ourHandler: (e: E) => void,
  theirHandler?: (e: E) => void
) {
  return (event: E) => {
    theirHandler && theirHandler(event)
    if (!event.defaultPrevented) {
      return ourHandler(event)
    }
  }
}
