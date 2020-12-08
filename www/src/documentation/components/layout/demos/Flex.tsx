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
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableDataCell,
} from '@looker/components'
import { DocTable } from '../../../../components'

export const ItemDistribution = () => (
  <DocTable>
    <TableHead>
      <TableRow>
        <TableHeaderCell width="40%">Justify Property</TableHeaderCell>
        <TableHeaderCell>Behavior</TableHeaderCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableDataCell>
          <Code>center</Code>
        </TableDataCell>
        <TableDataCell>Pack items around the center</TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <Code>flex-start</Code>
        </TableDataCell>
        <TableDataCell>Pack items from the start</TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <Code>flex-end</Code>
        </TableDataCell>
        <TableDataCell>Pack items from the end</TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <Code>space-between</Code>
        </TableDataCell>
        <TableDataCell>
          Distribute items evenly. The first item is flush with the start, the
          last is flush with the end
        </TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <Code>space-around</Code>
        </TableDataCell>
        <TableDataCell>
          Distribute items evenly. Items have a half-size space on either end
        </TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <Code>space-evenly</Code>
        </TableDataCell>
        <TableDataCell>
          Distribute items evenly. Items have equal space around them
        </TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <Code>stretch</Code>
        </TableDataCell>
        <TableDataCell>
          Distribute items evenly. Items stretched to fit the container
        </TableDataCell>
      </TableRow>
    </TableBody>
  </DocTable>
)

export const AlignContent = () => (
  <DocTable>
    <TableHead>
      <TableRow>
        <TableHeaderCell width="40%">AlignContent Property</TableHeaderCell>
        <TableHeaderCell>Behavior</TableHeaderCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableDataCell>
          <Code>center</Code>
        </TableDataCell>
        <TableDataCell>
          Lines are packed to the center of container
        </TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <Code>flex-start</Code>
        </TableDataCell>
        <TableDataCell>
          Lines are packed to the start of the container
        </TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <Code>flex-end</Code>
        </TableDataCell>
        <TableDataCell>
          Lines are packed to the start of the container
        </TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <Code>space-between</Code>
        </TableDataCell>
        <TableDataCell>
          Lines evenly distributed. First line at start of container, last line
          at end of container
        </TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <Code>space-around</Code>
        </TableDataCell>
        <TableDataCell>
          Lines evenly distributed. Even space around each line
        </TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <Code>stretch </Code> (default)
        </TableDataCell>
        <TableDataCell>Items stretched to fit the container</TableDataCell>
      </TableRow>
    </TableBody>
  </DocTable>
)

export const AligningItems = () => (
  <DocTable>
    <TableHead>
      <TableRow>
        <TableHeaderCell width="40%">AlignItems Property</TableHeaderCell>
        <TableHeaderCell>Behavior</TableHeaderCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableDataCell>
          <Code>center</Code>
        </TableDataCell>
        <TableDataCell>Items are aligned center of container</TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <Code>flex-start</Code>
        </TableDataCell>
        <TableDataCell>
          Items are aligned to the start of the container
        </TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <Code>flex-end</Code>
        </TableDataCell>
        <TableDataCell>
          Items are aligned to the start of the container
        </TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <Code>baseline</Code>
        </TableDataCell>
        <TableDataCell>
          All items are aligned so their baselines align
        </TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <Code>stretch </Code> (default)
        </TableDataCell>
        <TableDataCell>Items stretched to fit the container</TableDataCell>
      </TableRow>
    </TableBody>
  </DocTable>
)

export const AligningContent = () => (
  <DocTable>
    <TableHead>
      <TableRow>
        <TableHeaderCell width="40%">AlignContent Property</TableHeaderCell>
        <TableHeaderCell>Behavior</TableHeaderCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableDataCell>
          <Code>center</Code>
        </TableDataCell>
        <TableDataCell>
          Lines are packed to the center of container
        </TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <Code>flex-start</Code>
        </TableDataCell>
        <TableDataCell>
          Lines are packed to the start of the container
        </TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <Code>flex-end</Code>
        </TableDataCell>
        <TableDataCell>
          Lines are packed to the start of the container
        </TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <Code>space-between</Code>
        </TableDataCell>
        <TableDataCell>
          Lines evenly distributed. First line at start of container, last line
          at end of container
        </TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <Code>space-around</Code>
        </TableDataCell>
        <TableDataCell>
          Lines evenly distributed. Even space around each line
        </TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <Code>stretch </Code> (default)
        </TableDataCell>
        <TableDataCell>Items stretched to fit the container</TableDataCell>
      </TableRow>
    </TableBody>
  </DocTable>
)

// FlexItem

export const AdjustingIndividualAlignment = () => (
  <DocTable>
    <TableHead>
      <TableRow>
        <TableHeaderCell width="40%">alignSelf Property</TableHeaderCell>
        <TableHeaderCell>Behavior</TableHeaderCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableDataCell>
          <Code>center</Code>
        </TableDataCell>
        <TableDataCell>Pack items around the center</TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <Code>flex-start</Code>
        </TableDataCell>
        <TableDataCell>Pack items from the start</TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <Code>flex-end</Code>
        </TableDataCell>
        <TableDataCell>Pack items from the end</TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <Code>baseline</Code>
        </TableDataCell>
        <TableDataCell>Item aligned to its baseline</TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <Code>stretch </Code> (default)
        </TableDataCell>
        <TableDataCell>stretch to the container</TableDataCell>
      </TableRow>
    </TableBody>
  </DocTable>
)

export const FlexItemExample = () => (
  <TableRow>
    <TableHead>
      <TableRow>
        <TableHeaderCell width="20%">flex Property</TableHeaderCell>
        <TableHeaderCell>Behavior</TableHeaderCell>
        <TableHeaderCell>Accepts</TableHeaderCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableDataCell>
          <Code>flex-grow</Code>
        </TableDataCell>
        <TableDataCell>Specifies the grow factor of a flex item</TableDataCell>
        <TableDataCell>A positive unitless number</TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <Code>flex-shrink</Code>
        </TableDataCell>
        <TableDataCell>
          Specifies the shrink factor of a flex item
        </TableDataCell>
        <TableDataCell>A positive unitless number</TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <Code>flex-basis</Code>
        </TableDataCell>
        <TableDataCell>Specifies the flex items size</TableDataCell>
        <TableDataCell>A valid width unit</TableDataCell>
      </TableRow>
    </TableBody>
  </TableRow>
)
