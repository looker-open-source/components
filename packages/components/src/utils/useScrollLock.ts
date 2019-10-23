import { RefObject, useEffect } from 'react'

export function useScrollLock(
  disabled?: boolean,
  allowScrollWithin?: RefObject<HTMLElement | null>
) {
  useEffect(() => {
    let scrollTop = window.scrollY
    let scrollTarget: EventTarget | HTMLElement | null = document

    function stopScroll(e: Event) {
      if (e.target !== null && e.target !== scrollTarget) {
        scrollTarget = e.target
        scrollTop =
          scrollTarget instanceof Element
            ? scrollTarget.scrollTop
            : window.scrollY
      }

      if (
        scrollTarget instanceof Element &&
        !(
          allowScrollWithin &&
          allowScrollWithin.current &&
          allowScrollWithin.current.contains(scrollTarget)
        )
      ) {
        scrollTarget.scrollTop = scrollTop
      } else if (scrollTarget === document) {
        window.scrollTo({ top: scrollTop })
      }
    }

    if (disabled) {
      window.removeEventListener('scroll', stopScroll, true)
    } else {
      window.addEventListener('scroll', stopScroll, true)
    }

    return () => {
      window.removeEventListener('scroll', stopScroll, true)
    }
  }, [disabled, allowScrollWithin])
}
