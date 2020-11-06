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

import { useState } from 'react'

export const useDataTableSelectManager = (
  selectableItems: string[],
  selectedItems: string[] = []
) => {
  const [selections, setSelections] = useState<string[]>(selectedItems)

  const onSelect = (selectionId: string) => {
    /*
      Note: In the event that selections includes the item being selected, we call filter only on selectableItems.
      This is to avoid the situation where you have non-displayed items selected but only some displayed items.
      Doing the above will mean you have selected items that cannot be unselected (i.e. there's no way to interact with non-displayed items).
     */
    setSelections(
      selections.includes(selectionId)
        ? selections.filter(
            (itemId) =>
              itemId !== selectionId && selectableItems.includes(itemId)
          )
        : [...selections, selectionId]
    )
  }

  const onSelectAll = () => {
    setSelections(selections.length ? [] : selectableItems)
  }

  return { onSelect, onSelectAll, selections, setSelections }
}
