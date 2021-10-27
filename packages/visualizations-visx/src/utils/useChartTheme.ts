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
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import type { CCartesian } from '@looker/visualizations-adapters'
import isArray from 'lodash/isArray'
import compact from 'lodash/compact'
import { buildChartTheme } from '@visx/xychart'

export const useChartTheme = (series?: CCartesian['series']) => {
  const theme = useContext(ThemeContext)

  const seriesList =
    series && isArray(series) ? series : Object.values(series || {})

  const scheme = compact(seriesList.map(s => s.visible && s.color))

  const chartTheme = buildChartTheme({
    backgroundColor: theme.colors.background,
    colors: scheme.length ? scheme : [theme.colors.key],
    gridColor: theme.colors.ui2,
    gridColorDark: theme.colors.text5,
    svgLabelBig: { fill: theme.colors.text5 },
    svgLabelSmall: { fill: theme.colors.text5 },
    tickLength: 8,
  })

  return chartTheme
}
