import React from 'react'

export const useElementVisibility = (
  ref: React.RefObject<HTMLElement>
): boolean => {
  const [isVisible, setIsVisible] = React.useState(false)

  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsVisible(entry.intersectionRatio > 0)
    },
    {
      threshold: [0, 1],
    }
  )

  React.useEffect(() => {
    const refCurrent = ref.current
    if (refCurrent) {
      observer.observe(refCurrent)
    }
    return () => {
      if (refCurrent) {
        observer.unobserve(refCurrent)
      }
    }
  }, [observer, ref])

  return isVisible
}
