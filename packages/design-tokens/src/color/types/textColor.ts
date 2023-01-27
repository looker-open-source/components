/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { system } from 'styled-system'

export interface TextColorProps {
  color?: string
}

export const textColor = system({
  color: {
    property: 'color',
    scale: 'colors',
  },
})
