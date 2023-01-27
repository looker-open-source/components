/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React, { useContext } from 'react'
import { Box, DialogContext } from '@looker/components'
import { TreeSelect } from '@looker/filter-components'
import type { TreeModel } from '@looker/filter-components'
import type { ILookmlModelExploreField } from '@looker/sdk'

export type FieldSelectorProps = {
  current?: ILookmlModelExploreField
  tree: TreeModel[]
  onChange: (field: ILookmlModelExploreField) => void
}

export const FieldSelector = ({
  tree,
  current,
  onChange,
}: FieldSelectorProps) => {
  const { closeModal } = useContext(DialogContext)
  const getFieldClickHandler = (field: {
    fieldOptions: ILookmlModelExploreField
  }) => {
    onChange(field.fieldOptions)
    // Close the popover after selecting a field
    closeModal()
  }
  return (
    <Box p="u2">
      <TreeSelect
        searchInputValue={current?.label_short || ''}
        tree={tree}
        onSelectedFieldChange={getFieldClickHandler}
        withDropdown={false}
      />
    </Box>
  )
}
