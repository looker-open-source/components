/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

type ReferenceValues = 'mean' | 'median' | 'max' | 'min'

export type ReferenceLine = {
  reference_type: 'line' | 'range' | 'margins'
  line_value: ReferenceValues
  range_start?: ReferenceValues
  range_end?: ReferenceValues
  margin_top?: 'deviation' | 'variance'
  margin_value?: ReferenceValues
  margin_bottom?: 'deviation' | 'variance'
  label_position: 'left' | 'right' | 'center'
  color: string
}
