/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { useState } from 'react'

export const useSelectManager = (
  possibilities: string[],
  defaultSelections: string[] = []
) => {
  const [selections, setSelections] = useState<string[]>(defaultSelections)

  const onSelect = (selectionId: string) => {
    /*
      Note: In the event that selections includes the item being selected, we call filter only on selectableItems.
      This is to avoid the situation where you have non-displayed items selected but only some displayed items.
      Doing the above will mean you have selected items that cannot be unselected (i.e. there's no way to interact with non-displayed items).
     */
    setSelections(
      selections.includes(selectionId)
        ? selections.filter(
            itemId => possibilities.includes(itemId) && itemId !== selectionId
          )
        : [...selections, selectionId]
    )
  }

  const onSelectAll = () => {
    setSelections(selections.length ? [] : possibilities)
  }

  return { onSelect, onSelectAll, selections, setSelections }
}
