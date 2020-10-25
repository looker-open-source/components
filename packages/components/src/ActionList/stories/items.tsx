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
import { Link } from '../../Link'
import { Status } from '../../Status'
import {
  ActionListItem,
  ActionListItemAction,
  ActionListItemColumn,
} from '../Item'
import { data } from './data'

const Actions = () => (
  <>
    <ActionListItemAction onClick={() => alert(`Ordered!!`)}>
      Order
    </ActionListItemAction>
    <ActionListItemAction onClick={() => alert('Mmmm...')}>
      Make Grilled Cheese
    </ActionListItemAction>
    <ActionListItemAction onClick={() => alert('Delete')}>
      Delete
    </ActionListItemAction>
  </>
)

export const items = data.map(
  ({
    error,
    name,
    color,
    inventory,
    origin,
    type,
    fat,
    description,
    calcium,
    status,
    disabled,
  }) => (
    <ActionListItem
      id={name}
      disabled={disabled}
      key={name}
      actions={<Actions />}
    >
      <ActionListItemColumn detail={type}>{name}</ActionListItemColumn>
      <ActionListItemColumn>{inventory}</ActionListItemColumn>
      <ActionListItemColumn
        detail={
          error ? (
            <Link
              onClick={(event: React.MouseEvent<HTMLAnchorElement>) =>
                event.stopPropagation()
              }
              href={error.link}
            >
              {error.message}
            </Link>
          ) : null
        }
        indicator={
          <Status
            intent={
              status === 'Out of Stock'
                ? 'critical'
                : status === 'Low Stock'
                ? 'warn'
                : 'positive'
            }
          />
        }
      >
        {status}
      </ActionListItemColumn>
      <ActionListItemColumn>{color}</ActionListItemColumn>
      <ActionListItemColumn>{description}</ActionListItemColumn>
      <ActionListItemColumn>{origin}</ActionListItemColumn>
      <ActionListItemColumn>{fat}</ActionListItemColumn>
      <ActionListItemColumn>{calcium}</ActionListItemColumn>
    </ActionListItem>
  )
)
