/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { useEffect, useRef } from 'react'

// render a console warning if developers pass in a value without a change listener
export function useReadOnlyWarn<V, CB>(name: string, value: V, onChange: CB) {
  const unintentionalReadOnly = useRef(false)
  useEffect(() => {
    if (value && !onChange) {
      // eslint-disable-next-line no-console
      console.error(
        `Warning: Failed prop type: You provided a \`value\` prop to <${name} /> without an \`onChange\` handler. This will render a read-only field. If the field should be mutable use \`defaultValue\` instead. Otherwise, please provide an \`onChange\` callback.`
      )
      unintentionalReadOnly.current = true
    }
  }, [value, onChange, name])
  return unintentionalReadOnly.current
}
