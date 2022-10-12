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
import type { SDKRecord } from '@looker/visualizations-adapters'
import { useVirtualizer } from '@tanstack/react-virtual'

type UseVirtualArgs = {
  data: SDKRecord[]
  scrollContainer: RefObject<HTMLDivElement>
}

/**
 * useVirtual handles the logic related to configuring our virtual scrolling
 * behavior used to improve the UX for large data sets.
 */

export const useVirtual = ({ data, scrollContainer }: UseVirtualArgs) => {
  const rowVirtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => scrollContainer.current,
    overscan: 10,
    estimateSize: () => 30,
  })

  const { getTotalSize, getVirtualItems } = rowVirtualizer

  const virtualRows = getVirtualItems()

  const paddingTop = virtualRows.length > 0 ? virtualRows[0]?.start || 0 : 0

  const paddingBottom =
    virtualRows.length > 0
      ? getTotalSize() - (virtualRows[virtualRows.length - 1]?.end || 0)
      : 0

  const OffsetTop = () =>
    paddingTop > 0 ? (
      <tr>
        <td style={{ height: `${paddingTop}px` }} />
      </tr>
    ) : null

  const OffsetBottom = () =>
    paddingBottom > 0 ? (
      <tr>
        <td style={{ height: `${paddingBottom}px` }} />
      </tr>
    ) : null

  return { virtualRows, OffsetTop, OffsetBottom }
}
