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

import type {
  SDKRecord,
  Fields,
  PivotMetadata,
} from '@looker/visualizations-adapters'
import type { ColumnDef } from '@tanstack/table-core'
import { createColumnHelper } from '@tanstack/react-table'

type NestPivotedFieldsProps = {
  pivotList: Fields['pivots']
  pivotIndex: number
  nestedPivots: ColumnDef<SDKRecord> | ColumnDef<SDKRecord>[]
  pivotValues?: PivotMetadata
}

/**
 * Recursively nests a list of columns inside columnHelper.group,
 * each recursive level representing a pivoted column.
 * @param {Object} columnGroups - all the metadata required to nest columns nested columnHelper group
 * @param {Array} columnGroups.pivotList - fields.pivots sdk response
 * @param {number} columnGroups.pivotIndex - which pivot from pivotList to format
 * @param {Object} columnGroups.nestedPivots - the accumulated nesting of columnHelper.group functions
 * @param {Object} columnGroups.pivotValues - optional additional pivot header values, used with grouped measures
 * @returns Column groups for use with Tanstack Table
 */
export const nestPivotedFields = ({
  pivotList = [],
  pivotIndex,
  nestedPivots,
  pivotValues,
}: NestPivotedFieldsProps): ColumnDef<SDKRecord> => {
  const columnHelper = createColumnHelper<SDKRecord>()

  const pivot = pivotList[pivotIndex]
  if (pivot) {
    const { id, header } = pivotValues
      ? {
          id: `${pivot.name} - ${pivotValues?.data[pivot.name]}`,
          // `replace` call use to strip HTML markup that came from the sdk response
          header: pivotValues?.labels[pivot.name]?.replace(/(<([^>]+)>)/gi, ''),
        }
      : { id: pivot.name, header: pivot.label }

    return nestPivotedFields({
      pivotList,
      pivotIndex: pivotIndex + 1,
      nestedPivots: columnHelper.group({
        id,
        header,
        columns: [
          ...(Array.isArray(nestedPivots) ? nestedPivots : [nestedPivots]),
        ],
      }),
      pivotValues,
    })
  }

  // Handles the edge case where an array of measure columns is passed
  // to this function, but the pivot list is empty. Should never happen,
  // but case needs to be accounted for per type definitions.
  if (Array.isArray(nestedPivots)) {
    return columnHelper.group({
      id: `pivot-field-${pivotIndex}`,
      columns: nestedPivots,
    })
  }

  return nestedPivots
}
