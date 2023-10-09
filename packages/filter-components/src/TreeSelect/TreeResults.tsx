/*

 MIT License

 Copyright (c) 2023 Google LLC

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

import { NoMatchingFields } from './NoMatchingFields';
import { TreeSelectContext } from './TreeSelectContext';
import {
  getWindowedTreeContent,
  listItemDimensions,
  Spinner,
  TreeCollectionContext,
  useWindowedOptions,
  useWindowedTreeState,
} from '@looker/components';
import type { ComboboxOptionObject } from '@looker/components';

import type { TreeModel } from './types';
import { useTreeResultsState } from './utils/use_tree_results_state';
import type { UseTreeResultsStateResultItem } from './utils/use_tree_results_state';

import React, { useContext, useMemo } from 'react';

import { TREE_SELECT_DENSITY } from './Section';
// Get the item height for the selected density
const { height } = listItemDimensions(TREE_SELECT_DENSITY);

export type TreeResultsProps = {
  searchInputValue: string;
  tree?: TreeModel[];
  onSelectedFieldChange?: (fieldData: TreeModel['payload']) => void;
};

/**
 * Results list for TreeSelect
 */
export const TreeResults = ({ searchInputValue, tree }: TreeResultsProps) => {
  const { nodeToToggle } = useContext(TreeSelectContext);

  // Filters & transforms the tree as user searches & toggles sections
  const processedTree = useTreeResultsState({
    nodeToToggle,
    searchInputValue,
    tree,
  });

  const isNoMatch = useMemo(
    () => !!searchInputValue && !processedTree?.length,
    [searchInputValue, processedTree]
  );

  const { map, shownIDs, toggleNode, treesWithIDs } = useWindowedTreeState({
    trees: processedTree,
  });

  // Get a list of options for Combobox windowing behavior, including keyboard nav
  const options: ComboboxOptionObject[] = [];
  const addToOptions = (node: UseTreeResultsStateResultItem) => {
    options.push(node.option);
    if (node.isOpen) {
      node.items?.forEach(addToOptions);
    }
  };
  processedTree?.forEach(addToOptions);

  // Get the windowing properties
  const { scrollTo, ...windowResult } = useWindowedOptions(
    // windowing always enabled
    options.length > 70,
    // All visible "options"
    options,
    // All navigable "options"
    // (in some other Combobox use cases, not all options can be navigated to)
    options,
    // false = not multi select
    false,
    height
  );

  if (isNoMatch) {
    return <NoMatchingFields />;
  }

  if (!tree) {
    return <Spinner mx="auto" />;
  }

  const content = getWindowedTreeContent({
    ...windowResult,
    shownIDs,
    treesWithIDs,
  });

  return (
    <TreeCollectionContext.Provider value={{ toggleNode, toggleStateMap: map }}>
      {scrollTo}
      {content}
    </TreeCollectionContext.Provider>
  );
};
