/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { ReplaceText } from '../ReplaceText'
import type { ReplaceTextProps } from '../ReplaceText'

export default function Basic({ match = 'che', ...props }: ReplaceTextProps) {
  return (
    <ReplaceText match={match} {...props}>
      Cheddar cheese
    </ReplaceText>
  )
}
