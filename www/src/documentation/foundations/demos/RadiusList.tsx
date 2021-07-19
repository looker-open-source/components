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

import React from 'react'
import {
  Box,
  Code,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@looker/components'
import { theme } from '@looker/design-tokens'
import styled from 'styled-components'
import { DocTable } from '../../../components'

const ExampleBox = styled(Box)`
  height: 40px;
  width: 60px;
`

export const RadiusList = () => {
  const radii = Object.entries(theme.radii)
  return (
    <DocTable>
      <TableHead>
        <TableHeaderCell>Example</TableHeaderCell>
        <TableHeaderCell>Rem Value</TableHeaderCell>
        <TableHeaderCell>Reference</TableHeaderCell>
      </TableHead>
      <TableBody>
        {radii.map((r, index) => {
          return (
            <TableRow key={r[0]}>
              <TableDataCell>
                <ExampleBox
                  bg="ui1"
                  border="solid 1px"
                  borderColor="ui3"
                  borderRadius={r[0]}
                />
              </TableDataCell>
              <TableDataCell>{r[1]}</TableDataCell>
              <TableDataCell>
                <Code fontSize="xsmall">theme.radii.{r[0]}</Code>
              </TableDataCell>
            </TableRow>
          )
        })}
      </TableBody>
    </DocTable>
  )
}
