/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { ScrollLockContext } from '@looker/components-providers'
import type { UseTrapStackProps } from './useTrapStack'
import { useTrapStack } from './useTrapStack'

export const useScrollLock = <T extends HTMLElement = HTMLElement>(
  props: Omit<UseTrapStackProps<T>, 'context'> = {}
) => useTrapStack({ context: ScrollLockContext, ...props })
