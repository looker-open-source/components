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
import { Box2 } from '@looker/components'
import type { FC } from 'react'
import React from 'react'
import type { FilterItemLayoutProps } from '../../../../types/filter_item_layout_props'
import { AddRemoveButtons } from '../AddRemoveButtons'
import { OperatorLabel } from '../OperatorLabel'

/**
 * Handles the layout of an AdvancedFilter item
 */
export const ItemLayout: FC<FilterItemLayoutProps> = ({
  children,
  item,
  onAdd,
  onRemove,
  showOperator,
  showAdd,
  showRemove,
}) => {
  const handleAdd = () => onAdd(item)
  const handleRemove = () => onRemove(item.id)
  return (
    <Box2 role="group" display="flex" alignItems="center">
      {showOperator && (
        <Box2 width={44} mr="medium" textAlign="right">
          {showOperator === true && <OperatorLabel value={item.is} />}
        </Box2>
      )}
      {children}
      <AddRemoveButtons
        showAdd={showAdd}
        showRemove={showRemove}
        onAdd={handleAdd}
        onRemove={handleRemove}
      />
    </Box2>
  )
}
