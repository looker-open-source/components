/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

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
