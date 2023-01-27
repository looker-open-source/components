/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ExtendedStatefulColor } from '@looker/design-tokens'

export const inputRippleColor = (
  checked: boolean,
  error: boolean
): ExtendedStatefulColor => {
  if (error) {
    return 'critical'
  } else if (checked) {
    return 'key'
  } else {
    return 'neutral'
  }
}
