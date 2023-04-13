

import { NoMatchingFields } from './NoMatchingFields';
import { ShortcutTree } from './ShortcutTree';
import { Tree } from './Tree';
import { hasAnyVisibleEntry, openOrCloseNodes, searchTree } from './utils';
import React from 'react';
export const TreeResults = ({
  searchInputValue,
  tree,
  shortcutTree,
  onSelectedFieldChange
}) => {
  const [stateTree, updateTree] = React.useState(tree);
  const isNoMatch = React.useMemo(() => !!searchInputValue && !hasAnyVisibleEntry(stateTree), [searchInputValue, stateTree]);
  React.useEffect(() => {
    if (stateTree) {
      updateTree(searchTree(stateTree, searchInputValue));
    }
  }, [searchInputValue]);
  React.useEffect(() => {
    if (tree) {
      updateTree(searchTree(tree, searchInputValue));
    }
  }, [tree]);
  const handleFieldClick = (_label, fieldData) => {
    if (fieldData) {
      onSelectedFieldChange(fieldData);
    }
  };
  const onSectionClick = updateNode => {
    if (stateTree) {
      updateTree(openOrCloseNodes(stateTree, updateNode));
    }
  };
  return isNoMatch ? React.createElement(NoMatchingFields, null) : React.createElement(React.Fragment, null, shortcutTree && React.createElement(ShortcutTree, {
    tree: shortcutTree,
    onFieldClick: handleFieldClick
  }), React.createElement(Tree, {
    tree: stateTree,
    onSectionClick: onSectionClick,
    onFieldClick: handleFieldClick
  }));
};
//# sourceMappingURL=TreeResults.js.map