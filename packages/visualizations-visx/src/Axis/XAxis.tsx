/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

import React, { useContext } from 'react'
import type { Fields } from '@looker/visualizations-adapters'
import { Text } from '@visx/text'
import {
  Axis,
  ThemeContext as VisxThemeContext,
  DataContext,
} from '@visx/xychart'
import { formatDateLabel } from '../utils/formatDateLabel'

export type XAxisProps = {
  fields: Fields
  label?: string
  labelDy: number
  showTicks?: boolean
  tickAngle: number
  tickTextAnchor: 'end' | 'start' | 'middle' | 'inherit'
  tickSpace: number
}

export const XAxis = ({
  fields,
  label,
  labelDy,
  showTicks,
  tickAngle,
  tickTextAnchor,
  tickSpace,
}: XAxisProps) => {
  const visxTheme = useContext(VisxThemeContext)
  const { width = 0 } = useContext(DataContext)

  const numTicks = Math.floor(width / tickSpace)

  return (
    <Axis
      hideTicks={!showTicks}
      label={label}
      labelOffset={showTicks ? undefined : 0}
      labelProps={{
        ...visxTheme.axisStyles.x.bottom.axisLabel,
        dy: labelDy,
      }}
      orientation="bottom"
      numTicks={numTicks}
      tickComponent={({ formattedValue, ...tickProps }) =>
        showTicks ? (
          <Text {...tickProps}>
            {formatDateLabel({
              dateString: formattedValue || '',
              fields,
            })}
          </Text>
        ) : null
      }
      tickLabelProps={() => ({
        angle: tickAngle,
        textAnchor: tickTextAnchor,
      })}
    />
  )
}
