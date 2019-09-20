import React from 'react'

const getTabStops = (ref: HTMLElement): HTMLElement[] =>
  Array.from(ref.querySelectorAll('a,button,[tabindex="0"]'))

export const moveFocus = (
  direction: number,
  initial: number,
  containerRef?: React.MutableRefObject<HTMLElement | null>
) => {
  if (!containerRef || !containerRef.current) return
  const tabStops = getTabStops(containerRef.current)

  if (
    document.activeElement &&
    tabStops.includes(document.activeElement as HTMLElement)
  ) {
    const next =
      tabStops.findIndex(f => f === document.activeElement) + direction

    if (next === tabStops.length) return
    if (!tabStops[next]) return
    tabStops[next].focus()
  } else {
    tabStops.slice(initial)[0].focus()
  }
  return false
}
