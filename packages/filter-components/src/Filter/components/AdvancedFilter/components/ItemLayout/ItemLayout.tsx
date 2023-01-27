/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { Box2 } from '@looker/components'
import React from 'react'
import type { ReactNode } from 'react'
import type { FilterItemLayoutProps } from '../../../../types/filter_item_layout_props'
import { AddRemoveButtons } from '../AddRemoveButtons'
import { OperatorLabel } from '../OperatorLabel'

type ItemLayoutProps = FilterItemLayoutProps & {
  children?: ReactNode
}

/**
 * Handles the layout of an AdvancedFilter item
 */
export const ItemLayout = ({
  children,
  item,
  onAdd,
  onRemove,
  showOperator,
  showAdd,
  showRemove,
}: ItemLayoutProps) => {
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
