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

import React, { useEffect, useMemo, useReducer } from 'react';
import { ReplaceText } from '@looker/components';
import type {
  ComboboxOptionObject,
  WindowedTreeNodeProps,
} from '@looker/components';
import { Section } from '../Section';
import { Field } from '../Field';
import type { TreeModel, NodeToToggle } from '../types';
import { getOption } from './get_option';
import { containsString } from './search_tree';

type TreeResultsState = {
  openNodes: string[];
  // only used if openNodes is 'ALL'
  closedNodes: string[];
  search: string;
};

type TreeResultsAction =
  | {
      type: 'SEARCH';
      payload: string;
    }
  | { type: 'TOGGLE'; payload?: NodeToToggle };

const reducer = (
  state: TreeResultsState,
  { type, payload }: TreeResultsAction
): TreeResultsState => {
  switch (type) {
    case 'SEARCH':
      return {
        // Save the search just for TOGGLE logic
        search: payload,
        // no need to list open nodes, all matching results should be open, unless manually closed
        openNodes: [],
        closedNodes: [],
      };
    case 'TOGGLE':
      if (payload) {
        if (payload.isOpen) {
          // Opening a node
          if (state.search !== '' && state.closedNodes.includes(payload.id)) {
            // searchInputValue means most nodes are open so 1st look for and
            // remove this from closedNodes
            return {
              ...state,
              closedNodes: state.closedNodes.filter(id => id !== payload.id),
            };
          } else if (!state.openNodes.includes(payload.id)) {
            // Only some nodes are open, add this to openNodes
            return { ...state, openNodes: [...state.openNodes, payload.id] };
          }
        } else {
          // Closing a node
          if (state.search !== '' && !state.closedNodes.includes(payload.id)) {
            // searchInputValue means most nodes are open so 1st try
            // adding this to closedNodes
            return {
              ...state,
              closedNodes: [...state.closedNodes, payload.id],
            };
          } else if (state.openNodes.includes(payload.id)) {
            // Found it in openNodes, now remove it
            return {
              ...state,
              openNodes: state.openNodes.filter(id => id !== payload.id),
            };
          }
        }
        return state;
      }
      // TOGGLE with no payload happens when the dropdown closes
      // reset open and closed nodes
      return { ...state, openNodes: [], closedNodes: [] };
  }
};

export type UseTreeResultsStateProps = {
  searchInputValue: string;
  tree?: TreeModel[];
  nodeToToggle?: NodeToToggle;
};

export type UseTreeResultsStateResultItem = Omit<
  WindowedTreeNodeProps,
  'items'
> & {
  option: ComboboxOptionObject;
  items?: UseTreeResultsStateResultItem[];
};

/**
 * Updates tree state as user searches & toggles sections
 */
export const useTreeResultsState = ({
  nodeToToggle,
  searchInputValue,
  tree,
}: UseTreeResultsStateProps): UseTreeResultsStateResultItem[] => {
  const [{ search, openNodes, closedNodes }, dispatch] = useReducer(reducer, {
    search: searchInputValue,
    openNodes: [],
    closedNodes: [],
  });
  useEffect(() => {
    dispatch({ type: 'SEARCH', payload: searchInputValue });
  }, [searchInputValue]);

  useEffect(() => {
    dispatch({ type: 'TOGGLE', payload: nodeToToggle });
  }, [nodeToToggle]);

  return useMemo(() => {
    const getTreeReducer =
      (parentIsOpen?: boolean) =>
      (acc: UseTreeResultsStateResultItem[], node: TreeModel) => {
        if (node.id) {
          const isCurrentNodeMatch = containsString(node, search);

          const processedNode: TreeModel = {
            ...node,
            label: node.isNotHighlightable ? (
              node.label || node.value
            ) : (
              <ReplaceText match={search}>{node.value}</ReplaceText>
            ),
          };
          if (isCurrentNodeMatch) {
            processedNode.isOpen = true;
          }

          if (openNodes.includes(node.id)) {
            processedNode.isOpen = true;
          }
          if (closedNodes.includes(node.id)) {
            processedNode.isOpen = false;
          }

          // If the node has children that match the search,
          // it should be included and open
          let processedChildren: UseTreeResultsStateResultItem[] = [];
          if (node.children) {
            processedChildren = node.children.reduce(
              getTreeReducer(!!processedNode.isOpen),
              []
            );
            if (
              search &&
              processedChildren?.length &&
              // don't open node if it's explicitly in closedNodes
              !closedNodes.includes(node.id)
            ) {
              processedNode.isOpen = true;
            }
          }

          // shortcutTree items should always be included
          const isShortcutItem =
            parentIsOpen === undefined && node.children === undefined;

          const includeCurrentNode =
            isShortcutItem ||
            // parentIsOpen undefined for top level nodes, but we don't want to include those
            // unless there's no searchInputValue
            !!parentIsOpen ||
            !search ||
            isCurrentNodeMatch ||
            processedChildren?.length;

          if (includeCurrentNode) {
            if (node.children) {
              // add this section
              const onSectionClick = (updateNode: {
                id: string;
                isOpen: boolean;
              }) => {
                dispatch({ type: 'TOGGLE', payload: updateNode });
              };
              acc.push({
                // Needed for TreeSelectResults Combobox keyboard navigation
                option: getOption(processedNode),
                // The rest is the data required for WindowedTreeCollection
                content: (
                  <Section
                    key={processedNode.id}
                    tree={processedNode}
                    onClick={onSectionClick}
                  />
                ),
                isOpen: processedNode.isOpen,
                items: processedChildren,
              });
            } else {
              acc.push({
                // Needed for TreeSelectResults Combobox keyboard navigation
                option: getOption(processedNode),
                // The rest is the data required for WindowedTreeCollection
                content: <Field key={processedNode.id} tree={processedNode} />,
              });
            }
          }
        }
        return acc;
      };
    return tree?.reduce(getTreeReducer(), []) || [];
  }, [tree, dispatch, search, closedNodes, openNodes]);
};
