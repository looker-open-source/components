import { RefObject, useEffect, useState } from 'react'

export const useElementVisibility = (ref: RefObject<HTMLElement>): boolean => {
  const [isVisible, setIsVisible] = useState(false)

  if (typeof IntersectionObserver !== `undefined`) {
    // const observer = new IntersectionObserver(
    //   ([entry]) => {
    //     setIsVisible(entry.intersectionRatio > 0)
    //   },
    //   {
    //     threshold: [0, 1],
    //   }
    // )
    // useEffect(() => {
    //   const refCurrent = ref.current
    //   if (refCurrent) {
    //     observer.observe(refCurrent)
    //   }
    //   return () => {
    //     if (refCurrent) {
    //       observer.unobserve(refCurrent)
    //     }
    //   }
    // }, [observer, ref])
  }

  return isVisible
}
