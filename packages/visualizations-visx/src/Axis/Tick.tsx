/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { isNumeric } from '@looker/visualizations-adapters'
import type { TickRendererProps } from '@visx/axis'
import { Text } from '@visx/text'
import numeral from 'numeral'
import React from 'react'
import { formatDateLabel } from '../utils'
import type { XAxisProps } from './types'

/**
 * All tick labels longer than this will be truncated
 */
export const MAX_TICK_LABEL_LENGTH = 20

export type TickProps = Pick<XAxisProps, 'fields' | 'valueFormat'> &
  TickRendererProps

/**
 * Tick component typically used in the tickComponent prop of
 * visx <Axis> components
 */
export const Tick = ({
  formattedValue,
  fields,
  valueFormat,
  ...tickProps
}: TickProps) => {
  /**
   * numeral() can unintentionally convert a tick label into
   * a number even when that label should have remained a string
   * (i.e. in the case of concatenated dimension values). Need
   * an additional NaN check to verify if the tick label is actually
   * numeric.
   */
  const isNumericTick = isNumeric(formattedValue)

  const label = formatDateLabel({
    dateString: formattedValue || '',
    fields,
  })
  const renderedLabel =
    label.length > MAX_TICK_LABEL_LENGTH
      ? `${label.slice(0, MAX_TICK_LABEL_LENGTH).trim()}\u2026`
      : label

  return (
    <Text {...tickProps}>
      {valueFormat && isNumericTick
        ? numeral(formattedValue).format(valueFormat)
        : renderedLabel}
    </Text>
  )
}
