import { useCallback, useState, useEffect } from 'react'

export function useCallbackRef(
  element?: HTMLElement | null
): [HTMLElement | null, (node: HTMLElement | null) => void] {
  const [currentElement, setCurrentElement] = useState(element || null)
  const callbackRef = useCallback((node: HTMLElement | null) => {
    setCurrentElement(node)
  }, [])
  useEffect(() => {
    element !== undefined && setCurrentElement(element)
  }, [element])
  return [currentElement, callbackRef]
}
