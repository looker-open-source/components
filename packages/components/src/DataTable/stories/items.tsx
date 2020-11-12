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

import React, { ReactNode } from 'react'
import { data } from '../../__mocks__/DataTable/data'
import { Status } from '../../Status'
import { Tooltip } from '../../Tooltip'
import { DataTableCell } from '../Column'
import { DataTableItem, DataTableAction } from '../Item'
import { IconButton } from '../../Button/IconButton'

const actions = (
  <>
    <DataTableAction onClick={() => alert(`Ordered!!`)}>Order</DataTableAction>
    <DataTableAction onClick={() => alert('Mmmm...')}>
      Make Grilled Cheese
    </DataTableAction>
    <DataTableAction onClick={() => alert('Delete')}>Delete</DataTableAction>
  </>
)

const primaryAction = (
  <IconButton icon="Trash" label="Trash It" onClick={() => alert('Trash it')} />
)

const itemBuilder = (actions?: ReactNode, primaryAction?: ReactNode) => {
  return data.map(
    ({
      id,
      name,
      color,
      inventory,
      origin,
      type,
      fat,
      calories,
      protein,
      description,
      calcium,
      status,
      disabled,
    }) => (
      <DataTableItem
        actions={actions}
        disabled={disabled}
        id={id}
        key={id}
        primaryAction={primaryAction}
      >
        <DataTableCell detail={type}>{name}</DataTableCell>
        <DataTableCell>
          <Tooltip content={status}>
            <Status
              size="xsmall"
              intent={
                status === 'Out of Stock'
                  ? 'critical'
                  : status === 'Low Stock'
                  ? 'warn'
                  : 'positive'
              }
            />
          </Tooltip>
        </DataTableCell>
        <DataTableCell>{inventory}</DataTableCell>
        <DataTableCell>{color}</DataTableCell>
        <DataTableCell>{description}</DataTableCell>
        <DataTableCell>{origin}</DataTableCell>
        <DataTableCell>{calories}</DataTableCell>
        <DataTableCell>{fat}</DataTableCell>
        <DataTableCell>{protein}</DataTableCell>
        <DataTableCell>{calcium}</DataTableCell>
      </DataTableItem>
    )
  )
}

export const items = itemBuilder(actions, primaryAction)
export const itemsAction = itemBuilder(actions)
export const itemsNoActions = itemBuilder()
export const itemsPrimaryAction = itemBuilder(primaryAction)
