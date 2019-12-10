import { useCallback, useState } from 'react'

export function useCallbackRef(): [
  HTMLElement | null,
  (node: HTMLElement | null) => void
] {
  const [currentElement, setCurrentElement] = useState<HTMLElement | null>(null)
  const callbackRef = useCallback((node: HTMLElement | null) => {
    setCurrentElement(node)
  }, [])
  return [currentElement, callbackRef]
}
