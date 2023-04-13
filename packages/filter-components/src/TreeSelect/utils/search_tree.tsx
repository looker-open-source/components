/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import type { TreeModel } from '../types'
import { ReplaceText } from '@looker/components'

// TODO: find matches if words in middle of string; fuzzify it.
/**
 * Given a search string, highlight every occurrence of that string and
 * if it's a section name, open the section.
 * @param trees
 * @param search
 * @param parentIsOpen
 */
export const searchTree = (
  trees: TreeModel[],
  search?: string,
  parentIsOpen?: boolean
): TreeModel[] =>
  trees.map(tree => {
    const isOpen =
      (!tree.isNotHighlightable && containsString(tree, search)) ||
      !!parentIsOpen
    const match = tree.isNotHighlightable ? undefined : search

    if (tree.children) {
      const children = searchTree(tree.children, search, isOpen)
      const childContains = children.some(child => child.isOpen)

      return {
        ...tree,
        isOpen: isOpen || childContains,
        hide: !isOpen && !childContains && search !== '',
        label: <ReplaceText match={match}>{tree.value}</ReplaceText>,
        children,
      }
    } else {
      return {
        ...tree,
        label: <ReplaceText match={match}>{tree.value}</ReplaceText>,
        isOpen,
        hide: !isOpen && search !== '',
      }
    }
  })

export const containsString = ({ value }: TreeModel, str2?: string) =>
  !!(str2 && value.toLowerCase().includes(str2.toLowerCase()))

/**
 * Returns TRUE if there is any first-level entry in the
 * given "tree"  that is not hidden.
 *
 * Since we do hide the children whenever a parent
 * entry is hidden and hide the parent if all children are
 * hidden, we can safely check on the first level of entries
 * in the tree.
 *
 * @param tree the tree to check for visibility
 */
export const hasAnyVisibleEntry = (tree?: TreeModel[]) =>
  (tree || []).some(entry => !entry.hide)
