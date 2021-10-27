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

import { Text } from '@visx/text'
import { Axis, ThemeContext as VisxThemeContext } from '@visx/xychart'
import React, { useContext } from 'react'

export type YAxisProps = {
  showTicks?: boolean
  label?: string
  labelDx: number
}

export const YAxis = ({ showTicks, label, labelDx }: YAxisProps) => {
  const visxTheme = useContext(VisxThemeContext)

  return (
    <Axis
      hideTicks={!showTicks}
      label={label}
      labelOffset={showTicks ? undefined : 0}
      labelProps={{ ...visxTheme.axisStyles.y.left.axisLabel, dx: labelDx }}
      tickComponent={({ formattedValue, ...tickProps }) =>
        showTicks ? <Text {...tickProps}>{formattedValue}</Text> : null
      }
      orientation="left"
    />
  )
}
