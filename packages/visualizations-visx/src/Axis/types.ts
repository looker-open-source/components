/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Fields } from '@looker/visualizations-adapters'

export type XAxisProps = {
  fields: Fields
  label?: string
  labelDy: number
  showTicks?: boolean
  tickAngle: number
  tickTextAnchor: 'end' | 'start' | 'middle' | 'inherit'
  tickSpace: number
  valueFormat?: string | null
}
