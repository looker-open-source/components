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

import React from 'react'
import isEqual from 'lodash/isEqual'

type UseEffectParams = Parameters<typeof React.useEffect>
type EffectCallback = UseEffectParams[0]
type DependencyList = UseEffectParams[1]

function checkDeps(deps: DependencyList) {
  if (!deps || !deps.length) {
    throw new Error(
      'useEffectDeepEquals should not be used with no dependencies. Use React.useEffect instead.'
    )
  }
  if (deps.every(isPrimitive)) {
    throw new Error(
      'useEffectDeepEquals should not be used with dependencies that are all primitive values. Use React.useEffect instead.'
    )
  }
}

function isPrimitive(val: unknown) {
  return val == null || /^[sbn]/.test(typeof val)
}

/**
 * @param value the value to be memoized (usually a dependency list)
 * @returns a memoized version of the value as long as it remains deeply equal
 */
export function useDeepCompareMemoize<T>(value: T) {
  const ref = React.useRef<T>(value)
  const signalRef = React.useRef<number>(0)

  if (!isEqual(value, ref.current)) {
    ref.current = value
    signalRef.current += 1
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return React.useMemo(() => ref.current, [signalRef.current])
}

/**
 * An alternative rewrite to useEffect for situations where you need
 * to compare complex, deeply nested objects in the dependency array.
 *
 * @param callback function to call when dependencies change
 * @param dependencies an array of objects to compare
 */

export const useEffectDeepEquals = (
  callback: EffectCallback,
  dependencies: DependencyList
): void => {
  if (process.env.NODE_ENV !== 'production') {
    checkDeps(dependencies)
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return React.useEffect(callback, useDeepCompareMemoize(dependencies))
}
