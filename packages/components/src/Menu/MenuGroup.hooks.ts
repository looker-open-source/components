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
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [observer, ref])

  return isVisible
}
