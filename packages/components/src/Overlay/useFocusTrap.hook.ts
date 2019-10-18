import createFocusTrap, { FocusTrap } from 'focus-trap'
import { useRef, useCallback } from 'react'

export interface UseFocusOptions {
  escapeDeactivates?: boolean
  clickOutsideDeactivates?: boolean
}

export function useFocusTrap(
  escapeDeactivates = false,
  clickOutsideDeactivates = true
) {
  const trap = useRef<FocusTrap>()

  return useCallback(
    node => {
      if (!node) {
        trap.current && trap.current.deactivate()
      } else {
        const autoFocusElement = node.querySelector(
          '[data-autofocus="true"]'
        ) as HTMLElement
        trap.current = createFocusTrap(node, {
          clickOutsideDeactivates,
          escapeDeactivates,
          fallbackFocus: node,
          ...(autoFocusElement ? { initialFocus: autoFocusElement } : {}),
        })

        trap.current.activate()
      }
    },
    [escapeDeactivates, clickOutsideDeactivates]
  )
}
