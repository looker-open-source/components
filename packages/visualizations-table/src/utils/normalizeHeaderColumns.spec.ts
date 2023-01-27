/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { normalizeHeaderColumns } from './normalizeHeaderColumns'
import type { SDKRecord } from '@looker/visualizations-adapters'
import type { HeaderGroup, Table, Header } from '@tanstack/react-table'

const mockHeader = { colSpan: 1 } as Header<SDKRecord, unknown>
const mockHeaderColspan2 = { colSpan: 2 } as Header<SDKRecord, unknown>

const mockHeaderGroups: HeaderGroup<SDKRecord>[] = [
  { id: '0', depth: 0, headers: [mockHeaderColspan2, mockHeader] },
  {
    id: '1',
    depth: 1,
    headers: [mockHeader, mockHeader, mockHeader],
  },
]

const mockTable: Partial<Table<SDKRecord>> = {
  getHeaderGroups: () => mockHeaderGroups,
}

it('ensures that every header row has the same number of entries when headers span multiple columns', () => {
  const normalizedHeaderGroups = normalizeHeaderColumns(
    mockTable as Table<SDKRecord>
  )

  expect(normalizedHeaderGroups[0].headers).toEqual([
    mockHeaderColspan2,
    null, //  inserted null entry ensures each header group has the same number of items
    mockHeader,
  ])

  expect(normalizedHeaderGroups[1].headers).toEqual(mockHeaderGroups[1].headers)
})
