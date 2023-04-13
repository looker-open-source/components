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

import { NoMatchingFields } from './NoMatchingFields'
import { ShortcutTree } from './ShortcutTree'
import { Tree } from './Tree'
import type { TreeModel } from './types'
import { hasAnyVisibleEntry, openOrCloseNodes, searchTree } from './utils'

import React from 'react'

export type TreeResultsProps = {
  searchInputValue: string
  tree?: TreeModel[]
  shortcutTree?: TreeModel[]
  onSelectedFieldChange: (fieldData: TreeModel['payload']) => void
}

/**
 * TreeSelect without an associated search field.
 * This may be used in composition with a search field.
 * It may also be rendered in a popover.
 */
export const TreeResults = ({
  searchInputValue,
  tree,
  shortcutTree,
  onSelectedFieldChange,
}: TreeResultsProps) => {
  const [stateTree, updateTree] = React.useState(tree)

  const isNoMatch = React.useMemo(
    () => !!searchInputValue && !hasAnyVisibleEntry(stateTree),
    [searchInputValue, stateTree]
  )

  React.useEffect(() => {
    if (stateTree) {
      updateTree(searchTree(stateTree, searchInputValue))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInputValue])

  React.useEffect(() => {
    if (tree) {
      updateTree(searchTree(tree, searchInputValue))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tree])

  const handleFieldClick = (
    _label: string,
    fieldData?: TreeModel['payload']
  ) => {
    if (fieldData) {
      onSelectedFieldChange(fieldData)
    }
  }

  const onSectionClick = (updateNode: { id: string; isOpen: boolean }) => {
    if (stateTree) {
      updateTree(openOrCloseNodes(stateTree, updateNode))
    }
  }

  return isNoMatch ? (
    <NoMatchingFields />
  ) : (
    <>
      {shortcutTree && (
        <ShortcutTree tree={shortcutTree} onFieldClick={handleFieldClick} />
      )}
      <Tree
        tree={stateTree}
        onSectionClick={onSectionClick}
        onFieldClick={handleFieldClick}
      />
    </>
  )
}
