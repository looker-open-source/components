/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect as reactUseLayoutEffect,
} from 'react'

export const SafeSSRContext = createContext(false)

/**
 * Avoid the React useLayoutEffect when using renderToString
 * on the client side
 */
export const SafeSSRProvider = ({
  children,
}: React.PropsWithChildren<unknown>) => {
  return <SafeSSRContext.Provider value>{children}</SafeSSRContext.Provider>
}

/**
 * Avoids the React useLayoutEffect error by falling back to useEffect.
 * Note: A component that calls useLayoutEffect will most likely
 * not behave correctly in SSR. Instead, consider delaying rendering
 * until client-side JS loads, via useEffect.
 */
export const useSafeLayoutEffect: typeof reactUseLayoutEffect = (...args) => {
  const value = useContext(SafeSSRContext)
  // SSR is detected via undefined window, or set with SafeSSRProvider
  const isSSR = value || typeof window === 'undefined'

  const useLayoutEffect = isSSR ? useEffect : reactUseLayoutEffect
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useLayoutEffect(...args)
}
