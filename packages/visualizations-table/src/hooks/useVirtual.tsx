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

import React from 'react'
import type { RefObject } from 'react'
import { useVirtualizer } from '@tanstack/react-virtual'
import styled from 'styled-components'
import { deriveVirtualizerPadding } from '../utils'

type UseVirtualArgs = {
  // Explicit `any` type: for the purposes of virtualization, we truly aren't
  // concerned with the contents of data, as long as it is a 2-dimensional array.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[][]
  scrollContainer: RefObject<HTMLDivElement>
  defaultRowHeight?: number
  defaultColumnWidth?: number
}

type StyledProps = { as?: 'td' | 'th' }

/**
 * useVirtual handles the logic related to configuring our virtual scrolling
 * behavior used to improve the UX for large data sets.
 */

export const useVirtual = ({
  data,
  scrollContainer,
  defaultRowHeight = 30,
  defaultColumnWidth = 100,
}: UseVirtualArgs) => {
  const rowVirtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => scrollContainer.current,
    overscan: 10,
    estimateSize: () => defaultRowHeight,
  })

  const columnVirtualizer = useVirtualizer({
    count: data[0].length,
    getScrollElement: () => scrollContainer.current,
    overscan: 30,
    horizontal: true,
    estimateSize: () => defaultColumnWidth,
  })

  const virtualRows = rowVirtualizer.getVirtualItems()
  const virtualColumns = columnVirtualizer.getVirtualItems()

  const [paddingTop, paddingBottom] = deriveVirtualizerPadding(rowVirtualizer)

  const [paddingLeft, paddingRight] =
    deriveVirtualizerPadding(columnVirtualizer)

  const OffsetTop = ({ as = 'td' }: StyledProps) =>
    paddingTop > 0 ? (
      <tr>
        <TableCell as={as} height={paddingTop} />
      </tr>
    ) : null

  const OffsetBottom = ({ as = 'td' }: StyledProps) =>
    paddingBottom > 0 ? (
      <tr>
        <TableCell as={as} height={paddingBottom} />
      </tr>
    ) : null

  const OffsetLeft = ({ as = 'td' }: StyledProps) => (
    <TableCell as={as}>
      <div style={{ width: `${paddingLeft}px` }} />
    </TableCell>
  )

  const OffsetRight = ({ as = 'td' }: StyledProps) => (
    <TableCell as={as}>
      <div style={{ width: `${paddingRight}px` }} />
    </TableCell>
  )

  return {
    virtualRows,
    virtualColumns,
    OffsetTop,
    OffsetBottom,
    OffsetLeft,
    OffsetRight,
  }
}

const TableCell = styled.td.attrs<{ height?: number }>(({ height }) => ({
  height,
}))<{ height?: number }>``
