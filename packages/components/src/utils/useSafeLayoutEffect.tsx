/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import type { FC } from 'react'
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
export const SafeSSRProvider: FC = ({ children }) => {
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
