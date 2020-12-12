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
import zip from 'lodash/zip'
import {
  NAMED_BREAKPOINTS,
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@looker/components'
import { ThemeContext } from 'styled-components'
import { Locales } from '@looker/components/src/utils/i18n'

export const NamedBreakpointTable = () => {
  const theme = useContext(ThemeContext)

  return (
    <Table mb="large">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Size</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {zip(NAMED_BREAKPOINTS, theme.breakpoints).map((pair) => (
          <TableRow key={pair[0]}>
            <TableDataCell>{pair[0]}</TableDataCell>
            <TableDataCell>{pair[1]}</TableDataCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
