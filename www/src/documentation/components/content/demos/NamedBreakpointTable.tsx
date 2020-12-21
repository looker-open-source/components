/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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
import toPairs from 'lodash/toPairs'
import { BreakpointRamp, convertRemToPx } from '@looker/design-tokens'
import {
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@looker/components'

export const NamedBreakpointTable = () => {
  return (
    <Table mb="large">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Width (REM)</TableHeaderCell>
          <TableHeaderCell>Width (PX)</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {toPairs(BreakpointRamp).map(([name, width], i, array) => {
          const [, prevWidth] = array[i - 1] || ['xs', '0rem']
          const isLastBreakpoint = i + 1 === array.length

          const prevWidthRem = `${parseInt(prevWidth as string, 10) + 1}rem`
          const widthPx = `${convertRemToPx(parseInt(width as string, 10))}px`
          const prevWidthPx = `${
            convertRemToPx(parseInt(prevWidth as string, 10)) + 1
          }px`

          return (
            <TableRow key={name}>
              <TableDataCell>{name}</TableDataCell>
              <TableDataCell>
                {isLastBreakpoint
                  ? `>= ${prevWidthRem}`
                  : `${prevWidthRem} \u2013 ${width}`}
              </TableDataCell>
              <TableDataCell>
                {isLastBreakpoint
                  ? `>= ${prevWidthPx}`
                  : `${prevWidthPx} \u2013 ${widthPx}`}
              </TableDataCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
