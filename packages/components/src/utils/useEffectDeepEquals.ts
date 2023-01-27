/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
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
