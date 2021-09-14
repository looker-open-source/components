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
  Box2,
  Code,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  List,
  ListItem,
  listItemDimensions,
} from '@looker/components'
import type { DensityRamp } from '@looker/design-tokens'
import { DocTable } from '../helpers'

const densities: DensityRamp[] = [1, 0, -1, -2, -3]

const DensityRow = ({ density }: { density: DensityRamp }) => (
  <TableRow>
    <TableDataCell>
      <Box2 bg="ui2" p="u3" mr="large" borderRadius="medium">
        <Box2 bg="background">
          <List density={density}>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
          </List>
        </Box2>
      </Box2>
    </TableDataCell>
    <TableDataCell>{density}</TableDataCell>
    <TableDataCell>
      <Code fontSize="xsmall">{`<List density="${density}" />`}</Code>
    </TableDataCell>
    <TableDataCell>{listItemDimensions(density).height}px</TableDataCell>
  </TableRow>
)

export const DensityTable = () => (
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
      {densities.map((d) => (
        <DensityRow key={d} density={d} />
      ))}
    </TableBody>
  </DocTable>
)
