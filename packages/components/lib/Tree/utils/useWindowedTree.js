import _extends from "@babel/runtime/helpers/extends";
import React, { useCallback, useEffect, useReducer } from 'react';
import { listItemDimensions } from '../../ListItem';
import { useWindow } from '../../utils';
import { WindowedTreeNode } from '../WindowedTreeNode';
import { windowedTreeReducer } from './windowedTreeReducer';
import { getWindowedTreeNodeFilterer } from './getWindowedTreeNodeFilterer';
export const useWindowedTree = ({
  density,
  trees
}) => {
  const [{
    map,
    shownIDs,
    treesWithIDs
  }, dispatch] = useReducer(windowedTreeReducer, {
    map: {},
    shownIDs: [],
    treesWithIDs: []
  });
  useEffect(() => {
    dispatch({
      payload: trees,
      type: 'RESET'
    });
  }, [trees]);
  const toggleNode = useCallback((id, isOpen) => {
    if (isOpen) {
      dispatch({
        payload: id,
        type: 'OPEN'
      });
    } else {
      dispatch({
        payload: id,
        type: 'CLOSE'
      });
    }
  }, []);
  const {
    height
  } = listItemDimensions(density || 0);
  const {
    after,
    before,
    end,
    ref,
    start
  } = useWindow({
    enabled: shownIDs.length > 100,
    itemCount: shownIDs.length,
    itemHeight: height
  });
  let content = null;

  if (treesWithIDs) {
    const firstIDinWindow = shownIDs[start];
    const lastIDinWindow = shownIDs[end];
    const nodesInWindow = [];
    treesWithIDs.every(getWindowedTreeNodeFilterer(nodesInWindow, firstIDinWindow, lastIDinWindow));
    content = React.createElement(React.Fragment, null, before, nodesInWindow.map(tree => React.createElement(WindowedTreeNode, _extends({}, tree, {
      firstIDinWindow: firstIDinWindow,
      key: tree.id
    }))), after);
  }

  return {
    content,
    contextValue: {
      density,
      toggleNode,
      toggleStateMap: map
    },
    ref
  };
};
//# sourceMappingURL=useWindowedTree.js.map