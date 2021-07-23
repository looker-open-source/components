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
   List,
   ListItem,
   listItemDimensions
 } from '@looker/components'
import { DensityRamp } from '@looker/design-tokens'
import styled from 'styled-components'
import { DocTable } from '../../../components'


export const DensityTable = () => {
  const densityList: DensityRamp[] = [1, 0, -1, -2, -3]
  console.log("densitiues is", listItemDimensions(-1))
  return (
    <DocTable maxWidth="1200px">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Example</TableHeaderCell>
          <TableHeaderCell>Usage</TableHeaderCell>
          <TableHeaderCell>Density</TableHeaderCell>
          <TableHeaderCell>Height</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {densityList.map((d, index) => {
          return (
            <TableRow key={index}>
              <TableDataCell>
                <Box bg="ui2" p="small" mr="large" borderRadius="medium">
                  <Box bg="background">
                    <List density={d}>
                      <ListItem>Item 1</ListItem>
                      <ListItem>Item 2</ListItem>
                      <ListItem>Item 3</ListItem>
                    </List>
                  </Box>
                </Box>
              </TableDataCell>
              <TableDataCell><Code fontSize="xsmall">{`<List density="${d}" />`}</Code></TableDataCell>
              <TableDataCell>{d}</TableDataCell>
              <TableDataCell>{listItemDimensions(d).height}px</TableDataCell>
              <TableDataCell>

              </TableDataCell>
            </TableRow>
          )
        })}
      </TableBody>
    </DocTable>
  )
}
