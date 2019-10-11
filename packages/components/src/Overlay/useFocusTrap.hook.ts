import createFocusTrap, { FocusTrap } from 'focus-trap'
import { MutableRefObject, useEffect, useRef } from 'react'

export interface UseFocusOptions {
  escapeDeactivates?: boolean
  clickOutsideDeactivates?: boolean
}

export function useFocusTrap(
  escapeDeactivates = false,
  clickOutsideDeactivates = true
): MutableRefObject<HTMLDivElement | null> {
  const trap = useRef<FocusTrap>()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current === null) {
      trap.current && trap.current.deactivate()
    } else {
      const autoFocusElement = ref.current.querySelector(
        '[data-autofocus="true"]'
      ) as HTMLElement
      trap.current = createFocusTrap(ref.current, {
        clickOutsideDeactivates,
        escapeDeactivates,
        fallbackFocus: ref.current,
        ...(autoFocusElement ? { initialFocus: autoFocusElement } : {}),
      })

      trap.current.activate()
    }
    return () => {
      trap.current && trap.current.deactivate()
    }
  }, [escapeDeactivates, clickOutsideDeactivates])
  return ref
}
