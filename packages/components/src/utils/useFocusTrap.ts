/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { useMemo, useRef } from 'react'
import type { FocusTrapOptions } from '@looker/components-providers'
import { FocusTrapContext } from '@looker/components-providers'
import type { UseTrapStackBaseProps } from './useTrapStack'
import { useTrapStack } from './useTrapStack'

export const useFocusTrap = <E extends HTMLElement = HTMLElement>({
  clickOutsideDeactivates,
  ...props
}: UseTrapStackBaseProps<E> & { clickOutsideDeactivates?: boolean }) => {
  const returnFocusRef = useRef<Element>(null)
  const options = useMemo(
    () => ({ clickOutsideDeactivates, returnFocusRef }),
    [returnFocusRef, clickOutsideDeactivates]
  )
  return useTrapStack<E, FocusTrapOptions>({
    context: FocusTrapContext,
    // If options.returnFocusRef is set, it will override this one
    options,
    ...props,
  })
}
