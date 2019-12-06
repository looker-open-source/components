import { useCallback, useState } from 'react'

export function useCallbackRef(
  element?: HTMLElement
): [HTMLElement | null, (node: HTMLElement | null) => void] {
  const [currentElement, setCurrentElement] = useState(element || null)
  const callbackRef = useCallback(
    (node: HTMLElement | null) => setCurrentElement(node),
    []
  )
  return [currentElement, callbackRef]
}
