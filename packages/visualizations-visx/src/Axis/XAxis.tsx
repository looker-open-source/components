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

import React, { useContext } from 'react'
import {
  Axis,
  ThemeContext as VisxThemeContext,
  DataContext,
} from '@visx/xychart'
import type { XAxisProps } from './types'
import { Tick } from './Tick'

export const XAxis = ({
  fields,
  label,
  labelDy,
  showTicks,
  tickAngle,
  tickTextAnchor,
  tickSpace,
  valueFormat,
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
      tickComponent={tickProps =>
        showTicks ? (
          <Tick fields={fields} valueFormat={valueFormat} {...tickProps} />
        ) : null
      }
      tickLabelProps={() => ({
        angle: tickAngle,
        textAnchor: tickTextAnchor,
      })}
    />
  )
}
