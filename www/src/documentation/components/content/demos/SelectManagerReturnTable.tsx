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

import React from 'react'
import {
  Code,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableDataCell,
} from '@looker/components'

export const SelectManagerReturnTable = () => (
  <Table>
    <TableHead>
      <TableRow>
        <TableHeaderCell>Return Property Name</TableHeaderCell>
        <TableHeaderCell>Type</TableHeaderCell>
        <TableHeaderCell>Description</TableHeaderCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableDataCell pr="large">selections</TableDataCell>
        <TableDataCell pr="large">
          <Code>string[]</Code>
        </TableDataCell>
        <TableDataCell>
          A piece of state of type string[] containing the id's of all selected
          items. Will initially contain 0 elements.
        </TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell pr="large">setSelections</TableDataCell>
        <TableDataCell pr="large">
          <Code>(selections: string[]) ={'>'} void</Code>
        </TableDataCell>
        <TableDataCell>The setter for the selections state.</TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell pr="large">onSelect</TableDataCell>
        <TableDataCell pr="large">
          <Code>(id: string) ={'>'} void</Code>
        </TableDataCell>
        <TableDataCell>
          A callback function that accepts a string id, and will add that string
          id to the selections state. Will usually be passed to an ActionList's
          onSelect prop.
        </TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell pr="large">onSelectAll</TableDataCell>
        <TableDataCell pr="large">
          <Code>() ={'>'} void</Code>
        </TableDataCell>
        <TableDataCell>
          A callback function that accepts no parameters, and will add all
          selectableItems to the selections state. Will usually be passed to an
          ActionList's onSelectAll prop.
        </TableDataCell>
      </TableRow>
    </TableBody>
  </Table>
)
