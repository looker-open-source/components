import { RefObject, useEffect, useState } from 'react'

export const useElementVisibility = (ref: RefObject<HTMLElement>): boolean => {
  const [isVisible, setIsVisible] = useState(false)

  const observer =
    typeof IntersectionObserver === 'undefined'
      ? null
      : new IntersectionObserver(
          ([entry]) => {
            setIsVisible(entry.intersectionRatio > 0)
          },
          {
            threshold: [0, 1],
          }
        )
  useEffect(() => {
    const refCurrent = ref.current
    if (refCurrent) {
      observer && observer.observe(refCurrent)
    }
    return () => {
      if (refCurrent) {
        observer && observer.unobserve(refCurrent)
      }
    }
  }, [observer, ref])

  return isVisible
}
