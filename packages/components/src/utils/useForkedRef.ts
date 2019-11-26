import { Ref, useMemo, MutableRefObject } from 'react'

export type RefToFork<E> = Ref<E> | MutableRefObject<E> | undefined

function assignRef<E extends HTMLElement>(ref: RefToFork<E>, value: E) {
  if (!ref) return
  if (typeof ref === 'function') {
    ref(value)
  } else {
    try {
      ;(ref as MutableRefObject<E>).current = value
    } catch (error) {
      throw new Error(`Cannot assign value "${value}" to ref "${ref}"`)
    }
  }
}

export function useForkedRef<E extends HTMLElement>(...refs: RefToFork<E>[]) {
  return useMemo(() => {
    if (refs.every((ref: RefToFork<E>) => !ref)) {
      return null
    }
    return (node: E) => {
      refs.forEach(ref => {
        assignRef(ref, node)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs)
}
